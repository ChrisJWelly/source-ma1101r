// ---- start of helpers ----
// ---- end of helpers ----

/* recall that m x n matrix can only be pre-multiplied with a n x o matrix
and returns a m x o matrix */
function matrix_multiplication(mat1, mat2) {
    // returns the (i,j)-entry of the multiplication of matrices
    function ij_elem_mult(i, j) {
        const row_of_mat1 = 
        return accumulate((x,y) => x + y, 0, multiplied)
    }
    const size1 = mat_size(mat1);
    const size2 = mat_size(mat2);
    if (tail(size1) !== head(size2)) {
        return undefined; // bcs you cant multiply these 2
    } else {
        return build_mat(head(size1), tail(size2), ij_elem_mult)
    }
}