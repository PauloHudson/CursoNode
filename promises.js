function soma(a){
    // toda vez que criarmos uma promise, precisamos de uma funçao dentro.

    return new Promise((resolve,reject)=>{
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
soma(200).then((resultado)=>{
    console.log(resultado)
})