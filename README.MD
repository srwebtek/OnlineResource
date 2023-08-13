## To Add Pages:
Each topic has its own folder. Therefore place the page in correct folder else create a new folder
1. New page to be named xxxxx.html
1. Include the new page within the topic folder
1. Details of new page to be added to relevant js file located in path: /assets/js/menu 

## To Start New Topic:
1. Add details of new topic to path: /assets/js/menu/content.js
1. Create a new xxxx.js for new topic to path: /assets/js/menu 
1. Add to head of navbar.js the import statement for new js file. Navbar.js path: /assets/js/navbar.js
1. Include under if condition within navbar.js the path to new js file.
1. New topic will display on page menu. Media queries may need updating. path: /assets/css/navbar.css

Following these steps will add the new page or new topic without issues.