import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SunIcon from '@material-ui/icons/WbSunny'
import RainIcon from '@material-ui/icons/Grain'
import TempIcon from '@material-ui/icons/AcUnit'
import SuperficieIcon from '@material-ui/icons/Terrain'
import PeopleIcon from '@material-ui/icons/People'
import OpacityIcon from '@material-ui/icons/Opacity'

import MapFrance from './mapFrance';
import GrapeIcon from './grapes.svg'

import { ReactComponent as User } from './test.svg'


import { Divider } from '@material-ui/core';

const View = (color) => <User fill={color} style={{ width: 23, height: 23,}}/>;

const secondary = { main: "#202020", appbar: '#333333', buttons: '#FFFFFF'};

let ChampagneDescr = "Emblème liquide du luxe et de la fête, le Champagne est un vin effervescent produit dans la région éponyme, dans le nord-est de la France. Les vins de Champagne – qui ne pétillaient pas encore – furent d'ailleurs longtemps qualifiés de « vins de France », c'est-à-dire d'Île-de-France, toute proche. Quelques-unes de ces parcelles se trouvent toujours dans la région capitale, en Seine-et-Marne."
let CognacDesc = "Le cognac,  eau-de-vie de vin, est produit dans une région délimitée centrée autour de Cognac, commune de Charente. Il est produit à partir de vin de chaudière (vin peu alcoolisé, acide et trouble)  qu'une double distillation et un vieillissement en fût de chêne transformera en cognac."
let LoireDescr =
  "Au cœur de la France, un vignoble à l'exceptionnelle variété étire ses coteaux le long de la Loire et de ses affluents. Le Val de Loire (ou Vallée de la Loire) offre à l'amateur l'ensemble des genres de vin, qu'il soit rouges, rosés, blancs secs, demi-secs, moelleux, liquoreux ou effervescents."
let AlsaceDescr =
  "Planté au cœur de l'Europe, le vignoble alsacien connecte les mondes latin et germanique, selon un axe Nord-Sud de plus de 100 km, s'étendant sur 15 600 hectares de Strasbourg à Mulhouse. L'Alsace est d'abord réputée pour ses blancs, tranquilles ou effervescents (le fameux crémant), mais elle produit aussi quelques rouges et rosés."
let JuraDesc =
  "Avec à peine deux milliers d'hectares , le vignoble du Jura est l'un des plus petits du terroir français. Il parvient néanmoins à développer une production inimitable, à la personnalité très forte, autour des merveilles que sont le vin jaune, le vin de paille et plus généralement les blancs à base de savagnin."
let SavoieDesc =
  "Le vignoble savoyard est unique par ses conditions climatiques, qui font de la viticulture locale une véritable prouesse technique. Actuellement, il mobilise un peu moins de 2 000 hectares - ce qui ne donne qu'une modeste idée de ce que fut autrefois l'importance du vignoble dans les paysages."
let BourgogneDesc =
  "Auprès de la Saône, sur son couchant, s'étire l'un des vignobles les plus renommés au monde : la Bourgogne. Sur 250 km, du chablisien au maconnais, il traverse successivement les départements de l'Yonne (basse-Bourgogne), de la Côte d'Or (châtillonais, côte de Nuits et côte de Beaune) et de la Saône-et-Loire (côte chalonnaise puis maconnais).";
let BeaujolaisDesc =
  "Ce vignoble, qui tient son nom de son ancienne capitale Beaujeu, est principalement connu pour son vin rouge à cépage gamay – bien qu'une poignée de cépages « accessoires » y soient aussi licites (dans la limite de 15 % des surfaces) : l'aligoté, le melon, le pinot gris, le pinot noir, le gamay de Bouze et le gamay de Chaudenay."
let CotesDuRhoneDesc =
  "De Lyon jusqu'à la Provence, le Rhône arrose l'un des plus vieux vignobles de France, qui donna autrefois un vin gallo-romain - et bien sûr le vin des Papes durant leur siège avignonnais. On distingue l'AOC Côtes-du-Rhône, qui rassemble les rives droite et gauche entre Vienne et Avignon, et les vins de la vallée du Rhône, provenant des côteaux des affluents du Rhône. Très étendue, le climat  varie d'un bout à l'autre du vignoble, avec un ensoleillement qui passe d'un peu moins de 2000 heures par an au niveau de la pointe nord, jusqu'à 2800 heures auprès d'Avignon. Le mistral, qui souffle à peu près la moitié de l'année sur la section sud, laisse ensuite place à la bise. La pluviométrie, en revanche, est assez égale, avec deux saisons sèches (hiver, été), séparées de deux saisons pluvieuses (automne et printemps)."
