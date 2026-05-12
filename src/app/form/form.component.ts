import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmissionForm } from './submission-form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // submissionForm = SubmissionForm;

  constructor() {
    // this.submissionForm = this.fb.group(fName, {
      
    // })
   }

  ngOnInit() {
    
  }

}
