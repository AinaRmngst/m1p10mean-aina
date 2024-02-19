import { Component } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  displayedColumns: string[] = ['position', 'name', 'price'];
  dataSource = new MatTableDataSource(PRODUCT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Product {
  name: string;
  position: number;
  price: number;
}

const PRODUCT_DATA: Product[] = [
  /*{position: 1, name: 'Hydrogen', price: 1.0079},
  {position: 2, name: 'Helium', price: 4.0026},
  {position: 3, name: 'Lithium', price: 6.941},
  {position: 4, name: 'Beryllium', price: 9.0122},
  {position: 5, name: 'Boron', price: 10.811},
  {position: 6, name: 'Carbon', price: 12.0107},
  {position: 7, name: 'Nitrogen', price: 14.0067},
  {position: 8, name: 'Oxygen', price: 15.9994},
  {position: 9, name: 'Fluorine', price: 18.9984},
  {position: 10, name: 'Neon', price: 20.1797},*/   
];