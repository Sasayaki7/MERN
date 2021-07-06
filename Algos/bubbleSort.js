function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        let swapped = false;

        for (let j = 0; j < arr.length - i - 1; j++){
            if (arr[j] > arr[j+1]){
                let tempLower = arr[j+1]
                arr[j+1] = arr[j];
                arr[j] = tempLower
                swapped =true;
            }
        }
        if (!swapped){
            break
        } 
    }

    return arr
}



function bubbleSortWithWhile(arr){
    let swapped = true;
    let counter = 0;
    while (swapped){
        swapped = false;
        
        for (let j = 0; j < arr.length - counter - 1; j++){
            if (arr[j] > arr[j+1]){
                let tempLower = arr[j+1]
                arr[j+1] = arr[j];
                arr[j] = tempLower
                swapped =true;
            }
        }
        counter ++;



    }

    return arr
}

testArry = [5, 1, 6, 2, 8, 91, 21, 0, 3, 17, 7]

console.log(bubbleSortWithWhile(testArry))