	const usuarios = [{nome: 'pedro', idade : 18, escola:'ifpi'},
{nome: 'ana', idade : 22, escola:'ifpi'},
{nome: 'lis', idade : 15, escola:'ibc'},]
//1-a)
const idades = usuarios.map(function(usuario){
    return usuario.idade;
})

console.log("1-a): "+idades);

// 1-b)
const alunos = usuarios.filter(function(aluno){
    return aluno.escola === 'ifpi';
});
for(aluno of alunos){
    console.log("1-b): "+aluno.nome);
}
 
// 1-c)
const usuario = usuarios.find(function(usu){
    return usu.escola === 'ibc';
});
console.log("1-c): "+usuario.nome);

// 1-d)

const idadedobro = usuarios.filter(function(usuario){
    return (usuario.idade*2) < 40;
})

 for(ida of idadedobro){
     console.log("1-d): "+ida.nome);
 }



