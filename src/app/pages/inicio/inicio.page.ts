import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario = {
    email:'',
    password:''
  }

 
  constructor(private menuController: MenuController,
              private router: Router) { }

  
  go(){
    this.router.navigate(['card'])
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
