function factorielIt(x){
    var fac1 = 1;
    for(var k = 1; k <= x; k++){
        fac1 = fac1 * k;
    }
    return fac1;
}

function factorielRec(x){
    if (x === 1){
        return 1;
    } else {
    return x*factorielRec(x-1);
    }
}

function factorielTableau(x){
    var result = [ ];
    for(var kk = 0; kk < x.length; kk++){
        result[kk] = factorielRec(x[kk]);
    }
    return result;
}

function factorielMap(x){
    return x.map(factorielRec);
}

exports.factorielIt = factorielIt;
exports.factorielRec = factorielRec;
exports.factorielTableau = factorielTableau;
exports.factorielMap = factorielMap;
