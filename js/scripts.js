let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let tbl = document.getElementById("calendar-body"); 
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthAndYear = document.getElementById("monthAndYear");



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

const jump=()=> {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
};

const showCalendar=(month, year)=> {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    // clearing all previous cells
    tbl.innerHTML = "";
    // filing data about month and in the page via DOM.
    monthAndYear.textContent = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
    return {month:months[month],year:year};

};
showCalendar(currentMonth, currentYear);
//Create an Event Modal Dialog box.
//This code snippet is available on https://getbootstrap.com/docs/4.0/components/modal/ .
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
            <input class='form-control' type='text' disabled placeholder='${monthName.month}-${event.target.textContent}, ${monthName.year} '/>
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
                <option value="00:00">12.00 AM</option>
                <option value="00:30">12.30 AM</option>
                <option value="01:00">01.00 AM</option>
                <option value="01:30">01.30 AM</option>
                <option value="02:00">02.00 AM</option>
                <option value="02:30">02.30 AM</option>
                <option value="03:00">03.00 AM</option>
                <option value="03:30">03.30 AM</option>
                <option value="04:00">04.00 AM</option>
                <option value="04:30">04.30 AM</option>
                <option value="05:00">05.00 AM</option>
                <option value="05:30">05.30 AM</option>
                <option value="06:00">06.00 AM</option>
                <option value="06:30">06.30 AM</option>
                <option value="07:00">07.00 AM</option>
                <option value="07:30">07.30 AM</option>
                <option value="08:00">08.00 AM</option>
                <option value="08:30">08.30 AM</option>
                <option value="09:00">09.00 AM</option>
                <option value="09:30">09.30 AM</option>
                <option value="10:00">10.00 AM</option>
                <option value="10:30">10.30 AM</option>
                <option value="11:00">11.00 AM</option>
                <option value="11:30">11.30 AM</option>
                <option value="12:00">12.00 PM</option>
                <option value="12:30">12.30 PM</option>
                <option value="13:00">01.00 PM</option>
                <option value="13:30">01.30 PM</option>
                <option value="14:00">02.00 PM</option>
                <option value="14:30">02.30 PM</option>
                <option value="15:00">03.00 PM</option>
                <option value="15:30">03.30 PM</option>
                <option value="16:00">04.00 PM</option>
                <option value="16:30">04.30 PM</option>
                <option value="17:00">05.00 PM</option>
                <option value="17:30">05.30 PM</option>
                <option value="18:00">06.00 PM</option>
                <option value="18:30">06.30 PM</option>
                <option value="19:00">07.00 PM</option>
                <option value="19:30">07.30 PM</option>
                <option value="20:00">08.00 PM</option>
                <option value="20:30">08.30 PM</option>
                <option value="21:00">09.00 PM</option>
                <option value="21:30">09.30 PM</option>
                <option value="22:00">10.00 PM</option>
                <option value="22:30">10.30 PM</option>
                <option value="23:00">11.00 PM</option>
                <option value="23:30">11.30 PM</option>
            </select>
          </div>
          <div class="form-group">
              <input id="NotifyOrNot" type="checkbox"/>
              <label for="NotifyOrNot">&#x1f514; Add Notification</label>
          </div>
    </form>   
        </div>
        <div class="modal-footer">
          <button type="button" id='add-event' onclick='addEventBtn(this.${monthName.month}_${event.target.textContent})' class="btn  btn-outline-success">Add Event</button>
        </div>
      </div>
    </div>
  </div>
    `;
}

tbl.addEventListener('click',(event)=>{

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
    const eventName=document.getElementById('inputEventName').value;
    const eventDescription=document.getElementById('inputEventDescription').value;
    const eventTime=document.getElementById('inputEventTime').value;
    const eventDate=showCalendar(currentMonth,currentYear);
    //Create an object of all the input items
    let eventObject={
        name:eventName,
        description:eventDescription,
        time:eventTime,
        date:eventDate.month
    }
    localStorage.setItem('event-count',++eventCount);
    localStorage.setItem('event-'+localStorage.getItem('event-count'),JSON.stringify(eventObject));

    //Store the inputs to the local storage so as to retrieve them back when we want.
    console.log(`${eventName} ${eventDescription} ${eventTime}`);
};

document.querySelector('.toggle-sidebar').addEventListener('click',()=>{
    if(document.querySelector('.left_sidebar_calender').classList.contains('active')){
        document.querySelector('.left_sidebar_calender').style.opacity='0';
        document.querySelector('.left_sidebar_calender').classList.remove('active');

    }
    else{
        document.querySelector('.left_sidebar_calender').style.opacity='1';
        document.querySelector('.left_sidebar_calender').classList.add('active');
    }
    
});


