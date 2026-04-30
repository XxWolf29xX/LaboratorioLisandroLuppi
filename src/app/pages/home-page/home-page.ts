import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { ExtraccionDomicilioFormComponent } from '../../components/extraccion-domicilio-form.component/extraccion-domicilio-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [ButtonModule, Navbar, Footer, ExtraccionDomicilioFormComponent, NgIf],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  // phoneNumber = 5493364366974;
  whatsAppLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}`;
  instagramLink = "https://www.instagram.com/laboratoriolisandroluppi?igsh=MjR5Mm9neTJ1c3A4";
  mostrarForm = false;

  abrirForm(){
    this.mostrarForm = true;
  }

  cerrarForm(){
    this.mostrarForm = false;
  }
}
