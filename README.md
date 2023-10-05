## Overview
This repository contains an implementation of the binary search algorithm. This efficient algorithm is designed to find an item from a sorted list of items. It does so by repeatedly dividing the list in half until the possible locations are narrowed down to just one.

#### How does this algorithm help us?
The binary search algorithm helps us find numbers, letters, words, or any other items as quickly as possible. This code is specifically designed for searching numbers and can find them in the fastest way without taking a number from the user.

#### How does binary search work?
Imagine you have a thick phone book. Each page has several entries of names, followed by the person’s phone number next to it on the same line. All the names are sorted in alphabetical order, so “Aaron” appears before “Andy”. How would you go about searching for someone named “Steve”?

You’ll start by flipping the book to the middle and see what the first alphabet of the first name on the left page is. If it’s a “G”, and because you know that “S” comes later in the alphabet than “G”, you’ll flip to the middle of the right-half of the book, and repeat the same evaluation again until you find a page with names starting with “S”.

That, in essence, is the binary search algorithm. You halve a list, discard one half and continue searching through the remaining half, until you arrive (or not) at the value you’re searching for. Voila! You found what you wanted without iterating from the first item through to the last in the list - spending much less time for the same result.

## Installation & Usage
Clone this repository to your local machine using
```bash
git clone https://github.com/amirallami-code/binary-search-algorithm.git
```
It’s very simple to use. Answer the questions. Remember, if you answer even one question incorrectly, the output will be different and it won’t find your number!

## Contribution
We welcome contributions from the community. If you wish to contribute:

- Fork the project.
- Create your feature branch (`git checkout -b feature/AmazingFeature`).
- Commit your changes (`git commit -m 'Add some AmazingFeature`').
- Push to your branch (`git push origin feature/AmazingFeature`).
- Open a pull request.
- 
## License
This project does not have any license.

## Contact Information
If you have any questions or concerns about this project, please contact us at amirallami.dev@gmail.com

I hope this helps! Let me know if you have any other questions.
