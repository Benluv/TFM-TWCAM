import { useControls } from "leva";
import { createContext, useContext, useState } from "react";

const listModelsContext = createContext({});

export const ListModelsProvider = (props) => {
  const { Model } = useControls({
    Model: {
      options: {
        ETSE: "etse",
        "Parc Cientific": "parc-cientific",
        Mestalla: "mestalla",
        "Ciudad de las Artes y las Ciencias": "ciudad-de-artes",
        Oceanografic: "oceanografic",
      },
      onChange: (value) => {
        setCurrentModelName(value);
      },
    },
  });
  const [currentModelName, setCurrentModelName] = useState(Model);

  return (
    <>
      <listModelsContext.Provider
        value={{
          currentModelName,
          setCurrentModelName,
        }}
      >
        {props.children}
      </listModelsContext.Provider>
    </>
  );
};

export const useListModels = () => {
  return useContext(listModelsContext);
};
