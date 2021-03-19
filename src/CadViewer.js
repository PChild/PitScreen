import React, { useContext } from "react";
import "@google/model-viewer";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "./AppContext";

const useStyles = makeStyles((theme) => ({
  sizing: {
    width: "100%",
    minWidth: "300px",
  },
}));

export default function RobotSlides() {
  const classes = useStyles();
  const cadContext = useContext(AppContext);
  return (
    <model-viewer
      className={classes.sizing}
      autoplay
      auto-rotate
      camera-controls
      exposure="0.25"
      shadow-intensity="1"
      src="./Assembly 1.gltf"
    ></model-viewer>
  );
}
