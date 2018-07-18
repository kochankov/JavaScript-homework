function convertToJSON(arr)
{
    let obj = {};
    for(let i = 0; i<=arr.length-1;i++)
    {
        let splitted = arr[i].split(' -> ');
        let key = splitted[0];
        let val = splitted[1];
        if (isNaN(Number(val)))
        {obj[key] = val;}
        else {obj[key] = Number(val);}
    }
    console.log(JSON.stringify(obj));
}