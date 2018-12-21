// using prompt to input
function generate_vector(size) {
    function iter(i, size, vect) {
        if (i === size) {
            return list(reverse(vect));
        } else {
            const elem = parse_int(prompt("enter element " + (i + 1) ), 10);
            return iter(i + 1, size, pair(elem, vect));
        }
    }
    return iter(0, size, []);
}
