use('strayCode')

db.tipoEmpresa.insertMany([
    {
        id:1,
        nomeTipoEmpresa: "Comércio",
        descrição: "Empresas que compram e vendem produtos. Isso pode incluir varejistas, atacadistas e empresas de comércio eletrônico."
    },
    {
        id:2,
        nomeTipoEmpresa: "Serviços",
        descrição: "Empresas que oferecem serviços em vez de produtos tangíveis. Isso pode incluir empresas de consultoria, de tecnologia da informação, de saúde, de educação, de transporte, entre outras."
    },
    {
        id:3,
        nomeTipoEmpresa: "Indústria",
        descrição: "Empresas que fabricam produtos físicos. Isso pode incluir indústrias de manufatura, de construção, de energia, entre outras."
    }
])

db.notaFiscal.insertMany([
    {
        id:1,
        tiposNota: "NF-e (Nota Fiscal Eletrônica de Produtos ou Mercadorias)",
        descricao: "Esse documento substitui o modelo tradicional. É a versão digital, emitida e armazenada eletronicamente. Limita-se a registrar a venda de produtos físicos, com cobrança de ICMS (Imposto sobre Circulação de Mercadoria Serviços) e IPI (Imposto sobre Produtos Industrializados) e deve ser expedida junto às Secretarias Estaduais da Fazenda. Utilizada sempre em casos de circulação de mercadorias, geralmente, este tipo de nota fiscal é utilizado entre pessoas jurídicas. Ao emitir a NF-e para o comprador, para atestar a operação, a empresa deve enviar um Documento Auxiliar da Nota Fiscal (DANFE) com o produto.",
        tipoEmpresa: [1, 3]
    },
    {
        id:2,
        tiposNota: "NFS-e (Nota Fiscal Eletrônica de Serviços)",
        descricao: "Esse documento substitui o modelo tradicional. É a versão digital, emitida e armazenada eletronicamente. Limita-se a registrar a venda de produtos físicos, com cobrança de ICMS (Imposto sobre Circulação de Mercadoria Serviços) e IPI (Imposto sobre Produtos Industrializados) e deve ser expedida junto às Secretarias Estaduais da Fazenda. Utilizada sempre em casos de circulação de mercadorias, geralmente, este tipo de nota fiscal é utilizado entre pessoas jurídicas. Ao emitir a NF-e para o comprador, para atestar a operação, a empresa deve enviar um Documento Auxiliar da Nota Fiscal (DANFE) com o produto.",
        tipoEmpresa: 2
    }
])

db.ramoEmpresa.insertMany([
    {
        id:1,
        secao:"A",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"AGRICULTURA, PECUÁRIA E SERVIÇOS RELACIONADOS"
    },
    {
        id:2,
        secao:"A",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"PRODUÇÃO FLORESTAL"
    },
    {
        id:3,
        secao:"B",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"EXTRAÇÃO DE CARVÃO MINERAL"
    },
    {
        id:4,
        secao:"B",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"EXTRAÇÃO DE MINERAIS METÁLICOS"
    },
    {
        id:5,
        secao:"E",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"CAPTAÇÃO, TRATAMENTO E DISTRIBUIÇÃO DE ÁGUA"
    },
    {
        id:6,
        secao:"E",
        tipoEmpresa: 3,
        nomeRamoEmpresa:"COLETA, TRATAMENTO E DISPOSIÇÃO DE RESÍDUOS; RECUPERAÇÃO DE MATERIAIS"
    },
    {
        id:7,
        secao:"G",
        tipoEmpresa: 1,
        nomeRamoEmpresa:"COMÉRCIO E REPARAÇÃO DE VEÍCULOS AUTOMOTORES E MOTOCICLETAS"
    },
    {
        id:8,
        secao:"G",
        tipoEmpresa: 1,
        nomeRamoEmpresa:"COMÉRCIO POR ATACADO, EXCETO VEÍCULOS AUTOMOTORES E MOTOCICLETAS"
    },
    {
        id:9,
        secao:"H",
        tipoEmpresa: 2,
        nomeRamoEmpresa:"TRANSPORTE TERRESTRE"
    },
    {
        id:10,
        secao:"H",
        tipoEmpresa: 2,
        nomeRamoEmpresa:"TRANSPORTE AQUAVIÁRIO"
    },
    {
        id: 11,
        secao: "N",
        tipoEmpresa: 2,
        nomeRamoEmpresa: "SERVIÇOS DE ESCRITÓRIO, DE APOIO ADMINISTRATIVO E OUTROS SERVIÇOS PRESTADOS PRINCIPALMENTE ÀS EMPRESAS"
    },
    {
        id: 12,
        secao: "Q",
        tipoEmpresa: 2,
        nomeRamoEmpresa: "ATIVIDADES DE ATENÇÃO À SAÚDE HUMANA"
    }
])

