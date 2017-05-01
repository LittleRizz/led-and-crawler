The LED Text Parser

This started out as a real brain teaser, but I’m really happy with the end result.  I also flipped back to my most comfortable editor, sublime 3.  I wrestled a lot with the best way to create a somewhat workable dot-matrix, from designing giant matrices where you would input all the values line-by-line, like an old-dot-matrix-printer, and even started playing with painting a grid on the HTML page. I finally settled on using turning a small matrix, big enough for one letter into a string, and building off of that.
I opted for a 3x5 binary grid of 1s and 0s to represent my “LED” screen, with 1’s as LEDs that were on, and 0’s for the off-ones.  if you wanted to add more letters to the LED Display, just add another 3x5 matrix with the appropriate letters lights turned on.  Making sure each letter had its own unique binary signature, I compiled all those into a dictionary, which could be easily parsed through.

As with a normal LED grid, if you ask to turn on the wrong LEDs, the program won’t know what letter you are trying to create, and will tell you so.  To complete the feel, I threw in twitter-bootstrap because it’s quick-to-implement, looks clean, and is automatically responsive.

To test the parser, feel free to select letters from the dictionary in my javascript file.  For convenience, the input for the example of “Hello” is listed below.

1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1


