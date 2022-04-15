# SFR Demo

This project is a very rough demo of how we can consume JSON from a CC endpoint to build a 
dynamic storefront page using React. This will win no awards for code or design quality but is 
primarily to showcase how I would implement this project. It features a rudimentary demo fo 
React Context for sharing state between components without needing props, and using
[PageBuilder.tsx](./src/components/PageBuilder.jsx) a demonstration of building pages dynamically 
based on JSON.

This project makes use of [create-react-app](https://create-react-app.dev/) (CRA) in the interest of
speed, and [styled-components](https://styled-components.com/) for styling in React.

## Getting Started

- Install dependencies with: `npm i`
- Run dev server with `npm run start`
- Run a prod build to the `/dist/` directory with `npm run build`

### Debugging

We _highly_ recommend using React Dev tools to inspect the site's Hooks, Components, and Props.

- Chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/react-devtools/

## Features

### URL Parameter to overload the Endpoint

- Use `?pts-cc-content=[URL]` to override the default content URL from `.env` on the fly
- Use `?pts-cc-use-local` uses `stubs/mock.json` as the response 

## Feature Goals

- [X] URL Param to override SFR endpoint
- [ ] Loading indicator on page
- [ ] Better UI experience

