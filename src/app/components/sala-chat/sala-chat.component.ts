import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ChatService } from '../../services/chat.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SpinnerComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
  
  @Input() currentUser:any;
  loading: boolean = false;
  newMessage: string = '';
  messages: any[] = [];

  constructor(private chatService: ChatService) {}


  ngOnInit(): void {
    this.loading = true;
    this.chatService.getAllMensajesSalaChat().subscribe(mensajes => {
      this.messages = mensajes;
      this.loading = false;
    });
  }

  //envio el msj y limpio la variable
  sendMessage() {
    this.chatService.addMsjToSalaChat(this.currentUser, this.newMessage);
    this.newMessage = '';
  }

  itsMe = (msj:any):boolean => msj.sender.email == this.currentUser.email ? true : false
  

  formatDate(timestamp: Timestamp): string {
    const date = timestamp.toDate();
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

setChatNickName(email: string): string {
  const atIndex = email.indexOf('@');
  let nickName = atIndex !== -1 ? email.substring(0, atIndex) : email;
  return nickName;
}

  handleSetUser(e:any){
    this.currentUser = e;
  }

}
