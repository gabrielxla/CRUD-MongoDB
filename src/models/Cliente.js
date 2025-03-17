const {model,Schema} = require('mongoose')
const { type } = require('os')

const clienteSchema = new Schema({
    nomeCliente: {type:String}
    , foneCliente:{type:String},
    cpf: {type: String,unique:true,index: true},
    dataCadastro:{type: Date, default: Date.now}
},{versionKey:false})
module.exports = model ('Clientes', clienteSchema)