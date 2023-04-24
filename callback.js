function soma(a, callback){
    return setTimeout(()=>{
        return callback(null, a + 20);
    }, 3000);
    // depois de 3 segundos ele executará a funçao
}

// leitura seria
// 1. leia a funçao "resolvaSoma", o primeiro parametro é nulo (para n dar erro)
// 2. Espera 3 segundos e chame soma.
// 3. segundo é a própria soma.

// primeiro parametro os erros, no segundo os dados. 
function resolveSoma(err, resultado){
    // if(err == true)
    // mesma coisa que
    if(err) throw err;
    // se tiver erro retorne o erro, se nao retorne o resultado.
    console.log(resultado);
}

soma(200, resolveSoma)
