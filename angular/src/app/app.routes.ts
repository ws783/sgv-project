import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'expense', component: ExpenseComponent },
    { path: 'receipt', component: ReceiptComponent },


];
