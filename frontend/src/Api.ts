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
import {serverHttpUrl} from "./config";

export default {
  async fetchBooks() {
    console.log(`fetching books`);
    const response = await fetch(serverHttpUrl + "/api/books");
    if (response.ok) {
      return await response.json();
    } else {
      console.error(response);
    }
  },
  async fetchQuotes() {
    console.log(`fetching quotes`);
    const response = await fetch(serverHttpUrl + "/api/quotes");
    if (response.ok) {
      return await response.json();
    } else {
      console.error(response);
    }
  },
};
