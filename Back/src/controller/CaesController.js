const CaesModule = require('../models/caes');

class CaesController {
    static async create(req, res) {
        const { nome,
                raca,
                nascimento,
                sexo,
                cor,
                porte,
                peso,
                data_chegada,
                historico_medico,
                descricao_curta,
                descricao_longa,
                status_adocao,
                foto,
                data_adocao,
                observacoes_adicionais
            } = req.body;
    
    if( !nome                   ||
        !raca                   ||
        !nascimento             ||
        !sexo                   || 
        !cor                    || 
        !porte                  ||
        !peso                   ||
        !data_chegada           ||
        
        !descricao_curta        ||
        !descricao_longa        ||
        !status_adocao          ||
        !foto                   ||
        
        !observacoes_adicionais )
    return res.status(400).send({ message: "Dados inválidos - Falta algum valor" })

        const cao = {
            nome: nome,
            raca: raca,
            nascimento: nascimento,
            sexo: sexo,
            cor: cor,
            porte: porte,
            peso: peso,
            data_chegada: data_chegada,
            historico_medico: historico_medico,
            descricao_curta: descricao_curta,
            descricao_longa: descricao_longa,
            status_adocao: status_adocao,
            foto: foto,
            data_adocao: data_adocao,
            observacoes_adicionais: observacoes_adicionais
        }

        try {
            const caoCriado = await CaesModule.create(cao);
            return res.status(201).send({ message: "Cão inserido com sucesso", caoCriado });       
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Deu algo errado - Post" })
        }

    }

    static async getAll(req, res){
        try {
            const caesCadastrados = await CaesModule.find();
            return res.status(200).send({ caesCadastrados });
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - GetAll" })
        }
    }

    static async getById(req,res){
        const {id} = req.params;
        
        try {
            const cao = await CaesModule.findById(id);
            if (!cao) {
                return res.status(404).send({ message: "Cão não encontrado - GetById" })
            }

            return res.status(200).send({ cao });

        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Catch GetById" })
        }
    }

    static async updateOne(req, res){
        const {id} = req.params;
        const { nome,
                raca,
                nascimento,
                sexo,
                cor,
                porte,
                peso,
                data_chegada,
                historico_medico,
                descricao_curta,
                descricao_longa,
                status_adocao,
                foto,
                data_adocao,
                observacoes_adicionais } = req.body;
        
        if( !nome                   ||
            !raca                   ||
            !nascimento             ||
            !sexo                   || 
            !cor                    || 
            !porte                  ||
            !peso                   ||
            !data_chegada           ||
            !historico_medico       ||
            !descricao_curta        ||
            !descricao_longa        ||
            !status_adocao          ||
            !foto                   ||
            
            !observacoes_adicionais  )
        return res.status(400).send({ message: "Dados inválidos" })
     
        const caoAtualizado = { 
                            nome,
                            raca,
                            nascimento,
                            sexo,
                            cor,
                            porte,
                            peso,
                            data_chegada,
                            historico_medico,
                            descricao_curta,
                            descricao_longa,
                            status_adocao,
                            foto,
                            data_adocao,
                            observacoes_adicionais };
        
        try {
            const cao = await CaesModule.findByIdAndUpdate(id, caoAtualizado);
            return res.status(200).send({ message: "Cão atualizado", "Dados atualizados":caoAtualizado })
        
        } catch (error) {
            console.log(error.message)
            return res.status(500).send({ message: "Deu algo errado - Put" })
        }
    }

    static async deleteOne(req, res){
        const {id} = req.params;

        try {
            await CaesModule.findByIdAndRemove(id)
            return res.status(200).send({ message: "Cão deletadr" })
        
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Delete" })
        }
    }
}

module.exports = CaesController;