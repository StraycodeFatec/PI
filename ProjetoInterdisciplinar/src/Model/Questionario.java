
package Model;

import Model.Cnae;
import Model.RamoEmpresa;
import Model.TipoEmpresa;
import java.time.LocalDate;


public class Questionario {
    private int idQuestionario;
    private LocalDate dataQuestionario;
    private Cnae cnae;
    private RamoEmpresa ramoEmpresa; 
    private TipoEmpresa tipoEmpresa; 

    public Questionario(int idQuestionario, LocalDate dataQuestionario, Cnae cnae) {
        this.idQuestionario = idQuestionario;
        this.dataQuestionario = dataQuestionario;
        this.cnae = cnae;
    }

    public void setDataQuestionario(LocalDate dataQuestionario) {
        this.dataQuestionario = dataQuestionario;
    }

    public void setIdQuestionario(int idQuestionario) {
        this.idQuestionario = idQuestionario;
    }

    public void setCnaeModel(Cnae cnae) {
        this.cnae = cnae;
    }

    public void setRamoEmpresaModel(RamoEmpresa ramoEmpresa) {
        this.ramoEmpresa = ramoEmpresa;
    }

    public void setTipoEmpresaModel(TipoEmpresa tipoEmpresa) {
        this.tipoEmpresa = tipoEmpresa;
    }

    public int getIdQuestionario() {
        return idQuestionario;
    }

    public LocalDate getDataQuestionario() {
        return dataQuestionario;
    }

    public Cnae getCnaeModel() {
        return cnae;
    }

    public RamoEmpresa getRamoEmpresaModel() {
        return ramoEmpresa;
    }

    public TipoEmpresa getTipoEmpresaModel() {
        return tipoEmpresa;
    }
}
