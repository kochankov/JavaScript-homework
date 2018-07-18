function productsign(arr)
{
    let counter=0;
    for(let i=0; i<=arr.length-1; i++)
    {
        if(arr[i]<0) { counter++; }

    }
    if (counter%2 == 0) {console.log('Positive')}
    else {console.log('Negative')}

}