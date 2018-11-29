UPLOADER
===========

A simple application to upload csv file and display the content in a table. Table will display 10 rows at a time.


HOW TO RUN IT
=============
npm install
npm start - start the client development build at http://localhost:3000
mvn clean install
mvn spring-boot:run


URL supported
=====
  POST:http://localhost:8080/upload
  key:file
  value: filename
  Description: Uploads the csv file and validates the entry
  
  GET : http://localhost:8080/employee
  Description : Returns the valid list of employess.
  
  GET: http://localhost:8080/download
  Description: Download the error report in a single file.

Built With
==========
Maven, React
