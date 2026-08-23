/*
  FITNESS WITH DIAMOND
  Weekly event data lives here.

  To update the website each week:
  1. Change/add the event objects below.
  2. Save the file.
  3. Upload/commit it to GitHub.
*/

const events = [
  {
    date: "SAT, AUG 22",
    title: "Pink Paradise Walk",
    location: "North Dallas",
    price: "FREE",
    description: "A community walk to move, connect & unwind.",
    type: "walk"
  },
  {
    date: "SUN, AUG 23",
    title: "Pilates in the Park",
    location: "Klyde Warren Park",
    price: "$15",
    description: "30-min Pilates session for all levels. Bring your mat!",
    type: "pilates"
  },
  {
    date: "TUE, AUG 25",
    title: "HIIT & Sculpt",
    location: "The Union Dallas",
    price: "$20",
    description: "High intensity. Full body. Real results.",
    type: "hiit"
  },
  {
    date: "THU, AUG 27",
    title: "Community Yoga",
    location: "White Rock Lake",
    price: "FREE",
    description: "Outdoor yoga + good vibes. All are welcome.",
    type: "yoga"
  }
];

const eventGrid = document.getElementById("event-grid");

function renderEvents() {
  eventGrid.innerHTML = events.map(event => `
    <article class="event-card">
      <div class="event-image ${event.type}">
        <span class="event-date">${event.date}</span>
      </div>

      <div class="event-body">
        <h3>${event.title}</h3>

        <div class="event-meta">
          <span>⌖ &nbsp; ${event.location}</span>
          <span>♥ &nbsp; ${event.price}</span>
        </div>

        <p class="event-description">${event.description}</p>

        <a class="event-link" href="#" onclick="return false;">
          VIEW DETAILS &nbsp; →
        </a>
      </div>
    </article>
  `).join("");
}

renderEvents();

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thanks for joining the weekly finds! Connect this form to your email service before launch.");
});
