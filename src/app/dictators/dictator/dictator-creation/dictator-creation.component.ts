import { DictatorsService } from './../../dictators.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Dictator } from '../../dictator.model';
import { Color } from '../../../color.model';

@Component({
  selector: 'app-dictator-creation',
  templateUrl: './dictator-creation.component.html',
  styleUrls: ['./dictator-creation.component.css']
})
export class DictatorCreationComponent implements OnInit {

  dicForm: FormGroup;

  constructor(private dickServ: DictatorsService) { }

  ngOnInit(): void {
    this.dicForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'hobbies': new FormArray([]),
      'favoriteColorsRank': new FormGroup(
        {
          'primary': new FormGroup({
            'r': new FormControl(255, Validators.required),
            'g': new FormControl(255, Validators.required),
            'b': new FormControl(255, Validators.required),
            'a': new FormControl(1, Validators.required)
          }),
          'secondary':new FormGroup({
            'r': new FormControl(255, Validators.required),
            'g': new FormControl(255, Validators.required),
            'b': new FormControl(255, Validators.required),
            'a': new FormControl(1, Validators.required)
          }),
          'tertiary': new FormGroup({
            'r': new FormControl(255, Validators.required),
            'g': new FormControl(255, Validators.required),
            'b': new FormControl(255, Validators.required),
            'a': new FormControl(1, Validators.required)
          })
        }
      ),
      imageFile: new FormControl(null, [Validators.required]),
      anthemeFile: new FormControl(null, [Validators.required])
    });
  }

  AddHobby(){
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.dicForm.get('hobbies')).push(control);
  }

  GetHobbiesControls() {
    return (<FormArray>this.dicForm.get('hobbies')).controls;
  }

  Submit(){
    let dictator: Dictator = new Dictator(
      this.dicForm.get('name').value,
      this.dicForm.get('description').value,
      this.dicForm.get('hobbies').value,
      [
        (<Color>this.dicForm.get('favoriteColorsRank.primary').value),
        (<Color>this.dicForm.get('favoriteColorsRank.secondary').value),
        (<Color>this.dicForm.get('favoriteColorsRank.tertiary').value)
        // Ideally, I'll convert primary, secondary and tertiary into formArray again, and do like <Color[]> for favoriteColorsRank alone.
      ],
      // (<Color[]>this.dicForm.get('favoriteColorsRank').value),
      this.dicForm.get('imageFile').value,
      this.dicForm.get('anthemeFile').value
    );

    this.dickServ.create(dictator).subscribe((dictator_: Dictator[]) => {
      next: this.dickServ.dictators = dictator_;
    });
  }

}
