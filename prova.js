const a = [1,2,3,2,2];

const b = ['comexi','dev','comexi'];

const c = [5,10,7, 8,3];


console.log("El primer array te nombres que es repeteixen? " + EsRepeteix(a));

console.log("El segon array te nombres que es repeteixen? " + EsRepeteix(b));

console.log("El tercer array te nombres que es repeteixen? " + EsRepeteix(c));


function EsRepeteix(arr){
    const set = new Set();
    var trobat = false
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) { 
            trobat = true;
        }
        set.add(arr[i]); 
    }
    return trobat; 
}

