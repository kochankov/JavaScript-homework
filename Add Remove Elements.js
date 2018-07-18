function addRemove(arr)
{
    let mas = [];

    for(let i = 0; i<=arr.length-1;i++)
    {
        let splitted = arr[i].split(' ');
        let command = splitted[0];
        let val = Number(splitted[1]);
        if(command == 'add')
        {mas.push(val);} //dobawq element
        if(command == 'remove' && val <= mas.length-1)
        {mas.splice(val, 1);} //premahva 1 element, zapochwaiki ot index val
    }

    for(let i=0; i<=mas.length-1;i++)
    {console.log(mas[i]);}

}