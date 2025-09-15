window.onload = function(){
    actualizar();
}

async function actualizar() {
    document.getElementById("users").querySelectorAll(".user").forEach(e => e.remove());
    //fetch array de users  
    response = await fetch ("http://localhost:3000/users", {
        method: 'GET',
        headers: { contentType: 'application/json'},
    });
    data = await response.json()
    forEach (user in data.users); {
        const li = document.createElement("li");
        li.classList.add("user");
        li.innerHTML = 
        '<div class="info">' + 
        '<p>' + user.name + '</p>' + 
        '<p>' + user.role + '</p>' + 
        '<p>' + user.email + '</p>' + 
        '</div>' + 
        '<div class="buttons">' + 
        '<span><button onClick="promote('+ user.id + ')">Promote</button><button onClick="demote('+ user.id + ')">Demote</button></span>' +
        '<button onClick="borrar(' + user.id + ')">Delete</button>' + 
        '</div>'
    }
    
}

async function addUser() {
    const name = document.getElementById('name').value
    const role = document.getElementById('role').value
    const email = document.getElementById('email').value
    const usuario = {name: name, role: role, email: email}
    response = await fetch ("http://localhost:3000/users", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    })
    actualizar();
}
async function promote(id) {
    response = await fetch ("http://localhost:3000/users/" + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    data = await response.json()
    if (data.role === 'Editor') {
        data.role = 'Admin'
    }
    else if (data.role === 'Viewer') {
        data.role = 'Editor'
    }
    response = await fetch ("http://localhost:3000/users/" + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    actualizar();
}

async function demote(id) {
    response = await fetch ("http://localhost:3000/users/" + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    })
    data = await response.json()
    if (data.role === 'Admin') {
        data.role = 'Editor'
    }
    else if (data.role === 'Editor') {
        data.role = 'Viewer'
    }
    response = await fetch ("http://localhost:3000/users/" + id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    actualizar();
}
function borrar(id) {
    fetch ("http://localhost:3000/users/" + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
    })
    actualizar();
}
