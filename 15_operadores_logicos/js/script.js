var idade = 16;
var nome = "Joao";

if (nome == "Joao" && idade == 16) {
    console.log("O joao pode entrar na aula de esgrima");
} else {
    console.log("Este não é o Joao ou nao tem 16 anos");
}

if (1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if ((1 == 1 && 3 > 3) && true) {
    console.log("Passa");
} else if (nome == "Joao" && idade >= 14) {
    console.log("Aqui passa");
} 