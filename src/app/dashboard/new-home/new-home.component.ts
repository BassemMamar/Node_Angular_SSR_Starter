import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../core/base/logger/logger.service';
import { DashboardService } from '../dashboard.service';
import { IPost } from '../models/posts';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  posts: IPost[];
  constructor(
    private logger: LoggerService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.dashboardService.getPosts().subscribe(x => this.posts = x);
  }

  onClickMe() {
    this.logger.log('tests');
  }
}
