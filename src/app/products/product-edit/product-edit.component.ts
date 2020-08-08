import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { GenericValidator } from '../../shared/generic-validator';
import { NumberValidators } from '../../shared/number.validator';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  pageTitle = 'Product Edit';
  errorMessage = '';
  productForm: FormGroup;


  product: Product | null;
  sub: Subscription;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string}};
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder, private productService: ProductService) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.

    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minLength: 'Product name must be at least three characters.',
        maxLength: 'Product name cannot exceed 50 characters.'
      },
      productCode: {
        required: 'Product code is required.'
      },
      starRating: {
        range: 'Rate the product between 1 (lowest) and 5 (highest).'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    // Define the form group
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1,5)],
      description: ''
    });

    // Watch for changes to the currently selected product
    //this.sub = this.productService.selectedProductChanges$.subscribe();
  }

}
