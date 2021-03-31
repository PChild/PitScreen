import React, { useContext } from "react";
import { ColorPicker } from "material-ui-color";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

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

    return (
        <Grid container spacing={1} className={classes.gridPad}>
            <Grid item>
                <InputLabel shrink={true}>Accent Color</InputLabel>
                <ColorPicker
                    name="accentColor"
                    label="Accent"
                    value={colorsContext.accentColor}
                    onChange={(color) => {
                        color = color === Object(color) ? "#" + color.hex : color;
                        colorsContext.setAccentColor(color);
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
                    value={colorsContext.primaryColor}
                    onChange={(color) => {
                        color = color === Object(color) ? "#" + color.hex : color;
                        colorsContext.setPrimaryColor(color);
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
                        color = color === Object(color) ? "#" + color.hex : color;
                        colorsContext.setBackColor(color);
                    }}
                    disableAlpha
                    disablePlainColor
                />
            </Grid>
        </Grid>
    );
}
