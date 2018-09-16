import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandlingService } from '../core/services/http-error-handling/http-error-handling.service';
import { LoggerService } from '../core/base/logger/logger.service';
import { IPost } from './models/posts';

@Injectable()
export class DashboardService {
  private apiBase = 'https://jsonplaceholder.typicode.com/';
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private httpErrorHandlingService: HttpErrorHandlingService
  ) {}

  getPosts() {
    return this.http
      .get<IPost[]>(this.apiBase + 'posts')
      .pipe(
        catchError(error =>
          this.httpErrorHandlingService.handleAsObservable(error)
        )
      );
  }

  getHeros() {
    return this.http
      .get('api/heroes')
      .pipe(
        catchError(error =>
          this.httpErrorHandlingService.handleAsObservable(error)
        )
      );
  }
}
