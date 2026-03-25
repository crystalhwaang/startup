# Food Fetch

[My Notes](notes.md)

Food Fetch is an application that provides recipes to all of its users. Enter ingredients and receive ideas for recipes that can be made with those ingredients, or simply look up a desired dish and options will be provided. Upload photos or recipes of your own dishes that have been made!

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever had a random assortment of ingredients in your pantry and fridge that you don't know what to do with? The Food Fetch app makes it so that you can enter ingredients that you have in your household that you need to use up and the application spits out recipes that contain those ingredients. If you already have an idea of what you would like to cook, find the top recipes of that dish or similar dishes you could make. Upload photos of your dishes and share it with the rest of the Food Fetch community!

### Design

![Design image of Food Fetch Website](foodFetchDesign.png)

Here is a sequence diagram that shows how people would interact with the website and the server to upload their own photos and ingredients.

```mermaid
sequenceDiagram
    actor User
    actor Website
    actor Server
    User->>Server: Enter Ingredients
    Website->>Server: Request Recipe
    Server-->>Website: Recipe Results
    Server-->>User: Display Recipes
    User->>Server: Upload Photos
    Website->>Server: Store Photo
    Server-->>Website: Successful Upload
    Server-->>User: Photo Completion
```

### Key features

- Secure login over HTTPS
- Ability to post photos
- Ability to view photo gallery in real time
- Photos are persistently stored
- Display of recipes
- Ability to enter ingredients for recipes

### Technologies

I am going to use the required technologies in the following ways:

- **HTML** - Uses appropriate HTML format for the application. Three HTML Pages. One for user login, one for displaying recipes, one for uploading and photo gallery of other people's recipes. Hyperlinks to lead to online recipes. Is easy to navigate.
- **CSS** - Styling that accommodates different-sized screens. Site is aesthetically pleasing (format, colorway, spacing).
- **React** - Displays other people's photos, uploading photos, and use of React for routing and components.
- **Service** - Backend Service for retrieving photos, login.
- **DB/Login** - Store photos, store users. Register and login users. Can't post unless authenticated.
- **WebSocket** - As each user posts photos, their photos are broadcast to all other users.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://foodfetch.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created three different HTML pages - index.html, recipe.html, and photo.html. Each has a basic structure of what will be displayed on the screen.
- [x] **Proper HTML element usage** - Used basic HTML elements to demonstrate a skeleton of what the site may look like, before CSS and Java are implemented.
- [x] **Links** - Linked my GitHub repository, as well as links that allow for navigation between web pages. Each of the three HTML pages can be called from any of the other two HTML pages at any given time.
- [x] **Text** - Added text into all three HTML pages. Some text is used as a placeholder, while other text is used as an example of what the site may look at when in use.
- [x] **3rd party API placeholder** - Placed the 3rd party APT placeholder on my recipes page. I listed a few ingredients that could be entered and put the placeholder directly underneath for when it is called.
- [x] **Images** - I placed images that are linked from online sources to my photos and recipes page. Text is attached to them.
- [x] **Login placeholder** - The login placeholder is located on index.html. This is the page that each user will be directed to when they first enter Food Fetch. They will need to login here, in order to access the rest of the site.
- [x] **DB data placeholder** - The DB Data Placeholder is located on the photo.html page, since it will store all of the photos. Users will also be stored from the index.html page.
- [x] **WebSocket placeholder** - This is located on the photo.html page. As users post on here, their photos will be broadcast to all other users on the Food Fetch platform.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - I added a bit of color to the header of each of my pages. The background has been kept white for now, since the photos have so much color already. The background may be changed, but also may stay the same in the future.
- [x] **Use of a CSS framework** - I used Bootstrap to style a lot of my pages.
- [x] **All visual elements styled using CSS** - All visual elements are styled by CSS through either my own CSS pages, or through Boostrap implementation.
- [x] **Responsive to window resizing using flexbox and/or grid display** - Image resizing is achieved through flexbox. Flexbox is implemented in each CSS page for each HTML page.
- [x] **Use of a imported font** - The imported font is used under the name "My Font," and is used for the title headers (top left corner) of every page.
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - Element, class, and ID are used in various areas throughout all of the pages. Each is either selected from Bootstrap or from my personalized CSS pages.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - Installed and configured Vite to bundle the React application. Used Vite's development server with hot module replacement and generated a production build using 'npm run build.'
- [x] **Components** - Broke the application into separate, reusable components. Placed them each into separate folders for login, recipe, and photo pages. Each component is imported into the main app component.
- [x] **Router** - Implemented client-side routing using React router. Configured BrowserRouter with Routes and Route components to navigate between the login, recipe, and photo pages, without needing to reload the browser.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - API functionality mocked out on the recipes page, to retrieve online photos and recipes. Websocket functionality is mocked out on the photo gallery page to show live time notifications on posts, using setInterval. Database is mock-implemented on the photo gallery page and keeps data on the photos being posted, as well as login information on the logout page (remembers the users).
- [x] **Hooks** - useState is being used to store logged-in usernames and status. useEffect logs users back in on the login page.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Used in the backend with index.js to start up the web service. Configured with vite HTTP server in vite.config.js file.
- [x] **Static middleware for frontend** - Static middleware added to serve static files for now.
- [x] **Calls to third party endpoints** - Used fetch to make calls to the Meal DB. Requests are triggered by React and called to receive a random recipe on the recipe page.
- [x] **Backend service endpoints** - Endpoints implemented in index.js, including the authentication and photo endpoints. Handles cookies and creating/finding users.
- [x] **Frontend calls service endpoints** - Service endpoints implemented to save and retrieve scores and to register and login users. 
- [x] **Supports registration, login, logout, and restricted endpoint** - Register and login requests are handled in unauthenticated.jsx. Logout requests are handled in unauthenticated.jsx. Restricted endpoint is handled through a simple express middleware technique in index.js.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Stores data in MongoDB** - All photos are stored in MongoDB. Backend was updated from a static database to MongoDB, which will continue to collect and hold the photos and data uploaded.
- [x] **Stores credentials in MongoDB** - All users are stored in MongoDB. Credentials can be retrieved from the database and can recall previous users. Users must use previous set passwords to enter into their accounts.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
