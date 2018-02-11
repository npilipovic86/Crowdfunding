import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AuthenticationService } from './service/authentication-service.service';
import { CanActivateAuthGuard } from './service/can-activate-auth.guard';
import { ProjectService } from './service/project.service';
import { JwtUtilsService } from './service/jwt-utils.service';
import { ProjectComponent } from './project/project.component';
import { MainComponentService } from './main/main-component.service';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectPreviewComponent } from './project-preview/project-preview.component';
import { ChatItemComponent } from './chat-item/chat-item.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: 'project/:id', component: ProjectPreviewComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'addProject', component: AddProjectComponent, canActivate: [CanActivateAuthGuard] },
  { path: 'upload', component: AddProjectComponent, canActivate: [CanActivateAuthGuard] },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,


    ProjectComponent,
    AddProjectComponent,
    ProjectPreviewComponent,
    ChatItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false
      }
    )
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthenticationService,
    CanActivateAuthGuard,
    JwtUtilsService,
    MainComponentService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
