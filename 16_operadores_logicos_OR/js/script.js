var idade = 16;
var nome = "Joao";

if (nome == "Joao" || idade > 14) {
    console.log("O joao pode entrar na aula de esgrima");
} else {
    console.log("Este não é o Joao ou nao tem 16 anos");
}

if (nome == "Pedro" && (30 > 20 || 10 == 10)) {
    console.log("testando");
} else {
    console.log("Nao entrou");
}