let ProvenceDesc =
  "La Provence abrite le plus ancien vignoble du terroir français. C'est en effet près de Marseille, que les colons grecs phocéens installèrent les premières vignes du pays peu après la fondation de la ville, plus de 2 500 ans avant la mort de Pape Diouf. Leur progression vers Nice, Arles et bien d'autres comptoirs, popularisera la culture et la consommation du vin dans toute la Provence puis toute la Gaulle. Après la pax romana, le souci des vignes sera repris au premier chef par les abbayes provençales, notamment Saint-Victor (Marseille)."
let LanguedocDesc =
  "Avec ses 200 000 hectares de vigne plantée sous un climat hautement favorable, le Languedoc est le premier vignoble français en volume. Beaucoup de vins de table, certes, mais aussi de nombreux vins de qualité, dont les AOC rassemblent 36 000 hectares, soit tout de même une Bourgogne et demie ! Le Languedoc excelle notamment dans les muscats, vins doux naturels obtenus par mutage. Depuis les années 1980, c'est aussi l'un des hauts lieux du retour en grâce des vins de cépage."
let RoussillonDesc =
  "Dans le monde des vins mutés (vins dont la fermentation alcoolique a été bloquée afin de préserver le sucre et le fruité), le Roussillon est une superpuissance : il assure à lui seul 80% de la production française. Sous un ensoleillement exceptionnel, le département des Pyrénées-Orientales abrite pas moins de treize appellations, plantées sur la pointe sud de l'Hexagone. Ce terroir abrite des sols très variés, dont l'unité ne se retrouve guère qu'au niveau de l'appellation."
let BordeauxDesc =
  "Terroir le plus admiré et le plus imité dans le monde, Bordeaux est la capitale mondiale du vin. Sa position singulière est le produit d'une conjonction exceptionnelle du climat, du paysage... Et de son histoire : avec la prise de La Rochelle en 1628, la ville devint la tête de pont du commerce atlantique en matière de vin, ce qui permet de développer une culture viticole qui daterait du 4ème siècle."
let SudOuestDesc =
  "Pays de cocagne pour tous les gastronomes, le sud-ouest français possède aussi ses lettres de noblesse en matière de vin. Et ce, depuis fort longtemps : la vigne y était déjà cultivée avant même la conquête romaine ! Longtemps contraint par le  « privilège bordelais » octroyé par les rois d'Angleterre puis de France qui contraignait les exportations, ce vignoble savoureux tente de retrouver la place qui lui est due."
