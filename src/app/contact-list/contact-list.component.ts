import { contacts } from "./../contact";
import { userContact } from "./../userContact";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact-list",
  templateUrl: "./contact-list.component.html",
  styleUrls: ["./contact-list.component.css"],
})
export class ContactListComponent implements OnInit {
  contacts: userContact[];
  newContact: any = {};
  constructor() {}
  newContactName = "";
  newContactEmail = "";
  newContactphoneNumber = "";
  newContactImage = "";
  ngOnInit() {
    this.contacts = contacts;
  }
  addContact(newContact): any {
    console.log("Add contact has been called");
    newContact = {
      name: this.newContactName,
      email: this.newContactEmail,
      phoneNumber: this.newContactphoneNumber,
      image: this.newContactImage,
    };
    this.contacts.unshift(newContact);
  }
}
