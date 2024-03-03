fetch('https://jsonplaceholder.typicode.com/posts')

    .then(response => {
        try {
            if (!response.ok) {
                throw 'Network response was not ok';
            }

        }
        catch (error) {

        }
        finally {
            return response.json();
        }
    })

    .then(users => showusers(users));

function showusers(users) {
    const ul = document.createElement("ul")
    for (let user of users) {
        const li = document.createElement("li")
        li.textContent = user.title;
        ul.appendChild(li)
    }
    result.appendChild(ul)
}

let textbox = document.getElementById("textbox")
textbox.addEventListener("keyup", function () {
    const lielements = document.querySelectorAll("li")
    for (let li of lielements) {
        const currentname = li.textContent.toLocaleLowerCase()
        const searchtext = event.target.value.toLocaleLowerCase()
        if (!currentname.includes(searchtext)) {
            li.setAttribute('hidden', true)
        }
        else {
            li.removeAttribute('hidden')
        }
    }
})
