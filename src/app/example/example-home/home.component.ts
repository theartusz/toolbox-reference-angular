import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExampleService } from '../example-core/services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./shared/home.component.scss'],
})
export class HomeComponent implements OnInit {
  catName$: Observable<string>;

  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    this.catName$ = this.exampleService.getRandomCatName();
  }

  generateCatName() {
    this.catName$ = this.exampleService.getRandomCatName();
  }
}
