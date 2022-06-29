let persons = JSON.parse(localStorage.getItem('person'));
//
let employees = JSON.parse(localStorage.getItem('employees')) ? 
JSON.parse(localStorage.getItem('employees')) : 
[];

function addEmployee(e) {
    e.preventDefault();
    employees.push(
        {
            id: persons.length,
            hrs: parseInt(document.querySelector('#hrs').value),
            rate: parseInt(document.querySelector('#rate').value)
        }
    );
    localStorage.setItem('employees', JSON.stringify(employees));
    //
    readEmployees();
}

document.querySelector('#salary').addEventListener('click', addEmployee);

// Read
function readEmployees() {
    let wrapper = document.querySelector('#wrapper');
    wrapper.innerHTML = "";
    persons.forEach( (item, index)=> {
        wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Fullname: ${item.name} ${item.surname}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Email address: ${item.email}</h6>
            <p class="card-text">Salary: R ${employees[index].hrs * employees[index].rate }</p>
            </div>
        </div>
        `;
    });
};

console.log(persons);
console.log(employees);