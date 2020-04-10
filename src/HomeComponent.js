import React,{useEffect,useRef} from 'react' 
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import MapIcon from '@material-ui/icons/Map';
import NatureIcon from '@material-ui/icons/Nature';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import MapComponent from './MapComponent'
import ProdComponent from './ProdComponent'
import ConsoComponent from './ConsoComponent'
import ConsoComponent2 from './ConsoComponent2'
import ProdTotaleLine from './ProdTotaleLine'


import BackgroundVideo from './backgroundVideo'


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

function HomeComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
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

  return (

    <div className="Home" ref={refAccueil}>

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
        {['ACCUEIL', 'VIGNOBLES', 'PRODUCTION', 'CONSOMMATION'].map((text, index) => (
          <div>
          <ListItem 
            button 
            onClick={index === 0 ? executeScrollAccueil : (index === 1 ? executeScrollCarte : (index === 2 ? executeScrollProd : executeScrollConso))}
            key={text} 
            >
            <ListItemIcon>
            {index === 0 && <HomeIcon/>}
            {index === 1 && <MapIcon /> }
            {index === 2 && <NatureIcon/>}
            {index === 3 && <LocalBarIcon/>}
            </ListItemIcon>
            <ListItemText>
              <Typography style={{fontFamily: 'Montserrat'}}>
              {text}
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider variant='middle'/>
          </div>
        ))}
      </List>
        

      </Drawer>


        <BackgroundVideo/>
            <div style={{fontFamily: 'Montserrat', color: 'rgb(255,255,255)', position: 'absolute', top: '40vh', right: '45vw', fontSize: 35, textAlign: 'center' }}>
                <b>Carte des vins</b>
            </div>

      <div style={{fontFamily: 'Montserrat', color: 'rgb(255,255,255)', position: 'absolute', top: '50vh', right: '40vw', fontSize: 20, textAlign: 'center' }}>
        Les grandes régions viticoles de France
      </div>


      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', marginTop: 50}}>
      <b> Chiffres clés </b>
      </Typography>

      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <div style={{width : '40%', height: 160, }}>
         <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>11%</Typography>
        </div>

        <Divider variant='middle' orientation='vertical' flexItem/>

        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20}}>
          <br/>
        L'agriculture couvre plus de la moitié de la surface du territoire métropolitain. La filière vitivinicole française est présente dans 66 départements. Avec 750 000 hectares, la France représente 11 % de la surface mondiale de vignes de cuve.
        </div>

      </div>


      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20 }}>
        <br/>
          En 2019, la France a produit 4,2 milliards de litres de vin soit 17 % de la production mondiale. Il s’agit du 2ème producteur mondial de vin derrière l’Italie en volume. Les 3/4 des vins produits sont des vins tranquilles dont 55 % en rouge, 26 % en blanc et 19 % en rosé.
        </div>

        <Divider variant='middle' orientation='vertical' flexItem/>

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

        <Divider variant='middle' orientation='vertical' flexItem/>

        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20}}>
          <br/>
          C'est le nombre de bouteilles consommées par les français en 2019. La France est le 2ème pays consommateur de vin au monde derrière les Etats-Unis et devant l’Italie. Cette consommation française, en baisse depuis 30 ans, est passée de 100 litres par habitant et par an en 1975 à 40 litres aujourd’hui.
        </div>
      </div>

      <div style={{ width: '95%', display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
        <div style={{width : '50%', height: 160, textAlign: 'justify', padding: 30, fontFamily: 'Montserrat', fontSize: 20 }}>
        <br/>
        Dans un contexte de mondialisation croissante, les quantités de vins qui traversent les frontières ont été multipliées par 2 en 15 ans. La France est le 1er pays exportateur de vin et d'eau-de-vie de vin en valeur. Ce sont en 2019, 13 milliards d’€ de chiffre d’affaires à l’export loin devant l’Italie. Les exportations de vin et d’eau-de-vie de vin représentent 2 milliards de bouteilles exportées dans plus de 200 pays.
        </div>

        <Divider variant='middle' orientation='vertical' flexItem/>

        <div style={{width : '30%', height: 160, }}>
          <br/>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h1'>13</Typography>
        <Typography style={{fontFamily: 'Dancing Script', color: '#860115'}} variant='h5'>milliards</Typography>
       </div>

      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 50}} ref={refCarte}>
      <b> Carte des vignobles de France </b>
      </Typography>

      <div style={{height: 700}}>
      <MapComponent/>
      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100}} ref={refProd}>
      <b> Production totale </b>
      </Typography>

      <ProdTotaleLine/>

        <div style={{textAlign: 'center', width: '60vw', marginLeft: '20vw'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      La production de vin en France est particulièrement stable, à l'exception de l'année 2017, qualifiée par l'Organisation Internationale de la Vigne et du Vin d'année "historiquement faible". Cette exception mise à part, la production oscille autour de 350 000 000 hectolitres.
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 30, textAlign: 'justify'}}>
      Dans le détail, le vin rouge représente environ la moitié de le production française, le vin blanc environ un tiers. On constate toutefois une augmentation relative de la production de vin blanc et rosé sur la période.
      </Typography>
      </div>

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100}}>
      <b> Production par département </b>
      </Typography>

      <Typography variant='h6' style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
      Selectionnez un département pour voir des graphiques sur la production de vin du département.
      </Typography>
      <Typography variant='h6' style={{ color: '#57585A', fontFamily: 'Montserrat', marginBottom: 30}}>
      Si vous sélectionnez plusieurs départements, un comparatif est affiché.
      </Typography>

      <ProdComponent/>

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

      <Typography variant='h2' style={{ color: '#57585A', fontFamily: 'Montserrat', paddingTop: 100}} ref={refConso}>
      <b> Consommation </b>
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
      Structure de la dépense de consommation des ménages en boissons de 1960 à 2018 (en valeur)
      </Typography>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <ConsoComponent/>
      </div>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
      Consommation en boissons alcoolisées (en litres par personne et par an)
      </Typography>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <ConsoComponent2/>
      </div>

      <div style={{height: 75}}>

      </div>

      <div style={{textAlign: 'center'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', textAlign: 'center'}} >
          Sources des données : 
      </Typography>
      </div>

      <div style={{textAlign: 'center'}}>
      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat', textAlign: 'center'}} >
        <div style={{marginLeft: '40vw'}}>
          <ul style={{textAlign: 'left'}}>
            <li>Vignobles : Sommelix</li>
            <li>Production : Douanes françaises</li>
            <li>Consommation : INSEE</li>
          </ul>
          </div>

      </Typography>
      </div>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
          Une datastory présentée par <a target="_blank" href='https://www.linkedin.com/in/mathis-balbo/'>Mathis Balbo</a>, <a target="_blank" href='https://www.linkedin.com/in/jules-garbay-894651137/'>Jules Garbay</a> et <a target="_blank" href='https://www.linkedin.com/in/antoine-pradier-b92752bb/'>Antoine Pradier</a>
      </Typography>

      <Typography style={{ color: '#57585A', fontFamily: 'Montserrat'}}>
          Développée <i>from scratch</i> avec <a target="_blank" href='https://create-react-app.dev/docs/getting-started/'>React</a>, 
          <a target="_blank" href='https://material-ui.com/'> Material-UI</a> et 
          <a target="_blank" href='https://nivo.rocks/'> Nivo </a>
           (<a target="_blank" href='https://github.com/iPr4d/data_storytelling'>Github repository</a>)

      </Typography>


    </div>
  );
}

export default HomeComponent;
