var emptypro = '-'
var inpro = '#'
var maxpro = 20;

function strlong (str='-', long=10) {
    var stres = ''
    for (let i = 1; i<=long; i++){
        stres +=str
    }
    return stres
}

module.exports = (cur=0, max=100) => {
    var curpro = (cur/max)*maxpro;

    var maxprog = strlong(emptypro, maxpro);
    var inprog = strlong(inpro, curpro);

    return `[${inprog + maxprog.slice(inprog.length)}]`
}