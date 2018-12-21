// ---- start of helpers ----
function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}

function build_mat(r, c, fun) {
    return build_list(r, i => build_list(c, j => fun(i, j)));
}

function zero_mat(r, c) {
    return build_mat(r, c, (x, y) => 0);
}

function list_op(op, lst1, lst2) {
    if (is_empty_list(lst1) && is_empty_list(lst2)) {
        return [];
    } else {
        return pair(op(head(lst1), head(lst2)),
                    list_op(op, tail(lst1), tail(lst2)));
    }
}

function mat_add(mat1, mat2) {
    if (!equal(mat_size(mat1), mat_size(mat2))) {
        display("mat_add: Matrices are not of the same size");
        return undefined;
    } else if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const added_rows = list_op((x, y) => x + y, curr_row1, curr_row2);
        return pair(added_rows,
                    mat_add(tail(mat1), tail(mat2)));
    }
}

function mat_subtract(mat1, mat2) {
    if (!equal(mat_size(mat1), mat_size(mat2))) {
        display("mat_subtract: Matrices are not of the same size");
        return undefined;
    } else if (is_empty_list(mat1) && is_empty_list(mat2)) {
        return [];
    } else {
        const curr_row1 = head(mat1);
        const curr_row2 = head(mat2);
        const subtracted_rows = list_op((x, y) => x - y, curr_row1, curr_row2);
        return pair(subtracted_rows,
                    mat_subtract(tail(mat1), tail(mat2)));
    }
}

function scalar_mult(scalar, mat) {
    return map(x => map(y => scalar * y, x), mat);
}

function dot_prod(vect1, vect2) {
    function dot_prod_row(row_vect1, row_vect2) {
        const row1 = head(row_vect1);
        const row2 = head(row_vect2);
        const multiplied = list_op((x, y) => x * y, row1, row2);
        return accumulate((x, y) => x + y, 0, multiplied);
    }
    function dot_prod_col(col_vect1, col_vect2) {
        const col1 = map(head, col_vect1);
        const col2 = map(head, col_vect2);
        const multiplied = list_op((x, y) => x * y, col1, col2);
        return accumulate((x, y) => x + y, 0, multiplied);
    }
    const is_row_vect = head(mat_size(vect1)) === 1;
    return is_row_vect
           ? dot_prod_row(vect1, vect2)
           : dot_prod_col(vect1, vect2);
}

function display_all(xs) { // useful to show results!
    for_each(display, xs);
}
// ---- end of helpers ----

// transforms a basis into an orthogonal (not orthonormal) basis!
function gram_schmidt(basis_vects) {
    const size = mat_size(head(basis_vects));
    const is_row_vect = head(size) === 1; // probably not needed
    const zero_vect = zero_mat(head(size), tail(size));
    function indiv_op(curr_vect, individual) { // not sure what to call this oops
        const numer = dot_prod(curr_vect, individual);
        const denom = dot_prod(individual, individual);
        const scalar = numer / denom;
        return scalar_mult(scalar, individual);
    }
    function trans_to_orth(original, transformed) {
        if (is_empty_list(original)) { //everything has transformed
            return reverse(transformed);
        } else {
            const curr_vect = head(original);
            const rest = tail(original);
            const do_fancy_things = map(x => indiv_op(curr_vect, x), transformed);
            const summation = accumulate(mat_add, zero_vect, do_fancy_things);
            const new_vect = mat_subtract(curr_vect, summation);
            return trans_to_orth(rest, pair(new_vect, transformed));
        }
    }
    return trans_to_orth(tail(basis_vects), list(head(basis_vects))); //because u1 = v1
}