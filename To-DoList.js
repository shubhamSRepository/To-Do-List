
var newTask = document.getElementById('myTextArea'); // Fetching textarea element DoM

var button = document.getElementById('addBtn'); // Fetching button element using DoM

var count = 0; // to track total number of tasks in list

button.addEventListener("click", addTask); // Adding 'on-click' action for button element


function addTask() {

    var inputTask = newTask.value; // Fetching inputTask from textarea

    // In case textarea is empty below condition will be executed
    if (!inputTask.length) {

        alert("Please write task details to add a new task in list");
        return;
    }

    // CREATING AND ADDING HTML ELEMENTS USING JAVASCRIPT 

    //creating div element in which we will add div for task, div for check-box, div for delete button
    var divOutermost = document.createElement('div');
    divOutermost.classList.add("divOutermost-style"); // adding css class to var 'divOutermost' using javascript
    divOutermost.classList.add("animate1"); // adding css class to var 'divOutermost' using javascript
    setTimeout(function () {
        // setTimeout is helping us in creating a delay between animation classes so that animation effect works 
        divOutermost.classList.add("animate2")
        divOutermost.classList.remove("animate1");
    }, 200);



    divOutermost.innerHTML = `<div >
                                <input type="checkbox" class="checkBox">
                            </div>
                            <div class="divTaskText">
                                <p>${inputTask}</p>
                            </div><div class="divDeleteBtn">
                                <p>
                                    <button class="deleteButton" >-</button>
                                </p>
                            </div>`


    // fetching main element from html and putting var 'divOutermost' inside it
    var main = document.getElementById('main');
    main.appendChild(divOutermost);



    // to clean new task bar everytime after we have created any new task
    newTask.value = "";


    // Total number of tasks in list updation
    count++;
    var totalTasks = document.getElementById('totalTasks');
    totalTasks.innerText = "Total Tasks: " + count;


    // adding event listener to delete-button to delete existing task

    var deleteButton = divOutermost.getElementsByClassName('deleteButton')[0];
   
    deleteButton.addEventListener('click', function () {
        divOutermost.classList.add("animate1");

        setTimeout(function () {
            // setTimeout is helping us in creating a delay in removing 'divOutermost' element so that animation could work in this time interval 
            divOutermost.remove();
        }, 500);

        // total number tasks in list updation
        count--;
        totalTasks.innerText = "Total Tasks: " + count;
    });


}