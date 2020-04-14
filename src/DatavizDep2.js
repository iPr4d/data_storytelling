import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import prodData from './data.json'

import { ResponsiveLine } from '@nivo/line'
import { Typography , Card } from '@material-ui/core';

const styles = () => ({
  root: {
    textAlign: "center"
  },

});

const secondary = { main: "#202020", appbar: '#333333', buttons: '#FFFFFF'};

const theme = {
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555"
      },
      text: {
        fill: "#ffffff"
      }
    },
    legend: {
      text: {
        fill: "#aaaaaa"
      }
    }
  },
  grid: {
    line: {
      stroke: "#555555"
    }
  }
};

class DatavizDep extends React.Component {
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

  processDataToDisplay = (dataSelected) => {
    
    let dataArray =[];

    console.log(dataSelected)

    dataSelected.map( item => {
        let currentObj = {'id': item.value, "color": "hsl(302, 70%, 50%)", 'data': []}
        let data = this.test(prodData['data'][this.getIndexJson(parseInt(item.key))])
        data.map( anneeData => {
            currentObj['data'].push({'x': anneeData['Année'], 'y': anneeData['Rouge']+anneeData['Blanc']+anneeData['Rosé']})
        })
        dataArray.push(currentObj)
    })

    let newObj = {'id': 'Moyenne', "color": "hsl(302, 70%, 50%)", 'data': []}
    let data2 = this.test(prodData['data'][0])
        data2.map( anneeData => {
            newObj['data'].push({'x': anneeData['Année'], 'y': parseInt((anneeData['Rouge']+anneeData['Blanc']+anneeData['Rosé'])/95)})
        })
        dataArray.push(newObj)


    return dataArray
}




render() {
  const { classes } = this.props;
  const data_selected = this.processDataToDisplay(this.props.selected)
  return (
    <div className="Prod">

            <br/>

            
            <Card style={{ height: '21em', width: '31em', marginLeft: 80, backgroundColor: this.props.dark && secondary.appbar}}>
              <Typography style={{fontFamily: 'Montserrat', fontSize: 10, marginTop: 15, color: this.props.dark && secondary.buttons }}>
                  Comparaison de la production totale à la moyenne sur tous les départements
                </Typography>
          
    <div style={{ height: '20em', width: '30em' }}>
    
    <ResponsiveLine
        data={data_selected}
        margin={{ top: 30, right: 110, bottom: 50, left: 80 }}
        yScale={{ type: 'linear', min: '0', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        theme={this.props.dark && theme}
        enableSlices="x"
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
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
                itemTextColor: this.props.dark && secondary.buttons,
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
    </Card>
            


    </div>
  );
} 
}

export default withStyles(styles)(DatavizDep)
