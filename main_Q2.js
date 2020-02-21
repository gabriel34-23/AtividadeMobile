//2 - questão
//2-a)
const numero= [1,2,3,4,5];

const numeros = numero.map( item => item+10);
console.log("2-a)"+numeros);

//2-b)
const usuario = {nome:'ana', idade:18};

const mostraIdade = usuario => usuario.idade;
console.log("2-b)"+mostraIdade(usuario));
 
//2-c

 const nome2 = 'Bia';
 const idade2 = 20;

 const mostraUsuario = (nome2= 'Ana', idade2 = 18) => ({nome2,idade2});

 console.log("2-c) "+mostraUsuario(nome2, idade2));
 console.log("2-c) "+mostraUsuario(nome2));