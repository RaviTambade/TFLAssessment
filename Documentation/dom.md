
# Document Object Model
HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It provides the structure of the content, while the Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

Here's a brief overview of HTML and the DOM:

### HTML:
HTML provides the structure and content of a web page using elements, which are marked up using tags. Here's a simple example of HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of my website.</p>
        </section>
        <section id="about">
            <h2>About Section</h2>
            <p>Learn more about us here.</p>
        </section>
        <section id="contact">
            <h2>Contact Section</h2>
            <p>Contact us through the form below.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
```

### Document Object Model (DOM):
The DOM represents the HTML document as a tree structure where each node represents a part of the document. The DOM provides a way for programs to dynamically access and manipulate the structure, style, and content of HTML documents.

Here's a simple example of using JavaScript to access and manipulate the DOM:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <h1 id="heading">Hello, World!</h1>
    <button onclick="changeText()">Change Text</button>

    <script>
        function changeText() {
            var heading = document.getElementById("heading");
            heading.textContent = "Hello, DOM!";
        }
    </script>
</body>
</html>
```

In this example, clicking the button will execute the `changeText()` function, which retrieves the element with the ID "heading" and changes its text content to "Hello, DOM!".

This is just a basic introduction to HTML and the DOM. Both are fundamental for web development, allowing developers to create interactive and dynamic web pages.