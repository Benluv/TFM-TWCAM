import { OrbitControls } from "@react-three/drei";
import { useThree} from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useRef, useState } from "react";
import { useCharacterAnimations } from "../../contexts/CharacterAnimations";
import Oceanografic from "./modelsImpl/Oceanografic";
import ParcCientific from "./modelsImpl/ParcCientific";
import Mestalla from "./modelsImpl/Mestalla";
import Etse from "./modelsImpl/Etse";
import Arts from "./modelsImpl/Arts";

const XrOverlay = () => {
  const reticleRef = useRef();
  const [models, setModels] = useState([]);
  const { currentModelName } = useCharacterAnimations();

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeModel = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setModels([{ position, id }]);
  };

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.8}/>
      {isPresenting &&
        models.map(({ position, id }) => {
          return (
            <Fragment key={id}>
              {currentModelName === "ciudad-de-artes" && (
                <Arts position={position} />
              )}
              {currentModelName === "mestalla" && (
                <Mestalla position={position} />
              )}
              {currentModelName === "etse" && (
                <Etse position={position} />)
              }
              {currentModelName === "parc-cientific" && (
                <ParcCientific position={position} />
              )}
              {currentModelName === "oceanografic" && (
                <Oceanografic position={position} />
              )}
            </Fragment>
          );
        })}
      {isPresenting && (
        <Interactive onSelect={placeModel}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.08, 0.16, 32,,,5.25]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting && currentModelName === "ciudad-de-artes" && <Arts /> }
      {!isPresenting && currentModelName === "mestalla" && <Mestalla />}
      {!isPresenting && currentModelName === "etse" && <Etse /> }
      {!isPresenting && currentModelName === "parc-cientific" && <ParcCientific /> }
      {!isPresenting && currentModelName === "oceanografic" && <Oceanografic /> }
    </>
  );
};

export default XrOverlay;
