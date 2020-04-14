import React,{useEffect,useRef} from 'react' 
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MapIcon from '@material-ui/icons/Map';
import NatureIcon from '@material-ui/icons/Nature';
import BrightNessIcon from '@material-ui/icons/Brightness6';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Popper from '@material-ui/core/Popper'

import MapComponent from './MapComponent'
import ProdComponent from './ProdComponent'
import ConsoComponent from './ConsoComponent'
import ConsoComponent2 from './ConsoComponent2'
import ProdTotaleLine from './ProdTotaleLine'


import BackgroundVideo from './backgroundVideo'


const secondary = { main: "#202020", appbar: '#333333', buttons: '#FFFFFF'};

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
    position:'relative'
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

  drawerOpenDark: {
    background: secondary.appbar,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerCloseDark: {
    background: secondary.appbar,
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

function HomeComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: true,
    dark: false
  });

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

  const refAccueil = useRef(null)
  const refCarte = useRef(null)
  const refProd = useRef(null)
  const refConso = useRef(null)
  
  const executeScrollAccueil = () => scrollToRef(refAccueil)
  const executeScrollCarte = () => scrollToRef(refCarte)
  const executeScrollProd = () => scrollToRef(refProd)
  const executeScrollConso = () => scrollToRef(refConso)

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const handleClickDarkMode = () => {
    let currentDarkModeState = state.dark
    setState({ ...state, dark: !currentDarkModeState})
  }

  const handleClose = () => {
    setState({ ...state, open: false})
  }
 
  return (

    <div className="Home" style={{ background: state.dark && secondary.main }} ref={refAccueil}>

<Popper open={state.open} transition style={{margin: 15}}>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={100}>
            <Paper style={{display: 'flex', margin : 10, background: state.dark && secondary.appbar }}>
              <Typography style={{marginTop: 6, marginLeft: 10, color: state.dark && secondary.buttons}}>Ce site Web utilise des cookies</Typography>
              <Button style={{marginLeft: 10, color: state.dark && secondary.buttons}} onClick={handleClose}>Accepter</Button>
              <Button style={{marginLeft: 10, marginRight: 10, color: state.dark && secondary.buttons}} onClick={handleClose}>Décliner</Button>
            </Paper>
            
          </Fade>
        )}
      </Popper>

