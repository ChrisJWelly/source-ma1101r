// ---- start of helpers ----
function build_mat(r, c, fun) {
    return build_list(r, i => build_list(c, j => fun(i, j)));
}
// ---- end of helpers ----

// returns a zero matrix with r rows and c columns
function zero_mat(r, c) {
    return build_mat(r, c, (x, y) => 0);
}

// returns the identity matrix of order n
function identity_mat(n) {
    return build_mat(n, n, (x, y) => (x === y)
                                     ? 1
                                     : 0);
}