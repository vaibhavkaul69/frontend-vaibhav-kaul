let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let calenderBody = document.getElementById("calendar-body"); 
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById("monthAndYear");

let eventCount=localStorage.getItem('evt-count');
if(eventCount === null || eventCount === undefined){
    eventCount=0;
    localStorage.setItem('evt-count',eventCount);
};

const next=()=> {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
};

const previous=()=> {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
};

const jumpToYear=()=> {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
};

const showCalendar=(month, year)=> {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    // clearing all previous cells
    calenderBody.innerHTML = "";
    // filing data about month and in the page via DOM.
    monthAndYear.textContent = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let rowCalender = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cellCalender = document.createElement("td");
                let cellTextCalender = document.createTextNode("");
                cellCalender.appendChild(cellTextCalender);
                rowCalender.appendChild(cellCalender);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cellCalender = document.createElement("td");
                let cellTextCalender = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cellCalender.classList.add("bg-info");
                } // color today's date
                cellCalender.appendChild(cellTextCalender);
                rowCalender.appendChild(cellCalender);
                date++;
            }


        }

        calenderBody.appendChild(rowCalender); // appending each row into calendar body.
    }
    return {month:months[month],year:year};

};
showCalendar(currentMonth, currentYear);
//Create an Event Modal Dialog box.

const createAddEventModal=(monthName)=>{
    return `
    <div class="modal fade" id="${monthName.month}_${event.target.textContent}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Add an Event : ${monthName.month}-${event.target.textContent}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form>
        <div class='form-group'>
            <input class='form-control' id='disabled-date' type='text' disabled placeholder='${monthName.month}-${event.target.textContent}'/>
        </div>
        <div class="form-group">
            <label for="inputEventName">Name</label>
            <input class="form-control" type="text" id="inputEventName" placeholder="Enter Name"/>
        </div>
        <div class="form-group">
            <label for="inputEventDescription">Description</label>
            <textarea class="form-control" row="5" id="inputEventDescription"></textarea>
        </div>
        <div class="form-group">
            <label for="inputEventTime">Select Event Time</label>
            <select  class="form-control" id="inputEventTime">
                <option value="00:00 AM">12.00 AM</option>
                <option value="00:30 AM">12.30 AM</option>
                <option value="01:00 AM">01.00 AM</option>
                <option value="01:30 AM">01.30 AM</option>
                <option value="02:00 AM">02.00 AM</option>
                <option value="02:30 AM">02.30 AM</option>
                <option value="03:00 AM">03.00 AM</option>
                <option value="03:30 AM">03.30 AM</option>
                <option value="04:00 AM">04.00 AM</option>
                <option value="04:30 AM">04.30 AM</option>
                <option value="05:00 AM">05.00 AM</option>
                <option value="05:30 AM">05.30 AM</option>
                <option value="06:00 AM">06.00 AM</option>
                <option value="06:30 AM">06.30 AM</option>
                <option value="07:00 AM">07.00 AM</option>
                <option value="07:30 AM">07.30 AM</option>
                <option value="08:00 AM">08.00 AM</option>
                <option value="08:30 AM">08.30 AM</option>
                <option value="09:00 AM">09.00 AM</option>
                <option value="09:30 AM">09.30 AM</option>
                <option value="10:00 AM">10.00 AM</option>
                <option value="10:30 AM">10.30 AM</option>
                <option value="11:00 AM">11.00 AM</option>
                <option value="11:30 AM">11.30 AM</option>
                <option value="12:00 PM">12.00 PM</option>
                <option value="12:30 PM">12.30 PM</option>
                <option value="13:00 PM">01.00 PM</option>
                <option value="13:30 PM">01.30 PM</option>
                <option value="14:00 PM">02.00 PM</option>
                <option value="14:30 PM">02.30 PM</option>
                <option value="15:00 PM">03.00 PM</option>
                <option value="15:30 PM">03.30 PM</option>
                <option value="16:00 PM">04.00 PM</option>
                <option value="16:30 PM">04.30 PM</option>
                <option value="17:00 PM">05.00 PM</option>
                <option value="17:30 PM">05.30 PM</option>
                <option value="18:00 PM">06.00 PM</option>
                <option value="18:30 PM">06.30 PM</option>
                <option value="19:00 PM">07.00 PM</option>
                <option value="19:30 PM">07.30 PM</option>
                <option value="20:00 PM">08.00 PM</option>
                <option value="20:30 PM">08.30 PM</option>
                <option value="21:00 PM">09.00 PM</option>
                <option value="21:30 PM">09.30 PM</option>
                <option value="22:00 PM">10.00 PM</option>
                <option value="22:30 PM">10.30 PM</option>
                <option value="23:00 PM">11.00 PM</option>
                <option value="23:30 PM">11.30 PM</option>
            </select>
          </div>
          <div class="form-group">
              <input id="NotifyOrNot" type="checkbox"/>
              <label for="NotifyOrNot">&#x1f514; Add Notification</label>
          </div>
    </form>   
        </div>
        <div class="modal-footer">
          <button type="button" id='add-event' data-dismiss="modal" onclick='addEventBtn(this.${monthName.month}_${event.target.textContent})' class="btn  btn-outline-success">Add Event</button>
        </div>
      </div>
    </div>
  </div>
    `;
}

calenderBody.addEventListener('click',(event)=>{

    //store the current month and year in the right calender in form of object.
    const monthName=showCalendar(currentMonth, currentYear);

    //Create an event modal box div.
    const eventModalParentDiv=document.createElement('div');

    //Call this createAddEventModal() function to create an modal.
    //Append that created modal in the div created.
    eventModalParentDiv.innerHTML=createAddEventModal(monthName);

    //check if the the date column is not empty.
    if(event.target.textContent.length>0)
    {
        //CHeck if the block of date so clicked has a non-zero date.
        //Then add an id equals to (monthName_date);
        event.target.id=`#${monthName.month}_${event.target.textContent}`;

        //Add 2 attributes into the block of calender so clicked.
        event.target.setAttribute('data-toggle','modal');
        event.target.setAttribute('data-target',event.target.id);

        //Now just append that created modal div into the body.
        document.body.prepend(eventModalParentDiv);
        console.log(event.target);
    }
});

const addEventBtn=()=>{
    console.log('Btn clicked');
    //Get the input from Create Event Modal Box.
    let eventName=document.getElementById('inputEventName').value;
    eventName=eventName.toUpperCase();
    const eventDescription=document.getElementById('inputEventDescription').value;
    const eventTime=document.getElementById('inputEventTime').value;
    const eventDate=document.getElementById('disabled-date').placeholder;
    let notifyMeOrNot=document.getElementById('NotifyOrNot');
    if(notifyMeOrNot.checked){
        notifyMeOrNot='You will be notified .!';
    }
    else{
        notifyMeOrNot='You will Not be notified .!';
    }
    console.log(notifyMeOrNot);
    
    //Create an object of all the input items
    let eventObject={
        name:eventName,
        description:eventDescription,
        time:eventTime,
        date:eventDate,
        notifyMe:notifyMeOrNot
    }
    localStorage.setItem('evt-count',++eventCount);
    localStorage.setItem('event-'+localStorage.getItem('evt-count'),JSON.stringify(eventObject));

    //Store the inputs to the local storage so as to retrieve them back when we want.
    console.log(`${eventName} ${eventDescription} ${eventTime}`);
    
};



