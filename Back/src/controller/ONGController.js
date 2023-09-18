const ONGModule = require('../models/ONG');

let errorCode = 500;
class ONGController {
    static async create(req, res) {

        const { nome,
            telefone,
            cnpj,
            endereco,
            cidade,
            estado,
            descricao } = req.body;


        try {
            if (!nome || !telefone || !cnpj || !endereco || !cidade || !estado || !descricao){
                errorCode = 404;
                throw new Error("Dados inválidos - Falta algum valor")
                // return res.status(400).send({ message: "Dados inválidos - Falta algum valor" })
            }
            
            const ong = {
                nome: nome,
                telefone: telefone,
                cnpj: cnpj,
                endereco: endereco,
                cidade: cidade,
                estado: estado,
                descricao: descricao
            }
            const data = await ONGModule.create(ong);
            return res.status(201).send({ message: "ONG inserida com sucesso", data });

        } catch (error) {
            console.log(error);
            return res.status(errorCode).send({ message: "Deu algo errado - Post" })
        }

    }

    static async getAll(req, res) {
        try {
            const ong = await ONGModule.find();
            return res.status(200).send({ ong });
        } catch (error) {
            return res.status(errorCode).send({ message: "Deu algo errado - GetAll" })
        }
    }

    static async getById(req, res) {
        const { id } = req.params;

        try {
            const ong = await ONGModule.findById(id);
            if (!ong) {
                errorCode = 404;
                throw new Error("ONG não encontrada - GetById")
                // return res.status(errorCode).send({ message: "ONG não encontrado - GetById" })
            }

            return res.status(200).send({ ong });

        } catch (error) {
            return res.status(errorCode).send({ message: "Deu algo errado - Catch GetById" })
        }
    }

    static async updateOne(req, res) {
        const { id } = req.params;
        const { nome,
            telefone,
            cnpj,
            endereco,
            cidade,
            estado,
            descricao } = req.body;

        if (!nome || !telefone || !cnpj || !endereco || !cidade || !estado || !descricao)
            return res.status(400).send({ message: "Dados inválidos" })

        const novaONG = {
            nome,
            telefone,
            cnpj,
            endereco,
            cidade,
            estado,
            descricao
        };

        try {
            const ong = await ONGModule.findByIdAndUpdate(id, novaONG);
            return res.status(200).send({ message: "ONG atualizado", ong: ong })

        } catch (error) {
            console.log(error.message)
            return res.status(500).send({ message: "Deu algo errado - Put" })
        }
    }

    static async deleteOne(req, res) {
        const { id } = req.params;

        try {
            await ONGModule.findByIdAndRemove(id)
            return res.status(200).send({ message: "ONG deletada" })

        } catch (error) {
            return res.status(500).send({ message: "Deu algo errado - Delete" })
        }
    }
}

module.exports = ONGController