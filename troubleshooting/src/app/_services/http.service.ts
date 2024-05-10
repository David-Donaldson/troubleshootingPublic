import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) { }

  submitContactform(requestdata: any, captchaToken: any) {
    var url = `${environment.apiUrl}/api/Troubleshooting/createIssue`;
    return this.http.post(url, requestdata, {params: {captchaToken}});
  }

  async getTroubleshootingTreeData(){
    var url = `${environment.apiUrl}/api/Troubleshooting/getServiceTypes`;
    return await lastValueFrom(
      this.http.get(url)
    );
  }

  reverseGeocode(lat: number, lng: number): Observable<any> {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleApiKey}`;
    return this.http.get(url);
  }
}