db.cnae.insertMany([
    {
        id: 1,
        numeroCnae: "0113-0/00",
        descricao: "Cultivo de cana-de-açúcar",
        ramoEmpresa: 1,
    },
    {
        id: 2,
        numeroCnae: "0131-8/00",
        descricao: "Cultivo de laranja",
        ramoEmpresa: 1,
    },
    {
        id: 3,
        numeroCnae: "0210-1/01",
        descricao: "Cultivo de eucalipto",
        ramoEmpresa: 2,
    },
    {
        id: 4,
        numeroCnae: "0220-9/04",
        descricao: "Coleta de látex em florestas nativas",
        ramoEmpresa: 2,
    },
    {
        id: 5,
        numeroCnae: "0500-3/01",
        descricao: "Extração de carvão mineral",
        ramoEmpresa: 3,
    },
    {
        id: 6,
        numeroCnae: "0710-3/01",
        descricao: "Extração de minério de ferro",
        ramoEmpresa: 4,
    },
    {
        id: 7,
        numeroCnae: "0721-9/01",
        descricao: "Extração de minério de alumínio",
        ramoEmpresa: 4,
    },
    {
        id: 8,
        numeroCnae: "3600-6/01",
        descricao: "Captação, tratamento e distribuição de água",
        ramoEmpresa: 5,
    },
    {
        id: 9,
        numeroCnae: "3600-6/02",
        descricao: "Distribuição de água por caminhões",
        ramoEmpresa: 5,
    },
    {
        id: 10,
        numeroCnae: "3811-4/00",
        descricao: "Coleta de resíduos não perigosos",
        ramoEmpresa: 6,
    },
    {
        id: 11,
        numeroCnae: "3900-5/00",
        descricao: "Descontaminação e outros serviços de gestão de resíduos",
        ramoEmpresa: 6,
    },
    {
        id: 12,
        numeroCnae: "4511-1/01",
        descricao: "Comércio a varejo de automóveis, camionetas e utilitários novos",
        ramoEmpresa: 7,
    },
    {
        id: 13,
        numeroCnae: "4512-9/01",
        descricao: "Representantes comerciais e agentes do comércio de veículos automotores",
        ramoEmpresa: 7,
    },
    {
        id: 14,
        numeroCnae: "4611-7/00",
        descricao: "Representantes comerciais e agentes do comércio de matérias-primas agrícolas e animais vivos",
        ramoEmpresa: 8,
    },
    {
        id: 15,
        numeroCnae: "4621-4/00",
        descricao: "Comércio atacadista de café em grão",
        ramoEmpresa: 8,
    },
    {
        id: 16,
        numeroCnae: "4912-4/01",
        descricao: "Transporte ferroviário de passageiros intermunicipal e interestadual",
        ramoEmpresa: 9,
    },
    {
        id: 17,
        numeroCnae: "4923-0/01",
        descricao: "Serviço de táxi",
        ramoEmpresa: 9,
    },
    {
        id: 18,
        numeroCnae: "5011-4/02",
        descricao: "Transporte marítimo de cabotagem - Passageiros",
        ramoEmpresa: 10,
    },
    {
        id: 19,
        numeroCnae: "5011-4/01",
        descricao: "Transporte marítimo de cabotagem - Carga",
        ramoEmpresa: 10,
    },
    {
        id: 20,
        numeroCnae: "8211-3/00",
        descricao: "Serviços combinados de escritório e apoio administrativo.",
        ramoEmpresa: 11,
    },
    {
        id: 21,
        numeroCnae: "8630-5/01",
        descricao: "Atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos",
        ramoEmpresa: 12,
    }  
])

