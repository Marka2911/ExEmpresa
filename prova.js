const a = [1,2,3,2,2];

const b = ['comexi','dev','comexi'];

const c = [5,10,7, 8,3];


console.log("El primer array te nombres que es repeteixen? " + EsRepeteix(a));

console.log("El segon array te nombres que es repeteixen? " + EsRepeteix(b));

console.log("El tercer array te nombres que es repeteixen? " + EsRepeteix(c));


function EsRepeteix(arr){
    var esRepeteix = false;
    for(let i = 0; i < arr.length; i++){
        var contador = 0;
        for(let j = 0; j < arr.length; j++){
        if(arr[i] == arr[j])
        {
            contador++
            if (contador>=2){
                esRepeteix = true
            }
        }
    }
    }

    return esRepeteix;
}

