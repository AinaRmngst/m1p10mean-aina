import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  /*products=[
    {title: "First Post", content :"This is the fucking content "+"this is the suplement content"},
    {title: "Second Post", content :"This is the fucking content"},
    {title: "Third Post", content :"This is the fucking content"}
  ]*/
  products = [];
}
