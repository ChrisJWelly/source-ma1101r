// ---- start of helpers ----
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
// ---- end of helpers ----

function is_orthogonal(vect1, vect2) {
    return dot_prod(vect1, vect2) === 0;
}

function is_orthogonal_set(lst_of_vect) {
    if (length(lst_of_vect) === 1) {
        return true;
    } else {
        const first_vect = head(lst_of_vect);
        const rest_vect = tail(lst_of_vect);
        const check_with_rest = map(x => is_orthogonal(first_vect, x), rest_vect);
        const first_orth_with_rest = accumulate((x, y) => x && y, true, check_with_rest);
        return first_orth_with_rest && is_orthogonal_set(rest_vect);
    }
}