//Variables
var finn = {
	name: "Finn",
	health: 150,
	attack: 6,
	counter: 5,
};
var rey = {
	name: "Rey", 
	health: 125,
	attack: 5,
	counter: 4,
};
var kyloRen = {
	name: "Kylo Ren", 
	health: 175,
	attack: 7,
	counter: 6,
};
var darthVader = {
 	name: "Darth Vader",
 	health: 200, 
 	attack: 8,
 	counter: 7,
};
var characters = [finn, rey, kyloRen, darthVader]; //holds characters object
var playerChose = false;
var enemyChosen = false;
var currentEnemyChosen = false;
var enemiesDefeated = 0;
var choice = ""; //global scope
var yourEnemy = ""; //global scope

//Initial Character Health Points
$(".finn").html(finn.health);
$(".rey").html(rey.health);
$(".kyloren").html(kyloRen.health);
$(".darthvader").html(darthVader.health);

function gameEnd(){
	if(choice === kyloRen.name)
	$(".text").html("Game Over! You lose!");
}


$(document).ready(function(){

	gameStart();	
	function gameStart(){	
	
	var finn = {
		name: "Finn",
		health: 150,
		attack: 6,
		counter: 5,
	};
	var rey = {
		name: "Rey", 
		health: 125,
		attack: 5,
		counter: 4,
	};
	var kyloRen = {
		name: "Kylo Ren", 
		health: 175,
		attack: 7,
		counter: 6,
	};
	var darthVader = {
	 	name: "Darth Vader",
	 	health: 200, 
	 	attack: 8,
	 	counter: 7,
	};
	var characters = [finn, rey, kyloRen, darthVader]; //holds characters object
	var playerChose = false;
	var enemyChosen = false;
	var currentEnemyChosen = false;
	var enemiesDefeated = 0;
	var choice = ""; //global scope
	var yourEnemy = ""; //global scope
		
		choosePlayer_Enemy();
		function choosePlayer_Enemy(){
			$(".character").on("click", function(){
				if(playerChose === false){ 
					choice = $(this).attr("value");
					$(".text").html("You chose character: " + choice);
					$(this).removeClass("enemy");
					$(this).addClass("player"); //to differentiate player attacked
					$(".player").detach().appendTo(".player-section");
				}
				playerChose = true; //change boolean value to true so statement can't run again	
				
				if(playerChose === true){
					repositionEnemies();
					function repositionEnemies(){
						$(".enemy").detach().appendTo(".enemy-section");
					}
				}
				if(enemyChosen === false && $(this).hasClass("enemy")){
					yourEnemy = $(this).attr("value");
					$(".text").html("Your current enemy is " + yourEnemy);
					$(this).detach().appendTo(".defender-section");
					$(this).addClass("currentEnemy");
					enemyChosen = true;
					currentEnemyChosen = true;
				}
			
				currentEnemyChosen = true;
				battle();
				function battle(){
					if(currentEnemyChosen === true){
						console.log(choice + yourEnemy);
						var atkDmg = 0;
						var yourBaseAtk = 0;
						var yourHP = 0;
						var currentEnemyHP = 0;
						var enemyCounterAtk = 0;
						var connectPlayer = $("button").attr("value", false);
						$("button").on("click", function(){ 
							attack(choice, yourEnemy);
							function attack(choice, yourEnemy){
								var choice = $(".player").attr("value");
								var yourEnemy = $(".currentEnemy").attr("value");
								//finding player hp and atk
								var connectEnemy = false;
								if(connectPlayer === false){
								
									if(choice === finn.name){
										console.log(yourBaseAtk + " " + finn.attack);
										yourBaseAtk = finn.attack;
										yourHP = finn.health;
										console.log(yourBaseAtk + " " + finn.attack);
										connectPlayer = true;
									}else if(choice === rey.name){
										yourBaseAtk = rey.attack;
										yourHP = rey.health;
										connectPlayer = true;
									}else if(choice === kyloRen.name){
										yourBaseAtk = kyloRen.attack;
										yourHP = kyloRen.health;
										connectPlayer = true;
									}else if(choice === darthVader.name){
										yourBaseAtk = darthVader.attack;
										yourHP = darthVader.health;
										connectPlayer = true;
									}
								}
								atkDmg = atkDmg + yourBaseAtk;
								console.log(yourBaseAtk + " " + atkDmg);
								$(".text").html("You attacked " + yourEnemy + " for " + atkDmg +" damage.");
								
								//finding enemy hp and counter	
								if(connectEnemy === false){
									if(yourEnemy === finn.name){
										currentEnemyHP = finn.health;
										enemyCounterAtk = finn.counter;
										connectEnemy = true;
									}else if(yourEnemy === rey.name){
										currentEnemyHP = rey.health;
										enemyCounterAtk = rey.counter;
										connectEnemy = true;
									}else if(yourEnemy === kyloRen.name){
										currentEnemyHP = kyloRen.health;
										enemyCounterAtk = kyloRen.counter;
										connectEnemy = true;	
									}else if(yourEnemy === darthVader.name){ 
										currentEnemyHP = darthVader.health;
										enemyCounterAtk = darthVader.counter;
										connectEnemy = true;
									}
								}

								yourHP = yourHP - enemyCounterAtk;
								if(choice === finn.name){
									finn.health = yourHP;
									$(".finn").html(finn.health);	
								}else if(choice === rey.name){
									rey.health = yourHP;
									$(".rey").html(rey.health);
								}else if(choice === kyloRen.name){
									kyloRen.health = yourHP;
									$(".kyloren").html(kyloRen.health);
								}else if(choice === darthVader.name){
									darthVader.health = yourHP;
									$(".darthvader").html(darthVader.health);
								}

								if(yourEnemy === finn.name){
									currentEnemyHP = currentEnemyHP - atkDmg;
									finn.health = currentEnemyHP;
									$(".finn").html(finn.health);	
								}else if(yourEnemy === rey.name){
									currentEnemyHP = currentEnemyHP - atkDmg;
									rey.health = currentEnemyHP;
									$(".rey").html(rey.health);
								}else if(yourEnemy === kyloRen.name){
									currentEnemyHP = currentEnemyHP - atkDmg;
									kyloRen.health = currentEnemyHP;
									$(".kyloren").html(kyloRen.health);								}else if(choice === darthVader.name){
								}else if(yourEnemy === darthVader.name){	
									currentEnemyHP = currentEnemyHP - atkDmg;
									darthVader.health = currentEnemyHP;
									$(".darthvader").html(darthVader.health);
								}
								
								var enemyText = $("<div>");
								$(".text").append(enemyText);
								enemyText.html("Your enemy " + yourEnemy + " attacks you back for " + enemyCounterAtk +" damage.");

							}
						});
					}
				}
			});
		}//END choosePlayer();
		
		
	}//END gameStart();
/*
		for(var cEnemy = 0; cEnemy < characters.length; cEnemy++){
			if(yourEnemy === characters[cEnemy].name){
				var cEnemyCounterAtk = characters[cEnemy].counter;
				var enemyText = $("<div>");
				$(".text").append(enemyText);
				enemyText.html("Your enemy " + yourEnemy + " attacks you back for " + cEnemyCounterAtk +" damage.");
				console.log(cEnemyCounterAtk);	
			}
		}
	
*/
});














