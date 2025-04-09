export function Roll(){
    const arr = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
    return arr;
}

export function Sum(arr){
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        ans += arr[i];
    }
    return ans;
}