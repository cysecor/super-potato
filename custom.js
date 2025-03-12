console.log('JS run via git repo');

// Create container element
const container = document.createElement('div');
container.className = 'container';

// Create first column
const column1 = document.createElement('div');
column1.className = 'column';

// Create second column
const column2 = document.createElement('div');
column2.className = 'column';

// Create heading
const heading = document.createElement('h1');
heading.textContent = 'My Heading';

// Create button
const button = document.createElement('button');
button.textContent = 'Click Me';

// Append heading and button to first column
column1.appendChild(heading);
column1.appendChild(button);

// Append columns to container
container.appendChild(column1);
container.appendChild(column2);

// Append container to the body
document.body.appendChild(container);

// Create a style element for basic CSS
const style = document.createElement('style');
style.textContent = `
    .container {
      display: flex;
      gap: 20px;
      margin: 20px;
    }
    .column {
      flex: 1;
      border: 1px solid #ccc;
      padding: 20px;
      box-sizing: border-box;
    }
  `;
document.head.appendChild(style);