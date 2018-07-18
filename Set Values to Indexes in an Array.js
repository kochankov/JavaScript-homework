function setValues(arr)
{
    let n = Number(arr[0]);
    let mas = [];
    for (let i=0; i<n; i++) {mas[i]=0;}
    for(let i = 1; i<=arr.length-1;i++)
    {
        let splitted = arr[i].split(' - ');
        let index = splitted[0];
        let val = splitted[1];
        mas[index] = val;
    }

    for(let i=0; i<=mas.length-1;i++)
    {console.log(mas[i]);}
}