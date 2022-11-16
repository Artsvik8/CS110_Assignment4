
let toHexadecimal = (num) => {
    let map = ['A','B','C','D','E','F']

    let final = ''

    // At first we calculate for the function's parameter num instead of the result,
    // thus we do the first calculation outside of the while loop  
    let remainder = num % 16;
    let result = Math.floor(num / 16);

    final = (remainder >= 10 ? map[remainder - 10] : remainder) + final;

    while (result > 0) {
        remainder = result % 16;
        result = Math.floor(result / 16);
        final = (remainder >= 10 ? map[remainder - 10] : remainder) + final;
    }


    return final
}

console.log(toHexadecimal(3506983956))