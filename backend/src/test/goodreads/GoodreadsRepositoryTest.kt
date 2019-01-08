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

package goodreads

import com.stasbar.app.database.H2Database
import com.stasbar.app.di.goodreadsModule
import com.stasbar.app.goodreads.GoodreadsApi
import com.stasbar.app.goodreads.GoodreadsRepository
import kotlinx.coroutines.runBlocking
import org.junit.After
import org.junit.Before
import org.junit.Test
import org.koin.core.KoinProperties
import org.koin.standalone.StandAloneContext.startKoin
import org.koin.standalone.StandAloneContext.stopKoin
import org.koin.standalone.inject
import org.koin.test.KoinTest

class GoodreadsRepositoryTest : KoinTest {
    val database = H2Database(4, "jdbc:h2:file:./.database/test-stasbarapp", "root", "")
    private lateinit var goodreadsRepository: GoodreadsRepository

    @Before
    fun setUp() {
        startKoin(listOf(goodreadsModule), properties = KoinProperties(useKoinPropertiesFile = true))
        val goodreadsApi: GoodreadsApi by inject()

        goodreadsRepository = GoodreadsRepository(goodreadsApi, database)
    }

    @After
    fun tearDown() {
        stopKoin()
    }

    @Test
    fun getAllQuotes() {

    }

    @Test
    fun getAllBooks() {
    }

    @Test
    fun fetchAllBooks() {
        runBlocking {
            goodreadsRepository.fetchAllBooks()
        }
    }

    @Test
    fun fetchAllQuotes() {
        runBlocking {
            goodreadsRepository.fetchAllQuotes()
        }
    }
}