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

package com.stasbar.app

import com.fasterxml.jackson.databind.SerializationFeature
import com.stasbar.app.di.modules
import com.stasbar.app.gplayapi.GPlayApi
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.AutoHeadResponse
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.html.respondHtml
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.routing.get
import io.ktor.routing.route
import io.ktor.routing.routing
import kotlinx.html.*
import mu.KotlinLogging
import org.koin.core.context.startKoin
import org.koin.ktor.ext.inject


fun main(args: Array<String>) = io.ktor.server.netty.EngineMain.main(args)
private val logger = KotlinLogging.logger {}
@Suppress("unused") // Referenced in application.conf
fun Application.module() {
  startKoin {
    modules(modules)
    fileProperties()
    environmentProperties()
  }
  install(DefaultHeaders)
  install(CallLogging)
  install(AutoHeadResponse)
  install(ContentNegotiation) {
    jackson {
      enable(SerializationFeature.INDENT_OUTPUT)
    }
  }

  val booksRepository: BooksRepository by inject()
  val gplayApi: GPlayApi by inject()
  // Registers routes
  routing {

    route("/api") {
      get("/") {
        call.respondHtml {
          head {
            title { +"Ktor on Google App Engine Standard" }
          }
          body {
            p { +"Hello there! This is Ktor running on Google Appengine Standard" }
            ul {
              li {
                a(href = "/api/fetchGoodreads") { +"Fetch Goodreads" }
                ul {
                  li { a(href = "/api/fetchBooks") { +"Fetch Books" } }
                  li { a(href = "/api/fetchQuotes") { +"Fetch Quotes" } }
                }
              }
              li {
                a(href = "/api/quotes") { +"Quotes" }
              }
              li {
                a(href = "/api/books") { +"Books" }
              }
            }
          }
        }
      }
      get("/fetchGoodreads") {
        booksRepository.fetchAllBooks()
        booksRepository.fetchAllQuotes()
        call.respond("Done")
      }
      get("/fetchBooks") {
        booksRepository.fetchAllBooks()
        call.respond("Done")
      }
      get("/fetchQuotes") {
        booksRepository.fetchAllQuotes()
        call.respond("Done")
      }
      get("/quotes") {
        val limit = call.parameters["limit"]?.toIntOrNull()
        if (limit != null)
          call.respond(booksRepository.getAllQuotes(limit))
        else
          call.respond(booksRepository.getAllQuotes())
      }
      get("/books") {
        val shelf = call.parameters["shelf"]
        val books = if (shelf == null)
          booksRepository.getAllBooks()
        else
          booksRepository.getBooksFromShelf(shelf)

        logger.info("queried ${books.size} books")
        call.respond(books)
      }
      get("/goldenNugget") {
        val goldenNugget = booksRepository.getGoldenNugget()
        if (goldenNugget == null) {
          call.respond(HttpStatusCode.NotFound)
        } else {
          call.respond(goldenNugget)
        }
      }
      get("/appStats/{packageName}") {
        val packageName = call.parameters["packageName"]
        if (packageName == null)
          call.respond(HttpStatusCode.BadRequest)
        else
          call.respond(gplayApi.getAppDownloads(packageName))
      }
      get("/totalDeveloperAppsStats/{developerName}") {
        val developerName = call.parameters["developerName"]
        if (developerName == null)
          call.respond(HttpStatusCode.BadRequest)
        else
          call.respond(gplayApi.getTotalDeveloperAppsDownloads(developerName))
      }
    }
  }
}
