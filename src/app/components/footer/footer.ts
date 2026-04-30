import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // phoneNumber = 5493364366974;
  whatsAppLink = `https://api.whatsapp.com/send?phone=${this.phoneNumber}`;
  instagramLink = "https://www.instagram.com/laboratoriolisandroluppi?igsh=MjR5Mm9neTJ1c3A4";
  googleMapsLink = "https://www.google.com/maps/place/Pellegrini+440,+C2900+San+Nicol%C3%A1s+de+Los+Arroyos,+Provincia+de+Buenos+Aires/@-33.3360193,-60.2212779,16.75z/data=!4m6!3m5!1s0x95b7678f8930476b:0x48ccac6ac39130db!8m2!3d-33.3368077!4d-60.2207168!16s%2Fg%2F11mp1hph4v?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";
}
