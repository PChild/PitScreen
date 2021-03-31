import React, { useContext, useState } from "react";
import { ColorPicker } from "material-ui-color";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import debounce from "lodash.debounce";

import ColorsContext from "./ColorsContext";

const useStyles = makeStyles((theme) => ({
    gridPad: {
        paddingTop: theme.spacing(4),
        justifyContent: "space-evenly",
    },
}));

export default function Colors() {
    const colorsContext = useContext(ColorsContext);
    const classes = useStyles();
    const [primary, setLocalPrimary] = useState(colorsContext.primaryColor);
    const [accent, setLocalAccent] = useState(colorsContext.accentColor);
    const [back, setLocalBack] = useState(colorsContext.backColor);

    return (
        <Grid container spacing={1} className={classes.gridPad}>
            <Grid item>
                <InputLabel shrink={true}>Accent Color</InputLabel>
                <ColorPicker
                    name="accentColor"
                    label="Accent"
                    value={accent}
                    onChange={(color) => {
                        setLocalAccent(color);
                        console.log(color);
                        debounce((color) => {
                            console.log("ran2");
                            colorsContext.setAccentColor(color);
                            console.log(colorsContext.accentColor);
                        }, 2000);
                        console.log(colorsContext.accentColor);
                    }}
                    disableAlpha
                    disablePlainColor
                />
            </Grid>
            <Grid item>
                <InputLabel shrink={true}>Primary Color</InputLabel>
                <ColorPicker
                    name="primaryColor"
                    label="Primary"
                    value={primary}
                    onChange={(color) => {
                        console.log(color);
                        if (color === Object(color)) {
                            console.log("is array");
                        }
                        setLocalPrimary(color);
                    }}
                    disableAlpha
                    disablePlainColor
                />
            </Grid>
            <Grid item>
                <InputLabel shrink={true}>Background Color</InputLabel>
                <ColorPicker
                    name="backColor"
                    label="Background"
                    value={colorsContext.backColor}
                    onChange={(color) => {
                        colorsContext.setBackColor("#" + color.hex);
                    }}
                    disableAlpha
                    disablePlainColor
                />
            </Grid>
        </Grid>
    );
}
