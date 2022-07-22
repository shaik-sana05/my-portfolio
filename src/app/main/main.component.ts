import { Component, OnInit } from '@angular/core';
import { faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  emailUrl:string = "https://mail.google.com/mail/u/0/?fs=1&to=sanaafsia05@gmail.com&su=&body=&tf=cm"

  faAddressCard = faAddressCard;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    
  }
  

}
