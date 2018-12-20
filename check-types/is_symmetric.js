// ---- start of helper functions ----
function accumulate_n(op, init, seqs) {
    return is_empty_list(head(seqs))
           ? []
           : pair(accumulate(op, init, map(head, seqs)),
                  accumulate_n(op, init, map(tail, seqs)));
}

function is_empty_mat(mat) {
    return is_empty_list(mat);
}

function transpose(mat) {
    if (is_empty_mat(mat)) { // just for convention
        return [];
    } else {
        return accumulate_n(pair, [], mat);
    }
}

function mat_size(mat) {
    if (is_empty_list(mat)) {
        return pair(0,0);
    } else {
        return pair(length(mat), length(head(mat)));
    }
}

function is_square(mat) {
    const size = mat_size(mat);
    return head(size) === tail(size);
}
// ---- end of helper functions ----

function is_symmetric(mat) {
    return is_square(mat) && equal(mat, transpose(mat));
}