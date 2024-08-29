package Controlador;
import Model.*;
import java.util.ArrayList;
import java.util.List;

public class Controlador {
    private List<Usuario> listaUsuarios;
    
    public Controlador(){
        listaUsuarios = new ArrayList<Usuario>();
    }
    
    public void cadastrarUsuario(String usuario, String senha, String nome, String cpf, String email){
        listaUsuarios.add(new Usuario(usuario, senha, nome, cpf, email));
    }    
}
