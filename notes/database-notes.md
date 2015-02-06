# Database notes    

  * Primary Key is a unique integer that is serialized and can only be used for one entry.  
  * Foreign Key is a column or columns that references a column of another table(most often primary key)  
  * Most exposed attack vector sql injection  must be mitigated.  
  * 

### Postgresql  
  
  * createdb name;  then psql name: go to connect to db.  
  * \d [arg]; => describes the arg table, no arg describes all tables  
  * SELECT * FROM table; => shows columns and rows from table.  
  *   
  
  * [Transactions:](http://www.tutorialspoint.com/postgresql/postgresql_transactions.htm)  
    * propigation of one or more changes to the database. For example, creating or updating a record or deleting a record from the table. It is important to control transactions to ensure data integrity and to handle database errors.  
    * atomicty: ensures that all operations within the work unit are compoeted successfully; otherwise, the transaction is aborted at the point of failure and previous operations are rolled back to their former state.  
    * consistency: ensures that the db properly changes states upon a successfully conmmitted transaction.  
    * isolation: enables transactions to operate independently of and transparent to each other.  
    * durability: ensures that the result or effect of a committed transaction persists in case of a system failure.  

### [Bookshelf.js](http://bookshelfjs.org/) & [Knex.js](http://bookshelfjs.org/)  
  * ORM (object relational mapping)  
  * connection object in the knexfile.js  
  * bookshelf models are simple objects representing individual db rows, specifying the tablename and any relations to other models. They can be extended with any domain-specific methods, which dan handle components such as validations, computed properties, and access control.  
  * bookshelf extend => bookshelf.Model.extend([protoProps], [classProperties])  to create a Modle class of your own, you extend bookshelf.Model and proivde instance properties, as well as optional classProperties to be attached diretly to constructor functions.  
  * extend correctly sets up the prototype chain, so subclasses created with extend can be further extended and subclassed as far as you like.  
  
### express db connection  

  * connection to the db through app.js  
  * post to the db through routes/index.js router.post  
  * 
