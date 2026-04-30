import { Message } from './../../services/message.service';
import { Component, inject } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  // phoneNumber = 5493364366974;
  message = `Hola mogolico, este es un mensaje de frufrito enviado desde la pagina de mierda esta que me estas haciendo hacer. GGWP`;
  whatsAppLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${this.message}`;
  abrirWhatsApp(){
      window.open(this.whatsAppLink, '_blank');
  }
}
