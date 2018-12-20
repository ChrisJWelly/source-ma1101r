// ---- start of helpers ----
function build_mat(r, c, fun) {
    return build_list(r, i => build_list(c, j => fun(i, j)));
}

function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}

function list_op(op, lst1, lst2) {
    if (is_empty_list(lst1) && is_empty_list(lst2)) {
        return [];
    } else {
        return pair(op(head(lst1), head(lst2)),
                    list_op(op, tail(lst1), tail(lst2)));
    }
}
// ---- end of helpers ----

/* recall that m x n matrix can only be pre-multiplied with a n x o matrix
and returns a m x o matrix */
function mat_mult(mat1, mat2) {
    // returns the (i,j)-entry of the multiplication of matrices
    function ij_elem_mult(i, j) {
        // not using get_row and get_col bcs slightly diff here
        const row_of_mat1 = list_ref(mat1, i);
        const col_of_mat2 = map(rows => list_ref(rows, j), mat2);
        const multiplied = list_op((x, y) => x * y, row_of_mat1, col_of_mat2);
        return accumulate((x,y) => x + y, 0, multiplied);
    }
    const size1 = mat_size(mat1);
    const size2 = mat_size(mat2);
    if (tail(size1) !== head(size2)) {
        return undefined; // bcs you cant multiply these 2
    } else {
        return build_mat(head(size1), tail(size2), ij_elem_mult);
    }
}