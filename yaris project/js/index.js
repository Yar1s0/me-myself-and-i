var i = 4;

function addRow() {

    var hobbieInput = document.getElementById("hobbieInput");
    var descriptionInput = document.getElementById("descriptionInput");
    var priority = document.getElementById("inputPriority");

    var element = document.getElementById("tableBody");

    var myhtml =
        `<tr>
            <th scope="row">`+ i + `</th>
            <td>`+ hobbieInput.value + `</td>
            <td>`+ priority.options[priority.selectedIndex].value + `</td>
            <td>`+ descriptionInput.value + `</td>
        </tr>`;

    element.innerHTML += myhtml;
    hobbieInput.value = "";
    descriptionInput.value = "";
    i++;

}

function removeAll() {
    var element = document.getElementById("tableBody");
    element.innerHTML = "";
    i = 0;
}


function removeAllKeepinitial() {
    var element = document.getElementById("tableBody");
    element.innerHTML = `
    <tr>
        <th scope="row">1</th>
        <td>To eat</td>
        <td>High</td>
        <td>95% of my thoughts are related to food...</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>Coding</td>
        <td>Medium</td>
        <td>Copy and Paste (hehe)</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>Read Books</td>
                            <td>Super high</td>
                            <td>My best way to escape from this world</td>
    </tr>`;
    i = 4;
}

function sendMessage() {
    var element = document.getElementById("emailBtn");
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var messageInput = document.getElementById("messageInput");
    element.classList.toggle('rotated');

    var message = `
    Message from:`+ nameInput.value + `\n
    with email:`+ emailInput.value + `\n
    with Message:`+ messageInput.value + `\n`
    alert(message);
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
}
