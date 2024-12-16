challange 1

<p>Add a footer with your name at the bottom of the page.</p>

<footer>
    <p>Created by [Your Name]</p>
</footer>


challange 2

<p>change the color of the paragraph text in to blue.</p>

#challenge-2 p {
    color: blue;
}


challange 3

<p>Edit the button to display a custom message in the alert.</p>

document.getElementById('alert-button').addEventListener('click', () => {
    alert('Welcome to the interactive page!');
});


challange 4

<p>Use media queries to adjust the layout of the cards so that they stack vertically on smaller screens (less than 600px width).</p>


@media (max-width: 600px) {
    .card {
        display: block;
        margin: 10px auto;
        width: 80%;
    }
}


challange 5

<p>Update the text of the p tag to "Congratulations!" on button click.</p>


document.getElementById('change-text-button').addEventListener('click', () => {
    document.getElementById('dynamic-text').textContent = 'Congratulations!';
});

challange 6

<p>Add a button that dynamically adds a new item to a list. The list should start empty, and each button click should append a new numbered list item.</p>

document.getElementById('add-list-item').addEventListener('click', () => {
    const list = document.getElementById('dynamic-list');
    const newItem = document.createElement('li');
    newItem.textContent = `List Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});