let CorseDesc =
  "En plus de ses plages, ses paysages et sa lumière, l'Île de Beauté dispose de vignes tout autour de son littoral. Les vignerons corses y font essentiellement des rouges et des rosés, quelques blancs, ainsi qu'un fameux muscat. Des vins de France qui s'ancrent aussi, de par le climat et par les cépages, dans le vaste champ viticole de la Méditerranée."

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = { selected: 'svg-la-vallee-de-la-loire', hovered: null };
  }

  handleHovered = region => {
    this.setState({ hovered: region });
  };

  handleUnHovered = () => {
    this.setState({ hovered: null });
  };

  handleSelected = region => {
    this.setState({ selected: region });
  };

  regionMapper = region => {
    if (region === 'svg-champagne') {
      return { 
        label: 'Champagne', 
        url: 'https://fr.wikipedia.org/wiki/Vignoble_de_Champagne', 
        desc: ChampagneDescr,
        soleil: '1 728',
        cepages_dict: {'Pinot noir':	39,
        'Meunier':	33,
        'Chardonnay':	27,
        'Autres':	2},
        pluie: '604',
        temp: '13,9',
        superficie: '33 504',
        nbr_prod: '13 300',
        prod_totale: '2 484 431',
        rouges: "Pinot noir (13 000 ha), Meunier (11 000 ha)",
        blancs: "Chardonnay (9 000 ha), Pinot blanc B, Pinot gris, Petit Meslier B" };
    } else if (region === 'svg-la-vallee-de-la-loire') {
      return {
        label: 'Vallée de la Loire',
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_la_vall%C3%A9e_de_la_Loire',
        cepages_dict : {'Melon': 17,
        'Chenin': 13,
        'Sauvignon': 11,
        'Chardonnay': 3,
        'Folle blanche B': 2,
        'Grolleau gris G': 1,
        'Cabernet franc': 24,
        'Gamay': 7,
        'Grolleau N': 3,
        'Pinot noir': 2,
        'Cabernet -Sauvignon': 1,
        'Malbec (ou Cot)': 1,
        'Autres': 15},
        desc: LoireDescr,
        soleil: '1 844',
        pluie: '684',
        temp: '14,6',
        superficie: '64 441',
        nbr_prod: '15 000',
        prod_totale: '3 173 000',
        rouges: "Melon (11 200 ha), Chenin (8 600 ha), Sauvignon (7 100 ha), Chardonnay (2 000 ha), Folle blanche B (1 200 ha), Grolleau gris G (400 ha), Orbois B (200 ha), Pinot gris, Romorantin B, Sacy.",
        blancs: "Cabernet franc (15 200 ha), Gamay (4 200 ha), Grolleau N (1 900 ha), Pinot noir (1 300 ha), Cabernet-Sauvignon (900 ha), Malbec (ou Cot) (600 ha), Pineau d'Aunis N (200 ha), Meunier."
      };
    } else if (region === 'svg-l-alsace') {
      return { 
        label: 'Alsace', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_d%27Alsace', 
        desc: AlsaceDescr,
        soleil: '1 733',
        pluie: '581',
        cepages_dict: {'Riesling':	22,
        'Pinot gris':	15,
        'Auxerrois B':	14,
        'Sylvaner B':	8,
        'Pinot blanc B':	7,
        'Pinot noir':	10,
        'Autres':	23},
        temp: '15',
        superficie: '15 884',
        nbr_prod: '5 680',
        prod_totale: '910 505',
        rouges: "Riesling (3 500 ha), Pinot gris (2 400 ha), Auxerrois B (2 300 ha), Sylvaner B (1 300 ha), Pinot blanc B (1 100 ha), Chasselas, Muscat à petits grains blancs, Muscat Ottonel B, Chardonnay.",
        blancs: "Pinot noir (1 600 ha)"
       };
    } else if (region === 'svg-du-jura') {
      return { 
        label: 'Jura', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Jura', 
        desc: JuraDesc,
        soleil: '1 871',
        cepages_dict: {'Poulsard':	21,
        'Trousseau N':	4,
        'Chardonnay':	50,
        'Savagnin':	17,
        'Autres':	9},
        pluie: '1 108',
        temp: '14,5',
        superficie: '2 414',
        nbr_prod: '1 340',
        prod_totale: '89 683',
        rouges: "Poulsard (500 ha), Trousseau N (100 ha), Pinot noir.",
        blancs: "Chardonnay (1 200 ha), Savagnin (400 ha)."
       };
    } else if (region === 'svg-savoie-et-bugey') {
      return { 
        label: 'Savoie et Bugey', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_Savoie', 
        desc: SavoieDesc,
        soleil: '2 026',
        cepages_dict: {'Gamay':	13,
        'Mondeuse N':	5,
        'Pinot noir':	3,
        'Jacquière B':	24,
        'Altesse':	5,
        'Chardonnay':	3,
        'Roussanne (ou Bergeron)':	3,
        'Autres':	44},
        pluie: '971',
        temp: '13,5',
        superficie: '3 811',
        nbr_prod: 'Na',
        prod_totale: '213 868',
        rouges: "Gamay (500 ha), Mondeuse N (200 ha), Pinot noir (100 ha), Persan N.",
        blancs: "Jacquère B (900 ha), Altesse (200 ha), Chardonnay (120 ha), Roussanne (ou Bergeron) (100 ha), Aligoté B, Mondeuse blanche B, Chasselas, Molette B, Gringet B."
       };
    } else if (region === 'svg-bourgogne') {
      return { 
        label: 'Bourgogne', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_Bourgogne', 
        desc: BourgogneDesc,
        soleil: '1 831',
        cepages_dict: {'Pinot noir':	34,
        'Gamay':	10,
        'Chardonnay':	44,
        'Aligoté B':	6,
        'Sauvignon':	4,
        'Autres':	1},
        pluie: '732',
        temp: '15,1',
        superficie: '29 286',
        nbr_prod: '5 600',
        prod_totale: '1 455 891',
        rouges: "Pinot noir (10 000 ha), Gamay (3 000 ha), César N.",
        blancs: "Chardonnay (13 000 ha), Aligoté B (1 700 ha), Sauvignon (1 200 ha), Pinot gris, Sacy."
       };
    } else if (region === 'svg-du-beaujolais-et-lyonnais') {
      return {
        label: 'Beaujolais et Lyonnais',
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Beaujolais',
        desc: BeaujolaisDesc,
        cepages_dict:{'Gamay':	90,
        'Chardonnay':	3,
        'Autres':	7},
        soleil: '1 924',
        pluie: '842',
        temp: '15,4',
        superficie: '18 800',
        nbr_prod: '3 870',
        prod_totale: '849 959',
        rouges: "Gamay (17 000 ha), Pinot noir, Gamay de Bouze N, Gamay de Chaudenay N.",
        blancs: "Chardonnay (500 ha), Aligoté B, Melon, Pinot gris."
      };
    } else if (region === 'svg-des-cotes-du-rhone') {
      return {
        label: 'Côtes-du-Rhône',
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_la_vall%C3%A9e_du_Rh%C3%B4ne',
        desc: CotesDuRhoneDesc,
        soleil: '2 496',
        climat: 'Tempéré méditerranéen',
        pluie: '913',
        temp: '17,2',
        cepages_dict: {'Grenache':	13,
        'Syrah':	10,
        'Carignan':	2,
        'Cinsaut':	1,
        'Muscat à petits grans blancs':	2,
        'Viognier':	1,
        'Marsanne B':	1,
        'Clairette B':	1,
        'Autres':	71},
        superficie: '130 876',
        nbr_prod: '11 390',
        prod_totale: '6 207 928',
        rouges: "Grenache (10 000 ha), Syrah (8 000 ha), Carignan (1 300 ha), Cinsaut (600 ha), Mourvèdre N (200 ha), Counoise N, Marselan N, Muscardin N, Piquepoul noir N, Terret noir N, Brun argenté.",
        blancs: "Muscat à petits grains blancs (1 200 ha), Viognier (900 ha), Marsanne B (500 ha), Clairette B (400 ha), Grenache blanc B (300 ha), Ugni blanc (150 ha), Bourboulenc B, Picardan B, Piquepoul blanc B, Vermentino, Roussanne (ou Bergeron), Grenache gris G, Macabeu."
      };
    } else if (region === 'svg-provence') {
      return { 
        label: 'Provence', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_Provence', 
        desc: ProvenceDesc,
        soleil: '2 899',
        pluie: '665',
        cepages_dict: {'Grenache':	48,
        'Syrah':	19,
        'Carignan':	11,
        'Cinsaut':	10,
        'Mourvèdre':	5,
        'Ugni blanc':	3,
        'Vermentino':	2,
        'Clairette B':	1},
        temp: '18,9',
        superficie: '40 219',
        nbr_prod: '6 140',
        prod_totale: '1 998 578',
        rouges: "Grenache (38 000 ha), Syrah (15 000 ha), Carignan (8 500 ha), Cinsaut (8 000 ha), Mourvèdre N (3 800 ha), Tibouren N, Brachet N.",
        blancs: " Ugni blanc (2 700 ha), Vermentino (1 700 ha), Clairette B (1 000 ha), Bourboulenc B, Sauvignon, Sémillon."
       };
    } else if (region === 'svg-du-languedoc') {
      return {
        label: 'Languedoc',
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Languedoc-Roussillon',
        desc: LanguedocDesc,
        soleil: '2 686',
        pluie: '699',
        cepages_dict:{'Syrah':	18,
        'Grenache':	16,
        'Carignan':	15,
        'Merlot':	13,
        'Cabernet -Sauvignon':	8,
        'Cinsaut':	5,
        'Mourvèdre N':	2,
        'Cabernet franc':	1,
        'Alicante Henri Bouschet N':	1,
        'Chardonnay':	6,
        'Sauvignon':	4,
        'Viognier':	2,
        'Grenache blanc B':	1,
        'Muscat à petits grans blancs':	1,
        'Piquepoul blanc B':	1,
        'Terret blanc B':	1,
        'Autres':	3},
        temp: '17,9',
        superficie: '202 400',
        nbr_prod: '27 030',
        prod_totale: '10 660 000',
        rouges: "Syrah (36 000 ha), Grenache (33 000 ha), Carignan (30 000 ha), Merlot (27 000 ha), Cabernet-Sauvignon (17 000 ha), Cinsaut (10 000 ha), Mourvèdre N (4 000 ha), Cabernet franc (2 000 ha), Alicante Henri Bouschet N (2 000 ha), Marselan N (1 000 ha)",
        blancs: "Chardonnay (13 000 ha), Sauvignon (9 000 ha), Viognier (4 000 ha), Grenache blanc B (3 000 ha), Muscat à petits grains blancs (3 000 ha), Piquepoul blanc B (1 500 ha), Terret blanc B (1 300 ha), Colombard B (1 000 ha), Vermentino (1 000 ha), Mauzac B (1 000 ha), Ugni blanc (800 ha), Roussanne (ou Bergeron) (500 ha), Clairette B (500 ha), Chenin (500 ha), Chasan B (500 ha), Macabeu (500 ha), Bourboulenc B (200 ha), Muscat d'Alexandrie B, Grenache gris G."
      };
    } else if (region === 'svg-du-roussillon') {
      return {
        label: 'Roussillon',
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Languedoc-Roussillon',
        desc: RoussillonDesc,
        cepages_dict:{'Grenache':	25,
        'Syrah':	18,
        'Carignan':	14,
        'Mourvèdre N':	4,
        'Chardonnay':	12,
        'Vermentino':	9,
        'Viognier':	8,
        'Sauvignon':	5,
        'Grenache gris G':	4},
        soleil: '2 506',
        pluie: '572',
        temp: '18,7',
        superficie: '25 400',
        nbr_prod: '4 510',
        prod_totale: '1 040 000',
        rouges: "Grenache (6 400 ha), Syrah (4 600 ha), Carignan (3 600 ha), Mourvèdre N (1 000 ha), Merlot (600 ha), Cabernet-Sauvignon (500 ha), Lledoner pelut (200 ha).",
        blancs: "Cépages blancs (ou gris) : Chardonnay (3 000 ha), Vermentino (2 400 ha), Viognier (2 000 ha), Sauvignon (1 300 ha), Grenache gris G (1 000 ha), Roussanne (ou Bergeron) (500 ha), Marsanne B (100 ha), Carignan blanc B (100 ha), Tourbat B (80 ha), Colombard B (60 ha), Chasan B (40 ha)."
      };
    } else if (region === 'svg-bordeaux') {
      return { 
        label: 'Bordeaux', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_Bordeaux', 
        desc: BordeauxDesc,
        soleil: '2 083',
        pluie: '923',
        cepages_dict: {'Merlot':	56,
        'Cabernet -Sauvignon':	20,
        'Cabernet franc':	9,
        'Villard noir N':	1,
        'Malbec (ou Cot)':	1,
        'Sémilion':	5,
        'Sauvignon':	4,
        'Muscadelle B':	1,
        'Autres':	3},
        temp: '14,5',
        superficie: '117 182',
        nbr_prod: '9 820',
        prod_totale: '5 983 000',
        rouges: "Merlot (66 000 ha), Cabernet-Sauvignon (24 000 ha), Cabernet franc (10 000 ha), Villard noir N (1 000 ha), Malbec (ou Cot) (600 ha), Carmenère N, Petit Verdot N.",
        blancs: "Sémillon (6 000 ha), Sauvignon (5 000 ha), Muscadelle B (800 ha), Ugni blanc (200 ha), Colombard B (100 ha)."
       };
    } else if (region === 'svg-poitou-charente-et-cognac') {
      return {
        label: 'Poitou-Charentes et Cognac',
        soleil: 'Non connu',
        pluie: 'Non connu',
        temp: 'Non connu',
        cepages_dict: {'Pinot noir':	39,
        'Meunier':	33,
        'Chardonnay':	27,
        'Autres':	2},
        url: 'https://fr.wikipedia.org/wiki/Vignoble_charentais',
        desc: CognacDesc,
        superficie: 'Non connu',
        nbr_prod: 'Non connu',
        prod_totale: 'Non connu',
        rouges: "Non connu",
        blancs: "Non connu"
      };
    } else if (region === 'svg-du-sud-ouest') {
      return { 
        label: 'Sud-Ouest', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Sud-Ouest', 
        desc: SudOuestDesc,
        soleil: '1 984',
        pluie: '716',
        temp: '16,3',
        cepages_dict: {'Merlot':	15,
        'Malbec (ou Cot)':	7,
        'Cabernet franc':	6,
        'Cabernet -Sauvignon':	4,
        'Tannat N':	3,
        'Fer servadou':	2,
        'Syrah':	2,
        'Gamay':	2,
        'Duras N':	2,
        'Sauvignon':	7,
        'Sémilion':	7,
        'Ugni blanc':	6,
        'Gros Manseng B':	4,
        'Mauzac B':	1,
        'Len de l’El B':	1,
        'Autres':	32},
        superficie: '59 400',
        nbr_prod: '19 730',
        prod_totale: '3 517 000',
        rouges: "Merlot (9 000 ha), Malbec (ou Cot) (4 000 ha), Cabernet franc (3 300 ha), Cabernet-Sauvignon (2 600 ha), Tannat N (1 700 ha), Fer servadou (1 200 ha), Syrah (1 100 ha), Gamay (1 000 ha), Duras N (900 ha), Négrette N (400 ha).",
        blancs: "Sauvignon (4 400 ha), Sémillon (3 900 ha), Ugni blanc (3 500 ha), Gros Manseng B (2 500 ha), Mauzac B (800 ha), Len de l'El B (600 ha), Muscadelle B (600 ha), Baroque B, Petit Manseng B, Courbu B."
       };
    } else if (region === 'svg-corse') {
      return { 
        label: 'Corse', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_de_Corse', 
        desc: CorseDesc,
        soleil: '2 741',
        cepages_dict:{'Nielluccio':	34,
        'Sciarcarello':	14,
        'Grenache':	10,
        'Autres':	41},
        pluie: '645',
        temp: '17,2',
        superficie: '5 800',
        nbr_prod: '450',
        prod_totale: '282 000',
        rouges: "Nielluccio (2 000 ha), Sciaccarello (800 ha), Grenache (600 ha), Cinsaut, Syrah, Carignan, Aléatico N.",
        blancs: "Bourboulenc B, Clairette B, Muscat à petits grains blancs, Vermentino."
       };
    }
  };

  getArrays = (dict) => {
    let returnedArray = []
    for (let [key, value] of Object.entries(dict)) {
      let array = new Array(value)
      for(var i = 0; i < array.length; i++){
        array[i]=key
      }
      returnedArray.push(array)
    }
    return returnedArray
  }

  getRandomColor = (i) => {
    var colorArray = ['rgb(88, 24, 69)', 
    'rgb(144, 12, 63)',
    'rgb(199, 0, 57)',
    'rgb(255, 87, 51)', 
    'rgb(148, 49, 38)',
    'rgb(169, 50, 38)',
    'rgb(255, 195, 0)',
    'rgb(192, 57, 43)',
    'rgb(214, 137, 16)',
    'rgb(241, 196, 15)',
    'rgb(211, 84, 0)',
    'rgb(235, 152, 78)',
    'rgb(229, 152, 102)',
    'rgb(183, 149, 11)',
    'rgb(247, 220, 111)',
    'rgb(240, 178, 122)',
    'rgb(52, 73, 94)'];
      
    return colorArray[i];
  }

  render() {
    return (
      <div className='Map' style={{display: 'flex', marginTop: 50,}}>

        <div id='test'style={{width: '50%'}}>
        <MapFrance
          hovered={this.state.hovered}
          dark={this.props.dark}
          selected={this.state.selected}
          handleHovered={this.handleHovered}
          handleUnHovered={this.handleUnHovered}
          handleSelected={this.handleSelected}
        />
        </div>
        <div style={{width: '50%'}}>
        {this.state.selected && <div>
            <Card
              elevation={2}
              style={{
                backgroundColor : this.props.dark && secondary.appbar,
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',

                width: 550,
                height: 250
              }}>
              <br />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography style={{fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}} variant='h5'><b>{this.state.selected && this.regionMapper(this.state.selected).label}</b></Typography>

                <Tooltip placement='right' title='Page Wikipédia'>
                  <IconButton
                    size='small'
                    style={{marginLeft: 10}}
                    onClick={() => window.open(this.regionMapper(this.state.selected).url, '_blank')}>
                    <LaunchIcon fontSize='small' style={{color : this.props.dark && secondary.buttons}} />
                  </IconButton>
                </Tooltip>
              </div>
              <br />
              <Divider variant='middle' style={{background : this.props.dark && secondary.buttons}}/>

              <div style={{ textAlign: 'justify', margin: 10, flex: 1, overflowY: 'auto' }}>
                <Typography style={{fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}}>{this.state.selected && this.regionMapper(this.state.selected).desc}</Typography>
              </div>
            </Card>

            <div style={{display: 'flex'}}>

            <Card
              elevation={2}
              style={{
                textAlign: 'center',
                marginTop: 20,
                background : this.props.dark && secondary.appbar,
                width: 265,
                maxHeight: 300
              }}>

                
                <Typography style={{ margin : 10, fontSize: 20, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}}>
                Climat
                </Typography>

                <Divider variant="middle" style={{background : this.props.dark && secondary.buttons}}/>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center' }}>
                <Tooltip placement='left' title="Temps d'ensoleillement">
                <SunIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons }}>
                {this.state.selected && this.regionMapper(this.state.selected).soleil}  h/an
                </Typography>
                </div>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
                <Tooltip placement='left' title="Pluviométrie">
                <RainIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons }}>
                {this.state.selected && this.regionMapper(this.state.selected).pluie} mm/an
                </Typography>
                </div>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
                <Tooltip placement='left' title="Température moyenne">
                <TempIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}}>
                {this.state.selected && this.regionMapper(this.state.selected).temp} °C
                </Typography>
                </div>

              </Card>

              <Card
              elevation={2}
              style={{
                textAlign: 'center',
                width: 265,
                background : this.props.dark && secondary.appbar,
                marginTop: 20,
                marginLeft: 20,
                maxHeight: 300
              }}>

                <Typography style={{ margin : 10, fontSize: 20, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}}>
                Production
                </Typography>

                <Divider variant="middle" style={{background : this.props.dark && secondary.buttons}}/>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center' }}>
                <Tooltip placement='left' title="Superficie">
                <SuperficieIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons }}>
                {this.state.selected && this.regionMapper(this.state.selected).superficie} ha
                </Typography>
                </div>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
                <Tooltip placement='left' title="Nombre de producteurs">
                <PeopleIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons }}>
                {this.state.selected && this.regionMapper(this.state.selected).nbr_prod}
                </Typography>
                </div>

                <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
                <Tooltip placement='left' title="Production annuelle">
                <OpacityIcon style={{color : this.props.dark && secondary.buttons}}/>
                </Tooltip>
                <Typography style={{marginLeft: 10, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons }}>
                {this.state.selected && this.regionMapper(this.state.selected).prod_totale} hl
                </Typography>
                </div>

              </Card>

              

              </div>


            <Card
              elevation={2}
              style={{
                textAlign: 'center',
                marginTop: 20,
                background : this.props.dark && secondary.appbar,
                width: 550,
                height: 185
              }}>

                
                <Typography style={{ margin : 5, fontSize: 20, fontFamily: 'Montserrat', color : this.props.dark && secondary.buttons}}>
                Cépages
                </Typography>

                <Divider variant="middle" style={{background : this.props.dark && secondary.buttons}}/>
              <div style={{margin: 8}}>

              {this.getArrays(this.regionMapper(this.state.selected).cepages_dict).map((item, idx) => { 
                let color = this.getRandomColor(idx)
                return (
                item.map( i => {
                  return <Tooltip placement='top' title={i + ' - ' + item.length.toString()+ ' %'}>
                  {/* <img src={"https://www.svgrepo.com/show/102738/grapes-with-leaf-and-stem.svg"} style={{width: 23, height: 23, fill:{color}}}/> */}
                  {View(color)}
                </Tooltip>
                })
              )
                }
                )
              }
              </div>
              </Card>

              

              </div>}
              </div>

      </div>
    );
  }
}

export default MapComponent;
