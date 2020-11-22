import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html'
})
export class StarterTemplateFormComponent implements OnInit {
    customer: any;
    message: string;

    constructor() { }

    ngOnInit() {
        this.customer = {
            firstName: 'Fred Template',
            lastName: 'Doe',
            address: '123 Main',
            city: 'Calgary',
            province: 'Alberta',
            country: 'Canada',
            postalCode: 'A1A 1A1',
            phoneNumber: '111-222-3333',
            email: 'jdoe@email.com'
        };
    }

    onSubmit() {
        this.message = 'You typed: '
            + 'First Name: ' + this.customer.firstName
            + 'Last Name: ' + this.customer.lastName
            + 'Address: ' + this.customer.address
            + 'City: ' + this.customer.city
            + 'Province: ' + this.customer.province
            + 'Country: ' + this.customer.country
            + 'Postal Code: ' + this.customer.postalCode
            + 'Phone Number: ' + this.customer.phoneNumber
            + 'E-mail: ' + this.customer.email;
    }

}