# JavaScript Image Resizer

A simple library for selecting a small/medium/large image based on window size i.e. mobile, tablet, desktop.

## Image Sizes

Images can be: jpg|jpeg|png|gif

Uses naming convention of: (.+-)(s|m|l)\\.(jpg|jpeg|png|gif)

* Small image must end with: -s.jpg|jpeg|png|gif
* Medium image must end with: -m.jpg|jpeg|png|gif
* Large image must end with: -l.jpg|jpeg|png|gif

### Dimensions

* Small image is considered to less than 500 pixels
* Medium image is between 500 and 769 pixels wide
* Large is 770 pixels wide or higher 

## Example

* Clone the repo
* Run _npm install_
* Run _npm start_
* Navigate to: [http://localhost:8000/example/](http://localhost:8000/example/)
* Resize the browser and see the most suitable image based on windows size displayed.

