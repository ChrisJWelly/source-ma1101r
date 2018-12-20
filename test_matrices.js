// Collection of test matrices
// empty matrix
const empty = [];

// 1x1 matrices:
const m1_1x1 = list(list(0));

const m2_1x1 = list(list(1));

// 2x2 matrices:
const m1_2x2 = list(list(2,0),
                    list(1,2));

const m2_2x2 = list(list(1,8),
                    list(8,1));

const zero_2x2 = list(list(0,0),
                      list(0,0));

const identity_2x2 = list(list(1,0),
                          list(0,1));

// 3x3 matrices
const m1_3x3 = list(list(1,2,3),
                    list(4,5,6),
                    list(7,8,9));

const m2_3x3 = list(list(1,0,0),
                    list(0,1,1),
                    list(1,0,0));

const m3_3x3 = list(list(3,5,6),
                    list(2,7,8),
                    list(0,1,3));

const m4_3x3 = list(list(2,4,5),
                    list(0,3,1),
                    list(0,0,0));

const m5_3x3 = list(list(2,0,0),
                    list(1,8,0),
                    list(3,4,5));
                    
const zero_3x3 = list(list(0,0,0),
                      list(0,0,0),
                      list(0,0,0));

const identity_3x3 = list(list(1,0,0),
                          list(0,1,0),
                          list(0,0,1));

// 2x3 matrices
const m1_2x3 = list(list(2,1,8),
                    list(3,5,6));

const m2_2x3 = list(list(1,0,9),
                    list(8,1,9));

// 3x2 matrices
const m1_3x2 = list(list(2,3),
                    list(1,5),
                    list(8,6));

const m2_3x2 = list(list(1,8),
                    list(0,1),
                    list(9,9));