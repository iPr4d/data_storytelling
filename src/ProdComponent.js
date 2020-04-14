import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import { Dialog, IconButton, DialogTitle, DialogContent, Typography } from "@material-ui/core";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import Fade from '@material-ui/core/Fade'

import DatavizDep from './DatavizDep'
import DatavizDep2 from './DatavizDep2'
import DatavizMultiDep from './DatavizMultiDep'
import SearchField from './SearchField'

const secondary = { main: "#202020", appbar: '#333333', buttons: '#FFFFFF'};

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    maxWidth: 800
  },
  rootDark: {
    display: 'flex',
    background: secondary.appbar,
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
    maxWidth: 800
  },
  chip: {
    margin: theme.spacing(0.5),
  },

});

class ProdComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: [{'key': 1, 'value': 'Ain'}],
    };
  }

  handleClickTerritory = id => {
    this.setState({ open: false, selected: id });

  };

  handleClickItem = (item) => {
    let oldArray = this.state.selected
    let newArray = oldArray.push(item)
    this.setState({ selected: oldArray })
  }

  handleDelete = chipToDelete => () => {
    let oldArray = this.state.selected
    if (oldArray.length >1) {
    let newArray = oldArray.filter(chip => chip.key !== chipToDelete.key)
    this.setState({ selected: newArray })
    }
  };



render() {
  const { classes } = this.props;
    let isMapOpen = !Boolean(this.state.selected);
  return (
    <div className="Prod">

        
    <div style={{display:'flex', justifyContent: 'center', marginLeft: 100}}>
        <Paper className={this.props.dark ? classes.rootDark : classes.root}>
          <Typography style={{fontFamily: 'Montserrat', marginRight: 5, marginTop: 8, marginLeft: 5, color: this.props.dark && secondary.buttons}}>Sélection :</Typography>
      {this.state.selected.map(data => {
        let icon;

        return (
          <Chip
            key={data.key}
            icon={icon}
            label={data.value}
            onDelete={this.handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
    </Paper>

    <SearchField handleClickItem={this.handleClickItem} dark={this.props.dark}/>
    </div>

      {this.state.selected.length === 1 && 
        <div style={{display:'flex'}}>
          <div>
        <DatavizDep selected={this.state.selected[0].key} dark={this.props.dark}/>
          </div>
          <div>
        <DatavizDep2 selected={this.state.selected} dark={this.props.dark}/>
          </div>
        </div>
        }
        

        {this.state.selected.length > 1 && <DatavizMultiDep selected={this.state.selected} dark={this.props.dark}/>}




    </div>
  );
} 
}

export default withStyles(styles)(ProdComponent)
