function soma(a){
    // toda vez que criarmos uma promise, precisamos de uma funçao dentro.

    return new Promise((resolve,reject)=>{
        if (Number(a) == NaN){
            reject("ERROR")
        }
        setTimeout(()=>{
            resolve(a + 20);
        }, 3000);
    })
    // tenho a intençao de executa essa funçao, nao sei se vai dar certo, porém tenhoa intenção.

}
// toda função que retorna uma promessa, coloco .then 
// .then quer dizer que deu tudo certo.
// .catch - se deu errado
// . then resultado = resolve(a + 20) 

async function principal(){
    try{
        // toda vez que eu quiser executar uma função
        //que o retorno é uma promise, coloco o await.
        const resultado =  await soma(200)
        console.log(resultado)

    }catch(error){
        console.log("Deu erro!!" + {error})
    }
    

}

principal()