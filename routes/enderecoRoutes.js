const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoController');

router.get('/', enderecoController.getAllEnderecos);
router.get('/new', enderecoController.renderCreateForm);
router.post('/', enderecoController.createEndereco);
router.get('/:id', enderecoController.getEnderecoById);
router.get('/:id/edit', enderecoController.renderEditForm);
router.put('/:id', enderecoController.updateEndereco);
router.delete('/:id', enderecoController.deleteEndereco);



// Rota para exibir o formulário de criação
router.get('/enderecos/create.ejs', (req, res) => {
    res.render('enderecos/create.ejs');
});

module.exports = router;
