import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  VName = '';
  VPrice = '';
  VDesc = '';
  @Output() productCreated = new EventEmitter();

  onAddPost() {
    alert('Post Added!');
    const product = {
      title: this.VName,
      content: this.VDesc + this.VPrice,
    };
    this.productCreated.emit(product);
  }
}
