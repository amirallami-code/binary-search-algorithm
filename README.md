## Binary Search Algorithm
#### How does this algorithm help us?
It helps us find numbers or letters, words or anything else as quickly as possible.
This code is intended for searching numbers and can find them in the fastest way without taking a number from the user

#### How does binary search work?
Pretend you have a thick phone book. Each page has several entries of names, followed by the person's phone number next to it on the same line, and all the names are sorted by alphabetical order, so "Aaron" appears before "Andy". How would you go about searching for someone named "Steve"?

Naturally, you'll start by flipping the book to the middle and see what the first alphabet of the first name on the left page is. It turns out that it's a "G". And because you know that "S" happens later in the alphabetical system than "G", what you'll naturally do next is flip to the middle of the right-half of the book, and repeat the same evaluation again until you find a page with names starting with "S".

That, in essence, is the binary search algorithm. You half a list, discard one half and continue searching through the remaining half, until you arrive (or not) at the value you're searching for. Voila! You found what you wanted without iterating from the first item through to the last in the list - spending much less time for the same result.
