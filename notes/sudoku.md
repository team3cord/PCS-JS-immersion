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
  * narrowPossibilites()  first pass  
  * 

    
