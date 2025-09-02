# CSS Intro

- HTML = Content; what's on the page?
- CSS = Appearance; what does the page _look like_?
  - Cascading Style Sheets
  - must be delivered to the browser via the HTML

**Separation of concerns** is a design principle: a project should be separated into distinct sections, each of which addresses a separate concern.

## Selectors

[Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) determine which elements to style.

- A **type selector** (also called **tag name selector** or **element selector**) selects all elements of a certain type.
  - ex: `span`, `em`, `h1`
- A **class selector** selects all elements with a certain class and is denoted by a `.`.
  - ex: `.tip`, `.info`, `.warning`
  - Prefer adding a new more descriptive class, instead of reusing irrelevant existing classes.
- An **ID selector** selects a single element with a certain ID and is denoted by a `#`.

  - ex: `#where-to-include-styles`, `#selectors`
  - IDs have to be unique.
  - Prefer using class selectors over ID selectors.

Multiple selectors can be combined with [**combinators**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators).

## Declarations

A **declaration** consists of a **property** and its **value**. The property is what you want to change, and the value is what you want to change it to.

For example, this declaration sets the font size to 12pt:

```css
font-size: 12pt;
```

## Syntax

A CSS **rule** contains **selectors**, followed by the **body** (denoted by `{}`), contained in which are **declarations**, which are **property:value** pairs. A CSS file is a sequence of CSS rules.

```css
selector {
  property: value; /* declaration */
  property: value; /* declaration */
}
```

Example:

```css
header,
footer {
  border: 1px solid black;
  font-size: 1rem;
  color: blue;
}
```

## Where to include styles?

### inline

**Avoid using inline styles if possible**. It is a bad practice for many reasons, such as breaking separation of concerns.

```html
<article>
  <h1 style="font-size:2rem;color:green;">Cute Frogs</h1>
  <p>These frogs are really cute.</p>
</article>
```

### internal

**Avoid using internal styles if possible**. It also breaks separation of concerns.

```html
<html>
  <head>
    <style>
      h1 {
        font-size: 2rem;
        color: green;
      }
    </style>
  </head>
</html>
```

### external

We **PREFER** external because it respects separation of concerns.

The `href` should be a relative path _to_ the CSS file _from_ the parent folder of the HTML file.

```html filename="index.html"
<head>
  <link rel="stylesheet" href="index.css" />
</head>
```

```css filename="index.css"
h1 {
  font-size: 2rem;
  color: green;
}
```

## Cascade

The cascading algorithm determines which styles apply to an element. It follows [this order](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#cascading_order):

1. **Relevance**: Only look at rules with selectors that apply to the element.
2. **Origin and importance**: Determine where the style comes from and its importance.
   - **User agent styles** are the default browser styles that will be overwritten by **user** and **developer** styles.
   - If a style is marked as `!important`, it will override normal styles. **Avoid using `!important` if possible**.
3. **Specificity**: If two rules apply to the same element, the one with the higher specificity will be applied.
   - id > class > type
4. **Order of appearance**: Styles that appear _later_ (such as further down in the file) will override earlier styles.

## Box Model

Every element is a rectangle, which can be broken down into smaller portions.

The **outline** is a line that surrounds the **margin**, which is spacing around the **border**, which is a line that surrounds the **padding**, which is spacing around the **content**.

To access the **inspector** in your browser, you right-click an element and then select "Inspect". This will display the **box model** of a selected element.

## Web Content Accessibility Guidelines (WCAG)

[WCAG](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG) is broadly broken down into four principles. Web content should be:

- **Perceivable**: Users must be able to perceive it in some way, using one or more of their senses.
- **Operable**: Users must be able to control UI elements.
- **Understandable**: Users must be able to understand the content.
- **Robust**: The content should follow well-adopted web standards.

For example, there should be enough contrast between text color and background color to ensure that the content is perceivable and understandable.

## Workflow

1. Figure out what you're trying to achieve and write it out as a sentence. For example:
   1. "I want the horizontal padding of the element to be half the size of the vertical padding."
   2. "The text should be right-aligned and bold."
   3. "I want the background of this element to be a gradient from blue to green."
2. Paste that sentence into a search engine to look for potential CSS properties.
3. Go to the MDN page for those properties to confirm if they do what you want.

> [!IMPORTANT]
>
> _Never_ change the tag type in HTML to get the appearance that you want. _Always_ use CSS instead. The tag types should _always_ correspond to the semantic meaning described on MDN.
>
> - Common mistakes
>   - `<b>` to bold
>     - use `font-weight` instead
>   - `<br>` for vertical spacing
>     - use `padding` or `margin` instead
>   - `<i>` or `<em>` for italics
>     - use `font-style` instead
