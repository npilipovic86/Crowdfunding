import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { MainComponent } from './main.component';

import { Project } from '../model/project';
import { Observable } from 'rxjs';


@Injectable()
export class MainComponentService {

  readonly path = 'api/projects';

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get(this.path) as Observable<Project[]>;
  }

  getProject(id: number): Observable<Project> {
    return this.httpClient.get(this.path) as Observable<Project>;
  }

  deleteProject(p: Project) {
    return this.httpClient.delete(this.path + '/' + p.id);
  }

}
