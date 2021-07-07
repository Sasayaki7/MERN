class Sensei extends Ninja{
    constructor(name, speed=10, strength=10){
        super(name, speed, strength);
        this.health = 200;
        this.wisdom=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('You must not touch the sake.')
    }
}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"