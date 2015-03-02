# Database notes    

--- 

##  3 main DB types 
  1. Relational Database (RDBMS)  {SQL}  
    * one type (SQL) with minor variations  
    * require db schema  
    * vertical scaling  => single server must be made more powerful to scale  
    * not horizontally scaleable => unable to handle big data.  
    * data manipulation => specific language using SELECT INSERT ect.  
  2. Object Database ()  {NoSQL}  
    * many types  
      * type Key-Value DB  (Redis)
      * type Document DB (MongoDB, CouchDB)  
      * type Column Family Stores DB (Cassandra, Amazon DynamoDB)  
      * type Graph DB (Neo4j, Infinite Graph, OrientDB)  
    * do not require db schema  
    * horizontally scaleable  => to add capacity simply add more servers  
    * run well on clusters  
    * data manipulation => object-oriented APIs  
  3. OLAP  

###  resources  

  * [NoSQL overvie](http://www.thoughtworks.com/insights/blog/nosql-databases-overview)  
  * [NoSQL DB explained](http://www.mongodb.com/nosql-explained)  
  *  

---      
  
