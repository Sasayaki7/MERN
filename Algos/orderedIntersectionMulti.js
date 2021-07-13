const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7, 9];
const expected = [1, 2, 2, 2, 6, 6, 7];

function orderedMultisetUnion(sortedA, sortedB) {

    let resultsArr = [];
    let counterA = 0;
    let counterB = 0;

    //If counterA or counterB is undefined, that means we're outside the length of the array, and we can stop the loop
    while(sortedA[counterA] !== undefined || sortedB[counterB] !== undefined){

        //If the values at sortedA and sortedB are equal, AND the value we last pushed is not the value at sortedA[counterA]
        //The second condition is necessary to avoid adding duplicates into the resultsArr
        if(sortedA[counterA] === sortedB[counterB]){
            resultsArr.push(sortedA[counterA])
            
            //Incrementing both to avoid "double-counting"
            counterA++;
            counterB++;

        }

        //If the value at sortedA[counterA] is greater than sortedB[counterB], then we want to increment sortedB[counterB].
        //We want to increment the lesser value so that the smaller value can 'catch up' to the larger value.
        //Or statement added to acocunt for situation where counterA is out of loop but sortedB still has values 
        else if (sortedA[counterA] > sortedB[counterB] || !sortedA[counterA]){
            resultsArr.push(sortedB[counterB])
            counterB++;
        }

        //This catches the case if sortedA[counterA] < sortedB[counterB]. 
        else {
            resultsArr.push(sortedA[counterA])
            counterA++;
        }
    }

    return resultsArr;

}

console.log(orderedMultisetUnion(numsA, numsB))


