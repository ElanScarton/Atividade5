import PromptSync from "prompt-sync"

const prompt = PromptSync()

function PrecoDesconto(valProduto, quantProduto, callback){

   let valBruto = valProduto*quantProduto

   return callback(valBruto)
}

function desconto(valBruto){

    const desc = 0.2

    const precoFinal = valBruto-valBruto*desc

    return precoFinal
}

let novo = PrecoDesconto(54,3,desconto)

console.log(novo)