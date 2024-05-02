var obj = {
    nome: "André",
    idade: 32,
    profissao: "Programador",
    estaTrabalhando: false
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome);

obj.nome = "Henrique";

console.log(obj.nome);
console.log(obj);

obj.graduacao = true;

console.log(obj);