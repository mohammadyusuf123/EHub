import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='min-width pt-5'>
        <h1 class="text-center text-info">Frequently Asked Questions</h1>
        <Accordion>
       <Accordion.Item eventKey="0">
         <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
         <Accordion.Body>
         <div>
                       <strong>Javascript:</strong> <br></br>
                     <ul>
                       <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                       <li>Javascript can only be run in the browsers.</li>
                       <li>It is basically used on the client-side.</li>
                       
                     </ul>
                     </div>
                     <div>
                       <strong>NodeJs:</strong>  <br></br>
                     <ul>
                       <li>NodeJS is a Javascript runtime environment.</li>
                       <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                       <li>It is mostly used on the server-side.</li>
                       
                     </ul>
                     </div>
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="1">
         <Accordion.Header>Differences between Sql and Nosql database</Accordion.Header>
         <Accordion.Body>
         <div>
                       <strong>Sql:</strong> <br></br>
                     <ul>
                       <li>These databases are not suited for hierarchical data storage.</li>
                       <li>These databases are best suited for complex queries</li>
                       <li>Vertically Scalable</li>
                       
                     </ul>
                     </div>
                     <div>
                       <strong>Nosql:</strong>  <br></br>
                     <ul>
                       <li>These databases are best suited for hierarchical data storage.</li>
                       <li>These databases are not so good for complex queries</li>
                       <li>	Horizontally scalable</li>
                       
                     </ul>
                     </div>
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="2">
         <Accordion.Header> When should you use nodejs and when should you use mongodb?</Accordion.Header>
         <Accordion.Body>
         <strong>When should  use Nodejs?</strong>  <br></br>
         Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.<br></br>
<strong>When should  use MongoDB?</strong>  <br></br>
If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="3">
         <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
         <Accordion.Body>
         First, some termes d’art need to be disambiguated. It’s not uncommon to hear somebody refer to a REST API as simply an API. Likewise, we frequently see JWTs conflated with the pattern of JWT-based authentication. JWT on its own is nothing but an open standard (RFC 7519) for transmitting messages via HTTP. JWT as a standard can be used for any message at all. It has one characteristic in particular that makes it a good tool for sending a user’s identity to a backend service. We can trust the integrity of a JWT because JWTs are signed, making them tamper-proof.
         </Accordion.Body>
       </Accordion.Item>
     </Accordion>
    </div>
    );
};

export default Blogs;