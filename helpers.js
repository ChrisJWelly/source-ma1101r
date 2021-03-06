// most of the following helper functions can be found in Source Chapter 2 or 4 documentation
// these helper functions will be used throughout the project


// ----- self-made helper functions: -----
/* slot_in is a function that takes 3 arguments, and slots in
an element into a specified index of the list
The input assumes index < length(list)
*/
function slot_in(element, lst, index) {
    if (index === 0) {
        return pair(element, lst);
    } else {
        return pair(head(lst), slot_in(element, tail(lst), index - 1));
    }
} 

// slot_out removes an element from the index i of the list, thus returning
// a list of size n - 1 if the original input list has a size of n
function slot_out(lst, index) {
    if (index === 0) {
        return tail(lst);
    } else {
        return pair(head(lst), slot_out(tail(lst), index - 1));
    }
}

// list_op performs a binary operation op on the nth element of lst1 with
// the nth element of lst2, and returns the resulting list
function list_op(op, lst1, lst2) {
    if (is_empty_list(lst1) && is_empty_list(lst2)) {
        return [];
    } else {
        return pair(op(head(lst1), head(lst2)),
                    list_op(op, tail(lst1), tail(lst2)));
    }
}

// displays every element in the list. Useful for a set of vectors
function display_all(xs) {
    for_each(display, xs);
}
// ----- end of self-made helper functions ----

// ---- a helper function from one of the reflection sessions ----
// R6:
/* The function accumulate_n is similar to accumulate except that it takes as its third argument
a list of lists, which are all assumed to have the same number of elements. It applies
the designated accumulation function to combine all the first elements of the sequences,
all the second elements of the sequences, and so on, and returns a list of the results. For
instance, if s is a list containing four lists,
list(list(1, 2, 3), list(4, 5, 6), list(7, 8, 9), list(10, 11, 12))
then the value of
accumulate_n((x, y) => x + y, 0, s);
should be the list list(22, 26, 30).*/

function accumulate_n(op, init, seqs) {
    return is_empty_list(head(seqs))
           ? []
           : pair(accumulate(op, init, map(head, seqs)),
                  accumulate_n(op, init, map(tail, seqs)));
}

// ----- end of helpers from reflection sessions -----

// ----- copied from Source Documentation -----
/* these functions are pre-defined in the Source environment and codes in this project
will not have these functions defined in the beginning of the document. The definitions
in this document is for reference purposes only*/
function is_list(xs) {
    return is_empty_list(xs) || (is_pair(xs) && is_list(tail(xs)));
}
    
// equal computes the structural equality
// over its arguments
function equal(item1, item2){
    return (is_pair(item1) && is_pair(item2))
            ? (equal(head(item1), head(item2)) &&
              equal(tail(item1), tail(item2)))
            : (is_empty_list(item1) && is_empty_list(item2))
              || item1 === item2;
}

// returns the length of a given argument list
// assumes that the argument is a list
function length(xs) {
    return is_empty_list(xs)
           ? 0
           : 1 + length(tail(xs));
}

// map applies first arg f, assumed to be a unary function,
// to the elements of the second argument, assumed to be a list.
// f is applied element-by-element:
// map(f, [1, [2, []]]) results in [f(1), [f(2), []]]
function map(f, xs) {
    return is_empty_list(xs)
           ? []
           : pair(f(head(xs)), map(f, tail(xs)));
}

// build_list takes a non-negative integer n as first argument,
// and a function fun as second argument.
// build_list returns a list of n elements, that results from
// applying fun to the numbers from 0 to n-1.
function build_list(n, fun){
    function build(i, fun, already_built) {
        return i < 0
               ? already_built
               : build(i - 1, fun, pair(fun(i),
                       already_built));
}
return build(n - 1, fun, []);
}

// for_each applies first arg fun, assumed to be a unary function,
// to the elements of the second argument, assumed to be a list.
// fun is applied element-by-element:
// for_each(fun, [1, [2, []]]) results in the calls fun(1) and fun(2).
// for_each returns true.
function for_each(fun, xs) {
    if (is_empty_list(xs)) {
        return true;
    } else {
        fun(head(xs));
        return for_each(fun, tail(xs));
    }
}

// to_string uses JavaScript’s + to turn its argument into a string
function to_string(x) {
    return x + "";
}

// list_to_string returns a string that represents the argument list.
// It applies itself recursively on the elements of the given list.
// When it encounters a non-list, it applies toString to it.
function list_to_string(xs) {
    return is_empty_list(xs)
           ? "[]"
           : is_pair(xs)
             ? "[" + list_to_string(head(xs)) + ","+
                list_to_string(tail(xs)) + "]"
             : to_string(xs);
}

// reverse reverses the argument, assumed to be a list
function reverse(xs) {
    function rev(original, reversed) {
      return is_empty_list(original)
             ? reversed
             : rev(tail(original),
                    pair(head(original), reversed));
    }
    return rev(xs, []);
}

// append first argument, assumed to be a list, to the second argument.
// In the result, the [] at the end of the first argument list
// is replaced by the second argument, regardless what the second
// argument consists of.
function append(xs, ys) {
    return is_empty_list(xs)
           ? ys
           : pair(head(xs),
                  append(tail(xs), ys));
}

// member looks for a given first-argument element in the
// second argument, assumed to be a list. It returns the first
// postfix sublist that starts with the given element. It returns [] if the
// element does not occur in the list
function member(v, xs){
    return is_empty_list(xs)
           ? []
           : (v === head(xs))
              ? xs
              : member(v, tail(xs));
}

// removes the first occurrence of a given first-argument element
// in second-argument, assmed to be a list. Returns the original
// list if there is no occurrence.
function remove(v, xs){
    return is_empty_list(xs)
           ? []
           : v === head(xs)
             ? tail(xs)
             : pair(head(xs),
                    remove(v, tail(xs)));
}

// Similar to remove, but removes all instances of v
// instead of just the first
function remove_all(v, xs) {
    return is_empty_list(xs)
           ? []
           : v === head(xs)
             ? remove_all(v, tail(xs))
             : pair(head(xs),
                    remove_all(v, tail(xs)));
}

// filter returns the sublist of elements of the second argument
// (assumed to be a list), for which the given predicate function
// returns true.
function filter(pred, xs){
    return is_empty_list(xs)
           ? xs
           : pred(head(xs))
             ? pair(head(xs),
                    filter(pred, tail(xs)))
             : filter(pred, tail(xs));
}

// enumerates numbers starting from start, assumed to be a number,
// using a step size of 1, until the number exceeds end, assumed
// to be a number
function enum_list(start, end) {
    return start > end
           ? []
           : pair(start,
                  enum_list(start + 1, end));
}

// Returns the item in xs (assumed to be a list) at index n,
// assumed to be a non-negative integer.
// Note: the first item is at position 0
function list_ref(xs, n)  {
    return n === 0
           ? head(xs)
           : list_ref(tail(xs), n - 1);
}

// accumulate applies an operation op (assumed to be a binary function)
// to elements of sequence (assumed to be a list) in a right-to-left order.
// first apply op to the last element and initial, resulting in r1, then to
// the second-last element and r1, resulting in r2, etc, and finally
// to the first element and r_n-1, where n is the length of the
// list.
// accumulate(op, zero, list(1, 2, 3)) results in
// op(1, op(2, op(3, zero)))
function accumulate(f, initial, xs) {
    return is_empty_list(xs)
           ? initial
           : f(head(xs),
              accumulate(f, initial, tail(xs)));
}
// ----- end of pre-defined functions -----