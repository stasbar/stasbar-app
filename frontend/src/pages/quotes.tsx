/*
 * Copyright 2019 Stanislaw stasbar Baranski
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

import {
  Card,
  createStyles,
  Grid,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import * as React from "react";
import { Component } from "react";
import Api from "../Api";
import Quote from "../models/Quote";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      width: "auto",
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(1100 + theme.spacing(6))]: {
        width: 1100,
        marginLeft: "auto",
        marginRight: "auto"
      },

      display: "flex",
      flexWrap: "wrap",
      flexGrow: 1,
      flexDirection: "column",
      justifyContent: "space-around",
      overflow: "hidden",
      padding: `${theme.spacing(8)}px 0`
    },
    cardQuote: {
      textDecoration: "none",
      margin: `${theme.spacing(1)}px 0`,
      padding: `${theme.spacing(1)}px`
    }
  });

interface IQuotesProps {}

interface IQuotesState {
  quotes: Quote[];
  loading: boolean;
}

class Quotes extends Component<WithStyles<typeof styles>, IQuotesState> {
  public state: IQuotesState = {
    quotes: new Array<Quote>(),
    loading: true
  };

  componentDidMount(): void {
    this.fetchQuotes();
  }

  public render() {
    const { classes } = this.props;
    const { quotes, loading } = this.state;
    return (
      <div className={classes.root}>
        {loading && (
          <Grid item={true} sm={12}>
            <Typography variant="h5">Loading...</Typography>
          </Grid>
        )}
        {quotes.map((quote: Quote) => (
          <Card className={classes.cardQuote} key={quote.hash}>
            <Typography variant="body1">
              {quote.text} ~{quote.author}
            </Typography>
          </Card>
        ))}
      </div>
    );
  }

  private async fetchQuotes() {
    try {
      const quotes: Quote[] = await Api.fetchAllQuotes();
      this.setState({ quotes, loading: false });
    } catch (e) {
      console.error(e);
      this.setState({ loading: false });
    }
  }
}

export default withStyles(styles)(Quotes);
