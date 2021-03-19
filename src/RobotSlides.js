import React, { useContext } from "react";
import ReactGoogleSlides from "react-google-slides";
import AppContext from "./AppContext";

export default function RobotSlides() {
    const slidesContext = useContext(AppContext);

    return (
        <ReactGoogleSlides
            width="100%"
            height="100%"
            slidesLink={slidesContext.robotUrl}
            slideDuration={5}
            showControls
            loop
        />
    );
}
