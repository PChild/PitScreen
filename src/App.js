import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import AppContext from "./AppContext";
import SettingsPage from "./SettingsPage";
import MenuBar from "./MenuBar";
import TwitchPage from "./TwitchPage";
import AwardsSlides from "./AwardsSlides";
import RobotSlides from "./RobotSlides";

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

    const [currentPage, setCurrentPage] = useState("settings");
    const [outreachSlidesUrl, setOutreachUrl] = useState("");
    const [robotSlidesUrl, setRobotUrl] = useState("");
    const [teamLogoUrl, setLogoUrl] = useState("");
    const [teamNumber, setTeamNumber] = useState(401);
    const [eventCode, setEventCode] = useState("");
    const [primaryColor, setPrimaryColor] = useState("");
    const [accentColor, setAccentColor] = useState("");

    const appSettings = {
        currentPage: "settings",
        outreachSlidesUrl: "",
        robotSlidesUrl: "",
        teamLogoUrl: "",
        teamNumber: 401,
        eventCode: "2019chcmp",
        primaryColor: "#d35401",
        accentColor: "#fff",
        setCurrentPage,
        setOutreachUrl,
        setRobotUrl,
        setLogoUrl,
        setTeamNumber,
        setEventCode,
        setPrimaryColor,
        setAccentColor,
    };

    return (
        <AppContext.Provider value={appSettings}>
            <main className={classes.main}>
                <MenuBar />
                {currentPage == "settings" && <SettingsPage />}
                {currentPage == "stream" && <TwitchPage />}
                {currentPage == "outreach" && <AwardsSlides />}
                {currentPage == "robot" && <RobotSlides />}
            </main>
        </AppContext.Provider>
    );
}
