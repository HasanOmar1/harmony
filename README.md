<p align="center"><img width=60% src="./client/src/assets/harmonySH2.png"></p>
<p align="center">
Harmony is a music app that showcases the top 10 songs in Hebrew and the top 10 songs in Arabic, relevant to the current time.
By clicking on a song's title, users can access its lyrics/artist as well as its translation into the other language.
</p>

-------------------------------------------------------------

## Project Structure

![Project Structure](./client/src/assets/screenshots/diagram.png)


------------------------------------------------------------

### Project Frontend Technologies:

- React<br>
- Redux Toolkit & Rtk query<br>
- Axios<br>
- React Router<br>
- i18next<br>
- Styled Components<br>
- React Youtube<br>
- React Share<br>


### Project Backend Technologies:

- Node.js<br>
- Mongodb<br>
- Express.js<br>
- Axios<br>
- Pino<br>
- Mocha<br>
- Cheerio<br>
- Puppeteer<br>
- Openai Api<br>
- Spotify Api<br>
- Youtube Api<br>
- Google Api<br>
- PassportJS<br>
- NodeCron<br>
- Json Web Token<br>


### Screenshots

![Alt text](/client/src/assets/harmonySH.png)

--------------------------------
# [Table Of Content]()
* [Installation](#installation)
* [Mongo DB setup](#mongo-db-setup)
* [Open AI setup](#open-ai-setup)
* [YouTube Api setup](#setting-up-a-youtube-api-key)
* [Google and PassportJS Api Setup](#setting-up-passportjs-auth)
* [Run App](#run-the-application-by-the-following-command
)
--------------------------------

### Installation

```
git clone https://github.com/Makes-Innovation-Hub/harmony.git
```

After you clone the folder to your computer please open the folder with Vs code and then open your terminal in your Vs code.

In order to run the app locally you will need to install all the dependencies by the following command:<br>

```
npm run installAll
```

In order to config all env files in the client please enter the following command:<br>


```
# Client .env example

VITE_SERVER_PORT=5000
VITE_SERVER_BASE_URL=http://localhost
VITE_RENDER_URL= Put your production server url

# This can be either local or production
# If its production then it works on Render
VITE_ENVIRONMENT = local | production
```

In order to config all env files in the server please enter the following command:<br>

```
cd server
```

```
npm run config
```

```
PORT = 5000 || 3000 or the port you prefer
```

```
NODE_ENV = development || production
```

```
PORT=5000
NODE_ENV="development"
MONGO_URI_DEV = explanation below
MONGO_URI_PROD = explanation below
OPEN_AI_API_KEY = explanation below
SPOTIFY_CLIENT_ID = explanation below
SPOTIFY_CLIENT_SECRET = explanation below
YOUTUBE_API_KEY= explanation below
BASE_SERVER_URL= http://localhost
SERVER_PORT=5000
CLIENT_PORT=5173
RENDER_URL = Put your production server url
PRODUCTION_FRONT_URL = Put your production client url
SERAP_API_KEY = [Create your own account here](https://serpapi.com/)


### All are necessary to run Auth but only google is in use
GOOGLE_CLIENT_ID= explanation below
GOOGLE_CLIENT_SECRET= explanation below
FACEBOOK_APP_ID= explanation below
FACEBOOK_APP_SECRET= explanation below
APPLE_CLIENT_ID= explanation below
APPLE_TEAM_ID= explanation below
APPLE_KEY_ID= explanation below
APPLE_PRIVATE_KEY_PATH= explanation below

SESSION_SECERT= [whatever you want it to be]
VITE_CLIENT_ID= [not being used]


```

## Mongo DB setup

- sign in to mongodb website: https://www.mongodb.com/
  ![צילום מסך 2023-06-26 ב-11 56 44](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/205524f2-3e84-4de6-857e-87e113aef288)
- press "+ New Project" button
  ![צילום מסך 2023-06-26 ב-11 59 10](./client/src/assets/press_new_project_photo.png)
- give project name
  ![צילום מסך 2023-06-26 ב-12 02 23](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/d76cb2ae-1380-4c07-b3fc-dd21cea54b6a)
- press "Next" button
- press "Create Project" button
  ![צילום מסך 2023-06-26 ב-12 05 43](./client/src/assets/press_create_project_photo.png)
- press "Add Current IP Address" button
  ![צילום מסך 2023-06-26 ב-12 06 48](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/c6bd10bd-f777-4b24-8eb6-ee4fd7b53cf0)
- press green "+ Create" button
  ![צילום מסך 2023-06-26 ב-13 01 48](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/29c2bae6-53d9-4af8-a5dc-0f33b86262d2)
- check M0 free option
  ![צילום מסך 2023-06-26 ב-12 09 56](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/3ff5bddf-07be-47a4-8519-109f0c5610e4)
- check aws
  ![צילום מסך 2023-06-26 ב-12 11 57](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/164929c2-609a-43ff-ad38-aae4e0209867)
- pick closest region
  ![צילום מסך 2023-06-26 ב-12 13 33](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/dff983d7-6f9e-4e67-9b68-a3702d900c86)
- give cluster development name
  ![צילום מסך 2023-06-26 ב-12 14 49](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/52ef9c3c-aee7-4481-bd28-b2371c8c24fe)
- press green "Create" button
  ![צילום מסך 2023-06-26 ב-12 15 58](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/f510800a-caa7-4d22-98ba-c8a4f3afbbe6)
- check "Username and Password"
  ![צילום מסך 2023-06-26 ב-12 18 25](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/dee59938-2005-4d7d-912c-6d480f53ad14)
- give Username and Password
  ![צילום מסך 2023-06-26 ב-12 19 39](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/8e8124d5-9cda-4b60-8e87-bda08950acd9)
- press green "Create User" button
  ![צילום מסך 2023-06-26 ב-12 20 52](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/0a07864c-1ffe-4db8-a3ab-83b6493d5e11)
- check "Cloud Environment"
  ![צילום מסך 2023-06-26 ב-12 24 02](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/76367e81-c4f8-4e43-bc0d-40b330c65839)
- IP Address: 0.0.0.0/0
- Description: open for all
  ![צילום מסך 2023-06-26 ב-12 27 18](./client/src/assets/description_photo.png)
- press "Add Entry" button
  ![צילום מסך 2023-06-26 ב-12 28 51](./client/src/assets/add_entry_photo.png)
- press "Finish and Close" button
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/finished_close_photo.png)
- press "Build a Database" button
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src//assets/create_db_.png)
- press "Connect" button
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/connect_db.png)
- choose "Drives"
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/drviers.db.png)
- goto "Add your connection string into your application code" and copy it, inside it enter the password you choose from previous step above.
  ![צילום מסך 2023-06-26 ב-12 32 04](./client/src/assets/mongo_uri.png)

  this lone string will be your MONGO_URI_DEV & MONGO_URI_PROD

## Open AI setup

- open ai website: https://openai.com/
- goto menu
  ![צילום מסך 2023-06-26 ב-12 35 32](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/147a8f55-f0ec-4777-951c-79c165d47f43)
- goto Log in
  ![צילום מסך 2023-06-26 ב-12 49 14](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/478cbaa7-41fe-4fb2-8695-4ea5f98708ac)
- press API box
  ![צילום מסך 2023-06-26 ב-12 38 21](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/d2a8afc1-8ac4-4b2a-8c61-708b87901dc5)
- upper menu right side, press "Personal"
  ![צילום מסך 2023-06-26 ב-12 39 33](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/3da1f623-c923-49f5-9ce4-3a334230e352)
- press "View API keys"
  ![צילום מסך 2023-06-26 ב-12 50 32](https://github.com/Makes-Innovation-Hub/arabrew/assets/53153372/8b55566b-621f-4abe-a401-7ee79a4ce294)
- press "+ Create new secret key" button
  ![צילום מסך 2023-06-26 ב-12 44 29](./client/src/assets/create_secrete_key_photo.png)

## Spotify setup

- open spotify website for developer: https://developer.spotify.com/
- goto login and log to spotify with the platform you prefer (email/facebook etc..)
- press on the Dashboarded in the username button in the right top corner.
  ![צילום מסך 2023-06-26 ב-13 08 22](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20133950.png)
- press "Create App"

  ![צילום מסך 2023-06-26 ב-13 10 07](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134252.png)

- Enter your details inside the form and press save
  ![צילום מסך 2023-06-26 ב-13 11 32](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134437.png)
- choose "Settings" button

  ![צילום מסך 2023-06-26 ב-13 12 42](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134650.png)

- There you can find your Spotify client ID & Spotify client secret
  ![צילום מסך 2023-06-26 ב-13 13 44](./client/src/assets/%D7%A6%D7%99%D7%9C%D7%95%D7%9D%20%D7%9E%D7%A1%D7%9A%202023-06-29%20134823.png)



--------------------------------------------------

# Setting Up a YouTube API Key

In order to use the YouTube Data API, you'll need to obtain an API key. Follow the steps below to generate your API key.

## Step 1: Go to the Google Developers Console

Navigate to the [Google Developers Console](https://console.developers.google.com/).

## Step 2: Create a New Project

1. Click on the "Create Project" button.
   ![Create New Project Button](client/src/assets/screenshots/YouTube-API-Screenshot-1.png)

2. Give your project a name and click "Create".
   ![Give Name and Create](client/src/assets/screenshots/YouTube-API-Screenshot-2.png)

## Step 3: Enable the YouTube Data API

1. In the left sidebar, click on "Library".
   ![Library](client/src/assets/screenshots/YouTube-API-Screenshot-3.png)
2. Search for "YouTube Data API" and click on it.
   ![Find YouTube Data API](client/src/assets/screenshots/YouTube-API-Screenshot-4.png)
3. Click the "Enable" button.
   ![Enable YouTube Data API](client/src/assets/screenshots/YouTube-API-Screenshot-5.png)

## Step 4: Create Credentials

1. Click on "Create Credentials" button.
   ![Credentials](client/src/assets/screenshots/YouTube-API-Screenshot-6.png)
2. Select the "Public Data" radio button, then click next.
   ![Click Create Credentials](client/src/assets/screenshots/YouTube-API-Screenshot-7.png)

## Step 5: Copy Your API Key

After you create the API key, it will be displayed on the screen. Copy this key to use it in the project.
![Copy API Key](client/src/assets/screenshots/YouTube-API-Screenshot-8.png)

## Step 6: Save API Key as an Environment Variable

Save the API Key as an environment variable for the server with the name "YOUTUBE_API_KEY="

### The API key was used to fetch playlist items and channel profile pics


------------------------------------------

# Setting Up PassportJS Auth

This section guides you through setting up Google authentication in your application using Passport.js. Follow these steps to enable users to sign in with their Google accounts.

### Step 1: Install Passport.js and Google OAuth Strategy

Before you start, ensure you have Passport.js and the Google OAuth strategy installed. If not, run the following command:

```bash
npm install passport passport-google-oauth20
```

### Step 2: Obtain Google API Credentials

#### 1. Go to the [Google Developers Console](https://console.cloud.google.com/apis/dashboard)

#### 2. Create a new project.

![Description of Image](./client/src/assets/screenshots/LironDoc/1.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/2.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/3.png)

#### 3. Configure the consent screen, and set the application type to Web application.

![Description of Image](./client/src/assets/screenshots/LironDoc/7.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/4.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/5.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/6.png)

#### 4. Navigate to Credentials, then click on Create credentials, and select OAuth client ID.

![Description of Image](./client/src/assets/screenshots/LironDoc/9.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/8.png)
![Description of Image](./client/src/assets/screenshots/LironDoc/10.PNG)

#### 5. Add your application's redirect URI, which will be used for the OAuth callback. It usually looks like http://localhost:5000/auth/google/callback.

![Description of Image](./client/src/assets/screenshots/LironDoc/11.PNG)
![Description of Image](./client/src/assets/screenshots/LironDoc/12.PNG)

# PassportJS
### Step 3: Configure Passport.js

#### 1. Go to the [Passport.js](https://www.passportjs.org/) and click on Strategies

![Description of Image](./client/src/assets/screenshots/LironDoc/13.PNG)

#### 2. Search for google and choose passport-google-oauth20

![Description of Image](./client/src/assets/screenshots/LironDoc/14.PNG)


![Description of Image](./client/src/assets/screenshots/LironDoc/15.PNG)

#### 3. use the CLIENT_ID and the CLIENT_SECRET, from this screen

![Description of Image](./client/src/assets/screenshots/LironDoc/12.PNG)

```bash
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this function, find or create a user in your database and call cb
    cb(null, user);
  }
));

```

### Step 4: Implement Routes

```bash
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
```

### Step 5: Testing the Integration

After configuring Passport.js with Google OAuth and setting up your routes, it's crucial to test the integration to ensure that users can authenticate successfully using their Google accounts. Follow these steps to test the Google authentication flow:

#### 1. Start Your Application

Ensure your application is running. If you're using Node.js, you can typically start your application with:

```bash
node app.js
```

#### 2. Access the Authentication Route

Open a web browser and navigate to the route that initiates the authentication process with Google. Based on the previous setup, this URL will be:

```bash
http://localhost:5000/auth/google
```

#### 3. Authenticate with Google

You should be redirected to the Google sign-in page. Choose an account or log in with your Google credentials. After successful authentication, Google will ask for your consent to share your profile and email address with your application.

#### 4. Check the Redirect

After giving consent, you should be redirected back to your application, as specified in your OAuth callback URL. If you set up everything correctly, you should reach the success redirect URL ('/' in the example) after successful authentication.

#### 5. Verify User Information

Ensure that your application correctly receives and processes the user information from Google. This typically involves checking whether the user's data is correctly retrieved in the callback function provided to the GoogleStrategy and whether any user session or database records are correctly updated.

#### 6. Handling Errors

If the authentication process does not work as expected:

Check the console for any errors.
Verify that the CLIENT_ID and CLIENT_SECRET are correctly set.
Ensure the callback URL in your Google project matches the one in your Passport configuration exactly.
Make sure you're handling the failureRedirect properly in your routes to catch any failed authentication attempts.

#### 7. Logging Out

Implement a logout route to allow users to end their session. Here's a simple example:

```bash
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
```

This ensures that users can log out of their session in your application, providing a complete authentication flow.


----------------------------------------
## Playlist Documentation

This documentation provides an overview of the routes and functionalities of the playlist in the backend server.

## Routes

### 1. `/api/v1/playlist/playlistData/?id=PLAYLIST_ID`

- **Method:** GET
- **Description:** Retrieves data for a specific playlist identified by its ID. It fetches data from the YouTube API, stores it in the database, and returns the playlist data.
- **Query Parameters:**
  - `id`: The ID of the playlist (required).
  - `update`: Optional query parameter. If set to "true", the data will be updated from the YouTube API even if it exists in the database.
- **Response:** Returns JSON data containing information about the playlist.

### 2. `/api/v1/playlist/profilePic/?id=CHANNEL_ID`

- **Method:** GET
- **Description:** Retrieves the profile picture URL of a YouTube channel identified by its ID.
- **Query Parameters:**
  - `id`: The ID of the YouTube channel (required).
- **Response:** Returns JSON data containing the profile picture URL.

### 3. `/api/v1/playlist/allPlaylistData`

- **Method:** GET
- **Description:** Retrieves data for all playlists. This route is for testing purposes and returns mock data.
- **Response:** Returns JSON data containing information about all playlists.

## Controllers

### 1. `playlistController.js`

This file contains controller functions for handling requests related to playlists.

#### `getPlaylistData`

- **Description:** Retrieves playlist data from the YouTube API or database, updates if necessary, and returns the data.
- **Usage:** Called when accessing the `/api/v1/playlist/playlistData` route.
- **Query Parameters:** `id` (required) (Playlist ID), `update` (optional).
- **Returns:** JSON data containing playlist information.

#### `getChannelProfilePic`

- **Description:** Retrieves the profile picture URL of a YouTube channel.
- **Usage:** Called when accessing the `/api/v1/playlist/profilePic` route.
- **Query Parameters:** `id` (required) (Channel ID).
- **Returns:** JSON data containing the profile picture URL.

#### `getAllPlaylistsData`

- **Description:** Returns mock data for all playlists.
- **Usage:** Called when accessing the `/api/v1/playlist/allPlaylistData` route.
- **Returns:** JSON data containing mock playlist information.

## Models

### 1. `Playlist.js`

- **Description:** Defines the schema for storing playlist data in the MongoDB database.
- **Fields:**
  - `playlistId`: String (required, unique)
  - `items`: Array of objects containing video details
  - `updatedAt`: Date (default: current date)
- **Usage:** Used to interact with the `playlists` collection in the database.

## Cron Job

- **Description:** Scheduled task to update playlists in the database every week.
- **Scheduled Time:** Every Sunday at 4:00 AM.
- **Functionality:** Checks if any playlist needs an update based on the last update time.

## Dependencies

- **Express:** Web framework for Node.js.
- **Axios:** Promise-based HTTP client for making HTTP requests.
- **Mongoose:** MongoDB object modeling tool.
- **Node-cron:** Cron-like scheduler for Node.js.

## Environment Variables

- **YOUTUBE_API_KEY:** API key required for accessing the YouTube Data API.

## Setup

1. Ensure MongoDB is installed and running.
2. Set up environment variables, including the `YOUTUBE_API_KEY`.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.


---------------------------------------------------------

## Run the application by the following command

In the client folder:<br>

```
1. cd client
2. npm run dev
```

In the server folder:<br>

```
1. cd server
2. nodemon server.js
```