db.usuario.insertMany([
    {
        id:1,
        login: "usuario123",
        senha: "senhaSegura",
        nome: "Maria da Silva",
        cpf: "97765432100",
        email: "maria@email.com"
    },
    {
        id:2,
        login: "joao123",
        senha: "senhaSegura2",
        nome: "joão Almeida",
        cpf: "95765432101",
        email: "joao@email.com"
    },
    {
        id:3,
        login: "gabi123",
        senha: "senhaSegura3",
        nome: "Gabriela Silva",
        cpf: "94765432103",
        email: "gabi@email.com"
    },
    {
        id:4,
        login: "leticia123",
        senha: "senhaSegura4",
        nome: "Leticia Vasquez",
        cpf: "96765432105",
        email: "leticia@email.com"
    },
    {
        id:5,
        login: "fernando123",
        senha: "senhaSegura5",
        nome: "Fernando Scheut",
        cpf: "98765432107",
        email: "fernando@email.com"
    }
])

db.questionario.insertMany([
    {
        id: 1,
        dtQuestionario: new Date("2024-05-23"),
        cnae: [
                {
                    id: 18,
                    numeroCnae: "5011-4/02",
                    descricao: "Transporte marítimo de cabotagem - Passageiros",
                    ramoEmpresa: 11
                },
                {
                    id: 19,
                    numeroCnae: "5011-4/01",
                    descricao: "Transporte marítimo de cabotagem - Carga",
                    ramoEmpresa: 11
                }
            ],
        usuario: 1,
        tributacao: 3
    },
    {
        id: 2,
        dtQuestionario: new Date("2024-09-16"),
        cnae: [
                {
                    id: 5,
                    numeroCnae: "0500-3/01",
                    descricao: "Extração de carvão mineral",
                    ramoEmpresa: 4
                }
            ],
        usuario: 2,
        tributacao: 2
    },
    {
        id: 3,
        dtQuestionario: new Date("2024-07-30"),
        cnae: [
                {
                    id: 17,
                    numeroCnae: "4923-0/01",
                    descricao: "Serviço de táxi",
                    ramoEmpresa: 9
                }
            ],
        usuario: 3,
        tributacao: 1
    },
    {
        id: 4,
        dtQuestionario: new Date("2024-03-30"),
        cnae: [
                {
                    id: 12,
                    numeroCnae: "4511-1/01",
                    descricao: "Comércio a varejo de automóveis, camionetas e utilitários novos",
                    ramoEmpresa: 7
                },
                {
                    id: 13,
                    numeroCnae: "4512-9/01",
                    descricao: "Representantes comerciais e agentes do comércio de veículos automotores",
                    ramoEmpresa: 7
                }
            ],
        usuario: 4,
        tributacao: 4
    },
    {
        id: 5,
        dtQuestionario: new  Date("2024-10-15"),
        cnae: [
                {
                    id: 2,
                    numeroCnae: "0131-8/00",
                    descricao: "Cultivo de laranja",
                    ramoEmpresa: 2
                }
            ],
        usuario: 5,
        tributacao: 1
    }
])

