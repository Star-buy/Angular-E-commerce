<<<<<<< HEAD
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemaleComponent } from './female.component';

describe('FemaleComponent', () => {
  let component: FemaleComponent;
  let fixture: ComponentFixture<FemaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import axios from 'axios'
@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

  ngOnInit(): void {
    this.getData()
    }
    items=[]
  
    async getData() {
      try {
        const response =await axios.get("http://localhost:3000/items/getfemale");
    this.items=Object.values(response.data)
        }
      catch (error) {
        console.log(error);
      }
}
}
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
