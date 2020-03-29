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
import { Divider } from '@material-ui/core';

let ChampagneDescr =
  "Emblème liquide du luxe et de la fête, le Champagne est un vin effervescent produit dans la région éponyme, dans le nord-est de la France. Les vins de Champagne – qui ne pétillaient pas encore – furent d'ailleurs longtemps qualifiés de « vins de France », c'est-à-dire d'Île-de-France, toute proche. Son vignoble est aujourd'hui le plus septentrional du pays (avec 49,5° Nord à Reims), et quelques-unes de ces parcelles se trouvent toujours officiellement dans la région capitale – dans le département de la Seine-et-Marne.";
let LoireDescr =
  "Au cœur de la France, un vignoble à l'exceptionnelle variété étire ses coteaux le long de la Loire, cette Amazone à l'échelle angevine, et de ses affluents. Rouges, rosés, blancs secs, demi-secs, moelleux, liquoreux et effervescents : le Val de Loire (ou Vallée de la Loire) offre à l'amateur l'ensemble des genres de vin.";
let AlsaceDescr =
  "Planté au cœur de l'Europe, le vignoble alsacien connecte les mondes latin et germanique, selon un axe Nord-Sud de plus de 100 km. De Strasbourg à Mulhouse, il traverse 119 communes, pour une surface totale de 15 600 hectares. L'Alsace est d'abord réputée pour ses blancs, tranquilles ou effervescents (le fameux crémant), mais elle produit aussi quelques rouges et rosés.";
let JuraDesc =
  "Avec à peine deux milliers d'hectares qu'on dirait presque oubliés entre Alsace, Bourgogne et Valais, le vignoble du Jura est l'un des plus petits du terroir français. Ne « pèse »-t-il pas seulement 0,2 % de la surface plantée du pays ? Un débutant pourrait ainsi sous-estimer son importance œnologique... grave erreur ! Le Jura réussit en effet le prodige, sur une si petite surface, de développer une production inimitable, à la personnalité très forte, autour des merveilles que sont le vin jaune, le vin de paille et plus généralement les blancs à base de savagnin.";
let SavoieDesc =
  "Si la Savoie est mondialement connue pour ses domaines skiables, les amateurs de vin savent bien qu'elle abrite aussi un vignoble unique par ses conditions climatiques, qui font de la viticulture locale une véritable prouesse technique - tout en étant, dans un registre plus terre à terre, l'accompagnement naturel et savoureux des spécialités bien connues de la gastronomie locale. Comme son nom ne l'indique pas, le vignoble de Savoie déborde en fait sur trois autres départements : la Haute-Savoie bien sûr, mais aussi l'Ain - à Corbonod et Seyssel, deux communes situées juste de l'autre côté du Rhône -, et l'Isère, à Champareillan - là encore, une commune limitrophe, qui longe la rivière Isère. Actuellement, il mobilise un peu moins de 2 000 hectares - ce qui ne donne qu'une modeste idée de ce que fut autrefois l'importance du vignoble dans les paysages.";
let BourgogneDesc =
  "Auprès de la Saône, sur son couchant, s'étire l'un des vignobles les plus renommés au monde : la Bourgogne. Sur 250 km, du chablisien au maconnais, il traverse successivement les départements de l'Yonne (basse-Bourgogne), de la Côte d'Or (châtillonais, côte de Nuits et côte de Beaune) et de la Saône-et-Loire (côte chalonnaise puis maconnais).";
let BeaujolaisDesc =
  "Le plus méridional des Bourgogne : c'est ainsi qu'on pourrait présenter le Beaujolais. Situé au nord du département du Rhône, entre Mâcon et Lyon, dont il est le « troisième fleuve », ce vignoble, qui tient son nom de son ancienne capitale Beaujeu, est principalement connu pour son vin rouge à cépage gamay – bien qu'une poignée de cépages « accessoires » y soient aussi licites (dans la limite de 15 % des surfaces) : l'aligoté, le melon, le pinot gris, le pinot noir, le gamay de Bouze et le gamay de Chaudenay.";
