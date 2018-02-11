import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../model/project';
import { MainComponentService } from '../main/main-component.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  Http, Response, RequestOptions,
  Headers, URLSearchParams
} from '@angular/http';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  public goalComplited: boolean;
  project: Project;
  private id: number;
  private amount: number;
  private rised: number;



  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.goalComplited = false;
  }

  ngOnInit() {
    this.loadData();
  }

  reset() {
    this.amount = 0;

  }
  loadData() {
    this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.http.get(`api/projects/${this.id}`).subscribe(
        (res: any) => {

          this.project = res;
          this.project.percentage = this.project.raised / this.project.goal * 100;
          this.rised = this.project.raised;
          if (this.rised >= this.project.goal) {
            this.goalComplited = true;
          }
        }
      )
    })
  }

  updateRaised() {
    this.project.raised += this.amount;
    this.route.params.subscribe(param => {
      this.id = +param['id'];
      this.http.put(`api/projects/${this.id}`, this.project).subscribe(
        (res: any) => {
          this.loadData();
        }
      )
    })
  }


}
