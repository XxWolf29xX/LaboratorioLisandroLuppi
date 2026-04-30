import { Component, EventEmitter, inject, Output, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { WhatsAppMessage } from '../../interfaces/whatsappmessage.interface';
import { FormUtils } from '../../utils/form-utils';
import { Message } from '../../services/message.service';

@Component({
  selector: 'app-extraccion-domicilio-form',
  imports: [ReactiveFormsModule],
  templateUrl: './extraccion-domicilio-form.component.html',
  styleUrl: './extraccion-domicilio-form.component.scss',
})
export class ExtraccionDomicilioFormComponent implements OnInit{
  private fb = inject(FormBuilder);
  private messageService = inject(Message)
  // phoneNumber = "5493364366974"; //549 --> debe estar en formato internacional (54 --> arg, 9 --> movil)
  formUtils = FormUtils;

  @Output() close = new EventEmitter<void>();

  createForm = this.fb.group({
    nombre: ['', [Validators.required]],
    dni: ['',[Validators.required]],
    direccion: ['', [Validators.required]],
    obraSocial: ['']
  })

  ngOnInit() {
    console.log("render");
  }

  onSubmit() {
    if (this.createForm.invalid) {
      Object.keys(this.createForm.controls).forEach(key => {
        this.createForm.get(key)?.markAllAsTouched();
      });
      return;
    }

      const {
        nombre,
        dni,
        direccion,
        obraSocial
      } = this.createForm.value;

    const createDto: WhatsAppMessage = {
      nombre,
      dni,
      direccion,
      obraSocial
    }

    const message = this.messageService.createWhatsAppMessage(createDto);
    const messageUrl = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${message}`;

    // Para abrir en WhatsApp
    window.open(messageUrl, '_blank');

    this.cerrar();
  }

  cerrar() {
    this.close.emit();
  }
}
