import { IOrder } from '@interfaces/OrderInterface';

const mockOrder1: IOrder = {
  id: 1,
  companyId: 40,
  created: new Date().toISOString().split('.')[0],
  createdBy: 'Alex',
  paymentMethod: 'Mastercard',
  totalPrice: 999,
  status: 1,
  orderRows: [
    {
      id: 123,
      productId: 999,
      product: 'test',
      amount: 1001,
      orderId: 321,
    },
    {
      id: 4355,
      productId: 12,
      product: 'testing',
      amount: 2,
      orderId: 90,
    },
  ],
};
const mockOrder2: IOrder = {
  id: 2,
  companyId: 40,
  created: new Date().toISOString().split('.')[0],
  createdBy: 'Alexander',
  paymentMethod: 'Paypal',
  totalPrice: 100,
  status: 1,
  orderRows: [
    {
      id: 445,
      productId: 12,
      product: 'testing again',
      amount: 34,
      orderId: 23,
    },
    {
      id: 77,
      productId: 1,
      product: 'testing once again',
      amount: 20,
      orderId: 23,
    },
  ],
};

const mockOrdersArray = [mockOrder1, mockOrder2];

export { mockOrder1, mockOrder2, mockOrdersArray };
