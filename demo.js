



fetch('https://jsonplaceholder.typicode.com/users/1/todos')
.then(response => response.json())

.then(data =>showdata(data))

function showdata(data){
    var search = document.getElementById("search")

    const ul = document.createElement("ul")
    for(let datas of data){
        const li = document.createElement('li')
        li.textContent = datas.id
        ul.appendChild(li)
    }
    container.appendChild(ul)
    
}
search.addEventListener("keyup",function(){
        const elements = document.querySelectorAll("li")
        for(let lilist of elements){
            const curentvalue = lilist.textContent.toLowerCase()
            const enteredvalue  = event.target.value.toLowerCase()
            for (var i=0;i<lilist.length;i+=1){
                
              
            if (!curentvalue.includes(enteredvalue)){
                lilist[i].textContent.style.display = "none"
            }
            else{
                lilist.textContent.style.display = "block"
            }
        }
    }
        
        
    })