/*


* The player must then defeat all of the remaining fighters. 
Enemies should be moved to a different area of the screen.

* The player chooses an opponent by clicking on an enemy's picture.

* Once the player selects an opponent, that enemy is 
moved to a `defender area`.

* The player will now be able to click the `attack` button.
    * Whenever the player clicks `attack`, their character 
    damages the defender. The opponent will lose `HP` (health points).
     These points are displayed at the bottom of the defender's picture. 
    * The opponent character will instantly counter the attack. 
    When that happens, the player's character will lose some of their `HP`. 
    These points are shown at the bottom of the player character's picture.

The player will keep hitting the attack button in an effort to defeat 
their opponent.
When the defender's HP is reduced to zero or below, remove the enemy 
from the defender area. The player character can now choose a new opponent.
The player wins the game by defeating all enemy characters. The player
 loses the game the game if their character's HP falls to zero or below.
Game design notes:

Each character in the game has 3 attributes: Health Points, Attack Power 
and Counter Attack Power.
Each time the player attacks, their character's Attack Power increases by 
its base Attack Power.
For example, if the base Attack Power is 6, each attack will increase the 
Attack Power by 6 (12, 18, 24, 30 and so on).
The enemy character only has Counter Attack Power.
Unlike the player's Attack Points, Counter Attack Power never changes.
The Health Points, Attack Power and Counter Attack Power of each
 character must differ.
No characters in the game can heal or recover Health Points.
A winning player must pick their characters wisely by first fighting 
an enemy with low Counter Attack Power. This will allow them to grind 
Attack Power and to take on enemies before they lose all of their
 Health Points. Healing options would mess with this dynamic.
Your players should be able to win and lose the game no matter what 
character they choose. The challenge should come from picking the right 
enemies, not choosing the strongest player.

 */