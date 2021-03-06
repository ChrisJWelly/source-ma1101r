// ---- start of helper functions ----
function list_op(op, lst1, lst2) {
    if (is_empty_list(lst1) && is_empty_list(lst2)) {
        return [];
    } else {
        return pair(op(head(lst1), head(lst2)),
                    list_op(op, tail(lst1), tail(lst2)));
    }
}
function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
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
// ---- end of helper functions ----
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

function norm(vect) {
    return math_sqrt(dot_prod(vect, vect));
}

function angle(vect1, vect2) {
    const numerator = dot_prod(vect1, vect2);
    const denominator = norm(vect1) * norm(vect2);
    return math_acos(numerator / denominator);
}

function distance(vect1, vect2) {
    return norm(mat_subtract(vect1, vect2));
}