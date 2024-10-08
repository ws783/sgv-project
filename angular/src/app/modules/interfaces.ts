import {paymentTypes} from './enums'
export interface Customer {
    id: string;
    name: string;
    phone: string;
}


export interface Receipt {
    customerName: string;
    date: Date;
    amount: number;
    paymentMethod?: paymentTypes;
    details?: string;
}
export interface Expense {
    date: Date;
    amount: number;
    providerName: string;
    paymentMethod?: paymentTypes;
    details?: string;
}