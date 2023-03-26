import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() submitted = new EventEmitter<boolean>();
  @Output() formValues = new EventEmitter<object>();

  hide = true;

  myForm:FormGroup = this.fb.group({
    'email':["email@email.com", [Validators.email, Validators.required]],
    'password':['s', [Validators.required]],
    'nome':["s", [Validators.required]],
    'cognome':["s", [Validators.required]],
    'sesso':['n']
  });

  constructor(private fb: FormBuilder){

  }

  onSubmit(){
    if(this.myForm.valid){

      this.formValues.emit(this.myForm.value)

      this.submitted.emit(true);
      console.log("in submit")
    }
  }
}
