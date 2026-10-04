const events = [
  /* MONDAY */
  {
    date: "MON, OCT 5",
    title: "Run It Up Dallas",
    category: "RUN",
    time: "7:00 PM",
    location: "Katy Trail, Dallas",
    price: "FREE",
    description: "A social run with the Run It Up Dallas community. Come get your miles in and meet other runners.",
    type: "run",
    link: "https://linktr.ee/runituprunclub"
  },
  {
    date: "MON, OCT 5",
    title: "Thai-Inspired Stretch & Meditation",
    category: "WELLNESS",
    time: "7:00 PM",
    location: "Body Jam Studios",
    price: "$19.32",
    description: "A relaxing and energizing session blending Thai stretching techniques with calming meditation.",
    type: "yoga",
    link: "https://www.eventbrite.com/e/thai-inspired-stretch-meditation-tickets-1992954775382?aff=ebdiglgoogleliveevents&source=ecat&keep_tld=true"
  },

  /* TUESDAY */
  {
    date: "TUE, OCT 6",
    title: "Femme Foward Volleyball Social",
    category: "SPORTS",
    time: "SEE EVENT DETAILS",
    location: "Lake Highlands North Aquatic Center",
    price: "SEE EVENT DETAILS",
    description: "Casual and competitive volleyball games in a co-ed, beginner-friendly environment.",
    type: "sports",
    link: "https://partiful.com/e/3UJipB4Qdz33YLdqXm4I"
  },
  {
    date: "TUE, OCT 6",
    title: "Pilates with BODYBAR",
    category: "PILATES",
    time: "5:30 PM",
    location: "Burnett Park, Fort Worth",
    price: "FREE",
    description: "A free outdoor Pilates class with BODYBAR at Burnett Park. A great way to move, connect, and enjoy the park.",
    type: "pilates",
    link: "https://bodybarpilates.com/workouts/"
  },

  /* WEDNESDAY */
  {
    date: "WED, OCT 7",
    title: "Donation-Based Farmers Market Yoga",
    category: "YOGA",
    time: "7:00 PM",
    location: "V12 Yoga",
    price: "DONATION-BASED",
    description: "A donation-based yoga class held in a covered open-air shed. Free parking is available around the shed.",
    type: "yoga",
    link: "https://widgets.mindbodyonline.com/widgets/class_lists/821565604f8/class_description?site_mbo_id=141420&class_description_id=155&widget_type=Schedule&source=schedule_v0"
  },

  /* THURSDAY */
  {
    date: "THU, OCT 8",
    title: "East Coast Swing Dance Social",
    category: "COMMUNITY",
    time: "8:30 PM",
    location: "Farmers Branch, TX",
    price: "FREE",
    description: "Learn the basics with a dance lesson before the social. No partner required and open to all levels.",
    type: "fitness",
    link: "https://www.dfwyas.com/all-events/free-east-coast-swing-dance-social-10-08-26"
  },

  /* FRIDAY */
  {
    date: "FRI, OCT 9",
    title: "Ghost Mammoth Pickleball",
    category: "SPORTS",
    time: "6:00 PM",
    location: "Westside Pickleball Club",
    price: "$30",
    description: "Coaching open play designed to help you get active, sharpen your game, and connect with other pickleball players.",
    type: "sports",
    link: "https://app.getopencourt.com/club/westsidepickleball/schedule/event/d685eadf-6954-4b1c-8f7b-2cd47465bbec"
  },

  /* SATURDAY */
  {
    date: "SAT, OCT 10",
    title: "Burn & Build",
    category: "FITNESS",
    time: "9:00 AM",
    location: "Dallas, TX",
    price: "$66.99",
    description: "Start your morning with two 35-minute workouts: Yogalates with Victoria Mahe and a Sculpt Sister Signature Class powered by The Core Club. Includes mat use, marketplace access, brand activations, samples, gifting, and three hours of movement and community. A portion of proceeds benefits Parkland Health Foundation.",
    type: "fitness",
    link: "https://posh.vip/e/burn-and-build-event"
  },
  {
    date: "SAT, OCT 10",
    title: "Pilates & Pumpkins",
    category: "PILATES",
    time: "9:30 AM • 10:30 AM • 11:30 AM",
    location: "Oak Cliff Pilates, Lower Greenville",
    price: "$25",
    description: "A Pilates class followed by mimosas and pumpkin decorating. Choose from three class times and enjoy a festive fall workout experience.",
    type: "pilates",
    link: "https://oakcliffpilates.com/events/"
  },
  {
    date: "SAT, OCT 10",
    title: "Majorette Flow",
    category: "PILATES",
    time: "10:30 AM",
    location: "Dallas, TX",
    price: "$36",
    description: "A 60-minute Pilates and dance experience blending mindful Pilates with the bold, unapologetic power of HBCU-style majorette dance.",
    type: "pilates",
    link: "https://app.arketa.co/spicedpilates/checkout/xjzn2zH9nfYgk3hV5H7i"
  },
  {
    date: "SAT, OCT 10",
    title: "barre3 Signature Class",
    category: "FITNESS",
    time: "11:20 AM",
    location: "Klyde Warren Park",
    price: "FREE",
    description: "A 45-minute barre3 Signature Class combining strength, cardio, and mindfulness. Lululemon raffles included.",
    type: "fitness",
    link: "https://www.instagram.com/barre3coppell/"
  },

  /* SUNDAY */
  {
    date: "SUN, OCT 11",
    title: "Mock HYROX Race",
    category: "FITNESS",
    time: "7:30 AM",
    location: "Mēnt Fitness, Design District",
    price: "$25",
    description: "Practice race strategy, dial in your pacing, and clean up your transitions with a mock HYROX race experience.",
    type: "fitness",
    link: "https://designdistrict.pushpress.com/landing/events/cal-b3f0bef8453d4534a6e0b974f361/login"
  },
  {
    date: "SUN, OCT 11",
    title: "Pilates in the Park",
    category: "PILATES",
    time: "9:00 AM",
    location: "Halperin Park",
    price: "FREE",
    description: "An outdoor Pilates class with Oak Cliff Pilates. Bring your mat and enjoy a morning movement session in the park.",
    type: "pilates",
    link: "https://oakcliffpilates.com/events/"
  },
  {
    date: "SUN, OCT 11",
    title: "The Kick Off: Run + Walk Experience",
    category: "RUN",
    time: "6:00 PM",
    location: "Trinity Groves Bridge",
    price: "FREE",
    description: "A community run and walk experience presented by Black Men in Tech and Run It Up, followed by a social hangout at 7:30 PM.",
    type: "run",
    link: "https://www.eventbrite.com/e/the-kick-off-a-runwalk-experience-dallas-tx-tickets-2000053794740?aff=oddtdtcreator"
  }
];
const eventGrid = document.getElementById("event-grid");

