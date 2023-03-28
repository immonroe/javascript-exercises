const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) == true && a >= 0 && b >= 0) {
        const high = Math.max(a, b);
        const low = Math.min(a, b);
        return high * (high + 1) / 2 - (low - 1) * (low) / 2;
    }   else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;

