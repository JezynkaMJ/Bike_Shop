import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bs-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  bikeType: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bikeType = this.route.snapshot.paramMap.get('type');
  }

}
