// BETA FEATURE
// A function that uses prompt to input the vector. Hassle-free! :D

function gen_vector(size) {
    function iter(i, size, vect) {
        if (i === size) {
            return list(reverse(vect));
        } else {
            const elem = parse_int(prompt("What you have so far: " + reverse(vect) + "\n" +
                                          "Enter component " + (i + 1) + " out of " + size  + ":"
                                          ), 10);
            return iter(i + 1, size, pair(elem, vect));
        }
    }
    return iter(0, size, []);
}