let CotesDuRhoneDesc =
  "De Lyon jusqu'à la Provence, le Rhône arrose l'un des plus vieux vignobles de France, qui donna autrefois un vin gallo-romain - et bien sûr le vin des Papes durant leur siège avignonnais. Au cœur de la vallée, l'AOC Côtes-du-Rhône rassemble ainsi les rives droite et gauche entre Vienne et Avignon - elle hérite de ce qu'on appelait autrefois la Côte-du-Rhône (au singulier, donc), qui désignait la rive droite uniquement. En 1937, un décret magnanime regroupera les deux rives... Mais les vins de la vallée du Rhône, au-delà de l'AOC Côtes-du-Rhône, ce sont aussi les côteaux des affluents du Rhône : le Diois pour la Drôme, le « Ventoux » du Calavon, le Luberon sur la rive droite de la Basse-Durance, et le long du Gard, les Costières-de-Nîmes et la Clairette de Bellegarde. Les vins de la vallée du Rhône s'étendent au total sur six départements : Vaucluse et Gard au sud, puis la Drôme et l'Ardèche ; enfin, la Loire et le Rhône, à quelques encablures de Lyon. Le climat en change d'autant, avec un ensoleillement qui passe d'un peu moins de 2000 heures par an au niveau de la pointe nord, jusqu'à 2800 heures auprès d'Avignon. Le mistral, qui souffle à peu près la moitié de l'année sur la section sud, laisse ensuite place à la bise. Les villes de Livron et Montélimar partagent approximativement ces deux compartiments climatiques. La pluviométrie, en revanche, est assez égale, avec deux saisons sèches (hiver, été), séparées de deux saisons pluvieuses (automne et printemps).";
let ProvenceDesc =
  "La belle Provence abrite l'un des vignobles les plus attachants du terroir français... et assurément le plus ancien ! C'est en effet près de Marseille, que les colons grecs phocéens installèrent les premières vignes du pays peu après la fondation de la ville, plus de 500 ans avant notre ère. Leur progression vers Nice (Nikaia), Antibes (Antipolis), Arles (Arelate), Agde (Agathé) et bien d'autres comptoirs, popularisera la culture et la consommation du vin dans toute la Provence, et même au-delà, puisque le littoral hellénisé fut une véritable porte d'entrée pour la culture vinicole en Gaule - la ville d'Ampuis, dans les côtes-du-rhône, tirant ainsi son nom du grec emporion, qui signifiait simplement comptoir. Après la pax romana, le souci des vignes sera repris au premier chef par les abbayes provençales, notamment Saint-Victor (Marseille), Saint-Honorat (sur l'île de Lérins), le Tholonet et Montmajour.";
let LanguedocDesc =
  "Sur la pointe sud de l'hexagone, autour du golfe du Lion, s'étire un vignoble qui est en volume le premier de France : oui, nous parlons bien du Languedoc, avec ses 200 000 hectares de vigne plantée sous un climat hautement favorable. Beaucoup de vins de table, certes, mais aussi de nombreux vins de qualité, dont les AOC rassemblent 36 000 hectares, soit tout de même une Bourgogne et demie ! Le Languedoc excelle notamment dans les muscats (de Frontignan, de Mireval, de Lunel et de Saint-Jean-de-Minervois), ces vins doux naturels obtenus par mutage. On sait moins souvent qu'il abrite aussi le doyen mondial des vins effervescents : la Blanquette de Limoux, élaborée dès 1531 par les moines de l'Abbaye de St-Hilaire. Depuis les années 1980, c'est aussi l'un des hauts lieux du retour en grâce des vins de cépage, autour du grenache, du mourvèdre et de la syrah. Autant de raisons d'étancher sa soif et sa curiosité en découvrant ou redécouvrant ce vignoble des plus attachants !";
