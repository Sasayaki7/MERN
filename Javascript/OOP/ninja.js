class Ninja{
    constructor(name, speed=3, strength=3){
        this.name = name;
        this.health = 100;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name}. Health: ${this.health}. Speed: ${this.speed}. Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health+=10;
    }
}





const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

