const OngModule = require('../models/ongs');

class OngController {
    static async create(req, res) {
        const { nome,
                telefone,
                cnpj,
                endereco,
                cidade,
                estado,
                missao,
                historia,
                responsavel
            } = req.body;
    
    if( !nome       ||
        !telefone   ||
        !cnpj       ||
        !endereco   || 
        !cidade     || 
        !estado     ||
        !missao     ||
        !historia   ||
        !responsavel)
    return res.status(400).send({ message: "Dados inválidos - Falta algum valor" })

        const ong = {
            nome: nome,
            telefone: telefone,
            cnpj: cnpj,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            missao: missao,
            historia: historia,
            responsavel: responsavel
        }

        try {
            const ongCriada = await OngModule.create(ong);
            return res.status(201).send({ message: "ONG inserida com sucesso", ongCriada });       
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Deu algo errado - Post" })
        }

    }

    static async getAll(req, res){
        try {
            const ongCadastradas = await OngModule.find();
            return res.status(200).send({ ongCadastradas });
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - GetAll" })
        }
    }

    static async getById(req,res){
        const {id} = req.params;
        
        try {
            const ong = await OngModule.findById(id);
            if (!ong) {
                return res.status(404).send({ message: "ONG não encontrada - GetById" })
            }

            return res.status(200).send({ ong });

        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Catch GetById" })
        }
    }

    static async updateOne(req, res){
        const {id} = req.params;
        const { nome,
                telefone,
                cnpj,
                endereco,
                cidade,
                estado,
                missao,
                historia,
                responsavel } = req.body;
        
        if( !nome       ||
            !telefone   ||
            !cnpj       ||
            !endereco   || 
            !cidade     || 
            !estado     ||
            !missao     ||
            !historia   ||
            !responsavel)
        return res.status(400).send({ message: "Dados inválidos" })
     
        const novaONG = { 
                            nome,
                            telefone,
                            cnpj,
                            endereco,
                            cidade,
                            estado,
                            missao,
                            historia,
                            responsavel };
        
        try {
            const ong = await OngModule.findByIdAndUpdate(id, novaONG);
            return res.status(200).send({ message: "ONG atualizada", "Dados atualizados":novaONG })
        
        } catch (error) {
            console.log(error.message)
            return res.status(500).send({ message: "Deu algo errado - Put" })
        }
    }

    static async deleteOne(req, res){
        const {id} = req.params;

        try {
            await OngModule.findByIdAndRemove(id)
            return res.status(200).send({ message: "ONG deletada" })
        
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Delete" })
        }
    }
}

module.exports = OngController;