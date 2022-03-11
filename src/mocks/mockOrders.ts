import { IOrder } from '@interfaces/OrderInterface';

const mockOrder1 = {
  companyId: 40,
  created: new Date().toISOString().split('.')[0],
  createdBy: 'Alex',
  paymentMethod: 'Mastercard',
  totalPrice: 999,
  status: 1,
  orderRows: [
    {
      productId: 999,
      amount: 1001,
    },
    {
      productId: 78,
      amount: 56,
    },
  ],
};
const mockOrder2 = {
  companyId: 40,
  created: new Date().toISOString().split('.')[0],
  createdBy: 'Alexander',
  paymentMethod: 'Paypal',
  totalPrice: 1000000,
  status: 1,
  orderRows: [
    {
      productId: 42,
      amount: 222,
    },
    {
      productId: 91,
      amount: 91,
    },
  ],
};
const mockOrdersArray = [mockOrder1, mockOrder2];

export { mockOrder1, mockOrder2, mockOrdersArray };