/* ---------------------------------
   RENDER EVENTS
--------------------------------- */

function renderEvents(filter = "all") {
  if (!eventGrid) {
    console.error("Event grid not found. Make sure your HTML has id=\"event-grid\".");
    return;
  }

  let filteredEvents = events;

  if (filter === "fitness") {
    filteredEvents = events.filter(event =>
      event.category === "FITNESS"
    );
  }

  if (filter === "wellness") {
    filteredEvents = events.filter(event =>
      event.category === "WELLNESS" ||
      event.category === "YOGA"
    );
  }

  if (filter === "pilates") {
    filteredEvents = events.filter(event =>
      event.category === "PILATES"
    );
  }

  if (filter === "run") {
    filteredEvents = events.filter(event =>
      event.category === "RUN" ||
      event.category === "WALK"
    );
  }

  if (filter === "free") {
    filteredEvents = events.filter(event =>
      event.price.trim().toUpperCase() === "FREE"
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

        <span class="event-category">
          ${event.category}
        </span>

        <h3>${event.title}</h3>

        <div class="event-meta">
          <span>🕐 &nbsp; ${event.time}</span>
          <span>⌖ &nbsp; ${event.location}</span>
          <span>♥ &nbsp; ${event.price}</span>
        </div>

        <p class="event-description">
          ${event.description}
        </p>

        ${
          event.link
            ? `
              <a
                class="event-link"
                href="${event.link}"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW DETAILS &nbsp; →
              </a>
            `
            : ""
        }

      </div>

    </article>
  `).join("");
}


/* ---------------------------------
   SHOW ALL EVENTS ON PAGE LOAD
--------------------------------- */

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

document
  .querySelectorAll('a[href="#events"]:not([data-filter])')
  .forEach(link => {

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

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

}

document.querySelectorAll(".main-nav a").forEach(link => {

  link.addEventListener("click", () => {

    if (mainNav && menuToggle) {

      mainNav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

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
--------------------------------- */

if (window.location.search) {

  window.history.replaceState(
    {},
    document.title,
    window.location.pathname + window.location.hash
  );

}

