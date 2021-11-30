import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {PetService} from "../service/pet.service";
import {FormBuilder} from "@angular/forms";
import {Pet} from "../model/Pet";

@Component({
  selector: 'app-setup-date',
  templateUrl: './setup-date.component.html',
  styleUrls: ['./setup-date.component.css']
})
export class SetupDateComponent implements OnInit {

  private pet! : Pet;

  sendTextForm = this.formBuilder.group({
      name : ''
  })

  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let name = this.route.snapshot.params['name'];
    this.petService
      .findByName(name)
      .subscribe(pet => this.pet = pet);
  }

  get getPet (){
    return this.pet;
  }




}
