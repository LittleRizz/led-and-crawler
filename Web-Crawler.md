
For the web crawler - 

I was basically trying to do this using 3 classes:

1.)  GUI class, which is what the user would interact with
2.) A basic class which housed the main methods for the crawler
3.) A “dirty work” class, which would handle the URLS, and parse out new URLS


1.) - The GUI Class

The way I wanted to do this was pretty straightforward;  use JSwing to create a basic gui using Flowcontrol, a Button, a JLabel, and of course a JTextField.  I would include an ActionListener for the button press, and a getText command to pull and stringify the provided URL

Button press would then execute the methods in my other two classes, starting the crawler, and printing the retrieved information into my JTable.

2.)  Basic Class (YeOldeCrawler)

This would include my limits on how many results to get, as well as some lists where i could keep URLS that have been either found or visited, and it would also keep track of whether or not my dirtyWork class was successfully loading and parsing URLS - in the event of an error, the process would stop.

3.) Dirty Work Class

This is where most of the action would happen.  I was having a lot of trouble trying to find a clean and concise way to get this to work, and I found an extension called JSoup, which a lot of forums recommended, as it’s straight built for easy http requests and parsing.

JSoup has its own methods to call when you want to connect to a URL, so i would call the url given to me by the input box (error thrown if not a valid url)
On a successful connection, the method would take any links (you could search for a keyword like “href”, and push them into the list, and the total number of visited URLS from that list would be output on the GUI Class in the JLabel section.
