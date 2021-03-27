import React, { useContext, useState } from "react";
import { ColorPicker } from "material-ui-color";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "./AppContext";
import * as TBA from "tba-api-client";
import debounce from "lodash.debounce";

const tba = new TBA.API("u8L8Gd05IPCUmwjradkV0NbM7Y5Z7hx1fQc0SPx4vj6oPqKFCNGDiwZmlAhJ6SO8");

const useStyles = makeStyles((theme) => ({
    gridPad: {
        paddingTop: theme.spacing(4),
        justifyContent: "space-evenly",
    },

    urlSizing: {
        width: "100%",
        minWidth: "300px",
        maxWidth: "460px",
    },
}));

export default function SettingsPage() {
    const classes = useStyles();
    const settingsContext = useContext(AppContext);
    const [eventCode, setEventCode] = useState(settingsContext.eventCode);

    const onChangeDebounced = debounce((e) => {
        tba.Event(e.target.value).then((frcEvent) => {
            settingsContext.setEventCode(e.target.value);
            settingsContext.setEventChannel(frcEvent.webcasts[0].channel);
        });
    }, 2000);

    const handleInputChange = (e) => {
        setEventCode(e.target.value), onChangeDebounced(e);
    };

    return (
        <Grid container spacing={1} className={classes.gridPad}>
            <Grid item>
                <InputLabel shrink={true}>Background Color</InputLabel>
                <ColorPicker
                    name="accentColor"
                    defaultValue="#fff"
                    label="Accent"
                    disablePlainColor
                    value={settingsContext.accentColor}
                    onChange={(color) => {
                        console.log(theme.palette.background.default);
                        settingsContext.setAccentColor(color);
                    }}
                />
            </Grid>
            <Grid item className={classes.basicSizing}>
                <InputLabel shrink={true}>Primary Color</InputLabel>
                <ColorPicker
                    name="primaryColor"
                    defaultValue="#d35401"
                    label="Primary"
                    value={settingsContext.primaryColor}
                    onChange={(color) => {
                        settingsContext.setPrimaryColor(color);
                    }}
                />
            </Grid>
            <Grid item className={classes.basicSizing}>
                <TextField
                    label="Event Code"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleInputChange}
                    value={eventCode}
                ></TextField>
            </Grid>
            <Grid item className={classes.basicSizing}>
                <TextField
                    label="Team Number"
                    type="number"
                    onChange={(event) => {
                        settingsContext.setTeamNumber(event.value);
                    }}
                ></TextField>
            </Grid>
            <Grid item className={classes.urlSizing}>
                <TextField
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Awards Slideshow URL"
                    type="url"
                    value={settingsContext.outreachUrl}
                    onChange={(event) => {
                        settingsContext.setOutreachUrl(event.value);
                    }}
                ></TextField>
            </Grid>
            <Grid item className={classes.urlSizing}>
                <TextField
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Robot Slideshow URL"
                    type="url"
                    value={settingsContext.robotUrl}
                    onChange={(event) => {
                        settingsContext.setRobotUrl(event.value);
                    }}
                ></TextField>
            </Grid>
            <Grid item className={classes.urlSizing}>
                <TextField
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    label="Team Logo URL"
                    type="url"
                    value={settingsContext.logoUrl}
                    onChange={(event) => {
                        settingsContext.setLogoUrl(event.target.value);
                    }}
                ></TextField>
            </Grid>
        </Grid>
    );
}
