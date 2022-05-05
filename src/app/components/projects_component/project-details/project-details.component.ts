import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api-service.service';
import { Project } from '../../../models/project.model';
import { Subscription } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { LoadingService } from 'src/app/services/loading';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  id: number;
  sub: Subscription;
  public project = <any>[];
  loading$ = this.loader.loading$;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute, public loader: LoadingService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          /*  this.projectId = this.apiService.getProjectId(this.id); */
        }
      );

    this.sub = this.apiService.getProjectById(this.id)
      .subscribe(
        (proj: Project[]) => {
          this.project = proj;
        }
      );

  }
  /* 
    onCheckDetails() {
      this.router.navigate(['issue_details', this.id]);
    }
   */
  // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
}
