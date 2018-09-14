import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertService } from '../../../../shared/components/alert/alert.service';
import { LoggerService } from '../../../../core/base/logger/logger.service';
import { AccessLevel } from '../../../../core/auth/model/user-roles.enum';
import { BlockUITemplateComponent } from '../../../../shared/components/block-ui/block-ui-template.component';

declare let DatatableDataLocalDemo: any;
@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterViewInit {

  accessLevel: AccessLevel;
  blockTemplate = BlockUITemplateComponent;

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService,
    private logger: LoggerService) { }

  ngOnInit() {

    this.accessLevel = <AccessLevel>this.route.snapshot.data['accessLevel'];
    this.logger.info(`accessLevel ${this.accessLevel}`);
  }

  ngAfterViewInit() {

  }
}
