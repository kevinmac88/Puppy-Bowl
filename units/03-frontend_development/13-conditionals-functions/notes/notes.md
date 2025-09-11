# Truthy vs Falsy

JavaScript uses **type coercion** to handle values. That means it will
automatically try to convert a value from one data type to another.

Non-boolean values are either **truthy** or **falsy** i.e. will be coerced
into either `true` or `false`.

_All_ values are truthy _except_ `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

# Conditionals

A **condition** is a **boolean expression**: an expression that evaluates to
a boolean value. These expressions often involve using **logical operators**
and **comparison operators** (also called relational or equality operators).

## Logical operators

**AND** `&&` - `true` if and only if _all_ operands are `true`. Otherwise `false`

**OR** `||` - `true` if _at least one_ of its operands is `true`. Otherwise `false`

**NOT** `!` - converts `true` to `false` and vice versa

## Comparison operators

A comparison operator compares its operands and returns a boolean value based on
whether the comparison is true.

`<`, `<=`, `>`, `>=`, `!==`, `===`

### Loose vs Strict Equality

Prefer strict equality because it respects types!
`===` and `!==` over `==` and `!=`

Loose equality is more prone to bugs.

## Conditional statements

A **conditional statement** executes different sets of commands depending on
whether a condition is true or false.

```js
// Either run code A or do nothing.
if (condition1) {
  // Code A
}
```

```js
// Either run code A or code B.
if (condition1) {
  // Code A
} else {
  // Code B
}
```

```js
// Run the code for the first condition that is true
if (condition1) {
  // Code A
} else if (condition2) {
  // Code B
} else {
  // Code C
}
```

You MUST start with `if`.
You can _optionally_ chain as many `else if`s as you want.
`else` is also optional, but MUST go at the end.
