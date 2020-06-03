let eventCount=localStorage.getItem('evt-count');
const eventContainer=document.getElementById('events');
let searchEvent=document.getElementById('searchEvents');
//A state variable which keeps track for the editable content of the list
let editable=true;

const searchEventNames=(e)=>{
    //convert the searched text to uppercase
    let inputText=e.target.value.toUpperCase();
    console.log(inputText);

    //Get all the the event card divs
    let eventCards=eventContainer.getElementsByClassName('event-card');
    let eventCardArray=Array.prototype.slice.call(eventCards);
    console.log(eventCardArray);
    eventCardArray.forEach((item,index)=>{
        console.log(item.children[2].textContent);
        if(item.children[2].textContent.indexOf(inputText)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
};


searchEvents.addEventListener('keyup',searchEventNames);

//To filter out only the event names we use key method of [object Object]
let keys = Object.keys(localStorage);
let actualEvent=0;
keys.forEach(element=>{
    if(element.includes('event')){
        actualEvent++;
    }
});
console.log(actualEvent);
let keyLength = keys.length;
const allLocalStorageItems=()=>
{
   let values = [];
       
        console.log(keys);

    while ( keyLength-- ) {
        if(keys[keyLength].includes('event')){
            values.push( localStorage.getItem(keys[keyLength]) );
        }
    }
    return values;
};

console.log(allLocalStorageItems());
const deleteListItem=(e)=>
{
    e.preventDefault();

    //Check which child of list container contains class=closeBtn and point to that child.
        if(confirm('Are You Sure About That??'))
        {
            //Once the child having closeBtn class is found then removes its parent from the DOM.
            e.parentNode.remove();
            //Update the list container to local storage.
            localStorage.removeItem('event-'+e.target.parentNode.children[6].textContent);
        }
}
const editTask=(e)=>{
    console.log(e);
    let eventObject={
        name:e.children[2].textContent,
        description:e.children[4].children[3].textContent,
        time:e.children[4].children[0].textContent,
        date:e.children[4].children[2].textContent
    }
    if(editable){
        e.setAttribute('contenteditable','true');
        console.log(e.target.children[1].src);
        e.children[1].src='/assets/done.png';
        editable=false;
    }
    else{
        e.setAttribute('contenteditable','false');
        e.children[1].src='/assets/pencil.png';
        editable=true;
        if(e.children[2].textContent.length>0){
            localStorage.setItem('event-'+e.children[6].textContent,JSON.stringify(eventObject));
        }
        else{
            alert('Since You Have Not Entered Anything \n So The Previous Value Will Be Displayed on Page Reload.');
        }
       
    }
}

const doSomeOperation=(e)=>{

    console.log(e.target);
    if(e.target.classList.contains('closeBtn')){
        deleteListItem(e.target);
    }
    else if (e.target.classList.contains('editBtn')){
        editTask(e.target);
    }
};




while(actualEvent) 
{
    let eventData=JSON.parse(localStorage.getItem('event-'+actualEvent));
    eventContainer.innerHTML+=`
    <div class="jumbotron event-card">
        <button class='closeBtn'> X</button>
        <button class="editBtn" > 
        <img src="/assets/pencil.png" alt='@'/>
        </button>
        <h2 class='d-flex align-items-center text-danger justify-content-between'>${eventData.name} </h2>
        <hr/>
        <h5 class='display-5'>You Have an Event at <span class='text-primary'> ${eventData.time}</span> on <span class='display-5 text-weight-bold text-success'>${eventData.date}</span><br/><span class='text-success lead'> ${eventData.description}</span><br/><br/></h5>
        <strong>Enjoy Your Event.!</strong>
        <span class='event-counter'>${actualEvent}</span>
    </div>
    `;
    actualEvent--;
}
console.log(actualEvent);

document.querySelector('.event-card').addEventListener('click',doSomeOperation);