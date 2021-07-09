function merge(leftArr, rightArr){
    let newArr = [];
    while (leftArr.length > 0 && rightArr.length > 0){
        if(leftArr[0] < rightArr[0]){
            newArr.push(leftArr.shift())
        }
        else{
            newArr.push(rightArr.shift())
        }
    }
    return [...newArr, ...leftArr, ...rightArr]
}


function mergeSort(arr){
    if (arr.length <= 1){
        return arr
    }

    let mid = Math.floor(arr.length/2)
    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)))
}


console.log(mergeSort([5, 2, 1, 22, 61, 6, 8, 0, 19, 7, 13, 20]))