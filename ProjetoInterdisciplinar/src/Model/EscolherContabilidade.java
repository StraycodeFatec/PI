
package Model;

import Model.Tributacao;

public class EscolherContabilidade {
    private int idEscolherContabilidade;
    private String escolherContabilidade;
    private String descricao;
    private Tributacao tributacao;

    public EscolherContabilidade(int idEscolherContabilidade, String escolherContabilidade, String descricao, Tributacao tributacao) {
        this.idEscolherContabilidade = idEscolherContabilidade;
        this.escolherContabilidade = escolherContabilidade;
        this.descricao = descricao;
        this.tributacao = tributacao;
    }

    public void setIdEscolherContabilidade(int idEscolherContabilidade) {
        this.idEscolherContabilidade = idEscolherContabilidade;
    }

    public void setEscolherContabilidade(String escolherContabilidade) {
        this.escolherContabilidade = escolherContabilidade;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setTributacaoModel(Tributacao tributacao) {
        this.tributacao = tributacao;
    }

    public int getIdEscolherContabilidade() {
        return idEscolherContabilidade;
    }

    public String getEscolherContabilidade() {
        return escolherContabilidade;
    }

    public String getDescricao() {
        return descricao;
    }

    public Tributacao getTributacaoModel() {
        return tributacao;
    }
}
