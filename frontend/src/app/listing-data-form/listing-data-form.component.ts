import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css'],
})
export class ListingDataFormComponent implements OnInit {
  @Input()
  buttonText!: string;
  @Input()
  currentName: string = '';
  @Input()
  currentDescription: string = '';
  @Input()
  currentPrice: string = '';

  name: string = '';
  description: string = '';
  price: string = '';

  @Output()
  onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  onButtonClicked(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.onSubmit.emit({
      id: id!,
      description: this.description,
      name: this.name,
      price: Number(this.price),
    });
  }
}
