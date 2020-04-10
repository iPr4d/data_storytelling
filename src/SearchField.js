import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';
import Popper from '@material-ui/core/Popper';

import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import { departements1 } from './departements'
import { List, ListItem } from '@material-ui/core';


const styles = (theme) => ({
  grow: {
    flexGrow: 1,
    marginTop: 10
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    maxWidth: 400,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 3),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});
  

  class SearchField extends React.Component {
    constructor() {
        super();
        this.state = {
          input: "",
          anchorEl: null
        };
      }


    handleChange = (event) => {
        this.setState({ input: event.target.value, anchorEl: event.currentTarget })
    }

    getSuggestion = (input) => {
        let itemsToDisplay = departements1.filter(item => {return item.value.toLowerCase().includes(input.toLowerCase())})
        return itemsToDisplay
    }

    renderPopper = () => {
        return (
            <div>

            <Popper open={this.state.input.length > 1} anchorEl={this.state.anchorEl} placement={'bottom'} transition>
                    {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <List>
                        {this.getSuggestion(this.state.input).map( ({key,value}) => { return (
                            <ListItem 
                                button 
                                onClick={()=>{
                                this.setState({ input: ""})
                                this.props.handleClickItem({'key':key, 'value': value})
                                }
                                }>
                                    {value}
                            </ListItem>
                        )
                        })}
                        </List>
                        </Paper>
                    </Fade>
                    )}
            </Popper>


            </div>
        )
    }

  render() {
    const { classes } = this.props;
  return (
    <div className={classes.grow}>

        <div style={{display: 'flex'}}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher"
              value={this.state.input}
              onChange={(e)=>this.handleChange(e)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
        
          </div>
          {this.state.input.length > 1 && this.renderPopper()}
          </div>
          
    </div>
  );
  }
}

export default withStyles(styles)(SearchField)