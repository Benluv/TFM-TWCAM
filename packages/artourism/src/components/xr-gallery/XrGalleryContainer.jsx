import { Canvas } from "@react-three/fiber";
import { ARButton, XR, XRButton } from "@react-three/xr";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import XrGallery from "./XrGallery";

const XrGalleryContainer = () => {

  return (
    <>
      <CharacterAnimationsProvider>
        <ARButton
          className="xr-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            // optionalFeatures: ["dom-overlay"],
            // domOverlay: { root: overlayContent },
          }}
        />
        <Canvas>
          <XR>
            <XrGallery />
          </XR>
        </Canvas>
      </CharacterAnimationsProvider>
    </>
  );
};

export default XrGalleryContainer;
