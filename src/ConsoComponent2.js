import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { ResponsiveBar } from '@nivo/bar'

import ConsoData from './data3.json'

import FormControl from '@material-ui/core/FormControl'
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'

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

const colors = { 'Vins de consommation courante': 'hsla(343, 100%, 39%,0.7)', 'Vins de qualité': 'hsla(11, 80%, 60%,0.7)', 'Champagne': 'hsla(46, 100%, 50%,0.7)' ,'Cidre':'hsla(145, 61%, 69%,0.7)','Bière':'hsla(145, 63%, 43%,0.7)','Spiritueux':'hsla(145, 63%, 22%,0.7)'}
const getColor = bar => colors[bar.id]

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

class ConsoComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            conso_courante: true,
            biere: true,
            champagne: true,
            spiri: true,
            vin_sup: true,
            cidre: true
        };
      }

  handleChange = (event) => {

    this.setState({[event.target.name]: event.target.checked })

};

 render() {

    const { classes } = this.props;
  let keys = []
  
  this.state.conso_courante && keys.push('Vins de consommation courante')
  this.state.vin_sup && keys.push('Vins de qualité')
  this.state.champagne && keys.push('Champagne')
  this.state.cidre && keys.push('Cidre')
  this.state.biere && keys.push('Bière')
  this.state.spiri && keys.push('Spiritueux')
  
  return (
    <div className="Conso"  style={{textAlign : 'center'}}>

<div style={{display: 'flex', justifyContent: 'center'}}>


<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.conso_courante} onChange={this.handleChange} name="conso_courante" />}
  label="Vins de conso. courante"
  labelPlacement='bottom'
/>
<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.biere} onChange={this.handleChange} name="biere" />}
  label="Bière"
  labelPlacement='bottom'
/>
<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.champagne} onChange={this.handleChange} name="champagne" />}
  label="Champagne"
  labelPlacement='bottom'
/>
<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.cidre} onChange={this.handleChange} name="cidre" />}
  label="Cidre"
  labelPlacement='bottom'
/>
<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.vin_sup} onChange={this.handleChange} name="vin_sup" />}
  label="Vins de qualité"
  labelPlacement='bottom'
/>
<FormControlLabel
style={{color : this.props.dark && secondary.buttons }}
  control={<Checkbox checked={this.state.spiri} onChange={this.handleChange} name="spiri" />}
  label="Spiritueux"
  labelPlacement='bottom'
/>


</div>




        <div style={{ height: '35em', width: '65em' }}>



        <ResponsiveBar
        data={ConsoData}
        keys={keys}
        colors={getColor}
        enableLabel={false}
        indexBy="Année"
        theme={this.props.dark && theme}
        margin={{ top: 50, right: 205, bottom: 50, left: 60 }}
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
                translateX: 100,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemTextColor: this.props.dark && secondary.buttons,
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

export default withStyles(styles)(ConsoComponent);
