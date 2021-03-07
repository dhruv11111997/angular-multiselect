import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public countries: any;

  constructor() {
    this.countries = [
      { 
        label: "India",
        value: "IN"
      },
      {
        label: "France",
        value: "FR"
      },
      {
        label: "Germany",
        value: "GR"
      }
    ];
  }

  function(event: any) {
    console.log("-----------------", event);
  }
}
