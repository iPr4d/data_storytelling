import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import ReactGA from "react-ga";

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import HomeComponent from './HomeComponent'

ReactGA.initialize("UA-163319347-1");


const logPageView = () => {
  const page = window.location.pathname;
  ReactGA.set({ page });
  ReactGA.pageview(page);
  return null;
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 !important',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(5) ,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) ,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0.5),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  return (
    <div className="App">

      <Router>
            <div>
                <Route path="/data_storytelling" component={logPageView} />
                <Route exact path="/data_storytelling" component={HomeComponent} />
            </div>

      {!state.right && <div><IconButton style={{position: 'absolute', top: 5, right: 5 }}>
        <MenuIcon onClick={toggleDrawer('right', true)} style={{color: 'rgb(255,255,255)', width: 30, height: 30}}/>
      </IconButton></div>}


      </Router>



    </div>
  );
}

export default App;
