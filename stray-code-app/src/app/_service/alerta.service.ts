import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Alerta } from './alerta';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  public alertaSubject: Subject<Alerta> = new Subject<Alerta>();
  readonly TEMPO_DE_EXIBICAO = 4000;


  exibirAlerta(
    alerta: Alerta,
    tipoAlerta: 'danger' | 'warning' | 'success',
    mensagem: string
  ): void {

    alerta.type = tipoAlerta;
    alerta.mensagem = mensagem;
    alerta.mostrar = true;

    // this.alertaSubject.next();
  }

}
