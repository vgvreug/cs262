# CS 262 - Lab 6
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/06hci/lab.html

This application reads data from https://www.googleapis.com/books/v1/volumes?q=jane%20austen and prints the title and author on the screen.

* What do the hooks in this code do?
  * useEffect allows you to preform functions and useState alters the state of the application upon use
* Modify the URL to some invalid value and explain how the code responds.
  * The application displays a blank screen, because the location given does not have any data stored in it for the application to fetch.
