import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IOrder } from '@interfaces/order';
import { AdminService } from '@services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  activOrders: IOrder[] = [];

  constructor(private adminService: AdminService, private http: HttpClient) {}

  ngOnInit(): void {
    this.adminService.orders$.subscribe((webshopOrders: IOrder[]) => {
      this.activOrders = webshopOrders;
    });
    this.adminService.getActiveOrders();
  }
  deleteOrder(id: number): void {
    this.adminService.deleteOrder(id);
  }
}
