import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import prodData from './data.json'
import { ResponsiveLine } from '@nivo/line'
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
        console.log(key)
        if (!(['2009', '2010', '2011'].includes(key))) {
        array.push(value)};
      }
      return array
  }

  processDataToDisplay = (dataSelected) => {
      let dataArray = []
      dataSelected.map( item => {
          let currentObj = {'id': item.value, "color": "hsl(302, 70%, 50%)", 'data': []}
          let data = this.test(prodData['data'][this.getIndexJson(parseInt(item.key))])
          data.map( anneeData => {
              currentObj['data'].push({'x': anneeData['Année'], 'y': anneeData['Rouge']+anneeData['Blanc']+anneeData['Rosé']})
          })
          dataArray.push(currentObj)
      })
      console.log(dataArray)
      return dataArray
  }


render() {
  const { classes } = this.props;
  const data_selected = this.processDataToDisplay(this.props.selected)
  return (
    <div className="Prod" style={{textAlign: 'center', marginLeft: 275, justifyContent: 'center'}}>




            <div style={{ width: '50em', height: '25em'}}>
            <ResponsiveLine
        data={data_selected}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: '0', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        enableSlices="x"
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Année',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Production (centaines d'hectolitres)",
            legendOffset: -50,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
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
}

export default withStyles(styles)(DatavizMultiDep)
