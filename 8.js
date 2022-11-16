let gcd = (num1, num2) => {
    // If the first integer is bigger than the second, we swap the places
    if (num1 < num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    if (num2 == 0) {
        return num1
    } else {
        // Euclidean algorith is in form num1 = n * num2 + (num1 % num2}
        // We don't care for n, so we can recursively go over all numbers
        return gcd(num2, num1 % num2)
    }
}

let lcm = (num1, num2) => {
    // From math, we know that lcm(a,b) = (a * b) / gcd(a,b)
    return (num1 * num2) / gcd(num1, num2);
}
console.log(gcd(5, 27))
console.log(lcm(5, 27));
