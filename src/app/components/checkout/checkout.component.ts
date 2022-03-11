import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '@services/order.service';
import { LocalStorageService } from '@services/local-storage.service';
import { SharedService } from '@services/shared.service';

import { Order } from '@models/Order';
import { OrderRow } from '@models/OrderRow';
import { IMovie } from '@interfaces/MovieInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  boughtMovies: IMovie[] = [];
  totalPrice: number = 0;
  order!: Order;
  orderRow: OrderRow[] = [];
  amount: number = 0;
  orderForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    payment: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private localStorageService: LocalStorageService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.boughtMovies = this.localStorageService.get('boughtMovies');
    this.sharedService.totalPrice$.subscribe((total) => {
      this.totalPrice = total;
    });
    this.sharedService.getTotalPrice();
  }

  handleSubmit() {
    for (let i = 0; i < this.boughtMovies.length; i++) {
      if (
        !this.orderRow.some(
          (movie) => movie.productId === this.boughtMovies[i].id
        )
      ) {
        this.orderRow.push({
          productId: this.boughtMovies[i].id,
          amount: this.amount + 1,
        });
      } else {
        for (let j = 0; j < this.orderRow.length; j++) {
          if (this.orderRow[j].productId === this.boughtMovies[i].id) {
            this.orderRow[j].amount++;
          }
        }
      }
    }
    this.order = new Order(
      new Date().toISOString().split('.')[0],
      this.orderForm.value.name,
      this.orderForm.value.payment,
      this.totalPrice,
      this.orderRow
    );
    this.localStorageService.removeItem('boughtMovies');
    this.boughtMovies = [];
    this.orderForm.reset();

    this.orderService.order$.subscribe((placedOrder: Order) => {
      this.order = placedOrder;
    });

    this.orderService.createOrder(this.order);
    this.router.navigate(['/']);
  }
}
