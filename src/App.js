import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SettingsPage from './SettingsPage';
import Menu from './Menu';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  main: {
    paddingTop: theme.spacing(8)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Menu />
      <main className={classes.main}>
        <SettingsPage />
      </main>
    </div>

  );
}
