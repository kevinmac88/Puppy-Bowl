# Block 18 | DOM | Plan

## Review

Be absolutely sure that students are confident about working with arrays of objects. Take a review day if necessary!

Briefly review HTML & CSS as well.

## Lesson

[Slides](https://docs.google.com/presentation/d/1GT0MTYlMf2mjU2SGoXjOFZM301Htgsxp9XY7ZP4JzKE)

Give quick conceptual 101 on DOM. Then follow the [Math Card live code demo](notes/index.js).

- script `defer`
- State, components, render
- `createElement`, `classList`, `innerHTML`
- `map` and `replaceChildren` to render an array of objects;
  - intentionally avoiding `append`, since students often run into bugs when they try to rerender with `append`
  - Also reinforces the idea that if they want to add something, they should push to array in state and rerender, rather than appending an element to DOM
- `querySelector`
- `innerHTML` with "fake" components + `replaceWith` is a hack to replicate JSX & avoid the verbosity / tedium of `createElement` and `append` for bigger components. It's not the most elegant, but it's a compromise between students getting to use React-like syntax while still understanding the underlying concepts of how React works.

## Guided Practice

[Link](https://github.com/FullstackAcademy/inspirational-quotes)

Essentially identical to MathCards demo. Students render an array of objects w/ randomly generated properties. Pair programming.

## Workshop

[Link](https://github.com/FullstackAcademy/freelancer-forum)

More practice w/ the same concepts. Students render an array of freelancers from scratch. Encourage them to try different HTML elements, such as tables.
