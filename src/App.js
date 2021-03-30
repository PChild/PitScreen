import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import AppContext from "./AppContext";
import SettingsPage from "./SettingsPage";
import MenuBar from "./MenuBar";
import TwitchPage from "./TwitchPage";
import AwardsSlides from "./AwardsSlides";
import RobotSlides from "./RobotSlides";
import CadViewer from "./CadViewer";
import LogoPage from "./LogoPage";
import ColorsContext from "./ColorsContext";

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
  const [logoUrl, setLogoUrl] = useState(
    "https://raw.githubusercontent.com/team401/resources/master/Team/Final.png"
  );
  const [teamNumber, setTeamNumber] = useState(401);
  const [eventCode, setEventCode] = useState("2019chcmp");
  const [eventChannel, setEventChannel] = useState("firstchesapeake2blue");

  const appSettings = {
    currentPage: currentPage,
    outreachUrl: outreachUrl,
    robotUrl: robotUrl,
    logoUrl: logoUrl,
    teamNumber: teamNumber,
    eventCode: eventCode,
    eventChannel: eventChannel,
    setCurrentPage,
    setOutreachUrl,
    setRobotUrl,
    setLogoUrl,
    setTeamNumber,
    setEventCode,
    setEventChannel,
  };

  const [primaryColor, setPrimaryColor] = useState("#d35401");
  const [accentColor, setAccentColor] = useState("#fff");
  const [backColor, setBackColor] = useState("#fff");

  const buildTheme = () => {
    return createMuiTheme({
      palette: {
        primary: {
          main: primaryColor,
        },
        secondary: {
          main: accentColor,
        },
        background: {
          default: backColor,
        },
      },
    });
  };

  const colorSettings = {
    primaryColor: primaryColor,
    accentColor: accentColor,
    backColor: backColor,
    setPrimaryColor,
    setAccentColor,
    setBackColor,
  };

  const theme = useMemo(() => buildTheme(), [
    primaryColor,
    accentColor,
    backColor,
  ]);

  return (
    <ColorsContext.Provider value={colorSettings}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContext.Provider value={appSettings}>
          <main className={classes.main}>
            <MenuBar />
            {currentPage == "settings" && <SettingsPage />}
            {currentPage == "stream" && <TwitchPage />}
            {currentPage == "outreach" && <AwardsSlides />}
            {currentPage == "robot" && <RobotSlides />}
            {currentPage == "cad" && <CadViewer />}
            {currentPage == "logo" && <LogoPage />}
          </main>
        </AppContext.Provider>
      </ThemeProvider>
    </ColorsContext.Provider>
  );
}
