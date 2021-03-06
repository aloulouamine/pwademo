import { Component } from '@angular/core';
import { PersonsService } from "./persons.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  persons: any;
  constructor(
    personsService: PersonsService
  ) {
    personsService
      .getPersons()
      .subscribe(persons => {
        this.persons = persons;
      });
  }


}
