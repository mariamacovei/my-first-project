import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FunctionlService} from '../functionl.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: {};

  constructor(private fs: FunctionlService) {
    this.fs.getCourses().subscribe((value: any) => {
      console.log(value);
      if (value && value.courses )  {
        this.courses = value.courses;
      }

    });


  }

  ngOnInit(): void {
  }

}
