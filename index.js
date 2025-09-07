document.addEventListener('DOMContentLoaded', () => {
    loadNotes(); // Load saved notes when the page loads

    // Add event listener to all existing delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteNote);
    });
});

function createnotes() {
    const notesContainer = document.querySelector('.container');
    
    const noteBox = document.createElement('div');
    
    noteBox.classList.add('notesbox');

    const inputBox = document.createElement('p');
    inputBox.classList.add('inputbox');
    inputBox.setAttribute('contenteditable', 'true');
    
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button1');
        const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.textContent = 'save-text';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'delete';
    
    // Add event listener for the new delete button
       saveButton.addEventListener('click', saveNotes);
    deleteButton.addEventListener('click', deleteNote);

    // Add event listener for saving notes on input
    
    inputBox.addEventListener('input', saveNotes);
     buttonDiv.appendChild(saveButton);
    buttonDiv.appendChild(deleteButton);
   
    noteBox.appendChild(inputBox);
    noteBox.appendChild(buttonDiv);
    notesContainer.appendChild(noteBox);
}

function deleteNote(event) {
    const noteBox = event.target.closest('.notesbox');
    if (noteBox) {
        noteBox.remove();
        saveNotes(); // Update saved notes after deletion
    }
}

function saveNotes() {
    const notes = [];
    document.querySelectorAll('.inputbox').forEach(input => {
        notes.push(input.innerText);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.forEach(noteText => {
        const notesContainer = document.querySelector('.container');
        const noteBox = document.createElement('div');
        noteBox.classList.add('notesbox');

        const inputBox = document.createElement('p');
        inputBox.classList.add('inputbox');
        inputBox.setAttribute('contenteditable', 'true');
        inputBox.innerText = noteText;
        
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button1');
        
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.textContent = 'delete';
       
                const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.textContent = 'save-text';

        deleteButton.addEventListener('click', deleteNote);
        inputBox.addEventListener('input', saveNotes);
        
          buttonDiv.appendChild(saveButton);
        buttonDiv.appendChild(deleteButton);
        noteBox.appendChild(inputBox);
        noteBox.appendChild(buttonDiv);
        notesContainer.appendChild(noteBox);
    });
}