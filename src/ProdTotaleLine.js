import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

import prodData from './data4.json'
import { ResponsiveBar } from '@nivo/bar'
import { Typography } from '@material-ui/core';
import { departements } from './departements'

const styles = (theme) => ({
  root: {
    textAlign: "center"
  },
  root2: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },

});

const colors = { 'Rouge': 'hsla(349, 27%, 48%, 0.7)', 'Blanc': 'hsla(53, 86%, 78%, 0.7)', 'Rosé': 'hsla(21, 98%, 82%, 0.7)' }
const getColor = bar => colors[bar.id]

const secondary = { main: "#202020", appbar: '#333333', buttons: '#FFFFFF'};

const theme = {
  background: secondary.main,
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


class DatavizMultiDep extends React.Component {
  constructor() {
    super();
    this.state = {
        rouge: true,
        blanc: true,
        rose: true
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


  handleChange = (event) => {
      if (event.target.name == 'rouge') {

        if (!(this.state.rouge && !this.state.blanc && !this.state.rose)) {
            this.setState({[event.target.name]: event.target.checked })
        }
      }

      if (event.target.name == 'rose') {

        if (!(!this.state.rouge && !this.state.blanc && this.state.rose)) {
          this.setState({[event.target.name]: event.target.checked })
        }
    }

    if (event.target.name == 'blanc') {

        if (!(!this.state.rouge && this.state.blanc && !this.state.rose)) {
            this.setState({[event.target.name]: event.target.checked })
        }
      }
  };


render() {
  const { classes } = this.props;
  const data = this.test(prodData['data'][0])
  let keys = []
  this.state.rouge && keys.push('Rouge')
  this.state.blanc && keys.push('Blanc')
  this.state.rose && keys.push('Rosé')
  

  return (
    <div className="Prod" style={{textAlign: 'center', marginLeft: 275}}>

            <br/>
            <div style={{display: 'flex', justifyContent: 'center', marginLeft: -275}}>


          <FormControlLabel
          style={{color : this.props.dark && secondary.buttons }}
            control={<Checkbox checked={this.state.rouge} onChange={this.handleChange} name="rouge" />}
            label="Rouge"
            labelPlacement='bottom'
          />
          <FormControlLabel
            style={{color : this.props.dark && secondary.buttons }}
            control={<Checkbox checked={this.state.blanc} onChange={this.handleChange} name="blanc" />}
            label="Blanc"
            labelPlacement='bottom'
          />
          <FormControlLabel
          style={{color : this.props.dark && secondary.buttons }}
            control={<Checkbox checked={this.state.rose} onChange={this.handleChange} name="rose" />}
            label="Rosé"
            labelPlacement='bottom'
          />


      </div>

            <div style={{ width: '50em', height: '25em'}}>

                {console.log(data)}

            <ResponsiveBar
        data={data}
        keys={keys}
        enableLabel={false}
        colors={getColor}
        indexBy="Année"
        theme={this.props.dark && theme}
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
                itemTextColor: this.props.dark && secondary.buttons,
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
