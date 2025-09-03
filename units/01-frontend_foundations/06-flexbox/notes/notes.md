# Responsive Design

Websites should be designed to be **responsive** to different screen / viewport sizes.

Roughly half of all internet traffic is through phones. That's why we design websites that work at a narrow screen width.

**Mobile-first design** means when you design websites, you design the mobile version first.

It's a lot easier to add things when you get more space, than it is to remove things when you lose space.

# Relative vs Absolute Units

An **absolute unit** is the same size on every screen. These are usually used for printing out physically.

`in`, `cm`, `mm`, `pt`, `px`

**Relative units** are relative to some other measurement on the site.

`vw` `vh` = viewport width / height
`width: 20vw` = 20% of the viewport width

`%` = percent of the parent
`width: 75%` = 75% as wide as the parent

_Font-related_

`1em` = font size (height) relative to the closest text
`1.25em` = 1.25 font size

`1rem` = _root_ font size (font size set in the `html` rule)

`1ch` = font width - as wide as the 0 character
