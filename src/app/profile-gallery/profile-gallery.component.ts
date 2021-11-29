import { Component, OnInit } from '@angular/core';
import {PetService} from "../service/pet.service";
import {Pet} from "../model/Pet";
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css']
})
export class ProfileGalleryComponent implements OnInit {

  pets : Pet [];
  selectedPet : Pet |any;
  show : boolean = false;
  searchText : string;

  checkoutForm = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  })

  constructor(private petService: PetService, private formBuilder: FormBuilder) {
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

  onSubmit(): void {
    this.petService.addPet(this.checkoutForm.value).subscribe(data => {
      console.log('message::::', data);
      this.checkoutForm.reset();
      this.getPets();
    });
  }



}
