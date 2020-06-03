# frontend-vaibhav-kaul

# Calen-Clone (Signzy) #
Calen-Clone is a replica of Google Calender.The project is hosted on Github https://github.com/vaibhavkaul69/frontend-vaibhav-kaul
# Technology Stack  #
---
* [Javascript](https://www.w3schools.com/js/js_intro.asp) - Used for creating and implementing the functionality like adding an event.
* [Html](https://www.w3schools.com/html/) - Used for creating the entire skeletal interface
* [Bootstrap CDN](https://getbootstrap.com/) - Used for implementing the calender and other responsiveness.
* [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)- Used for storing the event locally in the browser.

# How it works?

### On the index.html page ###

1. *First the user needs to select any month and year from the calender*
2. *I have provided 2 arrows above the calender to go to the previous and next years.*
3. *Once the user has selected a particular month then he can click on the specific date of adding event.*
4. *Once you click on the date an Add Event Dialog Box appears.*
4. *You can fill the Name, Description, Time of the event as well as you can switch On notifications for an event by checking the Add Notification button.*
5. *Click on Add Event button and your visits gets added.*
6. *To View an event click on right most Show Saved Events button on navbar*

### On events.html page ###

1. *Once you are on the View Events page click on the logo image on left side of Navbar to go back to homepage.*
2. *To search an event search it in the search box on the top right of navbar in events.html file*
3. *To delete an event click on the X icon on the bottom left of the Event-Card*
4. *To Edit an event click on the PENCIL ICON on the bottom left of Event-Card*
5. *To save the edit click in the RED TICK on the bottom left of Event-Card*

# Installation #
---
1. Use Bootstrap CDN to install all the Javascript Libraries listed below.
    https://getbootstrap.com/

2. Go to the above website and scroll down to find 4 links.
![Bootstrap CDN](https://i.imgur.com/3Sevt3E.png)

3. Copy the < CSS only > CDN link into the *head* tag of your webpage in both (events.html and indx.html).

4. Copy the < JS, Popper.js, and jQuery > CDN link just after the ending *body* tag of your webpage in both (events.html and indx.html).
   
5. The file mention in point 4 should be added in the sequence  jQuery first, then Popper.js, then Bootstrap JS.

### If you are unable to find the files then i have provided a direct link to the below ###

*Bootstrap CDN CSS* 

 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

*Bootstrap CDN Jquery File*

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>

*Bootstrap CDN Popper.js File*

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>

*Bootstrap CDN bootstrap.min.js File*    

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></script>

# Structure
---
# Interface #
---
 ### Landing Page ### 
 * This page has a big calender in the center.
    
 ![LandingPage](https://i.imgur.com/MHmxjE2.png)

### Add Event Modal ###

![AddEvent](https://i.imgur.com/W5snRn2.png)

### Explore Events Page ###

![ExploreEvents](https://i.imgur.com/pQ5LIKT.png)

 ### Access the Events Data From LocalStorage in Browser.You will only see some content there when you add any event other wise it will stay empty ### 

 ![Access the Events Data](https://i.imgur.com/ew1rub0.gifv)

# Deployment
This app is deployed at Github-Pages.  https://vaibhavkaul69.github.io/frontend-vaibhav-kaul/

# Contact Details
1. Name:Vaibhav Kaul
2. Phone:9896938770
3. Email- vaibhav.kaul2@gmail.com



