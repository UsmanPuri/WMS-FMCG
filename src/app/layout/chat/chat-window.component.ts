import { Component, OnInit, Injector } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './Message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent extends BaseComponent implements OnInit {
  private _hubConnection: HubConnection | undefined;
  public async: any;
  message = '';
  messages: Message[] = [];
  messageObj: Message;
  currentUser: string='';
  

  constructor(injector: Injector,private http: HttpClient) {
    super(injector);
  }

  // public sendMessage(): void {
  //     const data = `Sent: ${this.message}`;

  //     if (this._hubConnection) {
  //         this._hubConnection.invoke('Send', data);
  //     }
  //     this.messages.push(data);
  // }

  ngOnInit() {
    this.addFormValidations();
    // this.currentUser = this.localStorageService.getDataInLocalStorage("user")["FirstName"];
    // this.currentUser = this.currentUser.split('@')[0];
    // this.addFormValidations();
    //   this._hubConnection = new signalR.HubConnectionBuilder()
    //       .withUrl('http://localhost:19845/message', {
    //         skipNegotiation: true,
    //         transport: signalR.HttpTransportType.WebSockets
    //       })
    //       .configureLogging(signalR.LogLevel.Information)
    //       .build();

    //   this._hubConnection.start().catch(err => console.error(err.toString()));

    //   this._hubConnection.on('ReceiveMessage', (user: any,message:any) => {
    //       const received = user+`: ${message}`;
    //       console.log(received);
    //       this.messageObj={
    //         TextMessage : message,
    //         UserName : user
    //       }
    //       this.messages.push(this.messageObj);
    //   });
      
  }



    /**
* The following method is used to add the form validations
*/
addFormValidations(): void {
  this.addFormControlWithValidations("textMessage", []);
}

  chatSubmit(formValues){
    console.log('chat submit: '+formValues.textMessage);
    let message: Message ={
      TextMessage : formValues.textMessage,
      UserName: this.currentUser
    }
    this._hubConnection.invoke("SendMessage", message.UserName, message.TextMessage).catch(function (err) {
      return console.error(err.toString());
  });
  this.formGroup.controls['textMessage'].setValue('');
    // return this.http.post('http://localhost:19845/api/message', message,httpOptions)
    // .subscribe(res=>{
    //   console.log(res);
    // },
    // (error => {
    //   this.errorHandler.handleError(error);
    //   this.errorMessage = this.errorHandler.errorMessage;
    // }))
  }
   openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
   closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

}
