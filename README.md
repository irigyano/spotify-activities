<br />
<h3 align="center">SpotifyActivities</h3>
  <p align="center">
    React app to show your Spotify activities such as favorite artists, songs and track history.
    <br />
    <br />
    <a href="https://irigyano.github.io/SpotifyActivities">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This is project is meant for practicing frontend development, using OAuth2 to authenticate user and interact with 3rd party API, fetching data with axios and rendering the data with React, styling with Tailwind CSS.

### Built With

[![React][react.js]][react-url]
![Tailwind CSS](https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label=)

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Register your app at [Spotify Dashboard](https://developer.spotify.com/dashboard) (Check `.env_example`)
2. Clone the repo
   ```sh
   git clone https://github.com/irigyano/SpotifyActivities.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Config `.env` according to `.env_example`
   ```js
   REACT_APP_CLINET_ID =!!! REPLACE IT WITH YOUR APP ID !!!
   REACT_APP_REDIRECT_URI = http://localhost:3000/spotifyactivities/auth
   REACT_APP_AUTH_ENDPOINT = https://accounts.spotify.com/authorize
   REACT_APP_RESPONSE_TYPE = token
   ```
5. Start the development server
   ```sh
   npm start
   ```
   (Optional) To watch Tailwind CSS modification in time
   ```sh
   npm run watch
   ```
   <p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<img src="https://github.com/irigyano/SpotifyActivities/blob/main/screenshots/Home.png" height='400'>

Simply sign in with Spotify, once app receive the access token from Spotify API, it will redirect and render the data provided by Spotify.

Since all the data in this app is basicly rely on Spotify API, check [Spotify Authorization Code Flow](https://developer.spotify.com/documentation/web-api/tutorials/code-flow) for more information, this app is using the Implicit Grant Flow so there's no refresh token involved.

Modifiy `LoginButton.jsx` SCOPE to gain access to more data from the API. Check [Scopes](https://developer.spotify.com/documentation/web-api/concepts/scopes).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

[MIT](https://choosealicense.com/licenses/mit/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
