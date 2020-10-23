import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationComponent } from './organisation/organisation.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrgaisationService } from '../shared/orgaisation.service';



@NgModule({
  declarations: [OrganisationComponent,
                OrganisationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    OrganisationComponent,
    OrganisationListComponent
  ],
  providers: [
    OrgaisationService
  ]
})
export class OrganisationsModule { }
