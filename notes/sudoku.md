# JerryFudd Sudoku Machine  

---   

###  data structure  

  * squares : array => 81 elements  
  * square : object => properites  
    * known: boolean  
    * possible: array => default 1-9  
    * row : int  
    * column : int  
    * box : int  

---  

### init function  

  * populateSquares();  
    * create square obj  
    * loop through input string if it is a space or . set square.known to false.
    * for value set square.known to true && square.possible to value && increment check count   
    * set all squares row, column & box.  
    
### solve function  

  * keeps track of the check count  (iteration if change)  
  * check if squares array has 81 know = true (puzzel solved)  
  * run through the functions to check for duplication in possible arrays  
  * if possible array has only one value change known to true.  increment check count  
  * once it has exausted the possiblities functions  create a clone of the squares obj  
  * create a clone of the check count  
  * using the cloned objs break off into a guessing function  
  * check for breaking the board  
  * if broken reset to fresh clone to start guessing again with the next index  
  * get first square out of the squares clone that is unknow  
  * change to know and set possible[0] to possible  
  * recursively run solve function with guess  
  * if it breaks the puzzle retry guessing function  

  

    
