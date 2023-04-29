const eventEmitter = require("events")
class Evento extends eventEmitter {}
const mEuEvento = new Evento()


mEuEvento.on("seguranca", (x,y) =>{
    console.log("executando segurança " + x + y)
})
// on nós criamos o evento.


mEuEvento.emit('seguranca', 'userAdmin', ' alterou Salário')
// emit estamos disarando ele.