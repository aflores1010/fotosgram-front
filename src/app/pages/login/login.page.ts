import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slideLogin', { static: true}) slideLogin: IonSlides;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: false
    },
    {
      img: 'av-2.png',
      seleccionado: true
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
];

  avatarSlide = {
    slidesPerView: 3.5
  };

  loginUser = {
    email: 'apflores01@gmail.com',
    password: '1234'
  };

  constructor( private userService: UserService,
               private navController: NavController,
               private uiService: UiService) { }

  ngOnInit() {
    console.log('locking swipe');
    this.slideLogin.lockSwipes(true);
  }

  async login(fLogin: NgForm) {
    console.log(this.loginUser);
    if(fLogin.invalid) {return;}
    const valid = await this.userService.login(this.loginUser.email, this.loginUser.password);
    if (valid) {
      // navegar al tab
      this.navController.navigateRoot('/main/tabs/tab1', {animated: true});
    } else {
      // mostrar alerta de usuario o contraseña incorrecta
      this.uiService.showInformativeAlert('Usuario o contraseña incorrectos');
    }
  }

  register(fRegister: NgForm) {
  }

  selectAvatar(avatar: any) {
    this.avatars.forEach( av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  showRegister() {
    console.log(this.slideLogin);
    this.slideLogin.lockSwipes(false);
    this.slideLogin.slideTo(0);
    this.slideLogin.lockSwipes(true);
  }

  showLogin() {
    this.slideLogin.lockSwipes(false);
    this.slideLogin.slideTo(1);
    this.slideLogin.lockSwipes(true);

  }
}
