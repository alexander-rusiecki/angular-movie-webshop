import { OrderService } from '@services/order.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '@interfaces/movie';
import { LocalStorageService } from '@services/local-storage.service';
import { Order } from '@models/order';
import { OrderRow } from '@models/order-row';
import { IOrder } from '@interfaces/order';
import { IOrderRow } from '@interfaces/order-row';

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
    name: [''],
    payment: [''],
  });

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.boughtMovies = this.localStorageService.get('boughtMovies');
    this.totalPrice = this.boughtMovies.reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
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
    this.localStorageService.clear('boughtMovies');
    this.boughtMovies = [];
    this.orderForm.reset();

    this.orderService.order$.subscribe((placedOrder: any) => {
      this.order = placedOrder;
    });

    this.orderService.createOrder(this.order);
  }
}