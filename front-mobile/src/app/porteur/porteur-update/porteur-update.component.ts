import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-porteur-update',
  templateUrl: './porteur-update.component.html',
  styleUrls: ['./porteur-update.component.css']
})
export class PorteurUpdateComponent {

    form!: FormGroup;
  
    constructor(private fb1: FormBuilder) {}
  
    ngOnInit(): void {
      this.form = this.fb1.group({
        personal: this.fb1.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          adresse: ['', Validators.required],
        }),
        medical: this.fb1.group({
          maladie: [''],
          zonesecurite: ['', Validators.required],
          rythmeCardMin: ['', Validators.required],
          rythmeCardMax: ['', Validators.required],
        }),
        health: this.fb1.group({
          températureMin: ['', Validators.required],
          températureMax: ['', Validators.required],
          tensionMin: ['', Validators.required],
          tensionMax: ['', Validators.required],
        }),
        account: this.fb1.group({
          password: ['', Validators.required],
          isActive: [true],
        })
      });
    }
  
    submit() {
      if (this.form.valid) {
        console.log('Form Data:', this.form.value);
        alert('Form Submitted Successfully!');
      } else {
        alert('Please complete all required fields.');
      }
    }

}
