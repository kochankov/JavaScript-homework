function print(arr)
{
    for(let i=0; i<=arr.length-1;i++) {
        if (arr[i] !== 'Stop')
        {
            console.log(arr[i]);
        }
        else break;
    }
}