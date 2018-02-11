import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from '../model/project';
import { AuthenticationService } from './authentication-service.service';

@Injectable()
export class ProjectService {

  readonly path = "api/projects";

  constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

  saveProject(project: Project): Observable<any> {
    return this.httpClient.post(this.path, project);
  }

  delete(project: Project) {
    return this.httpClient.delete(this.path + '/' + project.id)

  }


}
