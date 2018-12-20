/* an abstraction to build a matrix that has r rows and c columns. 
The (i,j)-entry of the matrix depends on fun, which is binary function which takes as arguments
i and j */
function mat_builder(r, c, fun) {
    return build_list(r, i => build_list(c, j => fun(i, j)));
}

// returns a pair where the head is the number of rows the matrix has and the tail is the number 
// of columns the matrix has
function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}
// returns true if the input matrix is a 1 x 1 matrix and false otherwise
function is_1x1_mat(mat) {
    const size = mat_size(mat);
    return head(size) === 1 && tail(size) === 1;
}

// returns true if the input matrix is an empty matrix and false otherwise
function is_empty_mat(mat) {
    return is_empty_list(mat);
}

// returns the (i, j)-entry of the of matrix mat, where i and j are indices
function ij_elem(i, j, mat) {
    return list_ref(list_ref(mat, i), j);
}

// returns the minor matrix of matrix mat by removing the row index i and column index j
function minor_mat(i, j, mat) {
    return map(x => slot_out(x, j),
                slot_out(mat, i));
}
