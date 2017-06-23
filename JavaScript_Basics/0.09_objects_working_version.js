//Build this together a little at a time.
//Ask them to add more properties and methods after they get the idea.

//OBJECT LITERAL
var friend = {
	
	//Properties
	fullname    		: "",
	age					: 0,
	married				: true,
	vocation			: "",
	closeLikeABrother	: true,
	yearsKnown			: 0,
	birthday			: new Date("2000-02-20"),

	//Method
	printVocation   : function(){
		return this.vocation;
	},

	postMessageToWall : function(message){
		return message;
	},

	introduceToSisterInLaw : function(){
		if(this.yearsKnown >= 5 && this.closeLikeABrother == true && this.married == false){
			return "I want you to meet Lizzy.";
		} else {
			return "Have you tried Sailboat?";
		}
	},

}

var nickKirkes = Object.create(friend);
nickKirkes.fullname = "Nick Kirkes";
nickKirkes.age = 38;
nickKirkes.married = false;
nickKirkes.vocation = "Project Manager at Sales Force";
nickKirkes.yearsKnown = 20;

var hansKloepfer = Object.create(friend);
hansKloepfer.fullname = "Hans Kloepfer";
hansKloepfer.age = 42;
hansKloepfer.married = false;
hansKloepfer.vocation = "Sailboat Captain";
hansKloepfer.yearsKnown = 31;
hansKloepfer.birthday = ("1975-12-11");

var michael = Object.create(friend);
michael.fullname = "Michael Fiore";
michael.age = 20;
michael.married = false;
michael.vocation = "Software Vigilante";
michael.yearsKnown = 1;

