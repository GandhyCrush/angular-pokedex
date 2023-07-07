import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private socket: any; 
  public battleStatisticMessage = new Subject<string>;
  //Subject -> Convertir información y transformarla a un stream (next, complete, error, subscribe)
  // .next -> enviar información al stream
  // .complete -> cerrar el canal
  // .subscribe -> subsribirnos al subject
  // .error -> Notificar errores

  constructor() { }

  public connect(): void {
    this.socket = this.getNewWebSocket();
    this.socket.subscribe({
      next: (data: any) => {
        //console.log(JSON.stringify(data));
        this.battleStatisticMessage.next(JSON.stringify(data));
        
      }
    });
  }

  private getNewWebSocket() {
    return webSocket(environment.pokeStatisticsUrl);
  }

  close() {
    this.socket.complete();
  }
}
