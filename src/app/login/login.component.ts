import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FunctionlService} from '../functionl.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    // firstName: ['', Validators.required],
    // name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    // photo: [''],
  });


  constructor(private fb: FormBuilder, private rout: Router, public fs: FunctionlService) {

  }

  ngOnInit(): void {
  }

  login() {
    console.log('logare');
    const user = this.fs.login(this.profileForm);
    console.log(user);
    if (user) {
      this.fs.isLogin = true;
      this.rout.navigate(['/']);
    } else {
      this.fs.isLogin = false;
      console.log('i here');
      this.rout.navigate(['/register']);
    }
  }

}
