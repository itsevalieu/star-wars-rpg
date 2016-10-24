/*Steps

1. Allow user to click on the img of a character
	-moves character into "Your Character" heading
	-enemy charas moved to "Your Enemies to Attack heading"
2. Allow user to click on an enemy in the enemy section
	-If statement, must choose from enemy box
	-Selected enemy moved to Defender Section
3. Player allowed to click attack button
	-(IF)must meet the conditions of their character and enemy being chosen
	-If clicked attack enemy:
		-Enemy loses HP
			-Represented HP under enemy shown changes
			*need function 
		-text shows how much HP dmg made by your character to enemy

		-Enemy attacks back:
			-your chara HP loses some
			-rep HP under chara changes
			*need function
			-show text of how much HP dmg received
	-this goes on until HP =0
		-IF HP of enemy == 0: then remove enemy pic from defender area
		-Player can choose new opponent
-----------------------
Character Attributes:
1.Health Points = change according to atk dmg
2.Attack Power
	new base attack power = current base attack power + base attack power
		-each time they attack

3.Counter Attack Power
	never changes, set amt
-----------------------
Characters:

A] Name: 

B]

C]

D]

Okay, so I need to get started. Functions! What functions are needed in this game?

function gameStart(){
	1. choosePlayer();
	2. repositionEnemies();
	3. chooseEnemy();
	4. battle();
		5. attack();
		6. counter();

}
function choosePlayer(){
	1. on click, player character is chosen
	2. player character is moved to Your Player section
	3. player chosen = true
	4. display to Text section, name of chosen character
}
function repositionEnemies(){
	1. if player is chosen = true, then move all other
	characters to Enemy Section
	2. add class "enemies" to these characters
}
function chooseEnemy(){
	1. on click, "enemies", current enemy is chosen
	2. current enemy is moved to Defender section
	3. current Enemy is chosen = true
	4. display to Text section, name of chosen current Enemy
}
function battle(){
	1. if current enemy is chosen = true, then let player attack
		2. on click button function (){
			3. attack(){};
			4. counter(){};
		};
	5. if player hp = 0 or all enemies defeated (var), then end game
		6. gameEnd(){};
	7. if player chooses to play again:
		8. gameReset(); 
}
function attack(player, current enemy){
	1. player deals atk dmg to current enemy hp
		2. current enemy hp = current enemy hp - player dmg
	3. display to text dmg made
	4. display to current enemy hp loss
	5. player current atk = current atk + base atk;
	6. return current atk
}
function counter(current enemy, player){
	1. enemy deals counter dmg to player hp
		2. player hp = player hp - counter dmg
	3. display to text dmg made
	4. display to player hp loss
	5.
	5. return ???
}
function repositionImage(){
	1. current enemy img.hide(); remove from defender section
}
function gameEnd(){
	1. if(player hp === 0), then display to text game over.
	2. if(enemies defeat === 3), then display to text, you win!
}
function gameReset(){}
	1. reposition all characters back to selection section
	2. reset hp, atk dmg;
	3. empty display();
	4. reset all booleans;
}
//Variables
var finn = {
	name: "Finn",
	health: 150,
	attack: 6,
	counter: 5,
};
var jake = {
	name: "Jake", 
	health: 125,
	attack: 5,
	counter: 4,
};
var iceking = {
	name: "Ice King", 
	health: 175,
	attack: 7,
	counter: 6,
};
var princessBP = {
 	name: "Princess BP",
 	health: 200, 
 	attack: 8,
 	counter: 7,
};
var characters = [finn, jake, iceking, princessBP]; //holds characters object
var playerChose = false;
var enemyChosen = false;
var currentEnemyChosen = false;
var enemiesDefeated = 0;
var choice = ""; //global scope
var yourEnemy = ""; //global scope

//Initial Character Health Points
$(".finn").html(characters[0].health);
$(".jake").html(characters[1].health);
$(".iceking").html(characters[2].health);
$(".bgp").html(characters[3].health);

$(document).ready(function(){

	gameStart();	
	function gameStart(){	
	var finn = {
		name: "Finn",
		health: 150,
		attack: 6,
		counter: 5,
	};
	var jake = {
		name: "Jake", 
		health: 125,
		attack: 5,
		counter: 4,
	};
	var iceking = {
		name: "Ice King", 
		health: 175,
		attack: 7,
		counter: 6,
	};
	var princessBP = {
	 	name: "Princess BP",
	 	health: 200, 
	 	attack: 8,
	 	counter: 7,
	};
	var characters = [finn, jake, iceking, princessBP]; //holds characters object
	var playerChose = false;
	var enemyChosen = false;
	var currentEnemyChosen = false;
	var enemiesDefeated = 0;
	var choice = ""; //global scope
	var yourEnemy = ""; //global scope

		//function choosePlayer(){
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
				//function chooseEnemy(){
			//$(".character").on("click", function(){
				if(enemyChosen === false && $(this).hasClass("enemy")){
					yourEnemy = $(this).attr("value");
					$(".text").html("Your current enemy is " + yourEnemy);
					$(this).detach().appendTo(".defender-section");
					$(this).addClass("currentEnemy");
					enemyChosen = true;
					currentEnemyChosen = true;
				}
			//});
		//}//END chooseEnemy();
		//currentEnemyChosen = true;
		//battle();
		//function battle(){
			//if(currentEnemyChosen === true){
				//var choice = $(".player").attr("value");
				//var yourEnemy = $(".currentEnemy").attr("value");
				console.log(choice + yourEnemy);
				$("button").on("click", function(){ 
					attack(choice, yourEnemy);
					function attack(choice, yourEnemy){
						for(var i = 0; i < characters.length; i++){
							if(choice === characters[i].name){
								var yourBaseAtk = characters[i].attack;
								var atkDmg = 0;
								atkDmg = atkDmg + yourBaseAtk;
								$(".text").html("You attacked " + yourEnemy + " for " + atkDmg +" damage.");
								console.log(choice + atkDmg);
							}
							if(yourEnemy === characters[i].health){
								var currentEnemyHP = characters[i].health;
								currentEnemyHP = currentEnemyHP - atkDmg;
								characters[i].health = currentEnemyHP;	
								console.log(currentEnemyHP);					
							} 
						}
					}
				});
			//}
		//}
			});
		//}//END choosePlayer();
		
		
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
	});
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