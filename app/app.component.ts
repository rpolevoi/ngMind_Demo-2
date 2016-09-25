import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>This is {{name}}'s root component</h1>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
    name = "Rob";
}
