import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { ResponsiveBar } from '@nivo/bar'

import ConsoData from './data3.json'


const useStyles = makeStyles({

});


function ConsoComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });



  return (
    <div className="Conso"  style={{textAlign : 'center'}}>
        <div style={{ height: '35em', width: '55em' }}>



        <ResponsiveBar
        data={ConsoData}
        keys={['Vins de consommation courante',
        'Bière',
        'Vins de qualité',
        'Cidre',
        'Spiritueux',
        'Champagne']}
        indexBy="Année"
        margin={{ top: 50, right: 150, bottom: 50, left: 60 }}
        padding={0.3}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Consommation en boissons alcoolisées (en litres par personne et par an)",
            legendPosition: 'middle',
            legendOffset: -55
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />

</div>
    </div>
  );
}

export default ConsoComponent;
