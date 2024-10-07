use('strayCode')
db.cnae.find(
    {descricao: /^c/i, ramoEmpresa: 2},
    {numeroCnae: 1, tiposTributacao: 1, descricao: 1, _id: 0})

const dataComeco = new Date("2024-01-01")
const dataFinal = new Date("2024-06-30")
use('strayCode')
db.questionario.find(
    {dtQuestionario: {$gte: dataComeco, $lte: dataFinal}},
    {dtQuestionario: 1, _id: 0, cnae: {id: 1, descricao: 1}})

use('strayCode')
db.questionario.find(
    {$and: [{$or: [{tributacao: 1}, {tributacao: 2}]}, {"cnae.descricao": {$not: /^cultivo/i}}]},
    {_id:0, dtQuestionario:1, cnae: {numeroCnae: 1, descricao: 1}, tributacao:1})

use('strayCode')
db.usuario.find(
    {$and: [{$and: [{id: {$gt: 1}}, {cpf: {$not: /^98/}}]}, {$and: [{cpf: {$not: /05$/}}, {nome: /[lv]a$/}]}]},
    {_id: 0, nome: 1, cpf: 1})

use('strayCode')
db.questionario.find(
    {$or: [{$and: [{"cnae.id": {$in: [18, 19]}}, {enderecoEmpresa: /santos$/i}]}, 
    {$and: [{"cnae.id": {$in: [12, 13]}}, {enderecoEmpresa: {$not: {$eq: "Sorocaba"}}}]}]},
    {_id: 0})

use('strayCode')
db.tipoEmpresa.aggregate([
    {
        $lookup: {
          from: 'ramoEmpresa',
          localField: 'id',
          foreignField: 'tipoEmpresa',
          as: 'ramoEmpresa'
        }
    },
    {
        $match: {
          nomeTipoEmpresa: {$eq: "Indústria"}
        }
    },
    {
        $project: {
          _id: 0,
          'ramoEmpresa._id': 0
        }
    }
])

use('strayCode')
db.questionario.aggregate([
    {
        $lookup: {
            from: 'tributacao',
            localField: 'tributacao',
            foreignField: 'id',
            as: 'detalhesTributacao'
        }
    },
    {
        $match: {
            'detalhesTributacao.tiposTributacao': {$eq: "MEI"}
        }
    },
    {
        $project: {
            _id: 0,
            'cnae.ramoEmpresa': 0,
            location: 0,
            'detalhesTributacao._id': 0,
            'detalhesTributacao.cnae': 0
        }
    }
])

use('strayCode')
db.questionario.createIndex({ location: '2dsphere' });

use('strayCode')
db.questionario.find(
    {
        location: {
            $geoWithin: {
                $geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [-47.454452, -23.410436], // Ponto Norte Sorocaba
                            [-47.360272, -23.423127], // Ponto Nordeste Sorocaba
                            [-47.332129, -23.472714], // Ponto Leste Sorocaba
                            [-47.358863, -23.513976], // Ponto Sudeste Sorocaba
                            [-47.456546, -23.528516], // Ponto Sul Sorocaba
                            [-47.508909, -23.534362], // Ponto Sudoeste Sorocaba
                            [-47.533952, -23.503132], // Ponto Oeste Sorocaba
                            [-47.519872, -23.453032], // Ponto Noroeste Sorocaba
                            [-47.454452, -23.410436]  // Fechando o polígono Sorocaba
                        ]
                    ]
                }
            }
        }
    },
    {
        _id: 0,
        id: 1,
        cnae: 1,
        enderecoEmpresa: 1,
        location: 1
    }
)

use('strayCode')
db.questionario.find(
    {
        location: {
            $near: {
                $geometry: {
                    type: "Point",
                    coordinates: [-47.444750, -23.529398], // Casa Votorantim
                },
                $maxDistance: 500, // (5km)
            },
        },
    },
    {
        _id: 0,
        id: 1,
        cnae: 1,
        enderecoEmpresa: 1,
        location: 1
    }
)
