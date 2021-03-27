import React, { useContext } from "react";
import "@google/model-viewer";
import AppContext from "./AppContext";

export default function RobotSlides() {
    const cadContext = useContext(AppContext);
    return (
        <model-viewer
            autoplay
            auto-rotate
            camera-controls
            exposure="0.25"
            interaction-prompt="none"
            shadow-intensity="1"
            src="./Intake.gltf"
            style={{ width: "100%", height: "100%" }}
        ></model-viewer>
    );
}
