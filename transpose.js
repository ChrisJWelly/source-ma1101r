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
// ---- end of helper functions ----

function transpose(mat) {
    if (is_empty_mat(mat)) { // just for convention
        return [];
    } else {
        return accumulate_n(pair, [], mat);
    }
}