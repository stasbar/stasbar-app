/*
 * Copyright 2019 Stanislaw Baranski @stasbar
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *          __             __
 *    _____/ /_____ ______/ /_  ____ ______
 *   / ___/ __/ __ `/ ___/ __ \/ __ `/ ___/
 *  (__  ) /_/ /_/ (__  ) /_/ / /_/ / /
 * /____/\__/\__,_/____/_.___/\__,_/_/
 *            stasbar@stasbar.com
 */

import * as React from "react";
import {Component} from "react";
import {Button, createStyles, Theme, Typography, withStyles, WithStyles} from "@material-ui/core";

const styles = (theme: Theme) => createStyles({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  }
});

class Footer extends Component<WithStyles<typeof styles>, {}> {
  public render() {
    const {classes} = this.props;
    return (
      <footer className={this.props.classes.footer}>
        <Typography variant="h6" align="center" gutterBottom={true}>
          <Button href={"https://github.com/stasbar/stasbar-app"}>
            Source Code
          </Button>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          build with <a className={classes.link} href="https://kotlinlang.org/">Kotlin ❤️</a> hosted on <a
          className={classes.link} href="https://ipfs.io/">IPFS</a>
        </Typography>
      </footer>
    );
  }

}

export default withStyles(styles)(Footer)