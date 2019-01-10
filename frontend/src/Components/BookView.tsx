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

import React, {Component} from "react";
import {RouteComponentProps} from "react-router";
import Book from "../Models/Book";

interface IBookViewProps extends RouteComponentProps {
    book: Book;
}

export default class BookView extends Component<IBookViewProps, {}> {
    render() {
        const {book} = this.props;
        return (
            <div id={book.hash.toString()}>
                <h3>Title: {book.title}</h3>
                <h3>Author: {book.authorName}</h3>
                <h3>Rating: {book.rating}</h3>
            </div>
        );
    }
}