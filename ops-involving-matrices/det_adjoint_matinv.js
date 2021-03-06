// ----- start of helper functions
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

function is_1x1_mat(mat) {
    const size = mat_size(mat);
    return head(size) === 1 && tail(size) === 1;
}

function ij_elem(i, j, mat) {
    return list_ref(list_ref(mat, i), j);
}

function slot_out(lst, index) {
    if (index === 0) {
        return tail(lst);
    } else {
        return pair(head(lst), slot_out(tail(lst), index - 1));
    }
}

function minor_mat(i, j, mat) {
    return map(x => slot_out(x, j),
                slot_out(mat, i));
}

function scalar_mult(scalar, mat) {
    return map(x => map(y => scalar * y, x), mat);
}
// ----- end of helper functions ----

// returns the (i, j)-cofactor of a matrix mat
function ij_cofactor(i, j, mat) {
    const is_even_sum = ((i + j) % 2 === 0); // returns boolean
    return (is_even_sum ? 1 : -1) * det(minor_mat(i, j, mat));
}

// returns the cofactor expansion along row index 0 
function cofactor_expansion(cols, mat) {
    if (cols === 0) {
        return ij_elem(0, 0, mat) * ij_cofactor(0, 0, mat);
    } else {
        // display(ij_cofactor(0, cols - 1, mat));
        return ij_elem(0, cols, mat) * ij_cofactor(0, cols, mat) + 
               cofactor_expansion(cols - 1, mat);
    }
}

// returns the determinant of the matrix calculated by cofactor expansion
function det(mat) {
    if (is_1x1_mat(mat)) {
        return head(head(mat));
    } else {
        const size = head(mat_size(mat));
        // display(size);
        return cofactor_expansion(size - 1, mat);
    }
}

// returns the classical_adjoint of matrix mat
function classical_adjoint(mat) {
    if (is_1x1_mat(mat)) {
        return list(list(1));
    } else {
        const size = head(mat_size(mat));
        return build_mat(size, size, (x, y) => ij_cofactor(y, x, mat));
    }
}
// old notes:
// doesnt work for 1 x 1 matrix. May need to add more base cases!
// Note: It doesn't work because Minor matrix and hence ij_cofactor is not defined
// for a 1 x 1 matrix. 

// new notes:
// returns the inverse of a matrix by computing the determinant and adjoint
function mat_inv(mat) {
    const mat_det = det(mat);
    // display(mat_det);
    if (mat_det === 0) {
        return undefined;
    } else if (is_1x1_mat(mat)) { // perhaps adding this will do 
        // actually, this is no longer necessary. Just add classical_adjoint's
        // definition to involve 1x1 matrix
        const the_elem = head(head(mat));
        return list(list(1 / the_elem));
    } else {
        return scalar_mult((1 / mat_det), classical_adjoint(mat));
    }
}
