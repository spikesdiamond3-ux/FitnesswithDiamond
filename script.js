const events = [
  {
    date: "MON, SEP 14",
    title: "Ghost Mammoth",
    category: "SOCIAL",
    time: "6:00–9:00 PM",
    location: "Dallas Farmers Market",
    price: "FREE",
    description: "Monday night pickleball with the Ghost Mammoth community at Dallas Farmers Market.",
    type: "sports",
    link: "https://www.instagram.com/ghostmammoth.pb?stkn=MWNkdnkzNGJhZGl3dA=="
  },

  /* TUESDAY */
  {
    date: "TUE, SEP 15",
    title: "Sweat440",
    category: "FITNESS",
    time: "6:30 PM",
    location: "The Shed, Dallas Farmers Market",
    price: "FREE",
    description: "Community workout with Sweat440 at The Shed in Dallas Farmers Market.",
    type: "hiit",
    link: "https://www.eventbrite.com/e/sweat440-community-workout-series-tickets-1991837201689"
  },
  {
    date: "TUE, SEP 15",
    title: "Pilates Caliente",
    category: "PILATES",
    time: "6:00 PM",
    location: "Four Corners Brewery",
    price: "$26",
    description: "A Pilates Caliente Pickleball & Sculpt experience at Four Corners Brewery.",
    type: "pilates",
    link: "https://app.arketa.co/httpscalendlycompilatescalientedallas?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
  },

  /* WEDNESDAY */
  {
    date: "WED, SEP 16",
    title: "Breakthrough T1D",
    category: "WALK",
    time: "5:00 PM",
    location: "Dave & Buster's, 9450 N Central Expy",
    price: "SEE EVENT DETAILS",
    description: "Dallas Walk kickoff featuring great food, friendly competition, laughs, and meaningful connections.",
    type: "run",
    link: "https://www.breakthrought1d.org/dallasfortworth/events/dallas-walk-kick-off-at-dave-busters/"
  },
  {
    date: "WED, SEP 16",
    title: "Crunch Fitness",
    category: "FITNESS",
    time: "5:00 PM",
    location: "Central Forest, 11615 N Central Expy",
    price: "FREE",
    description: "Football-themed mid-month party featuring food, fun, and fitness.",
    type: "sports",
    link: "https://facebook.com/events/s/football-themed-mid-month-part/1506155394648824/"
  },
  {
    date: "WED, SEP 16",
    title: "DFW Young & Social",
    category: "WELLNESS",
    time: "7:15 PM",
    location: "Dallas, TX",
    price: "FREE / DONATIONS",
    description: "Free Hatha yoga focused on strength and mobility. Weekly rotating focus includes balance, hips, upper body, and core & back.",
    type: "yoga",
    link: "https://www.eventbrite.com/e/free-hatha-yoga-class-strength-mobility-tickets-1285235547119"
  },

  /* THURSDAY */
  {
    date: "THU, SEP 17",
    title: "Neon Cycle & Strength",
    category: "FITNESS",
    time: "6:45 PM",
    location: "Plano, TX",
    price: "$10",
    description: "Spin Happy Hour at Neon Cycle & Strength. Create an account and purchase the first-time $10 deal to book.",
    type: "sports",
    link: "https://www.neonstrong.com/team-neon/"
  },

  /* FRIDAY */
  {
    date: "FRI, SEP 18",
    title: "Avant-Chamber Ballet",
    category: "PILATES",
    time: "7:00 PM",
    location: "Halperin Park",
    price: "FREE",
    description: "Beginner Pilates and classical mat Pilates experience with Avant-Chamber Ballet.",
    type: "pilates",
    link: "https://www.instagram.com/avantchamberballet/"
  },

  /* SATURDAY */
  {
    date: "SAT, SEP 19",
    title: "BFit Cardio Dance",
    category: "FITNESS",
    time: "8:30 AM",
    location: "Mark Cuban Heroes",
    price: "SEE EVENT DETAILS",
    description: "High-energy cardio dance workout with BFit Cardio Dance.",
    type: "sports",
    link: "https://www.instagram.com/bfit_cardiodance?stkn=cGVmdG01bHdobmFp"
  },
  {
    date: "SAT, SEP 19",
    title: "FAME FEST",
    category: "WELLNESS",
    time: "8:00 AM",
    location: "Omni Las Colinas",
    price: "$55–69",
    description: "A full morning-to-afternoon wellness experience featuring 5+ curated fitness experiences across multiple formats.",
    type: "sports",
    link: "https://www.eventbrite.com/e/fame-fest-2026-a-wellness-experience-at-omni-las-colinas-tickets-1992390335126"
  },
  {
    date: "SAT, SEP 19",
    title: "Run It Up Dallas",
    category: "RUN",
    time: "8:00 AM",
    location: "Dallas, TX",
    price: "$30–35",
    description: "Mission: Possible Body Fit 5K Run or 1 Mile Fun Walk with Run It Up Dallas.",
    type: "run",
    link: "https://christinasfoundation.org/5k/"
  },
  {
    date: "SAT, SEP 19",
    title: "Ment Fitness",
    category: "FITNESS",
    time: "8:30 AM",
    location: "NorthPark Center",
    price: "FREE",
    description: "Outdoor workout with Ment Fitness featuring a Fabletics pop-up at NorthPark Center.",
    type: "sports",
    link: "https://www.eventbrite.com/e/free-workout-with-ment-fitness-hosted-by-fabletics-northpark-center-tickets-1998504861840"
  },
  {
    date: "SAT, SEP 19",
    title: "DFW Girlies Club",
    category: "SPORTS",
    time: "SEE EVENT DETAILS",
    location: "Madison Ace Sports",
    price: "$30",
    description: "Women's tennis clinic featuring private coaching, a racket, and tennis balls.",
    type: "sports",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSce6t3sLNuN6AanlX2z3Rdv74IfG0Nt6C6UfkhwfigCCUKFew/viewform"
  },

  /* SUNDAY */
  {
    date: "SUN, SEP 20",
    title: "ZP Productions",
    category: "WELLNESS",
    time: "11:00 AM",
    location: "Chicken N Pickle, Allen",
    price: "$75",
    description: "Move Your Body wellness pop-up at Chicken N Pickle in Allen.",
    type: "sports",
    link: "https://posh.vip/e/move-your-body-a-wellness-popup-at-chicken-pickle?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
  },
  {
    date: "SUN, SEP 20",
    title: "Sweat440",
    category: "FITNESS",
    time: "10:35 AM CHECK-IN",
    location: "Klyde Warren Park",
    price: "FREE",
    description: "Free Sunday community workout with Sweat440 at Klyde Warren Park.",
    type: "hiit",
    link: "https://www.eventbrite.com/e/sweat440-community-workout-series-tickets-1991837201689"
  }
];

