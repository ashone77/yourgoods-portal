async function getRetailers() {
    let url = ' http://localhost:4000/owner/getallretailers';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
  }
  
  async function renderRetailers() {
    let retailer = await getRetailers();
    let html = '';
    events.forEach(retailer => {
        let htmlSegment = `<div class="col">
        <div class="card text-white bg-success my-4">
          <div class="retailer-container">
            <h5 class="card-title">${event.eventName}</h5>
            <p class="card-text">${event.eventDescription} <br>
            <p class="card-text">${event.eventVenue} <br>
            <p class="card-text">${event.eventTime} <br>
            <p class="card-text">${event.eventDate} <br>
            </p>
            <a class="btn  btn-outline-light rounded-pill" style="background-color: #de5499" href="./StudentsList.html" role="button">View Students</a>
          </div>
        </div>
      </div>`;
  
        html += htmlSegment;
    });
  
    let container = document.getElementById('event-grid');
    container.innerHTML = html;
  }
  
  renderEvents();