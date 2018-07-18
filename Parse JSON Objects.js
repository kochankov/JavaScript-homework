function parseJSON(arr)
{
    for(let i of arr)
    {
        let mas=JSON.parse(i);
        for (let key in mas)
        {
            console.log(key[0].toUpperCase() + key.substr(1, key.length) + ": " + mas[key]);
        }
    }
}