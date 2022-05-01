import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url:any="url"


      
seletImage(event:any){
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0])
  reader.onload = () =>{
    this.url = reader.result
   }
  }

}




