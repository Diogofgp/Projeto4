import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/projects_component/project-list/project-list.component';

//graph imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//sidebar

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphsComponent } from './components/graphs/graphs.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectsComponent } from './components/projects_component/projects.component';
import { ProjectDetailsComponent } from './components/projects_component/project-details/project-details.component';
import { ProjectItemComponent } from './components/projects_component/project-item/project-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NetworkInterceptor } from './services/network-interceptor';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IssuesComponent } from './components/issues/issues.component';
import { IssuesListComponent } from './components/issues/issues-list/issues-list.component';
import { IssueItemComponent } from './components/issues/issue-item/issue-item.component';
import { IssueDetailsComponent } from './components/issues/issue-details/issue-details.component';
import { MilestonesListComponent } from './components/milestones/milestones-list/milestones-list.component';
import { MilestonesItemComponent } from './components/milestones/milestones-item/milestones-item.component';
import { MilestonesDetailsComponent } from './components/milestones/milestones-details/milestones-details.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    HomeComponent,
    UsersComponent,
    GraphsComponent,
    ProjectsComponent,
    ProjectItemComponent,
    MilestonesComponent,
    IssuesComponent,
    IssuesListComponent,
    IssueItemComponent,
    IssueDetailsComponent,
    MilestonesListComponent,
    MilestonesItemComponent,
    MilestonesDetailsComponent,
    UsersListComponent,
    UserItemComponent,
    UserDetailsComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    //graphs
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    //router
    AppRoutingModule,
    MatMenuModule,
    LayoutModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatTableModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: NetworkInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
