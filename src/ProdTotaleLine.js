import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import prodData from './data.json'
import { ResponsiveBar } from '@nivo/bar'
import { Typography } from '@material-ui/core';
import { departements } from './departements'

const styles = () => ({
  root: {
    textAlign: "center"
  },

});


class DatavizMultiDep extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  getIndexJson = (selected) => {
      if (selected == 0) {
          return 0
      }
      else if (selected === 20) {
          return 95
      }
      else if (selected < 21) {
          return selected
      }
      else {
          return selected -1 
        }
  }

  test = (data) => {
      let array = []
    for (const [key, value] of Object.entries(data)) {
        if (!(['2009', '2010', '2011'].includes(key))) {
        array.push(value)};
      }
      return array
  }

  processDataToDisplay = (dataArray) => {
      let newData = [];
        dataArray.map(item => {
            
            item['RougeColor'] = 'hsl(349, 49%, 24%)'
            item['RoséColor'] = 'hsl(21, 98%, 82%)'
            item['BlancColor'] = 'hsl(53, 86%, 78%)'
            newData.push(item)
        } )
      return newData
      
  }


render() {
  const { classes } = this.props;
  const data = this.processDataToDisplay(this.test(prodData['data'][0]))

  return (
    <div className="Prod" style={{textAlign: 'center', marginLeft: 275}}>

            <br/>
            {console.log(data)}

            <div style={{ width: '50em', height: '25em'}}>

            <ResponsiveBar
        data={data}
        keys={[ 'Rosé', 'Rouge', 'Blanc']}
        indexBy="Année"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
            legend: "Production totale (en centaines d'hl)",
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
}

export default withStyles(styles)(DatavizMultiDep)
