import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  /**
   *  constructor(private router: Router) { }

  canActivate():Observable<boolean>|Promise<boolean>|boolean{
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/choice-connexion']);
              resolve(false);
            }
          }
        );
      }
    )

  }
   * 
   */
  
  constructor(private authService:AuthService,
    private router:Router){}

canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot,
):Observable<boolean>|Promise<boolean>|boolean{
if(this.authService.isAuth){
     return true;
}else{
this.router.navigate(['/choice-connection']); 
}

}


  
}



/**
 * 
 * canActivate():Observable<boolean>|Promise<boolean>|boolean{
    return new Promise(
      (resolve,reject)=>{
        firebase.auth().onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/auth','signin']);
              resolve(false);
            }
          }
        );
      }
    )

  }
 */

