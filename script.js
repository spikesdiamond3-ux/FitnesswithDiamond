const events = [
  {
    date: "MON, SEP 7",
    title: "Run It Up Dallas",
    category: "RUN",
    time: "8:30 AM",
    location: "Katy Trail, Dallas",
    price: "FREE",
    description: "Morning social run on the Katy Trail.",
    type: "run",
    link: "https://www.instagram.com/runitup_dallas/"
  },
  {
    date: "MON, SEP 7",
    title: "Athletic Fitness Bootcamp",
    category: "FITNESS",
    time: "10:30 AM",
    location: "Plano, TX",
    price: "$25.02",
    description: "Athletic fitness bootcamp designed to boost strength, endurance, and overall fitness. Price is for you and a friend.",
    type: "sports",
    link: "https://www.eventbrite.com/e/athletic-fitness-bootcamp-labor-day-tickets-1999256984459"
  },

  {
    date: "TUE, SEP 8",
    title: "Volleyball Social",
    category: "SOCIAL",
    time: "7:30 PM",
    location: "Dallas, TX",
    price: "$5",
    description: "Volleyball social with music, refreshments, and a chance to meet new people.",
    type: "sports",
    link: "https://linktr.ee/FemmeF0rward"
  },

  {
    date: "WED, SEP 9",
    title: "Yoga on the Plaza",
    category: "WELLNESS",
    time: "6:00 PM",
    location: "Dallas, TX",
    price: "DONATION BASED",
    description: "Donation-based yoga on the plaza.",
    type: "pilates",
    link: "https://www.leclique.net/events"
  },
  {
    date: "WED, SEP 9",
    title: "Sunset Fitness HIIT",
    category: "FITNESS",
    time: "6:30–7:30 PM",
    location: "Grandscape, The Colony",
    price: "FREE",
    description: "HIIT workout with Hustle House DFW on the Corona Stage + Lawn.",
    type: "sports",
    link: "https://www.grandscape.com/event/sunset-fitness-hiit-with-hustle-house-4/2026-09-09/"
  },
  {
    date: "WED, SEP 9",
    title: "Ladies Datey",
    category: "SOCIAL",
    time: "7:00 PM",
    location: "O2, Dallas",
    price: "$44.97",
    description: "45-minute mat Pilates class with goodie bags and a cocktail tasting mixer.",
    type: "pilates",
    link: "https://speakeasygo.com/The-Datey/Ladies-Datey-Dallas-%7C-O2?eid=EVE-QM6GUN"
  },

  {
    date: "THU, SEP 10",
    title: "28th Annual Katy 5K",
    category: "RUN",
    time: "7:30 PM",
    location: "Reverchon Park, Dallas",
    price: "$75",
    description: "The 28th annual Katy 5K. Registration required.",
    type: "run",
    link: "https://raceroster.com/events/2026/112103/28th-annual-katy-5k-presented-by-michelob-ultra"
  },
  {
    date: "THU, SEP 10",
    title: "Hot Girls Stride",
    category: "RUN",
    time: "7:00 PM",
    location: "Grand Prairie, TX",
    price: "FREE",
    description: "Social run with the Hot Girls Stride community.",
    type: "run",
    link: "https://linktr.ee/HotGirlStridee"
  },
  {
    date: "THU, SEP 10",
    title: "Girls Just Wanna Have Football",
    category: "SOCIAL",
    time: "6:30 PM",
    location: "Dallas, TX",
    price: "$50–$75",
    description: "49ers vs. Rams watch party with signature drinks, a curated game-day spread, and plenty of football.",
    type: "sports",
    link: "https://www.tickettailor.com/events/sidelinesociete/2363020"
  },

  {
    date: "FRI, SEP 11",
    title: "Spike & Sip Social",
    category: "SOCIAL",
    time: "6:00 PM",
    location: "Klyde Warren Park, Dallas",
    price: "FREE",
    description: "Open volleyball play and happy hour with Dallas Sports & Social Club.",
    type: "sports",
    link: "https://www.eventbrite.com/e/spike-sip-social-sep-11-tickets-1998519219785"
  },

  {
    date: "SAT, SEP 12",
    title: "Pray N Run Club",
    category: "RUN",
    time: "6:30 AM",
    location: "West Fort Worth",
    price: "SEE EVENT DETAILS",
    description: "Community pickleball and 5K event.",
    type: "run",
    link: "https://partiful.com/e/NiC65qp5f7LPCJkSNCpj"
  },
  {
    date: "SAT, SEP 12",
    title: "Hustle Hill",
    category: "RUN",
    time: "8:00 AM",
    location: "Irving, TX",
    price: "FREE",
    description: "Free community run held every Saturday.",
    type: "run",
    link: "https://linktr.ee/hustlehilldallas"
  },
  {
    date: "SAT, SEP 12",
    title: "Pilates in the Park",
    category: "PILATES",
    time: "9:00 AM",
    location: "Griggs Park, Dallas",
    price: "FREE",
    description: "Outdoor Pilates with Pilates 214. Held every Saturday.",
    type: "pilates",
    link: "https://www.instagram.com/pilates214/"
  },
  {
    date: "SAT, SEP 12",
    title: "Pilates in the Park",
    category: "PILATES",
    time: "9:00 AM",
    location: "Cypress Waters",
    price: "FREE",
    description: "High-intensity, cardio-infused Pilates built for all levels.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/carries-pilates-in-the-park-cypress-waters-series-tickets-1989437134022"
  },
  {
    date: "SAT, SEP 12",
    title: "Kota Wellness Pilates",
    category: "PILATES",
    time: "9:30 AM",
    location: "Marriott Dallas Uptown",
    price: "FREE",
    description: "Saturday morning Pilates on the plaza. Held every Saturday through October 3rd.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/saturday-morning-pilates-on-the-plaza-tickets-1999112516351"
  },
  {
    date: "SAT, SEP 12",
    title: "Epic FIT Fest",
    category: "FITNESS",
    time: "8:00 AM",
    location: "Elite Performance Training, Irving",
    price: "$65",
    description: "A fitness, wellness, community, and shopping experience hosted by Black Girl Fit.",
    type: "sports",
    link: "https://events.eventnoire.com/e/epic-fit-fest-2026-the-ultimate-wellness-experienc/tickets"
  },
  {
    date: "SAT, SEP 12",
    title: "Dallas Hill Sprints",
    category: "RUN",
    time: "11:30 AM",
    location: "Townview High School, Dallas",
    price: "SEE EVENT DETAILS",
    description: "Hill sprint workout. Meets Saturdays and Sundays.",
    type: "run",
    link: "https://www.instagram.com/dallashillsprints/"
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

        <span class="event-category">${event.category}</span>

        <h3>${event.title}</h3>

        <div class="event-meta">
          <span>🕐 &nbsp; ${event.time}</span>
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
```

