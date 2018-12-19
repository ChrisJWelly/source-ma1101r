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

/* swap (ero type2) is a function that has 3 parameters, lst, index 1, index 2,
and swaps the elements on index 1 and index 2
*/
const my_list = list(1,2,3,4,5);
function swap(lst, index1, index2) {
    const at_index1 = list_ref(lst, index1);
    const at_index2 = list_ref(lst, index2);
    const remove_index2 = slot_out(lst, index2);
    const remove_index1 = slot_out(remove_index2, index1);
    const slot_in_at_index2 = slot_in(at_index2, remove_index1, index1);
    return slot_in(at_index1, slot_in_at_index2, index2);
}
// question, if i change the order of line 32 and 33, will it change the effect?