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
// ---- end of helper functions ----

/* for two matrices, to be equal, they must have the same size and
and the (i,j)-entries must be equal

this function makes use of the laziness of &&, bcs once they are not
the same size, it stops checking immediately. cond 2 assumes that they
are of the same size

this works even for empty matrices*/
function mat_equal(mat1, mat2) {
    return equal(mat_size(mat1), mat_size(mat2)) && // cond 1
           accumulate((x, y) => x && y,
                             true,
                             list_op(equal, mat1, mat2)); // cond2
}