import {Component, OnInit} from '@angular/core';
import {FunctionlService} from '../functionl.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date = new Date();


  constructor(public fs: FunctionlService, private route: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.fs.isLogin = false;


  }

}
