import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseAPI: string='';
  ParseHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { 
    this.baseAPI = ENV.ATOMIC_API;
  }

  getBaseUrl(){
    return ENV.ATOMIC_API;
  }

  getCollections(){

    let sendingData = 'page=1&limit=10&order=desc&sort=created&collection_whitelist=yoshidrops%2Cofficial.wax%2Cpostfuture%2Cbigboy.funko%2Csaw%2Cmlb.topps%2Ctmnt.funko'
    let url = this.getBaseUrl()+'/atomicassets/v1/collections?'+sendingData;
    return this.http.get(url,this.ParseHeaders);
  }
}