let RoussillonDesc =
  "Dans le monde des vins mutés, le Roussillon est une superpuissance : il assure à lui seul 80% de la production française. Banyuls, Maury, Rivesaltes : le paradis des vins doux naturels mérite bien une pause... d'autant qu'il réserve beaucoup d'autres surprises ! Sous un ensoleillement exceptionnel, le département des Pyrénées-Orientales abrite pas moins de treize appellations, plantées sur la pointe sud de l'Hexagone. Bordé à l'est par la Méditerranée, au sud par le massif du Canigou et par celui des Corbières au nord, ce terroir abrite des sols très variés, dont l'unité ne se retrouve guère qu'au niveau de l'appellation. Le climat, lui, est partout chaud et sec, à l'exception d'une saison automnale relativement pluvieuse. C'est dans l'ensemble un vignoble très sain, d'autant plus qu'y soufflent des vents forts et réguliers.";
let BordeauxDesc =
  "Bordeaux... peut-être le terroir le plus admiré et le plus imité dans le monde, et sans conteste sa capitale mondiale. Cela fait maintenant huit siècles qu'elle a lié sa gloire au commerce du vin – depuis la prise de La Rochelle par les troupes anglaises, qui dévia sur Bordeaux la tête de pont du commerce atlantique en matière de vin. Dans la région, les vignes elles-mêmes sont d'ailleurs beaucoup plus anciennes – le poète romain Ausone, consul à Burdigala au IVème siècle, aurait déjà possédé un domaine aux abords de Saint-Emilion. De l'excellence à l'arrogance, de la perfection à la froideur et de la tradition à l'austérité, les compliments qu'on adresse souvent à Bordeaux ne sont jamais loin du reproche – inévitable rançon d'une primauté connue de tous. Sa position singulière est le produit d'une conjonction exceptionnelle du climat, du paysage et de l'histoire.";
let SudOuestDesc =
  "Pays de cocagne pour tous les gastronomes, berceau du foie gras et du cassoulet, le sud-ouest français possède aussi ses lettres de noblesse en matière de vin. Et ce, depuis fort longtemps : la vigne y était déjà cultivée avant même la conquête romaine ! Ne formant autrefois qu'un seul et même vignoble avec les Bordeaux, sa réputation ne s'est cependant jamais vraiment remise du « privilège bordelais » octroyé par les rois d'Angleterre puis de France : pendant cinq siècles, jusqu'en 1773, les « vins du haut-pays » n'eurent le droit d'entrer dans le grand port que plusieurs semaines après ceux du proche vignoble, les monarchies ayant tenues à s'assurer la loyauté des puissants marchands bordelais. Cette ingérence de la haute politique dans les carafes et les verres est odieuse, certes, mais elle est heureusement facile à réparer ! Il n'est qu'à redécouvrir ce vignoble, l'un des plus savoureux, dans tous les sens du terme, par sa variété et son ancienneté.";
let CorseDesc =
  "Non, décidément, les dieux n'ont pas été pingres avec l'île de beauté ! Ses plages, ses paysages, sa lumière n'étaient pas assez : pour notre plus grand bonheur ils ont achevé leur œuvre d'un trait de vignes, tout autour de son littoral. Depuis, les vignerons font le reste, à savoir essentiellement des rouges et des rosés, quelques blancs, ainsi qu'un fameux muscat. Des vins de France qui s'ancrent aussi, de par le climat et par les cépages, dans le vaste champ viticole de la Méditerranée.";

