#About

Continued development of the [scrolling content template](https://github.com/AndrewStaroscik/scrolling-content-template). 

Changes include:

* A new way to add text so that they show up on the page as HTML rather than being injected into the page by js

* The illustration has been converted from a SVG element to a canvas based image to improve performance. 

* The position of the text elements are now calculated based on the position of the previous element so that changes made in one place propagate down the page. This will make it easier to make incremental changes. 

* visual transitions are linked to text position so that they will change in response to changes in edits made to the text positions it is linked to. 



#To get started

run `npm install`

#Development

`npm run start` - starts the development server. The page can be viewed at localhost:8080 or over the local network (to preview on mobile devices)

#Production

`npm run build` - generates static resources in the build folder that can be used as sigle page or embeded into a page on a site (such as a post on docpad or jekyll)

