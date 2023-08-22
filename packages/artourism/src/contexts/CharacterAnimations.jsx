import { useControls } from "leva";
import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const { Model } = useControls({
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
      },
    },
  });
  const [currentModelName, setCurrentModelName] = useState(Model);

  return (
    <>
      <CharacterAnimationsContext.Provider
        value={{
          currentModelName,
          setCurrentModelName,
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
