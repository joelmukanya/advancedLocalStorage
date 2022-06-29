// localStorage.removeItem('person');
// localStorage.removeItem('employees');
let persons = JSON.parse( localStorage.getItem('person')) ? JSON.parse( localStorage.getItem('person')) : [];

function addData() {
    persons.push(
        {
            id: persons.length < 1 ? 1 : persons.length + 1,
            name: document.querySelector('#firstname').value,
            surname: document.querySelector('#surname').value,
            email: document.querySelector('#email').value
        }
    );
    // Save to a localstorage
    localStorage.setItem('person', JSON.stringify(persons));
}
// Add event listener
document.querySelector('#submit').addEventListener('click', addData);