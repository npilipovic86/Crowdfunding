import { Component, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../service/project.service';
import { AuthenticationService } from '../service/authentication-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers, Http } from '@angular/http';
import { toArray } from 'rxjs/operator/toArray';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  imagePath: string;
  file: File;
  project: Project;
  categories: any;
  constructor(private projectService: ProjectService, private router: Router, private http: Http) { }

  ngOnInit() {
    this.resetProjectToAdd();
    this.categories = [
      { name: "Art", value: "ART" },
      { name: "Comics", value: "COMICS" },
      { name: "Design", value: "DESIGN" },
      { name: "Fashion", value: "FASHION" },
      { name: "Food", value: "FOOD" },
      { name: "Games", value: "GAMES" },
      { name: "Music", value: "MUSIC" },
      { name: "Techonology", value: "TECHNOLOGY" }];
  }

  setFile(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }
  addProject() {
    this.uploadImage(this.file).subscribe(
      imagePath => {
        this.project.image = imagePath.text();
        this.projectService.saveProject(this.project).subscribe(
          data => {
            this.resetProjectToAdd();
            this.router.navigate(['/main']);
          },
          err => console.error(err)
        );
      },
      error => {
        console.error(error);
      });
  }
  private uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('http://localhost:8080/upload', formData);
  }

  resetProjectToAdd() {
    this.project = {
      name: '',
      category: '',
      image: '',
      goal: 0,
      raised: 0,
      about: '',
      createDateTime: null

    }
  }

}