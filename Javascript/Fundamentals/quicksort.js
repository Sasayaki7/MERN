function partition(arr, start, end){
    let pivot = arr[Math.floor(Math.random()*(end-start))+start]
    let i = start
    let j = end
    while (i!= j){
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot){
            j--;
        }
        let tempItem = arr[i]
        arr[i] = arr[j]
        arr[j] = tempItem
    }
    return j
}


function quicksort(arr,start, end){
    if (end-start <=1){
        return arr
    }
    let pivot = partition(arr, start, end)
    quicksort(arr, 0, pivot-1)
    quicksort(arr, pivot+1, end)
    return arr
}

let arr1 = [4, 2, 1, 0, 19, 20, 51, 3, 56, 11, 7, 8, 318231, 72, 16, 24, 5]

console.log(quicksort(arr1, 0, arr1.length-1))