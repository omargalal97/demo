import { ContactUsService } from './../../core/services/contact-us.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  myMessage:string='';
  myForm:FormGroup=new FormGroup({
  email:new FormControl(null, [Validators.required, Validators.email]),
  name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
  phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125]{1}[0-9]{8}$/)])
  


  })

  constructor(private ContactUsService:ContactUsService){}

  checkToRegister(){
    console.log(this.myForm);
    console.log(this.myForm.value);

    this.ContactUsService.register(this.myForm.value).subscribe((response:any)=>{
      console.log(response);
      this.myMessage = response.message
      
    })
    
  }

}

