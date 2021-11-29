import { Component, OnInit } from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {identity} from "rxjs";

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  private petService : PetService;
  pets : Pet [];
  selectedPet : Pet |any;
  show : boolean = false;
  searchText : string;

  constructor(petService : PetService) {
    this.petService = petService;
    this.pets = [];
    this.selectedPet = undefined;
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void{
    this.petService.getPets.subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet): void{
    this.showInfo()
    this.selectedPet = pet;
  }

  showInfo(){
    this.show = true;
  }



}
