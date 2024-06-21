import { Component, OnInit, Injectable, Input } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { AutorizacaoService } from '../../_service/service.component';
import { LoginModel } from './login-model.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoryEditComponent } from '../../category.edit/category.edit.component';


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
  timeout: number = 4000;
  alert:boolean = false;
  alertType: String = '';
  alertText: String = '';
  usaurioExiste: boolean = false;
  usaurioLogado: boolean = false;

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

   async cadastrar(){
    this.alert=true
    if(await this.verificaSeUsuarioExiste()){
      this.alertType = 'danger'
      this.alertText = 'Esse usuário já existe'
      setTimeout(() => this.alert=false, this.timeout)
    }else{
      if(!String(this.usuarioForm.get('usuario')?.value).trim()){
        this.alertType = 'danger'
        this.alertText = 'Deve Informar o nome de usuário'
        setTimeout(() => this.alert=false, this.timeout)
      }else if(String(this.usuarioForm.get('usuario')?.value).length < 5){
        this.alertType = 'danger'
        this.alertText = 'O nome de usuário deve ter no mínimo 5 caracteres'
        setTimeout(() => this.alert=false, this.timeout)
      }else if(!String(this.usuarioForm.get('senha')?.value).trim()){
        this.alertType = 'danger'
        this.alertText = 'Deve Informar a senha'
        setTimeout(() => this.alert=false, this.timeout)
      }else if(String(this.usuarioForm.get('senha')?.value).length < 5){
        this.alertType = 'danger'
        this.alertText = 'A senha dete ter no mínimo 5 caracters'
        setTimeout(() => this.alert=false, this.timeout)
      }else{
        this.alertType = 'success'
        this.alertText = 'Cadastrado com sucesso'
        this.novoUsuario = this.usuarioForm.value;
        this.usuarios.push(this.novoUsuario)
        setTimeout(() => this.alert=false, this.timeout)
      }
    }
   }

   async verificaSeUsuarioExiste(){
    for(const usuario of this.usuarios){
      if (usuario.usuario == this.usuarioForm.get('usuario')?.value) {
        return true;
      }
    }
      return false;
   }

  clickLogin(){
    this.usuarios.forEach((usuario) => {
      if(usuario.usuario == this.usuarioForm.get('usuario')?.value
      && usuario.senha == this.usuarioForm.get('senha')?.value){
        if (!this.autorizacaoService.statusLogin()) {
          this.autorizacaoService.autorizar();
          this.usaurioLogado=true;
          return true;
        }
        return false;
      }
      return false;
    })
    if(!this.usaurioLogado){
      this.alert=true
      this.alertType = 'danger'
      this.alertText = 'Usuário e/ou senha incorreto'
      setTimeout(() => this.alert=false, this.timeout)
      }

  }

  logout(){
    if(this.autorizacaoService.statusLogin()){
      this.autorizacaoService.deslogar();
      this.usaurioLogado = false;
    }
  }
}


