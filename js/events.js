let eventCount=localStorage.getItem('event-count');
const eventContainer=document.getElementById('events');
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
};

console.log(allStorage());



for(let i=1;i<=eventCount;i++)
{
    let eventData=JSON.parse(localStorage.getItem('event-'+i));
    eventContainer.innerHTML+=`
    <div class="jumbotron event-card">
        <button class='closeBtn' > X</button>
        <button class="editBtn" onclick='editTask(this)'> <img src="/assets/pencil.png" alt='@'/></button>
        <h2 class='d-flex align-items-center text-danger justify-content-between'>${eventData.name} <span class='lead text-success'>${eventData.date}</span> </h2>
        <hr/>
        <h5 class='display-5'>You Have an Event at <span class='text-primary'> ${eventData.time}</span>.<br/><span class='text-success lead'> ${eventData.description}</span><br/><br/></h5>
        <strong>Enjoy Your Event.!</strong>
        <span class='event-counter'>${i}</span>
    </div>
    `;
}

document.querySelector('.event-card').addEventListener('click',deleteListItem);

