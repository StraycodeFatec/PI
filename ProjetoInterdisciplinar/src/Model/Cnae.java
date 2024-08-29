
package Model;

import Model.RamoEmpresa;

public class Cnae {
    private int idCnae;
    private String numeroCnae;
    private String descricao;
    private RamoEmpresa ramoEmpresa;

    public Cnae(int idCnae, String numeroCnae, String descricao, RamoEmpresa ramoEmpresa) {
        this.idCnae = idCnae;
        this.numeroCnae = numeroCnae;
        this.descricao = descricao;
        this.ramoEmpresa = ramoEmpresa;
    }

    public void setNumeroCnae(String numeroCnae) {
        this.numeroCnae = numeroCnae;
    }

    public void setIdCnae(int idCnae) {
        this.idCnae = idCnae;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setRamoEmpresaModel(RamoEmpresa ramoEmpresa) {
        this.ramoEmpresa = ramoEmpresa;
    }

    public int getIdCnae() {
        return idCnae;
    }

    public String getNumeroCnae() {
        return numeroCnae;
    }

    public String getDescricao() {
        return descricao;
    }

    public RamoEmpresa getRamoEmpresaModel() {
        return ramoEmpresa;
    }
}
