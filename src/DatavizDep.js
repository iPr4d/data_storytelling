import React from 'react';

import { withStyles } from "@material-ui/core/styles";
import prodData from './data.json'

import Stream from './Stream'
import { Typography } from '@material-ui/core';
import { departements } from './departements'

const styles = () => ({
  root: {
    textAlign: "center"
  },

});

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


render() {
  const { classes } = this.props;
  const data_selected = this.test(prodData['data'][this.getIndexJson(parseInt(this.props.selected))])
  return (
    <div className="Prod">



            <br/>

            
            <Stream data={data_selected} dark={this.props.dark}/>
            


    </div>
  );
} 
}

export default withStyles(styles)(DatavizDep)
