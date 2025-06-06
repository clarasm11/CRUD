const Endereco = require('../models/enderecoModel');

const enderecoController = {
    renderCreateForm: (req, res) => {
        res.render('enderecos/create');
    },

    createEndereco: (req, res) => {
        const novoEndereco = {
          
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep
        };

        Endereco.create(novoEndereco, (err, insertId) => {
            if (err) return res.status(500).send(err);
            res.redirect('/enderecos');
        });
    },

    getAllEnderecos: (req, res) => {
        Endereco.getAll((err, enderecos) => {
            if (err) return res.status(500).send(err);
            res.render('enderecos/index', { enderecos });
        });
    },

    getEnderecoById: (req, res) => {
        Endereco.findById(req.params.id, (err, endereco) => {
            if (err) return res.status(500).send(err);
            if (!endereco) return res.status(404).send('Endereço não encontrado');
            res.render('enderecos/show', { endereco });
        });
    },

    renderEditForm: (req, res) => {
        Endereco.findById(req.params.id, (err, endereco) => {
            if (err) return res.status(500).send(err);
            res.render('enderecos/edit', { endereco });
        });
    },

    updateEndereco: (req, res) => {
        const enderecoAtualizado = {
            rua: req.body.rua,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            cep: req.body.cep
        };

        Endereco.update(req.params.id, enderecoAtualizado, (err) => {
            if (err) return res.status(500).send(err);
            res.redirect('/enderecos');
        });
    },

    deleteEndereco: (req, res) => {
        Endereco.delete(req.params.id, (err) => {
            if (err) return res.status(500).send(err);
            res.redirect('/enderecos');
        });
    }
};

exports.createForm = (req, res) => {
    res.render('enderecos/create.ejs'); // NÃO colocar /views
};


module.exports = enderecoController;
