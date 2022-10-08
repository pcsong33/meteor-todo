# Meteor-Svelte Todo App
![Page Demo](demo.png)
You can view the prototype at this [link](https://psong-flask-todo-app.herokuapp.com/).

Unlike previous iterations of the Todo app assignment, this is the first one that utilizes Python as the main web framework. 
Flask is classified into a micro-framework, which means that it has little to no dependencies on external libraries. Thus, for 
users more familiar with python, Flask offers a good, low-overhead solution to create and deploy a web application. Additionally, 
Flask leverages Jinja2 as its template engine. Jinja allows users to add programming functionality to previously static html files. 
For example in the `base.html` file, logic conditions (if todo task has been completed) or checked, and depending on the variable 
value, different text and colors are rendered.
