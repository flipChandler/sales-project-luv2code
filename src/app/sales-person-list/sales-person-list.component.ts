import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kuwar', 'anup.kumar@luv2code.com', 50000 ),
    new SalesPerson('John', 'Doe', 'john.doe@luv2code.com', 40000 ),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@luv2code.com', 90000 ),
    new SalesPerson('Tyler', 'Durden', 'tyler.durden@luv2code.com', 60000 ),
    new SalesPerson('Jack', 'Sparrow', 'jack.sparrow@luv2code.com', 110000 ),
    new SalesPerson('Harley', 'Quinn', 'harlley.quinn@luv2code.com', 410000 ),
    new SalesPerson('Margot', 'Robbie', 'margot.robbie@luv2code.com', 290000 ),
    new SalesPerson('Eva', 'Mendes', 'eva.mendes@luv2code.com', 30000 ),
    new SalesPerson('Julia', 'Roberts', 'julia.roberts@luv2code.com',230000 ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
