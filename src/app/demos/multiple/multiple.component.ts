import { Component, OnInit } from "@angular/core";
import { Select2OptionData } from "ngSelect2";
import { Options } from "select2";

@Component({
  selector: "app-multiple",
  templateUrl: "./multiple.component.html",
  styleUrls: ["./multiple.component.css"]
})
export class MultipleComponent implements OnInit {
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
}
