import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationComponent } from './organisation/organisation.component';
import { OrganisationListComponent } from './organisation-list/organisation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrgaisationService } from '../shared/orgaisation.service';
import { MaterialModule } from '../material/material/material.module';



@NgModule({
  declarations: [OrganisationComponent,
                OrganisationListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
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
