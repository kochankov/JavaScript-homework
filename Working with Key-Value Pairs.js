function addRemove(arr)
{
    let mas = {};
    let found=arr[arr.length-1];

    for(let i = 0; i<arr.length-1;i++)
    {
        let splitted = arr[i].split(" ");
        let key = splitted[0];
        let value = splitted[1];
        mas[key] = value;
    }
    if(mas[found] === undefined)
    {console.log('None');}
    else
    {console.log(mas[found]);}

}