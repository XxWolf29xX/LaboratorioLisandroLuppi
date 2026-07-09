import { Component, inject } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from '@angular/router';
import { Message } from '../../services/message.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  messageService = inject(Message);

  phoneNumber = environment.phoneNumber;
  instagramLink = environment.instagramLink;
  googleMapsLink = environment.googleMapsLink;

  message = this.messageService.defaultWhatsAppMessage();
  whatsAppLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${this.message}`;
  abrirWhatsApp(){
      window.open(this.whatsAppLink, '_blank');
  }
}
