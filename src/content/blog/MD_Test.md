---
title: MD_test
---

# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

---

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](/assests/dither.jpg "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.

## Block maths
$$
S_{test} = \sum_{i=1}^n \frac{x_i}{y_i-E_{test}}
$$

## Inline Maths

To find this correct $E$ value in the range $1 \rightarrow y_\text{min}$, we will use a binary search algorithm. To implement the binary search on this range we will store all the values in $1 \rightarrow y_\text{min}$ in an array (doing which will take $O(y_\text{min})$). Now a binary search will be performed on this array comparing $S_{test}$ with $S$. Since the changing variable $E_{test}$ is being subtracted in the denominator, if $S_{test} \leq S$ then the binary search will select the larger sub-array and vice-versa.