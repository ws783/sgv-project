
export interface Customer {
    id: string;
    name: string;
    phone: string;
}


export interface Receipt {
    customerName: string;
    date: Date;
    amount: number;
    paymentMethod: string;
    details: string;
}
export interface Expense {
    date: Date;
    amount: number;
    providerName: string;
    paymentMethod: string;
    details: string;
}