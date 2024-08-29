
package Model;

import Model.TipoEmpresa;

public class RamoEmpresa {
    private int idRamoEmpresa;
    private String secao;
    private String nomeRamoEmpresa;
    private TipoEmpresa tipoEmpresa;

    public RamoEmpresa(int idRamoEmpresa, String secao, String nomeRamoEmpresa, TipoEmpresa tipoEmpresa) {
        this.idRamoEmpresa = idRamoEmpresa;
        this.secao = secao;
        this.nomeRamoEmpresa = nomeRamoEmpresa;
        this.tipoEmpresa = tipoEmpresa;
    }

    public void setIdRamoEmpresa(int idRamoEmpresa) {
        this.idRamoEmpresa = idRamoEmpresa;
    }

    public void setSecao(String secao) {
        this.secao = secao;
    }

    public void setNomeRamoEmpresa(String NomeRamoEmpresa) {
        this.nomeRamoEmpresa = NomeRamoEmpresa;
    }

    public void setTipoEmpresaModel(TipoEmpresa tipoEmpresa) {
        this.tipoEmpresa = tipoEmpresa;
    }

    public int getIdRamoEmpresa() {
        return idRamoEmpresa;
    }

    public String getSecao() {
        return secao;
    }

    public String getNomeRamoEmpresa() {
        return nomeRamoEmpresa;
    }

    public TipoEmpresa getTipoEmpresaModel() {
        return tipoEmpresa;
    }
}
