
package Model;

import Model.Tributacao;

public class AbrirEmpresa {
    private int idAbrirEmpresa;
    private String formasAbrirEmpresa;
    private String descricao;
    private Tributacao tributacao;

    public AbrirEmpresa(int idAbrirEmpresa, String formasAbrirEmpresa, String descricao, Tributacao tributacao) {
        this.idAbrirEmpresa = idAbrirEmpresa;
        this.formasAbrirEmpresa = formasAbrirEmpresa;
        this.descricao = descricao;
        this.tributacao = tributacao;
    }

    public void setIdAbrirEmpresa(int idAbrirEmpresa) {
        this.idAbrirEmpresa = idAbrirEmpresa;
    }

    public void setFormasAbrirEmpresa(String formasAbrirEmpresa) {
        this.formasAbrirEmpresa = formasAbrirEmpresa;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setTributacaoModel(Tributacao tributacao) {
        this.tributacao = tributacao;
    }

    public int getIdAbrirEmpresa() {
        return idAbrirEmpresa;
    }

    public String getFormasAbrirEmpresa() {
        return formasAbrirEmpresa;
    }

    public String getDescricao() {
        return descricao;
    }

    public Tributacao getTributacaoModel() {
        return tributacao;
    }
}
