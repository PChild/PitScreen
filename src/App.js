import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import AppContext from "./AppContext";
import SettingsPage from "./SettingsPage";
import MenuBar from "./MenuBar";
import TwitchPage from "./TwitchPage";
import AwardsSlides from "./AwardsSlides";
import RobotSlides from "./RobotSlides";
import CadViewer from "./CadViewer";

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

    slide: {
        flex: 1,
    },

    contentPage: {
        display: "flex",
        width: "100vw",
        height: "100%",
    },
}));

export default function App() {
    const classes = useStyles();

    const [currentPage, setCurrentPage] = useState("settings");
    const [outreachUrl, setOutreachUrl] = useState(
        "https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
    );
    const [robotUrl, setRobotUrl] = useState(
        "https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
    );
    const [logoUrl, setLogoUrl] = useState("reddit.com");
    const [teamNumber, setTeamNumber] = useState(401);
    const [eventCode, setEventCode] = useState("2019chcmp");
    const [primaryColor, setPrimaryColor] = useState("#d35401");
    const [accentColor, setAccentColor] = useState("#fff");

    const appSettings = {
        currentPage: currentPage,
        outreachUrl: outreachUrl,
        robotUrl: robotUrl,
        logoUrl: logoUrl,
        teamNumber: teamNumber,
        eventCode: eventCode,
        primaryColor: primaryColor,
        accentColor: accentColor,
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
                {currentPage == "cad" && <CadViewer />}
            </main>
        </AppContext.Provider>
    );
}