db.tributacao.insertMany([
    {
        id: 1,
        tiposTributacao: "MEI",
        descricao: "O regime do MEI foi criado em 2008 para reduzir os níveis de informalidade, proporcionando aos empreendedores meios mais acessíveis de regularização fiscal. Para tanto, o MEI se apresenta de forma menos burocrática, tendo regras diferenciadas para o pagamento de impostos — IRPJ e CLSS, por exemplo, não entram no cálculo tributário dos microempreendedores individuais. Ainda sobre o pagamento de impostos, os valores de contribuição também são diferenciados no MEI: os cadastrados pagam mensalmente um valor de até R$ 60,60 — de acordo com a atividade exercida. Para que possam se enquadrar neste regime tributário, os empresários devem ter um faturamento bruto anual de até R$ 81 mil e não possuir sócios. Atendendo a esses requisitos, eles podem contar com uma série de benefícios, inclusive previdenciários, como: aposentadoria por idade, licença-maternidade, auxílio-doença, entre outros.",
        cnae: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    },
    {
        id: 2,
        tiposTributacao: "Simples Nacional",
        descricao: "Reúne em um único documento, chamado de DAS (Documento de Arrecadação do Simples Nacional), as 8 taxas que devem ser pagas; - Possui alíquotas menores que os demais regimes; - É menos burocrático; - Para se enquadrar no Simples, é preciso ser microempreendedor individual (MEI), microempresa (ME) ou empresa de pequeno porte (EPP) e cumprir os seguintes requisitos financeiros: 1 - O MEI não pode ter faturamento anual acima de R$ 81 mil; 2 - Para ME, o teto é de R$ 360 mil por ano; 3 - O limite anual para a EPP é R$ 4,8 milhões.",
        cnae: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
        id: 3,
        tiposTributacao: "Lucro Real",
        descricao: "O enquadramento ao Lucro Real é obrigatório nos casos de bancos e corretoras de título e, ainda, caso a empresa tenha tido uma receita bruta superior a R$ 78 milhões no ano anterior. Diferentemente do Simples Nacional, os tributos são cobrados individualmente, o que requer um maior cuidado das empresas para que algum não fique em aberto. Como o cálculo de cada taxa é baseado no lucro, esse regime é indicado para empresas que não tenham uma margem de lucro muito elevada, atuem no prejuízo ou, então, tenham custos elevados em serviços ou produtos.",
        cnae: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    },
    {
        id: 4,
        tiposTributacao: "Lucro Presumido",
        descricao: "Neste tipo de tributação, a incidência de impostos é baseada na estimativa de lucro da empresa e calculada conforme a atividade que é desempenhada. No caso, os impostos podem variar de 8% (indústria e comércio) a 32% (serviço). Qualquer negócio que não é obrigado a aderir ao Lucro Real pode optar por esse regime, porém ele é mais vantajoso para as empresas que: - Apresentarem margem de lucro superior ao da presunção; - Tenham baixos custos operacionais; - Possuam folha de pagamento enxuta; - Não ultrapassem o faturamento de R$ 78 milhões. Existe, porém, uma desvantagem que deve ser levada em consideração. Caso a empresa lucre menos do que a média das demais empresas que exercem a mesma atividade, ela deverá pagar um imposto em cima da alíquota pré-fixada (8%).",
        cnae: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    }
])

db.abrirEmpresa.insertMany([
    {
        id: 1,
        formasAbirEmpresa: "Junta Comercial",
        descricao: "Junta Comercial: É o órgão responsável pelo registro de empresas que exercem atividades empresariais. Isso inclui empresas comerciais, industriais e prestadoras de serviços que têm como objetivo a geração de lucro por meio da produção ou venda de bens e serviços em larga escala. Exemplos de tipos de empresas que são registradas na Junta Comercial: - Empresa Individual de Responsabilidade Limitada (EIRELI); - Sociedade Empresária Limitada (LTDA); - Sociedade Anônima (S/A); - Microempreendedor Individual (MEI). Essas empresas visam ao lucro e possuem uma atividade econômica organizada, e por isso devem ser registradas nas juntas comerciais estaduais, como a JUCESP em São Paulo.",
        cnae: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
        id: 2,
        formasAbirEmpresa: "Cartório",
        descricao: "Cartório de Registro de Pessoas Jurídicas: Por outro lado, o cartório é responsável pelo registro de sociedades que não exercem atividades empresariais, como a Sociedade Simples (usada por profissionais liberais, como médicos, advogados, dentistas, etc.) e entidades sem fins lucrativos, como associações e fundações. O foco dessas entidades não é a exploração econômica ou empresarial no sentido amplo, mas sim a prestação de serviços profissionais ou sociais.",
        cnae: [21]
    }
])

