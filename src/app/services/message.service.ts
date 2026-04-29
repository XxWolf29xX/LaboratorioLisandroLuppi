import { Injectable } from '@angular/core';
import { WhatsAppMessage } from '../interfaces/whatsappmessage.interface';

@Injectable({
  providedIn: 'root',
})
export class Message {
  
  createWhatsAppMessage(createDto: WhatsAppMessage): string {
    if (createDto.obraSocial == null || createDto.obraSocial == '') {
      const message = `Hola, buen día.
      Quisiera solicitar una extracción de sangre a domicilio.

      Mis datos son:
      - Nombre: ${createDto.nombre}
      - DNI: ${createDto.dni}
      - Dirección: ${createDto.direccion}

      Quedo atento/a a su respuesta. Muchas gracias.`;
      const encodedMessage = encodeURIComponent(message);
      return encodedMessage;
    } else {
      const message = `Hola, buen día.
      Quisiera solicitar una extracción de sangre a domicilio.

      Mis datos son:
      - Nombre: ${createDto.nombre}
      - DNI: ${createDto.dni}
      - Dirección: ${createDto.direccion}
      - Obra Social: ${createDto.obraSocial}

      Quedo atento/a a su respuesta. Muchas gracias.`;
      const encodedMessage = encodeURIComponent(message);
      return encodedMessage;
    }
  }
}
