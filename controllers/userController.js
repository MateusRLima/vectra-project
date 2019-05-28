const express = require('express');
const { User } = require('../app/models');

const router = express.Router();

router.post('/register', async (req, res) => {
    const imc = req.body.weight/(req.body.height*req.body.height);
    console.log(req.body);
    req.body.imc = imc.toFixed(3);
    const user = await User.create(req.body);
    console.log('Usuário Registrado');
    res.json(user);
});

router.get('/list', async (req, res) =>{
    const user = await User.findAll(req.body);
    console.log('Listando Usuários');
    res.json(user);
});

router.delete('/delete/:id', async (req, res) => {
    const result = await User.findByPk(req.params.id);
    console.log(req.params.id);
    await result.destroy();
    res.send(result);
});

module.exports = router;
