class Card{
    constructor(name, cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power=power;
        this.resilience=res;
    }

    attack(target){
        target.resilience -=this.power;
    }

    getStats(){
        console.log(`${this.name}'s stats: Power: ${this.power}, Resilience: ${this.resilience}`)
    }
}


class Effect extends Card{
    constructor(name, cost, stat, magnitude){
        super(name, cost);
        this.magnitude = magnitude;
        this.stat = stat;
        this.text = `${stat < 0 ? 'Reduce ': 'Increase '} the target's ${this.stat} by ${this.magnitude}`;
    }

    play( target ) {
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


console.log('================Turn 1=========================')
rbn = new Unit('Red Belt Ninja', 3, 3, 4);
hardAlgo = new Effect('Hard Algorithm', 2, 'resilience', 3);
hardAlgo.play(rbn);
rbn.getStats();
bbn = new Unit('Black Belt Ninja', 4, 5, 4)
upr = new Effect('Unhandled Promise Rejection', 1, 'resilience', -2);
upr.play(rbn);
console.log('================Turn 2=========================')
rbn.getStats();
bbn.getStats();
pairP = new Effect('Pair Programming', 3, 'power', 2);
pairP.play(rbn);
rbn.attack(bbn);
console.log('================Turn 3=========================')
rbn.getStats();
bbn.getStats();