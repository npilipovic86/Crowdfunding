import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication-service.service';
import { Project } from '../model/project';
import { MainComponentService } from '../main/main-component.service';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  projects: Array<Project>;

  constructor(private projectService: MainComponentService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  isAdmin(): boolean {
    return this.authenticationService.isAdmin();
  }
}



