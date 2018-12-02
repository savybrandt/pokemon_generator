# wonolo web

This is the repo for the react/redux version of the Wonolo Customer Portal.

## Development

1. Download the repo
2. Run `npm install`
3. Run `npm start`

This will bring up a server at `localhost:8080` (see env to change this).

Make your code changes locally.  Components will be hot reloaded.  No need for an external dev server.

### .env

Create an `.env.local` file at the project root to override any of the settings in the `.env` file.

ENV controls where your API calls point.

We have local development environment variables and remote production configurations.

## API endpoints

### GraphQL development
As of Oct 17, 2018, we are running GraphQL on the `chore/WEB-15/create-a-backend-api-layer` branch of the wonolo-rails project.

Run the rails server and go to `http://localhost:3000/graphiql` to explore the API.

Once/If the backend team is ready to deploy GraphQL, we'll have a production endpoint

### REST
We intend to have REST apis as well.  As of Oct 17, this is not active

## Deployment

When your code is ready for testing, create a PR into the `staging` branch.  This will push it to wonolo-webs.herokuapp.com

Staging will be where all UA and QA testing happens.

Once code passes QA, it can be merged to master and deployed to production.

## Component Design Decisions

Put CSS next to the component
Unit tests cover interfaces; branch coverage is derivative
Write stories
Use promises, async await over callbacks
Functional code.  No side-effects.
Manage routes outside redux; route is not a component state; actions do not dispatch route transitions
Localization/internationalization = no text strings in components
Font Awesome

## Testing

Unit tests are written in `jest`
Integration tests are written in `jest-puppeteer`

Run `npm run unit` to run unit test suite
Run `npm run integration` to run integration test suite
Run `npm test` to run unit and integration tests

## Storybook

Use Storybook to visualize component states and options without embedding them in the full app.  Show off how your component works.

Also available for demos.

1. Run `npm run storybook`
2. Go to `localhost:9001` to view

Documentation: https://storybook.js.org/basics/guide-react/

## Selectors

Components should never access the state directly.  Instead, use selectors to request nodes from the state. The benefits are looser coupling between state and component, memoization, and that selectors become more useful when there are more of them (via their compositional nature).

https://github.com/reduxjs/reselect

## Open Questions

* Do we use bootstrap?
* How do we handle forms? Jay: Formik?  Svey: FormZ? Savy: ?? Michael: ?? 
* Primitive library?



# advent_of_code_2018
