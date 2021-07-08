
function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        for(let j = i-1; j >= 0; j--){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            else{
                break
            }
        }
    }
    return arr
}


console.log(insertionSort([12, 5, 1, 7, 2, 6, 16, 9, 901, 59, 0, -2, 11, 0]))