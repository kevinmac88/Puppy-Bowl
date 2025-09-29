# Block 21 | Mutations | Plan

## Review

Party Planner

- show how similar it is to GP solution (Fullstack Gala)
- filter guests via RSVPs to get list of guests attending selected party

## Lesson

[Slides](https://docs.google.com/presentation/d/1-VSq2AuEr9ySv9JRli3Xyz75o93ZOWQeaUZV8kQBG_s/edit?usp=sharing)

Go over CRUD and corresponding HTTP methods, along with what the corresponding
requests and responses look like.

Continuation of previous Recipe Gallery demo. New code:

- `addRecipe` mutation
- `NewRecipeForm` component, calls `addRecipe` on form submit
- `deleteRecipe` mutation
- delete button added to `RecipeCard`, calls `deleteRecipe` on click

Update is not covered, but mention briefly to students that it's essentially identical to Create.

## Guided Practice

[Link](https://github.com/FullstackAcademy/fullstack-gala-admin)

Fullstack Gala Admin

Starts at solution of previous guided practice. Students need to:

- create form that allows admin to invite a new artist to the gala
- add button that allows admin to remove selected artist from the gala

> [!WARNING]
>
> Remind students to use a cohort code with their name in it! e.g. `2506-JOHN`
> This will provide them with their own instance of the data which they can freely
> delete (though they will have to reseed their own data).

## Workshop

[Link](https://github.com/FullstackAcademy/party-planner-admin)

Party Planner Admin starts at solution of previous workshop. Students need to:

- create form that allows admin to add new event
- add button that allows admin to remove selected event

> [!NOTE]
>
> API expects dates as ISO string, so students need to use this line to send a date to API:
>
> ```js
> const date = new Date(dateFromForm).toISOString();
> ```
