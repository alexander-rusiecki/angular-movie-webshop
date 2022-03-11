import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdminComponent } from './admin.component';
import { MockAdminService } from '@services/mockAdmin.service';
import { AdminService } from '@services/admin.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: AdminService, useClass: MockAdminService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get first orders customer name from MockAdminService', () => {
    expect(component.activOrders[0].createdBy).toEqual('Alex');
  });
  it('should get total amount of orders from MockAdminService', () => {
    expect(component.activOrders.length).toBe(2);
  });
});
