<!-- Project Logo -->
<br />
<p align="center">
  <img src="./public/logo/logo.svg" alt="Logo" width="80" height="80">
  <h3 align="center">Mosaic</h3>

  <p align="center">
    A movie and TV show catalog web-app
    <br />
    <a href="https://mosaic-git-develop-tahmidu.vercel.app/" target=”_blank”>Demo (Preview - Develop branch)</a> |
    <a href="https://mosaic-delta.vercel.app/" target=”_blank”>Demo (Production - Main branch)</a>
  </p>
</p>
<br>

<!-- Table of Contents -->

## Table of contents

- [About the project](#about-the-project)
- [Installation & running project](#installation--running-project)
- [Tools & tech](#tools--tech)
- [Testing](#testing)
- [License](#license)

## About the project

This is a web app built for my portfolio. It is a web app that allows you to explore and search through catalogs of movies and TV shows. It is powered by a third-party API: <a href="https://developers.themoviedb.org/3/getting-started/introduction" target=”_blank”>TMDB</a>, which makes all this possible.

### Design principle

The design principle that this project followed was <a href="https://andela.com/insights/structuring-your-react-application-atomic-design-principles/" target=”_blank”>The Atomic Design Principle</a>. Components were broken down into atoms, molecules, organisms, and pages to make components cleaner and re-usable.

As for API calls, I have decided that the best route is to make pages do the API calls and pass the data down through props or via context. This makes testing atoms, molecules and organisms easier as I do not need to mock API calls. Faking data for tests also becomes easier, this way I could control how exactly I want the data to look like and therefore see how the components would react.

## Installation & running project

### Prerequisites to run locally

To run the web app locally you **must** create an `.env.local` file at the root of the project. It **must** contain the following variables:
```
MOVIE_DB_WEB_URL = https://api.themoviedb.org/3
MOVIE_DB_API_KEY = {You need your own API key}
```
`MOVIE_DB_API_KEY` has not been provided. You can request an API key for free via TMDB's <a href="https://developers.themoviedb.org/3/getting-started/introduction" target=”_blank”>online form</a>. You **must** create an account to request an API key from TMDB.

### Running locally

**Make sure you run `yarn` to install the necessary dependencies for the project.**

To run the local development server use `yarn dev`. To run Storybook use `yarn storybook`. To run all the Jest React Testing Library tests run `yarn jest`.

Alternatively, you can click on one of the demos above without needing to setup anything. The webapp is deployed on Vercel.

## Tools & tech

Framework: NextJS (React Framework) <br/>
Language: Typescript, Javascript, HTML, CSS <br/> 
Notable Libraries: Storybook, Framer Motion, Styled-Components, Jest, React Testing Library, Axios <br/>

## Testing

The only testing that was done for this project was unit and intergration testing via React Testing Library. Components that were too trivial, or not too dissimilar from a previously tested component or a component which mainly used third-party libraries where not tested.

Very soon, I will be adding Cypress testing.

## License

Distributed under the MIT License. See `LICENSE` for more information.
