import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { ExtraccionDomicilioFormComponent } from '../../components/extraccion-domicilio-form.component/extraccion-domicilio-form.component';
import { NgIf, UpperCasePipe } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-page',
  imports: [ButtonModule, Navbar, Footer, ExtraccionDomicilioFormComponent, NgIf, UpperCasePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  phoneNumber = environment.phoneNumber;
  whatsAppLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}`;
  instagramLink = environment.instagramLink;
  mostrarForm = false;

  abrirForm(){
    this.mostrarForm = true;
  }

  cerrarForm(){
    this.mostrarForm = false;
  }
}
