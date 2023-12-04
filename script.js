
function load() {
    document.getElementById("Task").style.visibility = "hidden";
    if (localStorage.length != 0) 
    {
        for (var i = 0; i <= 20; i++)
    {  
        if(localStorage.getItem(`l_task${i}`) == null)
        { continue; }
        else
        {
        console.log(`Task added l_task${i}`);
        var string = localStorage.getItem(`l_task${i}`);
        document.getElementById("Task").style.visibility = "visible";
        document.getElementById("task_item").innerHTML = string;
        document.getElementById("task_k").value = " ";
        const div1 = document.getElementById("Task").cloneNode(true);
        document.getElementById("Added").insertBefore(div1, document.getElementById("Added").firstChild);
        document.getElementById("Task").style.visibility = "hidden";
        document.getElementById("task_k").value = "";
        }
    }

        for (var i = 21; i <= 40; i++)
        {
            if (localStorage.getItem(`l_task${i}`) == null)
            {continue; }
            else
            {
            console.log(`Task added 2l_task${i}`);
            var string = localStorage.getItem(`l_task${i}`);
            console.log(string);
            document.getElementById("Task").style.visibility = "visible";
            document.getElementById("Task").classList.toggle("Completed");
            document.getElementById("task_item").innerHTML = string;
            document.getElementById("task_k").value = " ";
            const div1 = document.getElementById("Task").cloneNode(true);
            document.getElementById("Added").appendChild(div1);
            document.getElementById("Task").style.visibility = "hidden";
            document.getElementById("Task").classList.toggle("Completed");
            document.getElementById("task_k").value = "";
            }
        }
    
    }
}

function Clear() {
    localStorage.clear();
    location.reload();
}

document.getElementById("task_k").addEventListener("keyup", function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
        document.getElementById("Add_task").click();
    } }
)


function Add_Task() 
{ 
    Task_no = localStorage.getItem("Task_no");
    Task_c = localStorage.getItem("Task_c");
    var i = 0;
    for (i = 0; i < document.getElementById("task_k").value.length; i++)
    {
        if (document.getElementById("task_k").value.charCodeAt(i) > 32) 
        {   
            break;
        }
    }
    if (document.getElementById("task_k").value == "" || (i ==  document.getElementById("task_k").value.length))
    {}
    else 
    {
            var string = document.getElementById("task_k").value.substring(i);
            document.getElementById("Task").style.visibility = "visible";
            document.getElementById("task_item").innerHTML = string;
            document.getElementById("task_k").value = " ";
            const div1 = document.getElementById("Task").cloneNode(true);
            document.getElementById("Added").insertBefore(div1, document.getElementById("Added").firstChild);
            document.getElementById("Task").style.visibility = "hidden";
            document.getElementById("task_k").value = "";
            for (i = 0; i <= 20; i++)
            {
                if (localStorage.getItem(`l_task${i}`) == null)
                {
                    localStorage.setItem(`l_task${i}` , string);
                    break;
                }
            }
            console.log(localStorage.getItem(`l_task${i}`));
            console.log(i);
    }
}

function Delete_Task(ele) {
    var string1 = ele.innerText;
    document.getElementById("Added").removeChild(ele);
    delete_from(string1);
}

function delete_from(string) 
{   
    for (var i = 0; i <= 40; i++)
    {  
        var string2 = localStorage.getItem(`l_task${i}`);
        if (string2 == string)
        {
            console.log(`removed task l_task${i}`);
            localStorage.removeItem(`l_task${i}`)   
        }
    }
}

function Task_Complete(ele) {
    Task_no = localStorage.getItem("Task_no");
    Task_c = localStorage.getItem("Task_c");
    ele.parentNode.classList.toggle("Completed");
    document.getElementById("Added").insertBefore(ele.parentNode, document.getElementById("Added").lastChild);
    var string1 = ele.parentNode.innerText;
    delete_from(string1);
    if (ele.parentNode.classList.value != "Task")
    {
        for (i = 21; i <= 40; i++)
            {
                if (localStorage.getItem(`l_task${i}`) == null)
                {
                    localStorage.setItem(`l_task${i}` , string1);
                    break;
                }
            }
        console.log(localStorage.getItem(`l_task${i}`));
    }
    else
    {
        for( var i = 21; i <= 40; i++)
        {
            var string2 = localStorage.getItem(`l_task${i}`);
            if (string1 == string2)
            {
                localStorage.removeItem(`l_task${i}`);
            }
        }
        for (i = 0; i <= 20; i++)
            {
                if (localStorage.getItem(`l_task${i}`) == null)
                {
                    localStorage.setItem(`l_task${i}` , string1);
                    break;
                }
            }
    }
}