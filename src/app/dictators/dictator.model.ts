import { Color } from "../color.model";


export class Dictator{
  name: string;
  description: string;
  hobbies: string[];
  favoriteColorsRank: Color[];
  imageFile: string;
  anthemeFile: string;

  constructor(name, description, hobbies, favoriteColorsRank, imageFile, anthemeFile){
    this.name = name;
    this.description = description;
    this.hobbies = hobbies;
    this.favoriteColorsRank = favoriteColorsRank;
    this.imageFile = imageFile;
    this.anthemeFile = anthemeFile;
  }
}
