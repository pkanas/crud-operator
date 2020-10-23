import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Organisation } from '../model/organisation.model';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZlNTMyZmQzMjU5Zjk2M2E2NDU4NjQ3MzA3ZWY0Yjg5OTE4YTkzYjc3ZjA0ZjNjYTM5Mzk0YjBiYmNlOWIwYmU2MTVhZThhNmRkYjhjNDFhIn0.eyJhdWQiOiIxIiwianRpIjoiZmU1MzJmZDMyNTlmOTYzYTY0NTg2NDczMDdlZjRiODk5MThhOTNiNzdmMDRmM2NhMzkzOTRiMGJiY2U5YjBiZTYxNWFlOGE2ZGRiOGM0MWEiLCJpYXQiOjE2MDM0NDU1NzUsIm5iZiI6MTYwMzQ0NTU3NSwiZXhwIjoxNjM0OTgxNTc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.ccAt1QxELTXyET7C3d0FNwV6igXkd0d31zg3fcqnGQKOshnmfG89BYWnR0RapPNVt8ku2S1Q7gmPgogIryQDd4JBXy5SiIRBV3btofVsol1ZTlwM76Tl-IHS9PX_3jKTCl7-Fo3v0ck_2wH7uSbuhMV0LQF6ho3pUutSVdlBWgOikBwKvFOPmOGqQZWgnCaZ3F92ViVDXpHV_3QOtE0RWwjLOpBHH1IbypJb8tAIBta-bvBay5nZsG_fQzbgoQTm1kU6IrHruazJEsK1CIvY8mxYMxjgftYq6FyS2rx1K9oZByZ6qiHEhwHCVWOW6D1LVvG5G8YjLscLA6_hNkyKJ2rIGfhO9hOKr_cJc5OmnFrY33vULp7qmQyGBwHuu3IDMf6K2qxKu2HMcsAmXjr8n-fgE3U97ED6-dZiYqAVkcBqc8Wlph5EclRl81e_LKp-FN8omfoL1T1kqkIW8lNkDbEMswXEQ55R7vlBI-CkyYS6lb3bE4AXFqk0dJa8UMC8GLjTThC3HZ-eVoC_7XAqZ6m5_NlXHbER00dQrvovhBAyEbySxljEo4l63DIvneyFcXzfoWt2x6pyrCRORnn3_kkjlxsP7Dfqz8nVGHOW0e8SdxOVgnVeAFyfaPbJdeCuKPYLAp53u2ME5kUwreAaQRqyACY4YTWKvo6P4DXbSmc' })
}  




@Injectable({
  providedIn: 'root'
})
export class OrgaisationService {

  mockUrl = 'https://v2-dev-api.isorobot.io/api/v1/organization-policies'

  currentOrganisation:Organisation = {
    id:null,
    title:'',
    description:''
  }
  
  constructor(private http:HttpClient) { }

  getAllOrganisation():Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.mockUrl, headerOption)
  }

  deleteOrganisation(id: number): Observable<Organisation> {
    return this.http.delete<Organisation>(this.mockUrl + '/' + id, headerOption);
  }

  createOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.post<Organisation> (this.mockUrl, organisation, headerOption);
  }

  updateOrganisation(organisation: Organisation): Observable<Organisation> {
    return this.http.put<Organisation> (this.mockUrl + '/' + organisation.id, organisation, headerOption);
  }
}
