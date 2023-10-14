const VacinaModule = require('../models/vacinas');

class VacinaController {
    static async create(req, res) {
        const { nome,
                doses
            } = req.body;
    
    if( !nome || !doses)
    return res.status(400).send({ message: "Dados inválidos - Falta algum valor" })

        const vacina = {
            nome: nome,
            doses: doses
        }

        try {
            const vacinaCriada = await VacinaModule.create(vacina);
            return res.status(201).send({ message: "Vacina inserida com sucesso", vacinaCriada });       
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({ message: "Deu algo errado - Post" })
        }

    }

    static async getAll(req, res){
        try {
            const vacinaCadastradas = await VacinaModule.find();
            return res.status(200).send({ vacinaCadastradas });
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - GetAll" })
        }
    }

    static async getById(req,res){
        const {id} = req.params;
        
        try {
            const vacina = await VacinaModule.findById(id);
            if (!vacina) {
                return res.status(404).send({ message: "Vacina não encontrada - GetById" })
            }

            return res.status(200).send({ vacina });

        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Catch GetById" })
        }
    }

    static async updateOne(req, res){
        const {id} = req.params;
        const { nome,
                doses } = req.body;
        
        if( !nome || !doses)
        return res.status(400).send({ message: "Dados inválidos" })
     
        const novaVacina = { 
                            nome,
                            doses };
        
        try {
            const vacina = await VacinaModule.findByIdAndUpdate(id, novaVacina);
            return res.status(200).send({ message: "Vacina atualizada", "Dados atualizados":novaVacina })
        
        } catch (error) {
            console.log(error.message)
            return res.status(500).send({ message: "Deu algo errado - Put" })
        }
    }

    static async deleteOne(req, res){
        const {id} = req.params;

        try {
            await VacinaModule.findByIdAndRemove(id)
            return res.status(200).send({ message: "Vacina deletada!" })
        
        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Delete" })
        }
    }
}

module.exports = VacinaController;