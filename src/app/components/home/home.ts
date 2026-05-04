import { Component } from '@angular/core';
import { ICourse } from '../../models/icourse.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  course:ICourse={
    name:'Angular course',
    description:'This is a course about Angular',
    imgUrl:"https://placehold.co/600x400",
    instructor:'John Doe'
  }

  displayMsg():string{
    return "Hello world"
  }

}
