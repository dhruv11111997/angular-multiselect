import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-multi-select",
  templateUrl: "./multi-select.component.html",
  styleUrls: ["./multi-select.component.css"]
})
export class MultiSelectComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() filter = false;
  @Input() filterBy: any;
  @Output() onChange = new EventEmitter<any>();
  public countries: any[] = [];
  public hideDropDown = true;
  public filteredData: any = [];
  public searchKeyword = "";
  public selectedValues: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.filterBy = this.filterBy.split(",");
    console.log("filter------", this.filterBy);
  }
  popup() {}

  onKeyPress(data: any) {
    if (this.filter) {
      this.filteredData = [];
      this.searchKeyword = data.value;
      this.filterBy.filter(res => {
        const temp = this.options.filter(item => {
          return (
            item[res]
              .toLowerCase()
              .indexOf(this.searchKeyword.toLowerCase()) !== -1
          );
        });
        if (temp.length !== 0) {
          this.filteredData = Array.from(temp);
        }
      });
    }
  }

  selected(event: any, index: number) {
    if (this.selectedValues.indexOf(event.srcElement.defaultValue) === -1) {
      this.selectedValues.push(event.srcElement.defaultValue);
    } else {
      var index = this.selectedValues.indexOf(event.srcElement.defaultValue);
      this.selectedValues.splice(index, 1);
    }
    this.onChange.emit(this.selectedValues);
  }
}
