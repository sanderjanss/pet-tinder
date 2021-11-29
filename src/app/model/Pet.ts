import {Kind} from "./Kind";

export class Pet {

  id : bigint;
  name : string;
  kind : Kind;
  profileText : string;
  image : string;
  popularity : bigint;

  constructor(id : bigint, name : string, kind : Kind, profileText : string, image : string, popularity : bigint) {
  this.id = id,
  this.name = name,
  this.kind = kind,
  this.profileText = profileText,
  this.image = image,
  this.popularity = popularity
}

}
