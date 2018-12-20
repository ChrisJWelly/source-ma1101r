// ---- start of helpers ----
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


function is_empty_mat(mat) {
    return is_empty_list(mat);
}

function is_square(mat) {
    const size = mat_size(mat);
    return head(size) === tail(size);
}

function accumulate_n(op, init, seqs) {
    return is_empty_list(head(seqs))
           ? []
           : pair(accumulate(op, init, map(head, seqs)),
                  accumulate_n(op, init, map(tail, seqs)));
}

function transpose(mat) {
    if (is_empty_mat(mat)) { // just for convention
        return [];
    } else {
        return accumulate_n(pair, [], mat);
    }
}
// ---- end of helpers ----
// this would have been waaaay simpler if it were arrays and loops were allowed hahhaha
// but oh well, i chose this life. try to simplify these though
function is_lower_triangular(mat) {
    function check_col_upto_j(row, j, counter) {
        if (counter === j) {
            return true;
        } else {
            return head(row) === 0 &&
                   check_col_upto_j(tail(row), j, counter + 1);
        }
    }
    function check_vertical(no_of_rows, mat, counter) {
        if (counter === no_of_rows) {
            return true;
        } else {
            const curr_row = head(mat);
            return check_col_upto_j(curr_row, counter, 0) &&
                   check_vertical(no_of_rows, tail(mat), counter + 1);
        }
    }
    if (!is_square(mat)) {
        return false;
    } else if (is_empty_mat(mat) || is_1x1_mat(mat)) {
        return true; // empty matrix is for convention
    } else {
        const size = mat_size(mat);
        const no_of_rows = head(size);
        return check_vertical(no_of_rows, mat, 0);
    }
}

function is_upper_triangular(mat) {
    const transposed = transpose(mat);
    return is_lower_triangular(transposed);
}

function is_triangular(mat) {
    return is_lower_triangular(mat) || is_upper_triangular(mat);
}

function is_diagonal(mat) {
    return is_lower_triangular(mat) && is_upper_triangular(mat);
}