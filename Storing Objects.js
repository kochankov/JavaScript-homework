function objectJ(arr)
{

    for(let i of arr)
    {
        let splitted = i.split(" -> ");
        let name = splitted[0];
        let age = splitted[1];
        let grade = splitted[2];
        let mas = {
            "Name":name,
            "Age":age,
            "Grade":grade,
        };
        for (let key in mas) {console.log(key + ": " + mas[key]);}
    }


}
