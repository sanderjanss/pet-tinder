import {Kind} from "./Kind";

export class Pet {

  id : number;
  name : string;
  kind : Kind;
  profileText : string;
  image : string;
  popularity : number;

  constructor(id : number, name : string, kind : Kind, profileText : string, image : string, popularity : number) {
  this.id = id,
  this.name = name,
  this.kind = kind,
  this.profileText = profileText,
  this.image = image,
  this.popularity = popularity
}

}
