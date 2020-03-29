import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


import BackgroundVideo from './backgroundVideo'


const useStyles = makeStyles({

});


function HomeComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });



  return (

    <div className="Home">
        <BackgroundVideo/>
            <div style={{color: 'rgb(255,255,255)', position: 'absolute', top: '40vh', right: '45vw', fontSize: 35, textAlign: 'center' }}>
                <b>Carte des vins</b>
            </div>

      <div style={{color: 'rgb(255,255,255)', position: 'absolute', top: '50vh', right: '40vw', fontSize: 20, textAlign: 'center' }}>
        Les grandes régions viticoles de France
      </div>
    </div>


  );
}

export default HomeComponent;
