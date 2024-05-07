import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
  
  @Input() currentUser:any;

  constructor() {}

    handleSetUser(e:any){
    this.currentUser = e;
  }
}
