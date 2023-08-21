import { useControls } from 'leva'
import { createContext, useContext, useState } from "react";

const ControlsContext = createContext();

export const ControlsProvider = ({ props }) => {
    const { Model } = useControls({
        Model: {
            options: {
                Cube: 'cube',
                Cone: 'cone',
            },
            onChange: (value) => {
                setCurrentModelName(value);
            },
        },
    })
    const [animations, setAnimations] = useState([]);
    const [animationIndex, setAnimationIndex] = useState(0);
    const [currentModelName, setCurrentModelName] = useState(Model)

    return (
        <>
            <ControlsContext.Provider value={{ 
                animations, setAnimations,
                animationIndex, setAnimationIndex,
                currentModelName, setCurrentModelName }}>
            {props.children}
            </ControlsContext.Provider>
        </>
    )
}

export const useControlsContext = () => {
    return useContext(ControlsContext)
}