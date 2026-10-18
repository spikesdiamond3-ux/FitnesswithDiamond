const events = [
  // MONDAY, OCTOBER 19
  {
    date: "MON, OCT 19",
    title: "Run It Up Dallas: Fight Promo Run",
    category: "RUN",
    time: "7:00 PM",
    location: "Trinity Groves Bridge, Dallas, TX",
    price: "FREE",
    description: "Join Alycia Baumgardner for a Fight Promo Run.",
    type: "run",
    link: "https://www.instagram.com/runitup_dallas?dlrf=MWJ2dnNreHZzZ3c1Mg=="
  },
  {
    date: "MON, OCT 19",
    title: "Hot Girl Strides: Purple & Powerful",
    category: "WALK",
    time: "6:45 PM",
    location: "Epic Central, Grand Prairie, TX",
    price: "FREE",
    description: "A community stride raising awareness for Domestic Violence Awareness Month and celebrating Body Appreciation Day.",
    type: "run",
    link: "https://linktr.ee/HotGirlStridee"
  },

  // TUESDAY, OCTOBER 20
  {
    date: "TUE, OCT 20",
    title: "Pilates with WRKIT with DB",
    category: "PILATES",
    time: "5:30 PM",
    location: "Burnett Park, Downtown Fort Worth, TX",
    price: "FREE",
    description: "Enjoy a free community Pilates session in Burnett Park.",
    type: "pilates",
    link: "https://www.instagram.com/burnettparkfw?xtok=bW9oZDdvODZucTln"
  },
  {
    date: "TUE, OCT 20",
    title: "Femme Forward: Volleyball Social",
    category: "FITNESS",
    time: "7:00 PM",
    location: "Dallas, TX",
    price: "FREE",
    description: "Casual and competitive co-ed games that are beginner-friendly, with music, good vibes, and refreshments.",
    type: "fitness",
    link: "https://partiful.com/e/3daM9Hc3Dwh81LdBmUcQ"
  },
  {
    date: "TUE, OCT 20",
    title: "Cedar Hill Volleyball Open Play",
    category: "FITNESS",
    time: "6:00 PM",
    location: "Alan E. Sims Recreation Center, Cedar Hill, TX",
    price: "FREE",
    description: "Community volleyball open play. Also offered Saturdays at 3:00 PM.",
    type: "fitness",
    link: "https://cedarhilltx.com/222/Parks-Recreation"
  },
  {
    date: "TUE, OCT 20",
    title: "Xtreme Soul Line Dancing",
    category: "FITNESS",
    time: "6:30 PM",
    location: "Signature Park, Cedar Hill, TX",
    price: "FREE",
    description: "Move, groove, and enjoy a community soul line-dancing session.",
    type: "fitness",
    link: "https://cedarhilltx.com/222/Parks-Recreation"
  },

  // WEDNESDAY, OCTOBER 21
  {
    date: "WED, OCT 21",
    title: "Breezy Movements: Yoga in the Park",
    category: "YOGA",
    time: "6:30 PM",
    location: "Signature Park, Cedar Hill, TX",
    price: "FREE",
    description: "Free beginner-friendly outdoor yoga.",
    type: "yoga",
    link: "https://www.eventbrite.com/e/free-beginner-yoga-tickets-2003043635434"
  },
  {
    date: "WED, OCT 21",
    title: "Certified Pilates Girl: Hot Pilates",
    category: "PILATES",
    time: "7:30 PM",
    location: "Bahari Studios",
    price: "FIRST CLASS FREE / $30 DROP-IN",
    description: "Instructor Rayana Kelsey leads Hot Pilates to a Certified Lover Boy playlist in honor of Drake's birthday. Another class is offered Friday at 11:00 AM.",
    type: "pilates",
    link: "https://www.baharistudio.com/schedule?_mt=%2Fschedule%2Fdaily%2F48541%3FactiveDate%3D2026-10-23%26locations%3D48717"
  },
  {
    date: "WED, OCT 21",
    title: "Beginners Yoga in the Park",
    category: "YOGA",
    time: "6:30 PM",
    location: "Signature Park, Cedar Hill, TX",
    price: "FREE",
    description: "Bring a yoga mat and water for this beginner-friendly outdoor class.",
    type: "yoga",
    link: "https://cedarhilltx.com/222/Parks-Recreation"
  },

  // THURSDAY, OCTOBER 22
  {
    date: "THU, OCT 22",
    title: "Resilience Project: Final Commit to the Hit",
    category: "FITNESS",
    time: "6:30 PM",
    location: "Toyota Music Factory, Irving, TX",
    price: "FREE",
    description: "The final Commit2HIIT of the season. Let's make it glow!",
    type: "fitness",
    link: "https://www.eventbrite.com/e/commit2hiit-last-one-of-the-season-lets-make-it-glow-102226-tickets-2002463154199"
  },
  {
    date: "THU, OCT 22",
    title: "Tai Chi & Qigong in the Park",
    category: "WELLNESS",
    time: "6:00 PM",
    location: "Signature Park, Cedar Hill, TX",
    price: "FREE",
    description: "An outdoor session focused on balance, flexibility, and relaxation.",
    type: "yoga",
    link: "https://cedarhilltx.com/222/Parks-Recreation"
  },

  // FRIDAY, OCTOBER 23
  {
    date: "FRI, OCT 23",
    title: "The Pink Edit",
    category: "WELLNESS",
    time: "1:00 PM",
    location: "Dallas, TX",
    price: "$30",
    description: "A women-only 50-minute heated yoga experience by Connect Studio and Duality Fit, kicking off For Her Weekend with wellness vendors.",
    type: "yoga",
    link: "https://posh.vip/e/the-pink-edit-duality-x-form"
  },
  {
    date: "FRI, OCT 23",
    title: "Trap Pilates After Dark",
    category: "PILATES",
    time: "8:00 PM",
    location: "Dallas, TX",
    price: "$26 • SOLD OUT / WAITLIST",
    description: "An after-dark Pilates session. Join the waitlist for a spot.",
    type: "pilates",
    link: "https://momence.com/Resonance-pilates/Trap-Pilates-After-Dark/145255956?skipPreview=true"
  },
  {
    date: "FRI, OCT 23",
    title: "Pilates After Dark Costume Party",
    category: "PILATES",
    time: "6:00 PM",
    location: "Zena Pilates, Plano, TX",
    price: "$30",
    description: "Enjoy antojitos, refreshments, photo moments, a best-costume award, and Trunk-or-Treat from 7:00–7:50 PM for ticket holders with kids.",
    type: "pilates",
    link: "https://sweatpals.com/class/loteria-planks"
  },
  {
    date: "FRI, OCT 23",
    title: "Madison Ace Sports: Girls Night Out",
    category: "FITNESS",
    time: "7:00 PM",
    location: "DeSoto, TX",
    price: "$20",
    description: "Only Beginners & Vibes: R&B jams, learning, networking, and play.",
    type: "fitness",
    link: "https://www.madisonace.com/events-"
  },

  // SATURDAY, OCTOBER 24
  {
    date: "SAT, OCT 24",
    title: "Pilates in the Sky",
    category: "PILATES",
    time: "9:30 AM",
    location: "Reunion Tower, Dallas, TX",
    price: "$30",
    description: "An exclusive 50-minute mat Pilates class above the Dallas skyline, with brand partners, product sampling, giveaways, and take-home goodie bags.",
    type: "pilates",
    link: "https://app.arketa.co/thereformerroom/checkout/VYVdf6AWJUcSeOwn6LqA"
  },
  {
    date: "SAT, OCT 24",
    title: "Young Dolph Class: HIIT & Weights",
    category: "FITNESS",
    time: "8:00 AM",
    location: "Pure Yoga Studio",
    price: "$20 WITH CODE CALIENTE",
    description: "Hot Yoga HIIT and weights with Carolina, set to a Young Dolph playlist.",
    type: "fitness",
    link: "https://www.pureyogatexas.com/events-catalog/10-24-26-hiit-weights-caro"
  },
  {
    date: "SAT, OCT 24",
    title: "Pretty Walks & Power Talks",
    category: "WALK",
    time: "10:00 AM",
    location: "Rose Cafe",
    price: "FREE",
    description: "Pink-themed community walk supporting women impacted by breast cancer while celebrating strength, resilience, and community.",
    type: "run",
    link: "https://partiful.com/e/udrcpkuXfNyINt331fOH"
  },
  {
    date: "SAT, OCT 24",
    title: "Fall into Flow",
    category: "WELLNESS",
    time: "9:30 AM",
    location: "Cafe Olivia, Addison, TX",
    price: "DONATION-BASED",
    description: "A flow session hosted by She Well Co. and Faithful Giving Project. Proceeds support the Thanksgiving Donation Drive.",
    type: "yoga",
    link: "https://www.faithfulgivingproject.com/event-details/fall-into-flow"
  },
  {
    date: "SAT, OCT 24",
    title: "Go Outside Girlies: Kickball Game",
    category: "FITNESS",
    time: "5:00 PM",
    location: "Lake Cliff Park, Dallas, TX",
    price: "RSVP BY DM",
    description: "Join the kickball game and post-game cookout. RSVP by sending the organizers a DM.",
    type: "fitness",
    link: "https://www.instagram.com/gooutside_girlies?psln=YXRxdWpvZmw5M250"
  },
  {
    date: "SAT, OCT 24",
    title: "Southie Sculpt",
    category: "FITNESS",
    time: "12:30 PM",
    location: "Bahari Studios",
    price: "FREE FOR MEMBERS / $20 NON-MEMBERS",
    description: "A sculpt class featuring a Telugu and Tamil playlist.",
    type: "fitness",
    link: "https://www.baharistudio.com/"
  },
  {
    date: "SAT, OCT 24",
    title: "Femme Forward: Pink Out Volleyball Tournament",
    category: "FITNESS",
    time: "6:00 PM",
    location: "Dallas, TX",
    price: "$5",
    description: "Volleyball, a DJ, refreshments, and health and wellness vendors. Proceeds support a breast cancer awareness clinic.",
    type: "fitness",
    link: "https://linktr.ee/FemmeF0rward"
  },
  {
    date: "SAT, OCT 24",
    title: "Cedar Hill Volleyball Open Play",
    category: "FITNESS",
    time: "3:00 PM",
    location: "Alan E. Sims Recreation Center, Cedar Hill, TX",
    price: "FREE",
    description: "Community volleyball open play.",
    type: "fitness",
    link: "https://cedarhilltx.com/222/Parks-Recreation"
  },

  // SUNDAY, OCTOBER 25
  {
    date: "SUN, OCT 25",
    title: "The Hour Glass Flow: Drake vs. Future",
    category: "PILATES",
    time: "12:30 PM",
    location: "Dallas, TX",
    price: "$30",
    description: "A 50-minute full-body sculpt session featuring a Drake vs. Future playlist.",
    type: "pilates",
    link: "https://www.bodiedbyla.com/hourglassflowsculpt"
  },
  {
    date: "SUN, OCT 25",
    title: "Weights & Worship",
    category: "WELLNESS",
    time: "8:00 PM",
    location: "Iron Forge Global Gyms",
    price: "FREE",
    description: "Fitness, worship, prayer, and the presence of God.",
    type: "wellness",
    link: "https://weightsandworshiptour.com"
  },
  {
    date: "SUN, OCT 25",
    title: "Pickleball & Prosecco: Fall Rally",
    category: "FITNESS",
    time: "6:00 PM",
    location: "Texas Pickleball",
    price: "$25",
    description: "A social pickleball event hosted by Ladies Athletic Club of Dallas and Texas Pickleball.",
    type: "fitness",
    link: "https://sweatpals.com/event/pickleball-prosecco-fall-rally/2026-10-25/checkout"
  },
  {
    date: "SUN, OCT 25",
    title: "The She Club Open",
    category: "FITNESS",
    time: "4:00 PM",
    location: "Plano, TX",
    price: "$54.89",
    description: "The last tennis instruction and social event of the season.",
    type: "fitness",
    link: "https://posh.vip/e/the-she-club-open--1"
  },
  {
    date: "SUN, OCT 25",
    title: "Sweat & Social: HYROX Intro",
    category: "FITNESS",
    time: "SEE EVENT DETAILS",
    location: "Hunger In The Wild Gym",
    price: "FREE",
    description: "A 45-minute workout, Changing Chaos pop-up, free giveaways, and an introduction to HIIT and HYROX.",
    type: "fitness",
    link: "https://www.foyer.social/events/sweat-social-free-workout-hyrox-intro"
  },
  {
    date: "SUN, OCT 25",
    title: "HYROX x PUMA Workout Class",
    category: "FITNESS",
    time: "SEE INSTAGRAM FOR DETAILS",
    location: "Westwood Fitness",
    price: "SEE EVENT DETAILS",
    description: "A workout class hosted by Glad Run Club and Fleet Feet DFW. Check Instagram for additional details.",
    type: "fitness",
    link: "https://www.instagram.com/gladrunclub?psln=d3I5ZnM5cXBzdXlv"
  },
  {
    date: "SUN, OCT 25",
    title: "Yoga in the Park",
    category: "YOGA",
    time: "9:30 AM",
    location: "Lake Cliff Park, Dallas, TX",
    price: "SEE EVENT DETAILS",
    description: "Outdoor community yoga with Flow N Nature.",
    type: "yoga",
    link: "https://www.instagram.com/flow_n_nature_dtx?rpxt=MXZneHZsY3MyNTV3cw=="
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
      event.category === "RUN" || event.category === "WALK"
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

        ${
          event.link
            ? `<a class="event-link" href="${event.link}" target="_blank" rel="noopener noreferrer">
                 VIEW DETAILS &nbsp; →
               </a>`
            : ""
        }
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

/* Newsletter signup is handled by the Kit link/form embedded in the page. */

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
