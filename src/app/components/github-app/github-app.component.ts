import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss']
})
export class GithubAppComponent implements OnInit {
public githubUserQuery:string
public githubProfile:any
public githubRepos:any[];
public errorMessage:String
  constructor(private githubervice:GithubService) { }


  ngOnInit(): void {
  }
public searchUser()
{
this.githubervice.getProfile(this.githubUserQuery).subscribe(data=>{
  this.githubProfile=data
},err=>{
  this.errorMessage=err;
})

//for git repos
this.githubervice.getRepos(this.githubUserQuery).subscribe(data=>{
  this.githubRepos=data
},err=>{
  this.errorMessage=err;
})

}
}
