'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Estilo = require('./models/estilo')
const Marca= require ('./models/marca')

/*CONEXION A LA BASE DE DATOS DE MONGO*/
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = 'mongodb://localhost:27017/RentCar';

mongoose.connect(db, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        return console.log('Error al conectar a la base de datos')
    }
    console.log('Succesful Connection...')

    app.listen(port, () => {
        console.log('Api REST running at http://localhost:3000')
    })

})


// CONSULTAS REST GET


app.get('/hola', (req, res) => {
    res.send({ message: 'Hola Mundo' })
})

app.get('/api/estilo/:estiloId', (req, res) => {
    let estiloId = req.params.estiloId
    Estilo.findById(estiloId, (err, estilo) => {
        if (err) { return res.status(500).send({ message: 'ERROR AL READ' }) }
        if (!estilo) { return res.status(404).send({ message: 'No existe' }) }
        res.status(200).send({ estilo })

    })
})

app.get('/api/estilo', (req, res) => {
    Estilo.find({}, (err, estilo) => {
        if (err) { return res.status(500).send({ message: 'ERROR AL READ' }) }
        if (!estilo) { return res.status(404).send({ message: 'No existe' }) }
        res.status(200).send({ estilo })
    })

})


app.get('/api/marca/:marcaId', (req, res) => {
    let marcaId = req.params.marcaId
    Marca.findById(marcaId, (err, marca) => {
        if (err) { return res.status(500).send({ message: 'ERROR AL READ' }) }
        if (!marca) { return res.status(404).send({ message: 'No existe' }) }
        res.status(200).send({ marca })

    })
})

app.get('/api/marca', (req, res) => {
    Marca.find({}, (err, marca) => {
        if (err) { return res.status(500).send({ message: 'ERROR AL READ' }) }
        if (!marca) { return res.status(404).send({ message: 'No existe' }) }
        res.status(200).send({ marca })
    })

})


app.post('/api/insetEstilo', (req, res) => {
    console.log('POST ESTILO')
    console.log(req.body)
    let estilo = new Estilo()
    estilo.name = req.body.name
    estilo.save((err, estiloStored) => {
        if (err) {
            console.log('No se pudo insertar Estilo')
        }
        else {
            res.status(200).send({ estilo: estiloStored })
        }
    })

})