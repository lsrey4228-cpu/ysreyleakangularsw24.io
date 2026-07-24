
 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact = {
    fullname: '',
    email: '',
    phone: '',
    message: ''
  };
  contacts: any[] = [];
  editindex:number= -1;
  saveData() {
   if (
  !this.contact.fullname ||
  !this.contact.email ||
  !this.contact.phone ||
  !this.contact.message
 ) {
    alert("All fields are required !");
    return;
  }
  if(this.editindex==-1){
    this.contacts.push({
      fullname: this.contact.fullname,
      email: this.contact.email,
      phone: this.contact.phone,
      message: this.contact.message,
    });
    alert("Contact create successfully!");
  }else{
    // Update contact information
      this.contacts[this.editindex]={
        fullname: this.contact.fullname,
        email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message
      }
      alert("Contact update successfully!");
      this.editindex=-1;

      
  }
  
    this.contact.fullname = '';
    this.contact.email = '';
    this.contact.phone = '';
    this.contact.message = '';
  }
  editContact(index: number){
    this.contact={
      fullname: this.contacts[index].fullname,
      email: this.contacts[index].email,
      phone: this.contacts[index].phone,
      message: this.contacts[index].message
    }
    this.editindex=index;
  }
  deleteContact(index:number){
    if(confirm("Are you sure do you want to delete contact?")){
        this.contacts.splice(index,1);
        if(this.editindex== index){
          this.editindex=-1;
        }
    }
  }
  
}