class MapComponent extends React.Component {
  constructor() {
    super();
    this.state = { selected: null, hovered: null };
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
        soleil: '1728',
        pluie: '604',
        temp: '13,9',
        url: 'https://fr.wikipedia.org/wiki/Vignoble_charentais',
        desc: '',
        superficie: '33 504',
        nbr_prod: '13 300',
        prod_totale: '2 484 431',
        rouges: "Pinot noir (13 000 ha), Meunier (11 000 ha)",
        blancs: "Chardonnay (9 000 ha), Pinot blanc B, Pinot gris, Petit Meslier B"
      };
    } else if (region === 'svg-du-sud-ouest') {
      return { 
        label: 'Sud-Ouest', 
        url: 'http://fr.wikipedia.org/wiki/Vignoble_du_Sud-Ouest', 
        desc: SudOuestDesc,
        soleil: '1 984',
        pluie: '716',
        temp: '16,3',
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

  render() {
    return (
      <div className='Map'>

        <MapFrance
          hovered={this.state.hovered}
          selected={this.state.selected}
          handleHovered={this.handleHovered}
          handleUnHovered={this.handleUnHovered}
          handleSelected={this.handleSelected}
        />

        <Card
          elevation={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            position: 'absolute',
            top: 15,
            left: 650,
            width: 550,
            height: 250
          }}>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h5'>{this.state.selected && this.regionMapper(this.state.selected).label}</Typography>

            <Tooltip placement='right' title='Page Wikipédia'>
              <IconButton
                size='small'
                style={{marginLeft: 10}}
                onClick={() => window.open(this.regionMapper(this.state.selected).url, '_blank')}>
                <LaunchIcon fontSize='small' />
              </IconButton>
            </Tooltip>
          </div>
          <br />
          <Divider variant='middle' />

          <div style={{ textAlign: 'justify', margin: 10, flex: 1, overflowY: 'auto' }}>
            {this.state.selected && this.regionMapper(this.state.selected).desc}
          </div>
        </Card>

        <div style={{display: 'flex'}}>

        <Card
          elevation={2}
          style={{
            textAlign: 'center',
            position: 'absolute',
            top: 290,
            left: 650,
            width: 265,
            maxHeight: 300
          }}>

            
            <Typography style={{ margin : 10, fontSize: 20}}>
            Climat
            </Typography>

            <Divider variant="middle"/>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center' }}>
            <Tooltip placement='left' title="Temps d'ensoleillement">
            <SunIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).soleil}  h/an
            </Typography>
            </div>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
            <Tooltip placement='left' title="Pluviométrie">
            <RainIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).pluie} mm/an
            </Typography>
            </div>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
            <Tooltip placement='left' title="Température moyenne">
            <TempIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).temp} °C
            </Typography>
            </div>

          </Card>

          <Card
          elevation={2}
          style={{
            textAlign: 'center',
            position: 'absolute',
            top: 290,
            left: 935,
            width: 265,
            maxHeight: 300
          }}>

            <Typography style={{ margin : 10, fontSize: 20}}>
            Production
            </Typography>

            <Divider variant="middle"/>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center' }}>
            <Tooltip placement='left' title="Superficie">
            <SuperficieIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).superficie} ha
            </Typography>
            </div>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
            <Tooltip placement='left' title="Nombre de producteurs">
            <PeopleIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).nbr_prod}
            </Typography>
            </div>

            <div style={{display: 'flex', margin: 10, justifyContent: 'center'}}>
            <Tooltip placement='left' title="Production annuelle">
            <OpacityIcon/>
            </Tooltip>
            <Typography style={{marginLeft: 10 }}>
            {this.state.selected && this.regionMapper(this.state.selected).prod_totale} hl
            </Typography>
            </div>

          </Card>

          <Card
          elevation={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'justify',
            position: 'absolute',
            top: 475,
            left: 650,
            width: 550,
            height: 175
          }}>
            <Typography style={{ margin : 10, fontSize: 20}}>
            Cépages
            </Typography>

            <Divider variant="middle"/> 

            <Typography style={{marginRight : 10,  marginLeft : 10, fontSize: 12, marginTop: 10}}>
            <b>Cépages rouges</b> : {this.state.selected && this.regionMapper(this.state.selected).rouges}
            </Typography>

            <Typography style={{ marginRight: 10, marginLeft : 10, fontSize: 12}}>
           <b>Cépages blancs</b>  : {this.state.selected && this.regionMapper(this.state.selected).blancs}
            </Typography>

          </Card>

        </div>
      </div>
    );
  }
}

export default MapComponent;
