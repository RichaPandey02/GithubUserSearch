import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }
//for profile
//https://api.github.com/search/users?q=${this.username}&client_id=&{this.CLIENT_ID}&client_secret=${this.CLIENT_SECRET}
//

public getProfiles(searchQuery:string):Observable<any[]>{
  let dataURL = `https://api.github.com/search/users?q=${searchQuery}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
return this.http.get<any[]>(dataURL).pipe(
  retry(1),
  catchError(this.handleErrors)
);

}

public getProfile(searchQuery:string):Observable<any>{
  let dataURL = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
return this.http.get<any>(dataURL).pipe(
  retry(1),
  catchError(this.handleErrors)
);

}

//for repos
public getRepos(searchQuery:string):Observable<any[]>{
  let dataURL = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
return this.http.get<any[]>(dataURL).pipe(
  retry(1),
  catchError(this.handleErrors)
);

}



public handleErrors(error:HttpErrorResponse){
  let errorMsg:string="";
  if(error.error instanceof ErrorEvent){
    errorMsg = `MESSAGE: ${error.error.message}`
  }
  else{
    //servr side error
    errorMsg = `STATUS: ${error.status}MESSAGE  :  ${error.message}`
  }
  return throwError(errorMsg)
}


}
