
package Model;

import Model.Questionario;

public class Usuario {
    private  int idUsuario;
    private String usuario;
    private String senha;
    private String nome;
    private String cpf;
    private String email;
    private Questionario questionario;
    
    public Usuario(String usuario, String senha){
        this.usuario = usuario;
        this.senha = senha;
    }

    public Usuario(String usuario, String senha, String nome, String cpf, String email) {
        this(usuario, senha);
        //this.idUsuario = idUsuario;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setNome(String Nome) {
        this.nome = Nome;
    }

    public void setCpf(String Cpf) {
        this.cpf = Cpf;
    }

    public void setEmail(String Email) {
        this.email = Email;
    }

    public void setQuestionarioModel(Questionario questionario) {
        this.questionario = questionario;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getSenha() {
        return senha;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public String getEmail() {
        return email;
    }

    public Questionario getQuestionarioModel() {
        return questionario;
    }
}
