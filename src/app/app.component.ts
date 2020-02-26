import { Component } from "@angular/core";
import { Select2OptionData } from "ngSelect2";
import { Options } from "select2";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public productData: Array<Select2OptionData>;
  public options: Options;
  public value: string[];

  ngOnInit() {
    this.productData = [
      {
        id: "Product1",
        text: "Product 1"
      },
      {
        id: "product2",
        text: "Product 2"
      },
      {
        id: "product3",
        text: "Product 3"
      },
      {
        id: "product4",
        text: "Product 4"
      }
    ];

    this.value = [];

    this.options = {
      width: "300",
      multiple: true,
      tags: true
    };
  }
  form_data = {
    orgName: "",
    orgType: "",
    orgStatus: "",
    domain: "",
    adminName: "",
    adminEmail: "",
    gilbarcoProducts: [],
    fuelProducts: "",
    pressure: "",
    time: "",
    temperature: "",
    volume: "",
    length: "",
    country: "",
    state: "",
    address: "",
    postalCode: "",
    city: "",
    phoneNumber: ""
  };

  step_form = [
    {
      title: "Enter basic information about the organization",
      data: {
        orgName: this.form_data.orgName,
        orgType: this.form_data.orgType,
        orgStatus: this.form_data.orgStatus,
        domain: this.form_data.domain
      }
    },
    {
      title: "Create new admin user for oraganization",
      data: {
        adminName: this.form_data.adminName,
        adminEmail: this.form_data.adminEmail
      }
    },
    {
      title: "Assign Gilbraco products to organization",
      data: {
        gilbarcoProducts: this.value
      }
    },
    {
      title: "Assign fuel products to organization",
      data: {
        fuelProducts: this.form_data.fuelProducts
      }
    },
    {
      title: "Set unit of measures for the oraganization ",
      data: {
        pressure: this.form_data.pressure,
        time: this.form_data.time,
        temperature: this.form_data.temperature,
        volume: this.form_data.volume,
        length: this.form_data.length
      }
    },
    {
      title: "Set address information for the oraganization ",
      data: {
        country: this.form_data.country,
        state: this.form_data.state,
        address: this.form_data.address,
        postalCode: this.form_data.postalCode,
        city: this.form_data.city,
        phoneNumber: this.form_data.phoneNumber
      }
    }
  ];

  start_step = 1;

  setFormData(form_data) {
    this.form_data = {
      ...this.form_data,
      ...form_data
    };
    console.log("next", this.form_data);
  }
  finishAction() {
    console.log(this.form_data);
  }
}
