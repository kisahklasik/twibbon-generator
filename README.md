[![Netlify Status](https://api.netlify.com/api/v1/badges/32902bc8-a10a-4584-99df-ffb15fd6b92e/deploy-status)](https://app.netlify.com/sites/posterwall/deploys)

# profilepicture-generator

## Usage
You need to host the files on a server. (For development use something like `$ php -S localhost:8000` and go to `localhost:8000/generator.html` in your browser)

What happens when you run the files locally (double click on html file):
 - Chrome will throw an `Uncaught DOMException`. 
 - (Other browsers not tested).

### Your own overlay
Simply replace the existing `overlay.png` file with your own. 
The program will automatically replace all transparent parts in the overlay-file with the parts of the uploaded profile picture. 
You do not need to worry about any size limitations, but be aware that large files may need some time to process.

## Compatibility
Your browser needs to support the `canvas`-element.

## Other notes
 - All files are static.

## Demo
https://posterwall.netlify.app/
