//Object Literal
var player ={	//properties
		name             :"",
		life             :100,
		damage           :0, //attackPoints,
		hasSniperRiffle  :true,
		hasSword         :false,
		rank             :["soilder","mage","spartan","barbarian"],
	    Specialweapons          :["wand","bat","health pack","barbarian"],




		//Methods
		challenge        :function(){
			console.log("Sir,would you like to battle");
		},

		fightMe          :function(){
			console.log("FIGHT ME NOW" + this.name);
		},

		attack          :function(target){
			console.log(this+"attacks"+ target.name + "for"+ this.damage);
			target.life -=this.damage;
		},

		pickUpSword    :function(){
			if(this.hasSword===true){
				console.log(this.name + "picked up sword");
		}

	},                      
		


var saul=object.create(player);
saul.name="saul"
saul.life=120;
saul.damage=20;
saul.hasSniperRiffle=true;
console.log(saul.name);
console.log(saul.life);
saul.challenge();
saul.hasSword=true






var erik=Object.create(player);
erik.name="erik"
erik.life=120;
erik.damage=200;
erik.hasSniperRiffle=true;
console.log(erik.name);
console.log(erik.life);
erik.fightMe
erik.attack(saul)