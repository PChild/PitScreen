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
    const classes = useStyles();
    const colorsContext = useContext(ColorsContext);

    return (
        <Grid container spacing={1} className={classes.gridPad}>
            <Grid item>
                <InputLabel shrink={true}>Accent Color</InputLabel>
                <ColorPicker
                    name="accentColor"
                    label="Accent"
                    disablePlainColor
                    value={colorsContext.accentColor}
                    onChange={(color) => {
                        colorsContext.setAccentColor("#" + color.hex);
                        console.log("#" + color);
                    }}
                />
            </Grid>
            <Grid item>
                <InputLabel shrink={true}>Primary Color</InputLabel>
                <ColorPicker
                    name="primaryColor"
                    label="Primary"
                    value={colorsContext.primaryColor}
                    onChange={(color) => {
                        colorsContext.setPrimaryColor("#" + color.hex);
                    }}
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
                />
            </Grid>
        </Grid>
    );
}
