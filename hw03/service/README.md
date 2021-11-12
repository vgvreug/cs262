# CS 262 Monopoly Webservice - HW03

This is the data service application for the 
[CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project),
 which is deployed here:
          
- <https://infinite-spire-94567.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

- <https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory
and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database server,
user and password are stored as Heroku configuration variables rather than in this 
(public) repo.

We implement this sample service as a separate repo to simplify Heroku integration;
it&rsquo;s easier to auto-deploy a separate repo to Heroku. For your team project&rsquo;s 
data service, configure your Heroku app to auto-deploy from the master/main branch 
of your service repo. See the instructions for how to do this under the 
&ldquo;Deploy&rdquo; tab in your Heroku application&rsquo;s dashboard.
 

a. <https://infinite-spire-94567.herokuapp.com/>, <https://infinite-spire-94567.herokuapp.com/players>, <https://infinite-spire-94567.herokuapp.com/DogScores>,
<https://infinite-spire-94567.herokuapp.com/players/:id>,
b. nullipotent: <https://infinite-spire-94567.herokuapp.com/>, <https://infinite-spire-94567.herokuapp.com/DogScores>, <https://infinite-spire-94567.herokuapp.com/players> if the player already exists,
<https://infinite-spire-94567.herokuapp.com/players/:id> if the player isn't being deleted or updated
idempotent: <https://infinite-spire-94567.herokuapp.com/players/:id> if the player is being deleted or updated
c. The service is RESTful because it doesn't respond to SQL queries and uses HTTP commands instead.
d. I don't think thereis any evidence of an impedence mismatch.
