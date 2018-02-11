import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../model/project';
import { AuthenticationService } from '../service/authentication-service.service';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../service/project.service';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { MainComponentService } from '../main/main-component.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {



  @Input("data")
  project: Project;

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient, private projectService: ProjectService) { }

  ngOnInit() {

  }
  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }
  delete(project: Project) {
    this.projectService.delete(project).subscribe(() => { this.loadData() })
  }
  loadData() {

  }
}