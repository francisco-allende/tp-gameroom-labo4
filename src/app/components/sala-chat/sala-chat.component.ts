import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from '../../services/chat.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
  
  @Input() currentUser:any;
  newMessage: string = '';
  messages: any[] = [];

  constructor(private chatService: ChatService) {}


  ngOnInit(): void {
    this.chatService.getAllMensajesSalaChat().subscribe(mensajes => {
      this.messages = mensajes;
    });
  }

  //envio el msj y limpio la variable
  sendMessage() {
    this.chatService.addMsjToSalaChat(this.currentUser, this.newMessage);
    this.newMessage = '';
  }

  formatDate(timestamp: Timestamp): string {
    const date = timestamp.toDate();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}




  handleSetUser(e:any){
    this.currentUser = e;
  }

}
