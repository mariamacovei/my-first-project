import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FunctionlService} from '../functionl.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    password_confirmation: ['', Validators.required],
  });


  constructor(private fb: FormBuilder, private rout: Router, private fs: FunctionlService) {

  }

  ngOnInit(): void {
  }

  register() {
    console.log(this.profileForm.value);
    this.fs.register(this.profileForm.value).subscribe(data => {
      console.log(data);
      if (data) {
        localStorage.setItem('currentUser', JSON.stringify({token: data.data.api_token,  email: data.data.email, name: data.data.name}));
        this.fs.isLogin = true;
        this.rout.navigate(['/']);
      } else {
        this.fs.isLogin = false;
        console.log('nu ai pus datele corect');
      }
    });

  }
}
