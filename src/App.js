import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MapIcon from '@material-ui/icons/Map';
import NatureIcon from '@material-ui/icons/Nature';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


import HomeComponent from './HomeComponent'
import MapComponent from './MapComponent'
import ConsoComponent from './ConsoComponent'
import ProdComponent from './ProdComponent'

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

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      
    </div>
  );

  const handleDrawerOpen = () => {
    setState(true);
  };

  const handleDrawerClose = () => {
    setState(false);
  };

  return (
    <div className="App">

      <Router>
            <div>
                <Route exact path="/" component={HomeComponent} />
                <Route exact path="/map" component={MapComponent} />
                <Route exact path="/conso" component={ConsoComponent} />
                <Route exact path="/prod" component={ProdComponent} />
            </div>

      {!state.right && <div><IconButton style={{position: 'absolute', top: 5, right: 5 }}>
        <MenuIcon onClick={toggleDrawer('right', true)} style={{color: 'rgb(255,255,255)', width: 30, height: 30}}/>
      </IconButton></div>}

      <Drawer
        variant="permanent"
        anchor='right'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.right,
          [classes.drawerClose]: !state.right,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: state.right,
            [classes.drawerClose]: !state.right,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={state.right ? toggleDrawer('right', false) : toggleDrawer('right', true)}>
            {state.right ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>


        <List>
      <Divider variant='middle'/>
        {['Accueil', 'Carte de France', 'Consommation', 'Production'].map((text, index) => (
          <div>
          <ListItem 
            button 
            onClick={toggleDrawer('right', false)}
            key={text} 
            component={Link}
            to={index === 0 ? "/" : (index === 1 ? "/map" : (index === 2 ? "/conso" : "/prod"))}>
            <ListItemIcon>
            {index === 0 && <HomeIcon/>}
            {index === 1 && <MapIcon /> }
            {index === 2 && <LocalBarIcon/>}
            {index === 3 && <NatureIcon/>}
            </ListItemIcon>
            <ListItemText primary={text} >
            </ListItemText>
          </ListItem>
          <Divider variant='middle'/>
          </div>
        ))}
      </List>
        

      </Drawer>


        {/* {sideList('right')} */}

      </Router>



    </div>
  );
}

export default App;
