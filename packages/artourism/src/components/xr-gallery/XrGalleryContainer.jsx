import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { ListModelsProvider } from "../../contexts/ListModels";
import XrGallery from "./XrGallery";

const XrGalleryContainer = () => {

  return (
    <>
      <ListModelsProvider>
        <ARButton
          className="xr-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
          }}
        />
        <Canvas>
          <XR>
            <XrGallery />
          </XR>
        </Canvas>
      </ListModelsProvider>
    </>
  );
};

export default XrGalleryContainer;
