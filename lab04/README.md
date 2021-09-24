# CS 262 - Lab 4
This lab is based on https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html

* What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?
   * The Screen construct
* What is the React Navigation concept that is analogous to a URL/URI on the Web?
  * A route
* The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?
  * No, because the syntax of the arrow function requires that the parentheses and arrow are there.
* Explain how the hard-coded movie list is presented as a list of titles on the homepage.
  * The titles are printed on the homepage, and each title is also a useState
* Explain how the details screen presents the details of a single movie.
  * The details screen gets the title, rating, and rescription from the relevent use case and print it onto the screen.
