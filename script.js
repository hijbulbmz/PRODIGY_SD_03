let contacts = [];

function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name && phone && email) {
        const contact = { name, phone, email };
        contacts.push(contact);
        displayContacts();
        clearForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function displayContacts() {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";

    contacts.forEach((contact, index) => {
        const contactItem = document.createElement("div");
        contactItem.className = "contact-item";
        
        contactItem.innerHTML = `
            <div>
            <b>Name: </b>${contact.name}
            <br>
            <b>Phone: </b> ${contact.phone}
            <br>
            <b>E-mail: </b> ${contact.email}
            </div>
            <br>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>`;
        
        contactList.appendChild(contactItem);
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

function editContact(index) {
    const contact = contacts[index];
    document.getElementById("name").value = contact.name;
    document.getElementById("phone").value = contact.phone;
    document.getElementById("email").value = contact.email;

    contacts.splice(index, 1);
    displayContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}
