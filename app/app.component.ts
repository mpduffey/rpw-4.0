import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SideMenu} from 'modules/side-menu/side-menu';
import {DataService} from 'modules/data-service/data-service';

@Component({
  selector: 'my-app',
  template: `
    <div class="row">
      <div class="col-md-2"><side-menu></side-menu></div>
      <div class="col-md-10 flex-container-column"><router-outlet></router-outlet></div>
    </div>
  `,
  directives:   [SideMenu, ROUTER_DIRECTIVES],
  providers:    [DataService]
})
export class AppComponent {
  constructor(private data: DataService) {
    this.data.getDocumentById("15:0").subscribe(x => console.log("By ID: ",x));
    this.data.queryDocumentsByClass("Article").subscribe(x => console.log("Query: ",x));
    this.data.getCountByClass("Article").subscribe(x => console.log("Count: ",x));
    this.data.getClassSchema("Article").subscribe(x => console.log("Class Schema: ",x));
    this.data.getClassProperties("Article").subscribe(x => console.log("Properties: ",x));
    this.data.getClassPropertyNames("Article").subscribe(x => console.log("Property Names: ",x));
    this.data.getAllClasses().subscribe(x => console.log("All Classes: ",x));
  }
}