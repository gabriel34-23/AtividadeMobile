const aluno = {nome: 'Carlos', 
    endereco:{
        cidade: 'Corrente',
        uf:'PI',
    }
}


//3-a)
var {nome,  endereco} = aluno;
var {cidade, uf:estado} = endereco;
console.log("3-a) nome: "+nome);
console.log("3-a) cidade: "+cidade);
console.log("3-a) estado: "+estado);