db.escolherContabilidade.insertMany([
    {
        id: 1,
        escritorioContador: "Geral",
        descricao: "A escolha entre um escritório contábil presencial ou online depende, essencialmente, da complexidade e das demandas da sua empresa. Negócios de médio e grande porte se beneficiam de um atendimento presencial mais próximo, que oferece suporte em decisões estratégicas e momentos críticos. Já para microempresas e MEIs, a contabilidade online representa uma solução eficiente e econômica, capaz de atender perfeitamente suas necessidades contábeis básicas. Avalie o perfil do seu negócio e escolha o modelo que melhor se adapta às suas demandas!",
        tributacao: [1, 2, 3, 4]
    },
    {
        id: 2,
        escritorioContador: "Online",
        descricao: "MEIs e Microempresas: Contabilidade Online como Solução Econômica e Eficiente. Para MEIs e microempresas de baixo faturamento, a realidade é bem diferente. A gestão contábil tende a ser mais simples, envolvendo principalmente o acompanhamento de receitas e despesas, emissão de notas fiscais e o cumprimento de obrigações fiscais básicas, como o pagamento do DAS (Documento de Arrecadação do Simples Nacional). Nesses casos, a contabilidade online pode ser uma alternativa extremamente vantajosa. Aqui estão os principais motivos: - Custo-benefício: A contabilidade online oferece um serviço mais acessível, com planos geralmente mais baratos que os escritórios tradicionais, atendendo perfeitamente as necessidades básicas de um MEI ou microempresa, sem comprometer o orçamento. - Automação e Agilidade: Muitos serviços de contabilidade online utilizam plataformas automatizadas que permitem ao empresário acessar relatórios, emitir notas fiscais e realizar outras tarefas contábeis de forma rápida e prática, muitas vezes sem a necessidade de intermediação humana constante. - Flexibilidade: Um serviço online oferece flexibilidade de acesso a qualquer momento e lugar, o que facilita a vida de empreendedores que têm pouco tempo para visitas presenciais e preferem resolver questões contábeis de maneira prática e rápida. - Simplicidade: Para negócios pequenos com operações menos complexas, a contabilidade online é suficiente para garantir que todas as obrigações fiscais e tributárias sejam cumpridas, evitando multas e complicações futuras. Portanto, para MEIs e microempresas, um serviço de contabilidade online oferece economia e praticidade, sem a necessidade de um acompanhamento presencial constante, uma vez que suas demandas contábeis são simples e podem ser facilmente automatizadas.",
        tributacao: [1, 2]
    },
    {
        id: 3,
        escolherContabilidade: "Presencial",
        descricao: "Empresas de Médio e Grande Porte: Priorize o Atendimento Presencial. Para empresas de médio e grande porte, a contabilidade é um processo complexo e contínuo, envolvendo uma série de atividades que vão além da simples emissão de guias ou envio de declarações. É necessário lidar com planejamento tributário, gestão de folhas de pagamento, auditorias frequentes, cumprimento de normas contábeis específicas, além de gerenciar fiscalizações e ajustes constantes em um ambiente regulatório em evolução. Nesse contexto, contar com um escritório contábil presencial pode ser a escolha mais acertada. Veja por quê: - Contato Humano e Relacionamento: O contato direto com contadores experientes permite discussões mais aprofundadas, consultas frequentes e até reuniões estratégicas que ajudam na tomada de decisões financeiras importantes. Para empresas com estruturas mais complexas, esse relacionamento é fundamental. - Suporte em Situações Críticas: Em momentos delicados, como auditorias, fiscalizações ou ajustes fiscais, a presença física de contadores pode ser determinante para garantir que tudo ocorra de maneira rápida e correta. A proximidade permite uma resposta mais ágil e personalizada. - Gestão Personalizada: Um escritório presencial tende a conhecer mais profundamente as particularidades da empresa, personalizando soluções contábeis, tributárias e financeiras, o que pode contribuir para otimizar impostos e melhorar a saúde financeira do negócio. Portanto, para empresas de médio e grande porte, onde a demanda por serviços contábeis é alta e contínua, a escolha por um escritório contábil presencial oferece um atendimento mais próximo, humano e personalizado, algo que pode ser essencial para uma gestão eficiente.",
        tributacao: [3, 4]
    }
])

use('strayCode')
db.cnae.find(
    {descricao: /^c/i, ramoEmpresa: [2]},
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
db.tributacao.find(
    {$or: [{$and: [{cnae: {$in: [20, 21]}}, {tiposTributacao: /real/i}]}, {cnae: {$nin: [20,21]}}]},
    {tiposTributacao: 1, descricao: 1, _id:0})

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
          'nomeTipoEmpresa': {$eq: "Indústria"}
        }
    },
    {
        $project: {
          '_id': 0,
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
          'questionario.dtQuestionario': 0,
          '_id': 0,
          'cnae.ramoEmpresa': 0,
          'detalhesTributacao._id': 0,
          'detalhesTributacao.cnae': 0
        }
    }
])

use('strayCode')
db.dropDatabase();
