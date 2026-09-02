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
    date: "MON, AUG 31",
    title: "Glad Run Club",
    location: "Fort Worth, TX",
    price: "FREE",
    description: "Social run with ASICS. 3 miles on the Trinity Trail.",
    type: "run",
    link: "https://gladrunclub.com/pages/join"
  },
  {
    date: "TUE, SEP 1",
    title: "Futsal",
    location: "Dallas, TX",
    price: "$15",
    description: "Indoor futsal at City Futsal. Choose from 7–8 PM or 8–9 PM.",
    type: "sports",
    link: "https://cityfutsal.com/"
  },
  {
    date: "WED, SEP 2",
    title: "Pilates in the Park",
    location: "Carrollton, TX",
    price: "FREE",
    description: "Pilates in the park hosted by Foyer Social & Ava Fitique.",
    type: "pilates",
    link: "https://foyer.social/events"
  },
  {
    date: "THU, SEP 3",
    title: "Girls Run the World",
    location: "Germany Park, Dallas",
    price: "FREE",
    description: "Morning run with the 214 Run Club.",
    type: "run",
    link: "https://www.214runclub.com/"
  },
  {
    date: "FRI, SEP 4",
    title: "Spicy Spanish Sculpt",
    location: "Dallas, TX",
    price: "$15",
    description: "Full-body sculpt workout featuring a Spanish playlist.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/15-full-body-sculpt-spanish-playlist-edition-tickets-1999015224348"
  },
  {
    date: "FRI, SEP 4",
    title: "Poolside Pilates",
    location: "The Village Dallas",
    price: "$7.02",
    description: "Poolside Pilates at Village Beach Club. Non-resident admission is $7.02.",
    type: "pilates",
    link: "https://www.thevillagedallas.com/event/poolside-pilates-at-village-beach-club/2026-09-04/"
  },
  {
    date: "FRI, SEP 4",
    title: "Pilates in the Park",
    location: "Oak Cliff Founders Park",
    price: "$25",
    description: "Pilates in the park with LuvDrunk Cafe.",
    type: "pilates",
    link: "https://sweatpals.com/event/pilates-in-the-park-w-luvdrunkcafe"
  },
  {
    date: "SAT, SEP 5",
    title: "Bubbles & Babes Walk",
    location: "Allen, TX",
    price: "FREE",
    description: "Community walk sponsored by Pepsi with Pretty Pace Club.",
    type: "walk",
    link: "https://tr.ee/0FxSrTF3Sm"
  },
  {
    date: "SAT, SEP 5",
    title: "Pilates in the Park",
    location: "Mesquite, TX",
    price: "FREE",
    description: "Outdoor Pilates with Zena Pilates. Wear red!",
    type: "pilates",
    link: "https://sweatpals.com/class/pilates-at-the-park-ac39/2026-09-05"
  },
  {
    date: "SAT, SEP 5",
    title: "Party in the USA",
    location: "OMNI Dallas",
    price: "$25",
    description: "Pilates Caliente Dallas. Single drop-in class.",
    type: "pilates",
    link: "https://app.arketa.co/httpscalendlycompilatescalientedallas?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
  },
  {
    date: "SAT, SEP 5",
    title: "Buff Lifestyle 5K",
    location: "Dallas, TX",
    price: "$46.13",
    description: "Get moving with the Buff Lifestyle 5K.",
    type: "run",
    link: "https://www.eyf5k.com/"
  },
  {
    date: "SUN, SEP 6",
    title: "Pilates & Facials",
    location: "Dallas, TX",
    price: "$110",
    description: "A luxury wellness day featuring Pilates and facials.",
    type: "pilates",
    link: "https://posh.vip/e/pilates-facial-party-luxury-wellness-day"
  },
  {
    date: "SUN, SEP 6",
    title: "US Open Watch Party",
    location: "Legacy Hall",
    price: "See event details",
    description: "Watch the US Open with Dallas Girls Tennis.",
    type: "sports",
    link: "https://linktr.ee/dagtc.events"
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

        <a class="event-link" href="${event.link}" target="_blank" rel="noopener noreferrer">
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
