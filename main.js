const {conectar, desconectar} = require('./db.js')
const clienteModel = require('./src/models/Cliente.js')

const salvarCliente = async (nomeCli, foneCLi, cpfCli)=> {
    try{
        const novoCliente = new clienteModel({
            nomeCliente: nomeCli,
            foneCliente: foneCLi,
            cpf:cpfCli
        })
        await novoCliente.save()
        console.log("Cliente adicionado com sucesso")
    }catch (error){
        console.log(error)
    }
}

const Iniciarsistema = async ()=> {
    console.clear()
    console.log("Estudo do MongoDB")
    console.log("------------------")
    await conectar()
    await salvarCliente("Raiam Santos","77777-7777","44829057867")
    await desconectar()
}

Iniciarsistema()