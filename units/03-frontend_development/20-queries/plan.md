# Block 20 | Queries | Plan

## Review

Go over Odds and Events.

## Lesson

[Slides](https://docs.google.com/presentation/d/1p8qcAtErrx8rU2M-3c5BXS16Oo48-JGhaRTF9KDipWU/edit?usp=sharing)

- HTTP
  - method, path, endpoint
  - client, request, query
  - server, response, status code
- HTTP method: GET
- API: application programming interface

Working w/ promises

- synchronous, asynchronous
  - Promise
  - pending, fulfill, reject
  - `async`, `await`
- `try`, `catch`, `throw`, `Error`

Making requests to an API

Live code [Recipes demo](notes/index.js) after covering concepts above to show how to update state by fetching data from an API.

For the sake of time, you probably won't need to build the entire demo from scratch. Focus just on the new code involving `fetch`.

## Guided Practice

[Link](https://github.com/FullstackAcademy/fullstack-gala)

Students GET an array of data from state and build components to render the data. Then they add an event listener to select a single object, which is conditionally rendered to the side (which they also build).

## Workshop

[Link](https://github.com/FullstackAcademy/party-planner)

Build a web app that renders an array of data from an API from scratch. Users can also select an event to conditionally render more details. Identical to guided practice, except the shape of the data is slightly different.
