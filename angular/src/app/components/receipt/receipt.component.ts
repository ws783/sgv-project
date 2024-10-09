
import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
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
  newcustomer=false
  paymentTypesArray: string[] = Object.values(paymentTypes);
  constructor(private dataService:DataService ,private cdr: ChangeDetectorRef) {
    this.myForm = new FormGroup({
      customername: new FormControl('', [Validators.required ]),
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      paymentMethod: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.pattern('[A-Za-zא-ת .]*')]),
      newcustomername: new FormControl('',[Validators.pattern('[A-Za-zא-ת .]*')]),
      newcustomerphone:new FormControl()
    })
  }

  save() {
    
    if (this.myForm.valid) {
      const { controls } = this.myForm
      
      let receipt: Receipt = {
        customerName:controls['customername'].value,
        date: controls['date'].value,
        amount: controls['amount'].value,
        details: controls['details'].value,
        paymentMethod:controls['paymentMethod'].value
 
      }
      
  //     // change
  this.dataService.addreceipt(receipt).subscribe((response)=>{
    console.log('Receipt added successfully',response);
  },
  (error)=>{
    console.log('Error adding receipt:',error);
  }
  )
      
    }
  }
  ngOnInit() {
   this.getall()
    this.cdr.detectChanges();
  }

getall(){
  
    this.dataService.getAllcustomers().subscribe(data=>{
    this.allcustomers=data
    })
}
addcustomer() {
  const { controls } = this.myForm;
  let customer: Customer = {
      name: controls['newcustomername'].value,
      phone: controls['newcustomerphone'].value 
  };

  this.dataService.addcustomer(customer).subscribe((response) => {
      console.log('customer added successfully', response);

    this.getall()
    this.cdr.detectChanges()

  }, (error) => {
      console.log('Error adding customer:', error);
  });
}
getControlErrors(controlName: string): ValidationErrors | null {
  return this.myForm.controls[controlName].errors

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
 
  // getFormErrors() {
  //   return JSON.stringify(this.myForm.errors)
  // }

