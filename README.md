<h1 align="center">Where is the world</h1>
<p align="center">
  Made with <code>HTML</code>, <code>CSS</code>, <code>TypeScript</code>, <code>ReactJS</code>, <code>styled-components</code>
  <br>
  Bootstrapped with <code>Vite</code>
</p>

<p align="center">
  <a href="../../actions"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/arlagonix/countries-list/main.yaml"></a>
  <a href="../../commits"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arlagonix/countries-list"></a>
  <a href="./LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/arlagonix/countries-list"></a>
  <img src="https://badgen.net/github/dependabot/arlagonix/countries-list" />
  <img src="https://img.shields.io/github/repo-size/arlagonix/countries-list" />
</p>

<p align="center">
  <a href="#-screenshots">🖼 Screenshots</a> • 
  <a href="#ℹ%EF%B8%8F-about">ℹ️ About</a> • 
  <a href="#%EF%B8%8F-tools">⚙️ Tools</a> • 
  <a href="#-build-project">🔨 How to Build Project</a> • 
  <a href="#-file-structure">📁 File Structure</a>
</p>

<sup>
  <p align="center">
    <a href="#-npm-packages-worth-mentioning">📦 NPM Packages worth mentioning</a> • 
    <a href="#-details">💡 Details</a> • 
    <a href="#-useful-resources">🔗 Useful resources</a> • 
    <a href="#-author">👤 Author</a>
  </p>
</sup>

## 🖼 Screenshots

<p align="center">
  <img src="./docs/results/list_big_light.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/list_big_dark.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/list_partial_light.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/list_partial_dark.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/list_big_skeleton.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/list_small_light.jpg" width="35%">
  <img src="./docs/results/list_small_dark.jpg" width="35%">
</p>

<p align="center">
  <img src="./docs/results/country_big_light.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/country_big_dark.png" width="100%">
</p>

<p align="center">
  <img src="./docs/results/country_small_light.png" width="35%">
  <img src="./docs/results/country_small_dark.png" width="35%">
</p>

## ℹ️ About

This is a solution to the challenge "REST Countries" from Frontend Mentor ([link](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub)).

The challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.

I made my own Figma prototype and redesigned the whole application.

Figma prototype: https://www.figma.com/file/9TUVcloltVpCdi5LHVCiVT/Countries

## ⚙️ Tools

- **HTML5**
  - ReactJS
- **CSS**
  - styled-components
- **TypeScript**
  - ReactJS
  - React Query
  - React Router
  - Vitest
  - Cypress
- **NodeJS**
- **Vite**
- **Github Pages**
- **Github Actions** for CI/CD

## 🔨 Build project

<table>
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>npm&nbsp;install</code></td>
    <td>First of all install all required packages</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;dev</code></td>
    <td>Starts a local web server with HMR (Hot Module Replacement) for development</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;build</code></td>
    <td>Builds the project, and outputs to the <code>./build</code> folder</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;preview</code></td>
    <td>Start a local web server that serves the built solution from <code>./build</code> for previewing</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;test:e2e</code></td>
    <td>Open application that allows to run 2e2 tests</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;test:unit</code></td>
    <td>Runs unit tests</td>
  </tr>
  <tr>
    <td><code>npm&nbsp;run&nbsp;lint</code></td>
    <td>Check that code conforms to Eslint</td>
  </tr>
</table>

## 📁 File Structure

