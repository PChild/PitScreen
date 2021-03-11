import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SettingsPage from "./SettingsPage";
import Menu from "./Menu";
import TwitchPage from "./TwitchPage";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    main: {
        paddingTop: theme.spacing(0),
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "flex-start",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        overflow: "hidden",
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <main className={classes.main}>
            <Menu />
            {/* <SettingsPage /> */}
            <TwitchPage />
        </main>
    );
}
