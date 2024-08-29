
package Model;

public class TipoEmpresa {
    private int idTipoEmpresa;
    private String tiposEmpresa;
    private String descricao;

    public TipoEmpresa(int idTipoEmpresa, String tiposEmpresa, String descricao) {
        this.idTipoEmpresa = idTipoEmpresa;
        this.tiposEmpresa = tiposEmpresa;
        this.descricao = descricao;
    }

    public void setIdTipoEmpresa(int idTipoEmpresa) {
        this.idTipoEmpresa = idTipoEmpresa;
    }

    public void setTiposEmpresa(String tiposEmpresa) {
        this.tiposEmpresa = tiposEmpresa;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getIdTipoEmpresa() {
        return idTipoEmpresa;
    }

    public String getTiposEmpresa() {
        return tiposEmpresa;
    }

    public String getDescricao() {
        return descricao;
    }
}
