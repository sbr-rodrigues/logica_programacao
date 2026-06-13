while True:
    nomeJogador = input("Jogador, qual é o seu nome? ")
    xp = int(input("Qual é a sua quantidade de experiência (XP)? "))

    if xp < 1000:
        print("Ferro")
    elif 1000 <= xp <= 2000:
        print("Bronze")
    elif 2001 <= xp <= 5000:
        print("Prata")
    elif 5001 <= xp <= 7000:
        print("Ouro")
    elif 7001 <= xp <= 8000:
        print("Platina")
    elif 8001 <= xp <= 9000:
        print("Ascendente")
    elif 9001 <= xp <= 10000:
        print("Imortal")
    else:
        print("Radiante")

    print(f"O Herói de nome {nomeJogador} está no nível de {xp}")

    resp = ""
    while resp not in ["S", "N"]:
        resp = input("Quer continuar? (S/N): ").strip().upper()
        if resp not in ["S", "N"]:
            print("Entrada inválida! Digite apenas S ou N.")
    if resp == "N":
        break
