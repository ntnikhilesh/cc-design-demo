import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.homecomponent.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
}
export class ListSectionsExample {
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
