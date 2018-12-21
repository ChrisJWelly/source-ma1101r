# source-ma1101r
Attempting to program MA1101R Linear Algebra I, using CS1101S' Source (AY18/19 Sem1 edition). Currently, functions are programmed without the Array data structure and only using pairs and lists. Thus, these programs should be able to be run using Source Chapter 2. Note that programs are written with functionality in mind, and not effieciency!  
  
Programs are based on the MA1101R textbook Linear Algebra: Concepts on Euclidean Spaces (2nd Edition) by Ma, Tan and Ng, as well as concepts introduced in tutorials/homeworks/exams of AY18/19 Sem 1  

Goals:
1. Basic Matrix functions:
   - [x] Matrix Equality
   - [x] transpose
   - [x] is_triangular
   - [x] is_diagonal
   - [x] is_symmetric
   - [x] Determinant
   - [x] Adjoint
   - [x] Inverse
2. Matrix Operations:
   - [x] Matrix Addition
   - [x] Matrix Subtraction
   - [x] Scalar Multiplication
   - [x] Matrix Multiplication
3. Gaussian Elimination:
   - [x] EROs
   - [ ] GE up to Row-Echelon Form (could refer to CS1101S AY18/19 Sem1 Mock PA)
   - [ ] GJE up to Reduced Row-Echelon Form (*important to work towards!*) (*Promoted to current ultimate goal :D*)
   - [ ] Using RREF to return solution to a system (maybe in the form of a list?)
4. Functions related to orthogonality:
   - [x] Dot product (should work if both are rows or both are columns)
   - [x] is_orthogonal (for two vectors)
   - [x] is_orthogonal_set (for a list of vectors)
   - [x] Norm
   - [x] Angle?? ~~Need to look into inverse cosines tho~~ it's math_acos() !
   - [x] Gram-Schmidt Process (transforms a list of vectors to a list where is_orthogonal_set returns true) ~~(*current ultimate goal!*)~~ On 21 Dec 2018, I successfully wrote this function! Can't believe it :')
5. Miscellaneous:
   - [ ] Trace of a matrix
   - [ ] is_stochastic