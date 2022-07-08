import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data=[
    {"name":"rahul","age":20,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"},
    {"name":"jishnu","age":21,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"},
    {"name":"nibin","age":19,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"},
    {"name":"bharat","age":22,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"},
    {"name":"athul","age":18,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"},
    {"name":"sudhil","age":25,"photo":"https://www.copeman.nz/wp-content/gallery/professional-profile-pictures/Professional-Profile-1-of-1-3.jpg"}
    ]
    
}
