import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-porteur-add',
  templateUrl: './porteur-add.component.html',
  styleUrls: ['./porteur-add.component.css']
})
export class PorteurAddComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      personal: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        adresse: ['', Validators.required],
      }),
      medical: this.fb.group({
        maladie: [''],
        zonesecurite: ['', Validators.required],
        rythmeCardMin: ['', Validators.required],
        rythmeCardMax: ['', Validators.required],
      }),
      health: this.fb.group({
        températureMin: ['', Validators.required],
        températureMax: ['', Validators.required],
        tensionMin: ['', Validators.required],
        tensionMax: ['', Validators.required],
      }),
      account: this.fb.group({
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
