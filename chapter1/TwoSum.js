function sumZero(arr){
    let left =0;
    let right=0;
    while (let<right){
        let sum=arr[left]+arr[right];
        if(sum==0){
            return [arr[left],arr[right]];
        } else if (sum>0){
            right--;
        }elde{
            left++;
        }
    }
}