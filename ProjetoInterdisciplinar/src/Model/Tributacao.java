
package Model;

import Model.Cnae;

public class Tributacao {
    private int idTributacao;
    private String tiposNota;
    private String descricao;
    private Cnae cnae;

    public Tributacao(int idTributacao, String tiposNota, String descricao, Cnae cnae) {
        this.idTributacao = idTributacao;
        this.tiposNota = tiposNota;
        this.descricao = descricao;
        this.cnae = cnae;
    }

    
    public void setIdTributacao(int idTributacao) {
        this.idTributacao = idTributacao;
    }

    public void setTiposNota(String tiposNota) {
        this.tiposNota = tiposNota;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setCnaeModel(Cnae cnae) {
        this.cnae = cnae;
    }
    
    public int getIdTributacao() {
        return idTributacao;
    }

    public String getTiposNota() {
        return tiposNota;
    }

    public String getDescricao() {
        return descricao;
    }

    public Cnae getCnaeModel() {
        return cnae;
    }
}