const eventGrid = document.getElementById("event-grid");

/* ---------------------------------
   RENDER EVENTS
--------------------------------- */

function renderEvents(filter = "all") {
  if (!eventGrid) return;

  let filteredEvents = events;

  if (filter === "fitness") {
    filteredEvents = events.filter(event => event.category === "FITNESS");
  }

  if (filter === "wellness") {
    filteredEvents = events.filter(event =>
      event.category === "WELLNESS"
    );
  }

  if (filter === "pilates") {
    filteredEvents = events.filter(event =>
      event.category === "PILATES" || event.type === "yoga"
    );
  }

  if (filter === "run") {
    filteredEvents = events.filter(event =>
      event.category === "RUN"
    );
  }

  if (filter === "free") {
    filteredEvents = events.filter(event =>
      event.price.toUpperCase() === "FREE"
    );
  }

  if (filteredEvents.length === 0) {
    eventGrid.innerHTML = `
      <div class="no-events">
        <p>No events found in this category this week.</p>
      </div>
    `;
    return;
  }

  eventGrid.innerHTML = filteredEvents.map(event => `
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

/* Show all events when page loads */
renderEvents();

/* ---------------------------------
   FILTER LINKS
--------------------------------- */

document.querySelectorAll("[data-filter]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    const filter = link.dataset.filter;

    renderEvents(filter);

    const eventsSection = document.getElementById("events");

    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    /* Update active navigation state */
    document.querySelectorAll(".main-nav a").forEach(navLink => {
      navLink.classList.remove("active");
    });

    const matchingNav = document.querySelector(
      `.main-nav a[data-filter="${filter}"]`
    );

    if (matchingNav) {
      matchingNav.classList.add("active");
    }

    /* Close mobile menu */
    if (mainNav && menuToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* ---------------------------------
   VIEW ALL EVENTS
--------------------------------- */

document.querySelectorAll('a[href="#events"]:not([data-filter])').forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();

    renderEvents("all");

    const eventsSection = document.getElementById("events");

    if (eventsSection) {
      eventsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    document.querySelectorAll(".main-nav a").forEach(navLink => {
      navLink.classList.remove("active");
    });

    const thisWeek = document.querySelector(
      '.main-nav a[data-filter="all"]'
    );

    if (thisWeek) {
      thisWeek.classList.add("active");
    }
  });
});

/* ---------------------------------
   YEAR
--------------------------------- */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ---------------------------------
   MOBILE MENU
--------------------------------- */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    if (mainNav && menuToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

/* ---------------------------------
   NEWSLETTER
--------------------------------- */

const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", event => {
    event.preventDefault();

    alert(
      "Thanks for joining the weekly finds! Newsletter signup is coming soon."
    );
  });
}

/* ---------------------------------
   CLEAN INTERNAL URLS
   Removes ?utm_source=chatgpt.com
   and other unwanted query strings
--------------------------------- */

if (window.location.search) {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname + window.location.hash
  );
}
