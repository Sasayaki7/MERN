function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let success = 0;
        let trials = 0;
        while(success < 5 && trials <=100){
            if (tossCoin() ==='heads'){
                success++;
            }
            else{
                success=0;
            }
            trials++;
        }
        if(success===5){
            resolve(`Only took ${trials} times... heh`)
        }
        else{
            reject("Damn this coin must be rigged")
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