<Drawer
        variant="permanent"
        anchor='right'
        style={{backgroundColor: state.dark && secondary.main}}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.right,
          [classes.drawerClose]: !state.right,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: state.right,
            [classes.drawerClose]: !state.right,
            [classes.drawerOpenDark]: state.dark && state.right,
            [classes.drawerCloseDark]: state.dark && !state.right,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={state.right ? toggleDrawer('right', false) : toggleDrawer('right', true)}>
            {state.right ? <ChevronRightIcon style={{color : state.dark && secondary.buttons}}/> : <ChevronLeftIcon style={{color : state.dark && secondary.buttons}}/>}
          </IconButton>
        </div>


        <List>
      <Divider variant='middle' style={{background : state.dark && secondary.buttons}}/>
        {['ACCUEIL', 'VIGNOBLES', 'PRODUCTION', 'CONSOMMATION'].map((text, index) => (
          <div>
          <ListItem 
            button 
            onClick={index === 0 ? executeScrollAccueil : (index === 1 ? executeScrollCarte : (index === 2 ? executeScrollProd : executeScrollConso))}
            key={text} 
            >
            <ListItemIcon style={{color : state.dark && secondary.buttons}}>
            {index === 0 && <HomeIcon style={{color : state.dark && secondary.buttons}}/>}
            {index === 1 && <MapIcon style={{color : state.dark && secondary.buttons}}/> }
            {index === 2 && <NatureIcon style={{color : state.dark && secondary.buttons}}/>}
            {index === 3 && <LocalBarIcon style={{color : state.dark && secondary.buttons}}/>}
            </ListItemIcon>
            <ListItemText>
              <Typography style={{fontFamily: 'Montserrat', color: state.dark && secondary.buttons }}>
              {text}
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider variant='middle' style={{background : state.dark && secondary.buttons}}/>
          </div>
        ))}
      </List>
      <div style={{position:'absolute', bottom:0, width: '100%'}}>
        <List>
        <Divider variant='middle' style={{background : state.dark && secondary.buttons}}/>
        {[state.dark ? 'MODE JOUR' : 'MODE NUIT'].map((text, index) => (
          <div>
          <ListItem 
            button 
            onClick={handleClickDarkMode}
            key={text} 
            >
            <ListItemIcon>
            {index === 0 && <BrightNessIcon style={{color : state.dark && secondary.buttons}}/>}
            </ListItemIcon>
            <ListItemText>
              <Typography style={{fontFamily: 'Montserrat', color : state.dark && secondary.buttons}}>
              {text}
              </Typography>
            </ListItemText>
          </ListItem>
          </div>
          ))}

          </List>
      </div>
        

      </Drawer>


        <BackgroundVideo/>
            <div style={{fontFamily: 'Montserrat', color: 'rgb(255,255,255)', position: 'absolute', top: '40vh', right: '45vw', fontSize: 35, textAlign: 'center' }}>
                <b>Da'Tanin</b>
            </div>

      <div style={{fontFamily: 'Montserrat', color: 'rgb(255,255,255)', position: 'absolute', top: '50vh', right: '40vw', fontSize: 20, textAlign: 'center' }}>
      Les graphes qui ont de la robe
      </div>


      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', marginTop: 50, color : state.dark && secondary.buttons }}>
      <b> Chiffres clés </b>
      </Typography>

      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <div style={{width : '40%', height: 160, }}>
         <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>11%</Typography>
        </div>

        <Divider variant='middle' orientation='vertical' flexItem style={{background : state.dark && secondary.buttons}}/>

        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20, color : state.dark && secondary.buttons}}>
          <br/>
        L'agriculture couvre plus de la moitié de la surface du territoire métropolitain. La filière vitivinicole française est présente dans 66 départements. Avec 750 000 hectares, la France représente 11 % de la surface mondiale de vignes de cuve.
        </div>

      </div>


      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20, color : state.dark && secondary.buttons }}>
        <br/>
          En 2019, la France a produit 4,2 milliards de litres de vin soit 17 % de la production mondiale. Il s’agit du 2ème producteur mondial de vin derrière l’Italie en volume. Les 3/4 des vins produits sont des vins tranquilles dont 55 % en rouge, 26 % en blanc et 19 % en rosé.
        </div>

        <Divider variant='middle' orientation='vertical' flexItem style={{background : state.dark && secondary.buttons}}/>

        <div style={{width : '30%', height: 160, }}>
          <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>4.2</Typography>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h5'>milliards</Typography>
       </div>

      </div>

      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center',  marginTop: 70 }}>
        <div style={{width : '40%', height: 160, }}>
         <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>3.5</Typography>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h5'>milliards</Typography>
        </div>

        <Divider variant='middle' orientation='vertical' flexItem style={{background : state.dark && secondary.buttons}}/>

        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20, color : state.dark && secondary.buttons}}>
          <br/>
          C'est le nombre de bouteilles consommées par les français en 2019. La France est le 2ème pays consommateur de vin au monde derrière les Etats-Unis et devant l’Italie. Cette consommation française, en baisse depuis 30 ans, est passée de 100 litres par habitant et par an en 1975 à 40 litres aujourd’hui.
        </div>
      </div>

      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20, color : state.dark && secondary.buttons }}>
        <br/>
        Dans un contexte de mondialisation croissante, les quantités de vins qui traversent les frontières ont été multipliées par 2 en 15 ans. La France est le 1er pays exportateur de vin et d'eau-de-vie de vin en valeur. Ce sont en 2019, 13 milliards d’€ de chiffre d’affaires à l’export loin devant l’Italie. Les exportations de vin et d’eau-de-vie de vin représentent 2 milliards de bouteilles exportées dans plus de 200 pays.
        </div>

        <Divider variant='middle' orientation='vertical' flexItem style={{background : state.dark && secondary.buttons}}/>

        <div style={{width : '30%', height: 160, }}>
          <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>13</Typography>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h5'>milliards</Typography>
       </div>

      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 50, color : state.dark && secondary.buttons}} ref={refCarte}>
      <b> Carte des vignobles de France </b>
      </Typography>

      <div style={{height: 700}}>
      <MapComponent dark={state.dark}/>
      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100, color : state.dark && secondary.buttons}} ref={refProd}>
      <b> Production totale </b>
      </Typography>

      <ProdTotaleLine dark={state.dark}/>

        <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      La production de vin en France est particulièrement stable, à l'exception de l'année 2017, qualifiée par l'Organisation Internationale de la Vigne et du Vin d'année "historiquement faible". Cette exception mise à part, la production oscille autour de 350 000 000 hectolitres.
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Dans le détail, le vin rouge représente environ la moitié de le production française, le vin blanc environ un tiers. On constate toutefois une augmentation relative de la production de vin blanc et rosé sur la période.
      </Typography>
      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100, color : state.dark && secondary.buttons}}>
      <b> Production par département </b>
      </Typography>

      <Typography variant='h6' style={{ color: '#57585A', fontFamily: 'Montserrat', color : state.dark && secondary.buttons}}>
      Selectionnez un département pour voir des graphiques sur la production de vin du département.
      </Typography>
      <Typography variant='h6' style={{ color: '#57585A', fontFamily: 'Montserrat', marginBottom: 30, color : state.dark && secondary.buttons}}>
      Si vous sélectionnez plusieurs départements, un comparatif est affiché.
      </Typography>

      <ProdComponent dark={state.dark}/>

      <br/>
      
      <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Sur la période, les départements plus gros producteurs de vins sont la Gironde, l'Hérault, l'Aude, le Gard, le Vaucluse, la Marne, le Gers, le Var, la Charente et la Charente-Maritime.
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Le plus petits producteurs sont le Val-d'Oise, la Somme, l'Orne, les Yvelines, la Creuse, le Pas-de-Calais, la Seine-Maritime, l'Oise, l'Eure-et-Loir, le Territoire de Belfort et Paris.
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Les principaux producteurs de vin blanc se situent dans le Gard, la Loire-Atlantique, la Saône-et-Loire et l'Aube.
Pour ce qui est du rouge, il faut se tourner vers la Gironde, l'Hérault, l'Aude, le Gard ou encore le Vaucluse.
Enfin, le rosé nous vient principalement du Var, de l'Hérault, du Gard, du Maine-et-Loire et des Bouches-du-Rhône.
      </Typography>
      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100, color : state.dark && secondary.buttons}} ref={refConso}>
      <b> Consommation </b>
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, color : state.dark && secondary.buttons}}>
      Structure de la dépense de consommation des ménages en boissons de 1960 à 2018 (en valeur)
      </Typography>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <ConsoComponent dark={state.dark}/>
      </div>
      <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      La part des boissons alcoolisés dans le budget boisson des ménages diminue progressivement depuis 1960. On remarque toutefois la baisse importante de la consommation des vins de consommation courante, dit "vins de table", qui s'établit à 9,1 % en 2018 contre 49,1 % en 1960. Ce recul est essentiellement survenu entre le début des années 1960 et le milieu des années 90, à la suite de la mise en place de politiques publiques de lutte contre la consommation quotidienne d’alcool. Toutefois, l’attrait des Français pour les vins de qualité a progressé sur la même période pour atteindre 20,7 % du budget en alcool en 2018. Il semble donc que la façon de consommer du vin évolue, d'une consommation courante à une consommation occasionnelle. 
