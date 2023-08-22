import { useControls } from "leva";
import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const { Model } = useControls({
    // Color: "#ffffff",
    Model: {
      options: {
        "Ciudad de las Artes y las Ciencias": "ciudad-de-artes",
        Mestalla: "mestalla",
        ETSE: "etse",
        "Parc Cientific": "parc-cientific",
        Oceanografic: "oceanografic",
        "Korrigan Hat": "korrigan-hat",
      },
      onChange: (value) => {
        setCurrentModelName(value);
        // setAnimationIndex(0);
      },
    },
  });
  // const [animations, setAnimations] = useState([]);
  // const [animationIndex, setAnimationIndex] = useState(0);
  const [currentModelName, setCurrentModelName] = useState(Model);

  return (
    <>
      <CharacterAnimationsContext.Provider
        value={{
          // animations,
          // setAnimations,
          // animationIndex,
          // setAnimationIndex,
          currentModelName,
          setCurrentModelName,
          // Color,
        }}
      >
        {props.children}
      </CharacterAnimationsContext.Provider>
    </>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
