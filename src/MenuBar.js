import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },

  list: {
    width: 300,
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <MenuIcon className={classes.icon} />
        <Drawer anchor="left" open={false}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h5">PitScreen</Typography>}
              />
            </ListItem>
            <ListItem selected button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings Page" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Match Preview" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="Schedule View" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Outreach Slides" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Robot Slides" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary="Event Stream" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PanoramaIcon />
              </ListItemIcon>
              <ListItemText primary="Logo Screen" />
            </ListItem>
          </List>
        </Drawer>

        <Typography variant="h5" color="inherit" noWrap>
          PitScreen
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
