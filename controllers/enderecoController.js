const Endereco = require('../models/enderecoModel.js');

const enderecoController = {
    renderCreateForm: (req, res) => {
        res.render('enderecos/create');
    },

    createEndereco: async (req, res) => {
        try {
            await Endereco.create({
                rua: req.body.rua,
                numero: req.body.numero,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            });
            res.redirect('/enderecos');
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getAllEnderecos: async (req, res) => {
        try {
            const enderecos = await Endereco.findAll();
            res.render('enderecos/index', { enderecos });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getEnderecoById: async (req, res) => {
        try {
            const endereco = await Endereco.findByPk(req.params.id);
            if (!endereco) return res.status(404).send('Endereço não encontrado');
            res.render('enderecos/show', { endereco });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    renderEditForm: async (req, res) => {
        try {
            const endereco = await Endereco.findByPk(req.params.id);
            if (!endereco) return res.status(404).send('Endereço não encontrado');
            res.render('enderecos/edit', { endereco });
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    updateEndereco: async (req, res) => {
        try {
            await Endereco.update({
                rua: req.body.rua,
                numero: req.body.numero,
                complemento: req.body.complemento,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }, { where: { id: req.params.id } });
            res.redirect('/enderecos');
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    deleteEndereco: async (req, res) => {
        try {
            await Endereco.destroy({ where: { id: req.params.id } });
            res.redirect('/enderecos');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};

module.exports = enderecoController;
