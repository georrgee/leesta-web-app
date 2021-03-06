import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputReference: ElementRef; // nameInput is a local reference
  @ViewChild('amountInput', {static: false}) amountInputReference: ElementRef; // amountInput is a local reference 

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingredientName = this.nameInputReference.nativeElement.value;
    const ingredientAmount = this.amountInputReference.nativeElement.value;

    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
