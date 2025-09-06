// source: https://www.youtube.com/watch?v=cOUNOi297Mw&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz

document.querySelector('#push').onclick = function(){
    // adding validation for empty input field
    // if nothing writen return alert = write something!
    if(document.querySelector('#newTask input').value.length === 0){
        alert("Please Enter a Task")
    }else{  // Adding a new task
        document.querySelector('#tasks').innerHTML +=  
        `
           <div class="task">
                <span id="taskName">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class ="delete">
                    <i class="fa-solid fa-trash"></i>
                </button
           </div>
        `
        ;
       

        // deleting a task
        const current_tasks = document.querySelectorAll(".delete");
        for(i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        // crossing off a completed task
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }

        // clearing the input field after each entry
        document.querySelector("#newTask input").value = ""
    } 
   
}