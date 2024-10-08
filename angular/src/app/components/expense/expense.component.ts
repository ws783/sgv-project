
import { Component } from '@angular/core';
import { DataService } from '../../data-services/data-services.service'
import { FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Expense } from '../../modules/interfaces';
import { paymentTypes } from '../../modules/enums';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,ExpenseComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {
  
  myForm: FormGroup;

  constructor(private dataService:DataService) {
    this.myForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      providerName: new FormControl('', [Validators.required  ,Validators.pattern('[A-Za-zא-ת .]*')]),
      // paymentMethod: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),

    })
  }

  save() {
    
    if (this.myForm.valid) {
      const { controls } = this.myForm

      let expense: Expense = {
        date: controls['date'].value,
        amount: controls['amount'].value,
        providerName: controls['providerName'].value,
        details: controls['details'].value
        // paymentMethod:controls['paymentMethod'].value
 
      }
      
  //     // change
  this.dataService.addexpense(expense).subscribe((response)=>{
        console.log('Receipt added successfully',response);
      },
      (error)=>{
        console.log('Error adding receipt:',error);
      }
      )
  
      
    }
  }
  // getStertDateErrorString() {

  //   const error = this.myForm.controls['startDate'].errors?.['date']
  //   if (error) {
  //     const message = `the selected date must be ${error.after ? 'after' : 'before'} ${new Date(error.date).toLocaleDateString()}`
  //     return message
  //   }
  //   return undefined


  // }
  // getControlErrorsString(controlName: string) {
  //   return JSON.stringify(this.myForm.controls[controlName].errors)
  // }
  getControlErrors(controlName: string): ValidationErrors | null {
    return this.myForm.controls[controlName].errors

  }
  // getFormErrors() {
  //   return JSON.stringify(this.myForm.errors)
  // }

}



