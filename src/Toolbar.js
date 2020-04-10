import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const styles = () => ({});

class Toolbar extends Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: "50%", position: "absolute", top: 10, right: -80 }}>
        {this.props.display && (
          <Button onClick={this.props.handleClickNoneTool}>
            Revenir à la sélection
          </Button>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Toolbar);
