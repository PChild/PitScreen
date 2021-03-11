import React, { useState, useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import BuildIcon from "@material-ui/icons/Build";
import VideocamIcon from "@material-ui/icons/Videocam";
import PanoramaIcon from "@material-ui/icons/Panorama";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "./AppContext";

const useStyles = makeStyles((theme) => ({
    list: {
        width: 300,
    },
}));

export default function MenuBar() {
    const menuContext = useContext(AppContext);
    const classes = useStyles();
    const pages = ["settings", "prematch", "schedule", "outreach", "robot", "stream", "logo"];
    const pageTitles = [
        "Settings",
        "Match Preview",
        "Match Schedule",
        "Outreach Slides",
        "Robot Slides",
        "Event Stream",
        "Logo Screen",
    ];
    const pageIcons = [
        <SettingsIcon />,
        <AssignmentIcon />,
        <FormatListNumberedIcon />,
        <EmojiPeopleIcon />,
        <BuildIcon />,
        <VideocamIcon />,
        <PanoramaIcon />,
    ];

    const [drawerVis, setDrawer] = useState(false);

    const changePage = (pageName) => {
        setDrawer(false);
        menuContext.setCurrentPage(pageName);
        console.log(pageName, menuContext.currentPage);
    };

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton onClick={() => setDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={drawerVis} onClose={() => setDrawer(false)}>
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemText primary={<Typography variant="h5">PitScreen</Typography>} />
                        </ListItem>
                        <Divider />
                        {pages.map((text, index) => (
                            <div key={text}>
                                <ListItem
                                    selected={menuContext.currentPage == text}
                                    onClick={() => changePage(text)}
                                    button
                                >
                                    <ListItemIcon>{pageIcons[index]}</ListItemIcon>
                                    <ListItemText primary={pageTitles[index]} />
                                </ListItem>
                                <Divider />
                            </div>
                        ))}
                    </List>
                </Drawer>

                <Typography variant="h5" color="inherit" noWrap>
                    PitScreen
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
