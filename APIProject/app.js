window.onload = function () {
    document.querySelector('button').onclick = getData;
}

async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // });
    const response = await fetch(url);
    const data = await response.json();

    let output = '<h2>Data of Users</h2>';

    data.forEach(user => {
        output += `
            <ul class="list-group">
                <li class="list-group-item text-primary">Name: ${user.name}</li>
                <li class="list-group-item text-secondary">Email: ${user.email}</li>
                <li class="list-group-item">Website: ${user.website}</li>
            </ul><br>
        `;

    })

    document.querySelector('#result').innerHTML = output;
}