Le même constat peut d'ailleurs être fait pour les autres alcools jugés "festifs" comme les champagnes et apéritifs. Les consommateurs boivent moins, mais de meilleure qualité.
      </Typography>

      </div>

      <Typography variant='h5' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 50, color : state.dark && secondary.buttons}}>
      Consommation en boissons alcoolisées (en litres par personne et par an)
      </Typography>

      <div style={{display: 'flex', justifyContent: 'center', paddingTop: 30}}>
      <ConsoComponent2 dark={state.dark}/>
      </div>

      <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Depuis 1960, la consommation de boissons alcoolisées par habitant a fortement diminué, en particulier celle de vins courants et de cidres. Si les consommateurs se sont détournés des vins de table, ils apprécient davantage les vins de qualité, dont la consommation a surtout progressé durant les années 80 et 90. 

Cette évolution semble décorrélée de l’augmentation des taxes sur les alcools depuis les années 90, les prix des boissons alcoolisées étant légèrement moins dynamiques que les prix de l’ensemble de la dépense de consommation des ménages sur l'ensemble de la période. Il s'agit donc d'un changement de comportement et de rapport à la consommation d'alcool.
      </Typography>

      </div>

      <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 10, textAlign: 'justify'}}>
      Notons que le poids des vins, cidres et champagnes dans les dépenses en boissons alcoolisées est élevé dans certains territoires qui couvrent des régions de production viticole comme la Méditerranée, le Centre-Est ou l'Est,  à l'inverse des habitants du Nord ou des DOM moins friands de ces alcools. Les ménages de la région parisienne y consacrent également une part plus importante que la moyenne, en raison notamment d’une plus grande concentration de cadres, ceux-ci ayant en effet la part de leur budget boissons consacrée aux aux vins, cidres et champagnes la plus importante.
      </Typography>

      </div>

      <div style={{height: 30}}></div>
          <Divider style={{background: state.dark && secondary.appbar}}/>
      <div style={{height: 30}}>

      </div>

      <div style={{textAlign: 'center'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', textAlign: 'center'}} >
          Sources des données : Vignobles - Sommelix, Production - Douanes françaises, Consommation - INSEE
      </Typography>
      </div>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
          Une datastory présentée par <a target="_blank" href='https://www.linkedin.com/in/mathis-balbo/'>Mathis Balbo</a>, <a target="_blank" href='https://www.linkedin.com/in/jules-garbay-894651137/'>Jules Garbay</a> et <a target="_blank" href='https://www.linkedin.com/in/antoine-pradier-b92752bb/'>Antoine Pradier</a>
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
          Développée avec <a target="_blank" href='https://create-react-app.dev/docs/getting-started/'>React</a>, 
          <a target="_blank" href='https://material-ui.com/'> Material-UI</a> et 
          <a target="_blank" href='https://nivo.rocks/'> Nivo </a>
           (<a target="_blank" href='https://github.com/iPr4d/data_storytelling'>Github repository</a>)

      </Typography>

      <div style={{height: 30}}/>
    </div>
  );
}

export default HomeComponent;
