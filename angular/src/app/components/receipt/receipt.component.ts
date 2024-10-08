
import { Component } from '@angular/core';
import { DataService } from '../../data-services/data-services.service'
import { FormGroup, FormControl, Validators,ValidationErrors ,ReactiveFormsModule} from '@angular/forms';

import { Receipt,Customer } from '../../modules/interfaces';
import { paymentTypes } from '../../modules/enums';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-receipt',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl:'./receipt.component.html',
  styleUrl:'./receipt.component.scss'
})
export class ReceiptComponent {
  myForm: FormGroup;
  allcustomers= new Array<Customer>();

  constructor(private dataService:DataService) {
    this.myForm = new FormGroup({
      customerName: new FormControl('', [Validators.required  ,Validators.pattern('[A-Za-zא-ת .]*')]),
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      // paymentMethod: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),

    })
  }

  save() {
    
    if (this.myForm.valid) {
      const { controls } = this.myForm
      
      let receipt: Receipt = {
        customerName:controls['customername'].value,
        date: controls['date'].value,
        amount: controls['amount'].value,
        details: controls['details'].value
        // paymentMethod:controls['paymentMethod'].value
 
      }
      
  //     // change
  this.dataService.addreceipt(receipt).subscribe(data=>{
    console.log({data});
    this.myForm.reset()
  })
      
    }
  }
getall(){
    this.dataService.getAllcustomers().subscribe(data=>{
      this.allcustomers=data
  
    })
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
