import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to first page designed using {{name}}!</h1>
      Learn more about Angular 
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
