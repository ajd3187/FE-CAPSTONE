# Patron & Client
For this project you will be building a comprehensive narative that demonstrates the relationships of Patrons and their many CLients

## ERD

Here is the ERD for this project:

https://drawsql.app/teams/aaron-17/diagrams/patron-client

Here are the user stories that need to be completed:
### Authentication
* As a user, who is logged out, I should only be able to see the authentication screen
* As a user who is logged out, I would like to be able to click on an authentication button and login via google.
* As a user who is logged in, I should not be able to see the authentication button.
* As a user who is logged in, I should be able to see the Patron/Client home view.
* As a user who is logged in, I should be able to see a log out button

### Routing
* As an authenticated user, if I click the Patron link on the home page, I should navigate to '/patron' and see all Patron Cards
* As an authenticated user, if I click the Client link on the home page, I should navigate to '/client' and see all client cards


### CREATE Patron
* As an authenticated user, when I create a Patron, the member object should include my uid.
* As an authenticated user, I should be able to click the NEW PATRON link in the navbar that displays a form to add a new patron.
* As an authenticated user, when I fill out the form and submit a new patron should be created in firebase and should now show in my Patrons view.

* ### CREATE Client
* As an authenticated user, when I create a Client, the member object should include my uid.
* As an authenticated user, I should be able to click the NEW CLIENT link in the navbar that displays a form to add a new patron.
* As an authenticated user, when I fill out the form and submit a new patron should be created in firebase and should now show in my Patrons view.

### READ RELATIONSHIP DETAILS
* As an authenticated user, I would like to click the VIEW DETAILS button on a Patron card and should navigate to RELATIONSHIP DETAILS page.
* As an authenticated user, I should be able to view all the relationship details for every client assigned to the patron




### UPDATE Patrons


### DELETE Patrons

