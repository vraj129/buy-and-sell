import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
})
export class ContentPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing?: Listing;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => {
      return listing.id === id;
    });
    this.message = `Hi, I'm interested in your ${this.listing?.name.toLowerCase()}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent');
    this.router.navigateByUrl('/listings');
  }
}
