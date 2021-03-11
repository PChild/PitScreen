import React from "react";
import ColorPicker from "material-ui-color-picker";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridPad: {
    paddingTop: theme.spacing(4),
    lg: 12,
    justifyContent: "space-evenly",
  },

  basicSizing: {
    sm: 6,
    md: 4,
    lg: 2,
  },

  urlSizing: {
    sm: 12,
    md: 12,
    lg: 5,
    width: "100%",
    minWidth: "300px",
    maxWidth: "460px",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.gridPad}>
      <Grid item className={classes.basicSizing}>
        <ColorPicker
          name="bg_color"
          defaultValue="#fff"
          label="Background"
          // value={this.state.color} - for controlled component
          onChange={(color) => console.log(color)}
        />
      </Grid>
      <Grid item className={classes.basicSizing}>
        <ColorPicker
          name="accent_color"
          defaultValue="#d35401"
          label="Accent"
          // value={this.state.color} - for controlled component
          onChange={(color) => console.log(color)}
        />
      </Grid>
      <Grid item className={classes.basicSizing}>
        <TextField label="Event Code"></TextField>
      </Grid>
      <Grid item className={classes.basicSizing}>
        <TextField label="Team Number" type="number"></TextField>
      </Grid>
      <Grid item className={classes.urlSizing}>
        <TextField
          fullWidth
          label="Awards Slideshow URL"
          type="url"
        ></TextField>
      </Grid>
      <Grid item className={classes.urlSizing}>
        <TextField fullWidth label="Robot Slideshow URL" type="url"></TextField>
      </Grid>
      <Grid item className={classes.urlSizing}>
        <TextField fullWidth label="Team Logo URL" type="url"></TextField>
      </Grid>
    </Grid>
  );
}
