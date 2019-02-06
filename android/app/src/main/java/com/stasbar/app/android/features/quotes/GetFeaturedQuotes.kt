package com.stasbar.app.android.features.quotes

import com.stasbar.app.android.features.BackendService
import com.stasbar.app.models.Quote
import com.stasbar.core.exception.Failure
import com.stasbar.core.functional.Either
import com.stasbar.core.interactor.UseCase

class GetFeaturedQuotes(private val backendService: BackendService) : UseCase<UseCase.None, List<Quote>>() {
  override suspend fun run(params: None): Either<List<Quote>, Failure> {
    val quotes = try {
      backendService.getFeaturedQuotes().execute().body()!!
    } catch (e: Exception) {
      return Either.Failure(Failure.ServerError)
    }
    return Either.Success(quotes)
  }

}
