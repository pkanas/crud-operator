import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Organisation } from 'src/app/model/organisation.model';
import { OrgaisationService } from 'src/app/shared/orgaisation.service';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.css']
})
export class OrganisationComponent implements OnInit {
  AllOrganisation: Organisation[];
  organisationForm: FormGroup;
  constructor(private organisationService: OrgaisationService) { }

  ngOnInit() {
    this.organisationForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    })
  }

  createAndUpdate(currentOrganisation: Organisation) {
    console.log(currentOrganisation)
    if (currentOrganisation.id != null) {
      console.log('update');
      this.updateOrganisation(currentOrganisation)
    } else {
      console.log('create')
      this.createOrganistion(currentOrganisation)
    }
  }

  createOrganistion(organisation: Organisation) {
    this.organisationService.createOrganisation(organisation).subscribe(data=>{
		this.organisationService.getAllOrganisation().subscribe(
			(data: Organisation[]) => {
			  this.organisationService.globalOrganisationList = data;
			}
		  )
	});
  }

  updateOrganisation(organisation: Organisation) {
    this.organisationService.updateOrganisation(organisation).subscribe(data=>{
      this.organisationService.getAllOrganisation().subscribe(
        (data: Organisation[]) => {
          this.organisationService.globalOrganisationList = data;
        }
        )
    });
  }

}