```Markdown
├── 📁 .github
|   ├── 📁 workflows
|   |   └── 📝 main.yaml      CI/CD instructions for Github Actions
│   └── 📝 dependabot.yml     Instructions for Dependabot
|
├── 📁 cypress                End-to-end tests
│
├── 📁 docs                   Additional information, documentation 
│   └── 📁 results            Screenshots of how the application works after being fully developed
|
├── 📁 src                            Source files needed for application development
│   ├── 📁 assets                     Static assets: images, icons, favicons
│   ├── 📁 components                 React components
|   |   └── 📁 Component Name
|   |       ├── 📝 index.tsx          Component logic
|   |       ├── 📝 index.styled.tsx   Component styles
|   |       └── 📝 index.types.tsx    Component types (optional)
│   ├── 📁 global                     Global styles
│   ├── 📁 hooks                      Custom React hooks
│   ├── 📁 pages                      React page components
|   |   └── 📁 Page Name
|   |       ├── 📝 index.tsx          Page logic
|   |       ├── 📝 index.styled.tsx   Page styles
|   |       └── 📝 index.types.tsx    Page types (optional)
│   ├── 📁 utils                      Utility functions
│   ├── 📝 App.tsx                    App React component
│   ├── 📝 index.html                 Main html file
│   ├── 📝 index.tsx                  Entry point for the module bundler
│   ├── 📝 styled.d.ts                Types for Styled Components theme
│   ├── 📝 styles.css                 Styles for the loader displayed until JS is loaded
│   └── 📝 vite-end.d.ts              Some Typescript stuff for Vite
|
├── 📝 .eslintrc.json         ESLint configuration file
├── 📝 .gitignore             Instructions for Git about what files to ignore
├── 📝 LICENSE                MIT License. Basically you can do whatever you want with the code
├── 📝 README.md              Project description
├── 📝 cypress.config.cjs     Cypress configuration file
├── 📝 package-lock.json      Keeps track of the exact version of every package that is installed
├── 📝 package.json           Various metadata relevant to the project, scripts, dependencies
├── 📝 tsconfig.json          TypeScript configuration file
├── 📝 tsconfig.node.json     TypeScript configuration file for Vite
└── 📝 vite.config.js         Vite configuration file
```

## 📦 NPM Packages worth mentioning

<table>
  <tr>
    <td><code>styled-components</code></td>
    <td>For CSS-in-JS</td>
  </tr>
  <tr>
    <td><code>react-loading-skeleton</code></td>
    <td>Used it to show skeletons while fetching new data</td>
  </tr>
  <tr>
    <td><code>react-outside-click-handler</code></td>
    <td>Used it to close options list in select component when clicking outside</td>
  </tr>
  <tr>
    <td><code>react-router-dom</code></td>
    <td>Routing between pages</td>
  </tr>
  <tr>
    <td><code>react-transition-group</code></td>
    <td>Animates showing and hiding of options list</td>
  </tr>
  <tr>
    <td><code>antd</code></td>
    <td>Used 1 component from it : Image, that helps to open image in a full-screen mode</td>
  </tr>
  <tr>
    <td><code>@tanstack/react-query</code>, <br><code>@tanstack/react-query-devtools</code></td>
    <td>API requests</td>
  </tr>
  <tr>
    <td><code>cypress</code></td>
    <td>End-to-end testing</td>
  </tr>
  <tr>
    <td><code>vitest</code></td>
    <td>Unit testing</td>
  </tr>
</table>

## 💡 Details

Another project that seemed to be very simple, but took 2-3 weeks to complete

Features

- Light / Dark mode
- Skeletons during load
- Page for the list of countries, page for a country
- Custom select, input fields
- Used a component from Ant Design (but it looks like it made the bundle realy, really big)
- Unit & e2e testing
- CI/CD with Github Actions. Automatically lint, unit test, e2e test, build and deploy to Github Pages

## 🔗 Useful resources

- [Web Dev Simplified Hooks Course](https://courses.webdevsimplified.com/view/courses/react-hooks-simplified/1411296-introduction/4376388-00-introduction) - Great course with a lot of custom hooks
- [How to Make a Custom Select Component](https://codepen.io/tcomdev/pen/WNXeqoG)
- [StackOverflow : Guide on a spinner](https://stackoverflow.com/questions/40987309/react-display-loading-screen-while-dom-is-rendering)
- [How to Make a Custom Spinner](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader)
- [How to deploy a react app on GH Pages](https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/) - to put shortly, just use HashRouter in the application
- [How to Make a Custom Scrollbar](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp)
- [Github Actions - Введение в CI/CD](https://www.youtube.com/watch?v=e0A2hDObLmg) - Introduction to CI/CD with Github Actions, in Russian. Helped me to get understand the basics

## 👤 Author

- Frontend Mentor - [@GrbnvAlex](https://www.frontendmentor.io/profile/GrbnvAlex)
- Telegram - [@Arlagonix](https://t.me/Arlagonix)
- Github - [@arlagonix](https://github.com/arlagonix)
