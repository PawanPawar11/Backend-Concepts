// Data Storage:
    // A place where we store data related to user, for ex: file.txt
    // But the problem arises in file storage system is that they can store the text data, but not the images, or a file under file. For this various reasons we use database. Where we can store text, images, videos, audios, file under file and much more.

// TYPES OF DBS - SQL | NoSQL (Not only SQL)
    // SQL - SQL does not store the data in table, since there are no table in storage, rather it stores data in a table format.
    // NoSQL - data is stored in object
    // for ex: {
    //     name: "Pawan",
    //     age: 20
    // }
    // NoSQL is a concept/theory, and mongoDB is a database that follows the NoSQL concept/theory.

// What and Why
    // We use database to store user name, email, profile picture, their messages, the videos and audios inside their messages, at which time those messages were etc. To store all of this info, we use database. 

// terminologies - collections, documents, schemas, keys, models
    // Frontend & React ❌ (Frontend it self contains React, so no need to specify it separately) 
    // Frontend ✅
    // Backend & Database ❌ (Again, Backend it self contains Database, so no need to specify it separately)
    // Backend ✅

    // Backend contains two server -> Application Server & Database Server. 
    // Application Server -> node.js (in our case it's node.js, but it can be Deno,Python, ASP.NET etc) 
    // Application server handles routes and accepts requests. It does everything except data related work.
    // Database Server -> MongoDB (in our case it's MongoDB, but it can postgreSQL, Firebase etc)

    // Database -> Collections -> Document
    // For ex:
    // Database: E-commerce DB
    // Collections: Users, Products, Sales etc.
    // Documents: User.Name, User.Email, User.age

    // CODE                     DATABASE
    // -------------------------------------------
    // mongoose.connect -->     database create
    // model create -->         collection
    // CREATE code -->          document
