import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import Interface from "./Interface";
import XrGallery from "./XrGallery";

const XrGalleryContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  return (
    <>
      <CharacterAnimationsProvider>
        <ARButton
          className="xr-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: { root: overlayContent },
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
