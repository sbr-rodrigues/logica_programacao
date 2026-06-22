console.log("Welcome adventurers!")
function rank(win, loss) {
	let gamerName = "Sabrina"
	let balanceWin = win - loss
	let nivel = ""
		if(win < 10){
    	nivel = "Iron"
    	}else if (win >= 11 && win <= 20)	{
    	nivel = "Bronze"
    	}else if (win >= 21 && win <= 50){
    	nivel = "Silver"
    	}else if (win >= 51 && win <= 80){
    	nivel = "Gold"
    	}else if (win >= 81 && win <= 90){
    	nivel = "Diamond"
    	}else if(win >=91 && win <= 100){
    	nivel = "Legendary"
    	}
    	else{
    	nivel ="Immortal"
    	}
    
console.log(`The adventurer is ${gamerName} has a win-loss balance of ${balanceWin} and is ranked as ${nivel}`)
}

rank(99, 10)