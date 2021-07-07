function selectionSort(array){
    for (let i =0; i < array.length; i++){
        let lowest = i;
        for (let j = i; j < array.length; j++){
            if (array[j] < array[lowest]){
                lowest = j;
            };
        }
        let temp = array[i]
        array[i] = array[lowest];
        array[lowest] = temp;
    }
    return array
}


console.log(selectionSort([7, 1, 15, 715, 21, 3, 7, 9, 0, 41, -21, 881, 65, 4, 61]))