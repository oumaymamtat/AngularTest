import { Component, OnInit } from '@angular/core';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  returnedData: any = [];
  addedUser: any = [];

  constructor(private service: ContactListService) { }

  ngOnInit(): void {
    console.log("connected!");
    this.getContactList();
  }

  getContactList() {
    this.service.getContact(4).subscribe(data => {
      //   console.log(data["results"]);
      this.returnedData = data["results"];
      console.log(this.returnedData);
    })

  }

  addUser() {
    this.service.getContact(1).subscribe(data => {
      this.returnedData.push(data["results"][0]);
      console.log(this.returnedData);
    })
  }

  deleteUser(item:any){
    console.log("user deleted");
    console.log(item);
  }

}
