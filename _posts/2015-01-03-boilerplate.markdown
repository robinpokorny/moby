---
layout: post
title: "Boilerplate"
---

##Basic HTML & HTML boilerplate
* [Elements and Tags](http://cssclasses.cssconf.eu/learning-materials/#elementstags)
* [HTML Boilerplate](http://cssclasses.cssconf.eu/learning-materials/#boilerplate)
* [Pageflow (block, inline and inline-block)](http://cssclasses.cssconf.eu/learning-materials/#pageflow)
* [Images](http://cssclasses.cssconf.eu/learning-materials/#images)
* [Links](http://cssclasses.cssconf.eu/learning-materials/#links)

###Elements and Tags
Elements and Tags are the building blocks of HTML.

Elements are what makes up a HTML document. You can put elements inside of other elements. An element can include three things: a tag, attributes, and content.

A Tag is the thing that indicates an element’s purpose. For example, the `<p>` tag indicates a paragraph of text is in that element, and the `<li>` represents a ‘list item’. You’ll notice they’re always surrounded by angle brackets. Opening and Closing tags mark the beginning and end of an element and wrap its content, like so:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>This is a paragraph.</p>
{% endhighlight %}

You can see the closing tag includes a `/` before its name; otherwise it would be another opening tag!

Always double-check that you’ve closed all your elements; otherwise, a browser can and will get mixed up trying to understand your HTML document.

Lastly, having elements inside of each other (“nesting”) looks just like this:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>This is a sentence, with an <em>em</em> element ("emphasize") inside of it.</p>
{% endhighlight %}

or this:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<div id="main-container">
  <h1>The h1 tag indicates the primary header of the document.</h1>
  <p>Some text.</p>
</div>
{% endhighlight %}

In the above example, you can see our first case of an attribute. It starts with a lowercase name, and then is almost always followed by an = and a ‘value’ that’s surrounded in double quotes, "like this". An element can have many attributes, in which case you separate them by spaces, as you’ll see soon. Attributes give information about an element in particular.

###Pageflow
In most circumstances "normal flow" is the way that elements are laid out on a web page. Every element in HTML is inside a rectangular box. Shown on the picture below.

In our example, each of these boxes are one of two different types: **inline boxes** or **block boxes**. So what exactly does this mean? Let’s start with block boxes.

**Block boxes** are stacked vertically one after the other in order they’ve been written in the HTML file, and they usually occupy the whole width of the page. They normally start in the upper left corner and go down to the bottom.

Here is a simple example. Don’t get confused by the additional CSS. It’s just there for the purpose of making the boxes visible.

**Inline Boxes** work a bit different. These boxes will also start at the upper left corner, but will arrange itselfs horizontal.

Here’s an example for that as well.

So HTML elements are by default either **block boxes** or **inline boxes** (of course, there are exceptions to this rule, but we don’t have to worry about that for now). For example, `div` is a block element, and so are headings like `h1` or `h2`. `span` or `strong` on the other hand are **inline elements**. Here are lists for the different elements:

* [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
* [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente)

For now just keep in mind, that every box has some sort of display value.

###HTML Boilerplate
There is some basic structure you should not spend too much time on that is always there. Lets handle this in a very quick walkthrough (code right, line-by-line comments left):

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<!DOCTYPE html>
<!--This is a doctype. Every HTML file should have one.
Basically you only need this one nowadays, as this means HTML5 (what you learn here)
for modern browsers but old browsers still pick up on your file to be some kind of HTML.-->
<html>
  <head>
    <meta charset="UTF-8">
    <title>Our Page Title</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
{% endhighlight %}

And there we are, this is our first valid HTML file! Here it is again, so you can neatly copy&paste it:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Our Page Title</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <!-- put all the content here! -->
  </body>
</html>
{% endhighlight %}

Here are some practical elements:

###Headings (h1-h6)

There is a hierarchy of heading elements that you can use for headlines. They start with h1 and end with h6.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>
{% endhighlight %}

###Paragraph
This is the perfect tag if you want to markup text. Even this text is wrapped in a p.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>Some text</p>
{% endhighlight %}

###Strong, em, break
These are some inline Elements that you can nest inside a paragraph. Strong and emphasis give some meaning to pieces of text, while break forces a
linebreak.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<strong>Strong</strong> and <em>emphasis</em>,
<br>break
{% endhighlight %}

###Images
The image tag is special as it is self-closing, it has no closing tag (like the break tag). It also has a special attribute the src which carries the path to the actual image. The alt attribute is a placeholder, if the image does for some reason not load.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<img src="http://placekitten.com/500/200" alt="cat content">
{% endhighlight %}

###Links
Links take the user to another page. The tag is simply an a which stands for anchor. It comes with the href (hyper reference) attribute, that tells the browser where to go to. You can also add a title attribute that shows once the user hovers over it.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<a href="http://cssconf.eu" title="CSS Conf EU">CSSConfEU</a>
{% endhighlight %}

###Div
The div element is an element that does not have a special meaning or special styling. It’s perfect for grouping other elements together and assigning them a class or an id.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<div>I do nothing special</div>
{% endhighlight %}
***