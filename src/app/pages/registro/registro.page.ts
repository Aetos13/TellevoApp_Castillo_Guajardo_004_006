import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre:'',
    apellidos:'',
    email:'',
    password:'',
    conPassword:'',
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

  go(){
    this.router.navigate(['card'])
  }
}
