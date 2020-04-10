import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { ResponsiveStream } from '@nivo/stream'

import ConsoData from './data2.json'


const useStyles = makeStyles({

});


function ConsoComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });



  return (
    <div className="Conso"  style={{textAlign : 'center'}}>
        <div style={{ height: '20em', width: '50em' }}>


<ResponsiveStream
data={ConsoData}
keys={['Alcool fort',
'Champagne, cidre et apéritif',
'Vins de qualité supérieure',
'Vins de consommation courante',
'Bière',
'Boissons non alcoolisées']}
margin={{ top: 25, right: 200, bottom: 50, left: 60 }}
axisTop={null}
axisRight={null}
axisBottom={{orient: 'bottom', tickSize:10, tickPadding: 5, tickRotation: 0, tickValues: [1960], legend: 'Année', legendOffset: 20 }}
axisLeft={{ orient: 'left', tickSize: 5, tickPadding: 5, tickRotation: 0, legend: '', legendOffset: -40 }}
offsetType="none"
order="ascending"
colors={{ scheme: 'nivo' }}
fillOpacity={0.85}
borderColor={{ theme: 'background' }}
defs={[
{
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#2c998f',
    size: 4,
    padding: 2,
    stagger: true
},
{
    id: 'squares',
    type: 'patternSquares',
    background: 'inherit',
    color: '#e4c912',
    size: 6,
    padding: 2,
    stagger: true
}
]}
fill={[
{
    match: {
        id: 'Paul'
    },
    id: 'dots'
},
{
    match: {
        id: 'Marcel'
    },
    id: 'squares'
}
]}
dotSize={8}
dotColor={{ from: 'color' }}
dotBorderWidth={2}
dotBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.7 ] ] }}
animate={true}
motionStiffness={90}
motionDamping={15}
legends={[
{
    anchor: 'bottom-right',
    direction: 'column',
    translateX: 100,
    itemWidth: 80,
    itemHeight: 20,
    itemTextColor: '#999999',
    symbolSize: 12,
    symbolShape: 'circle',
    effects: [
        {
            on: 'hover',
            style: {
                itemTextColor: '#000000'
            }
        }
    ]
}
]}
/>
</div>
    </div>
  );
}

export default ConsoComponent;
