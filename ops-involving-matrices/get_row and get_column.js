// ---- start of helpers ----
// ---- end of helpers ----

// returns a 1 x n matrix which represents the row index i of the matrix
function get_row(i, mat) {
    return list_ref(mat, i);
}

// returns an n x 1 matrix which represents the column index j of the matrix
function get_col(j, mat) {
    return map(rows => list(list_ref(rows, j)), mat);
}