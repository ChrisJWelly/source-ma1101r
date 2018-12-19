function slot_in(element, lst, index) {
    if (index === 0) {
        return pair(element, lst);
    } else {
        return pair(head(lst), slot_in(element, tail(lst), index - 1));
    }
} 

function slot_out(lst, index) {
    if (index === 0) {
        return tail(lst);
    } else {
        return pair(head(lst), slot_out(tail(lst), index - 1));
    }
}

// assume length(row1) === length(row2)
function add_rows(row1, row2) {
    if (is_empty_list(row1)) {
        return []; 
    } else {
        return pair(head(row1) + head(row2),
                    add_rows(tail(row1), tail(row2)));
    }
}

// add (ero type3) takes in 4 parameters: matrix, row_index1, row_index2 and factor.
// The function returns a matrix where the row at row_index2 becomes a sum 
// of row at row_index2 and the scalar multiple by factor of row at row_index1

function add(matrix, row_index1, row_index2, factor) {
    const row1 = list_ref(matrix, row_index1);
    const row2 = list_ref(matrix, row_index2);
    const sum = add_rows(row2, map(x => factor * x, row1));
    const slotted_out = slot_out(matrix, row_index2);
    return slot_in(sum, slotted_out, row_index2);
}

const lst1 = list(1,2,3);
const lst2 = list(3,4,5);
const lst3 = list(4,5,6);
const my_mat = list(lst1, lst2, lst3);
display("before: \n" + my_mat);
display("after: \n" + add(my_mat, 1, 2, 2));