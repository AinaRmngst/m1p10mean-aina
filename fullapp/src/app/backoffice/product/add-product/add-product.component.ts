import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  enteredValue = '';
  newPost = '';

  onAddPost() {
    alert('Post Added!');
    this.newPost = this.enteredValue;
  }
}
