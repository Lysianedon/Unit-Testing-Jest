
function isEven(n) {

    // if (!parseInt(n)) {
    //     return "NaN";
    // }

    if (typeof n === 'string' && parseInt(n)) {
        return true;
    }
    
    if (n % 2 === 0) {
        return true;
    } 
    // else if (n % 2 === 1) {
    //     return false;
    // }

    return false;
}


module.exports = isEven;