import { Component, OnInit } from '@angular/core';
import { Organisation } from 'src/app/model/organisation.model';
import { OrgaisationService } from 'src/app/shared/orgaisation.service';

@Component({
  selector: 'app-organisation-list',
  templateUrl: './organisation-list.component.html',
  styleUrls: ['./organisation-list.component.css']
})
export class OrganisationListComponent implements OnInit {

  AllOrganisation: Organisation[];
  constructor(private organisationService:OrgaisationService) { }

  ngOnInit() {
    this.getAllOrganisation();
  }

  getAllOrganisation() {
    this.organisationService.getAllOrganisation().subscribe(
      (data: Organisation[]) => {
        // this.AllOrganisation = data;
        this.organisationService.globalOrganisationList = data;
      }
    )
  }

  deleteOrganisation(id: number) {
    console.log(id)
    this.organisationService.deleteOrganisation(id).subscribe(
      (data:Organisation) => {
        this.getAllOrganisation()
      }
    )
  }

  editOrganisation(organisation) {
    this.organisationService.currentOrganisation = Object.assign({}, organisation)
    this.getAllOrganisation();
  }

}
