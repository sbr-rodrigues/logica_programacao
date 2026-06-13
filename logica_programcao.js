const readline = require("readline-sync");

while (true) {
    let nomeJogador = readline.question("Jogador, qual é o seu nome? ");
    let xp = parseInt(readline.question("Qual é a sua quantidade de experiência (XP)? "));

    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1000 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nomeJogador} está no nível de ${nivel}`);

    let resp = "";
    while (resp !== "S" && resp !== "N") {
        resp = readline.question("Quer continuar? (S/N): ").trim().toUpperCase();
        if (resp !== "S" && resp !== "N") {
            console.log("Opção inválida! Digite apenas S ou N.");
        }
    }

    if (resp === "N") {
        break;
    }
}
