import { Component, OnInit, Injectable, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AutorizacaoService } from '../../_service/service.component';
import { LoginModel } from './login-model.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


@Injectable({
  providedIn: 'root'
})


export class LoginComponent implements OnInit{

  public usuarioForm!: FormGroup;

  @Input() public editableLogin!: LoginModel;

  constructor(public formBuilder: FormBuilder,
    public autorizacaoService:AutorizacaoService) {  }

  usuarios:LoginModel[] = [] as LoginModel[];
  novoUsuario:LoginModel = {} as LoginModel;

  botaoLogin = () =>
    this.autorizacaoService.statusLogin() ? "Sair" : "Entrar";

  descricaoLogin = () =>
    this.autorizacaoService.statusLogin() ? "Login efetuado" : "Faça o login para preencher o questionário";

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      usuario: this.editableLogin != null ? this.editableLogin.usuario : '',
      senha: this.editableLogin != null ?  this.editableLogin.senha : '',
    });
  }

   cadastrar(){
    this.novoUsuario = this.usuarioForm.value;
    this.usuarios.push(this.novoUsuario)
    console.log(this.usuarios)
   }

  clickLogin(){
    console.log(this.usuarios)
    
    this.usuarios.forEach((usuario => {
      if(usuario.usuario == this.usuarioForm.get('usuario')?.value 
      && usuario.senha == this.usuarioForm.get('senha')?.value){
        console.log('usuario',usuario.usuario==this.usuarioForm.get('usuario')?.value)
        console.log('senha',usuario.senha== this.usuarioForm.get('senha')?.value)
        if (!this.autorizacaoService.statusLogin()) {
          this.autorizacaoService.autorizar();
        }else{
          this.autorizacaoService.deslogar();
        }
        return;
      }

    }))
  };

  /*
  loginAutotizado = false;

  ngOnInit(): void {
      this.statusLogin();
  }


  descricaoLogin = () => this.loginAutotizado ? "Estou Autorizado" : "Não Autorizado";
  */

  /*
  statusLogin(){
    this.loginAutotizado = !!localStorage.getItem("login");

  clickLogin(){
    if(this.loginAutotizado) {
      localStorage.clear();
      console.log("clear login");
    }else{
      localStorage.setItem("login", "SIM")
      console.log("logado")
      this.statusLogin();
    }
  };
  */
}


