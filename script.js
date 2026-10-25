const events = [
  // MONDAY, OCTOBER 26
  {
    title: "Full Moon Swim",
    organizer: "W Dallas × Luna Meta Physical",
    date: "2026-10-26",
    day: "MON",
    time: "7:00 PM",
    price: "$77.08",
    location: "W Dallas — Wet Deck",
    category: "WELLNESS",
    type: "wellness",
    description: "Full moon swim with a lunar crystal kit, wellness goodies, and a complimentary drink.",
    link: "https://www.eventbrite.com/e/full-moon-swim-on-the-wet-deck-tickets-2002820689597"
  },
  {
    title: "Pickleball Social",
    organizer: "Ghost Mammoth Pickleball",
    date: "2026-10-26",
    day: "MON",
    time: "6:00 PM",
    price: "FREE",
    location: "Dallas Farmers Market",
    category: "FITNESS",
    type: "fitness",
    description: "Connect with the community and enjoy a pickleball social.",
    link: "https://www.instagram.com/ghostmammoth.pb/"
  },
  {
    title: "The Habit Challenge",
    organizer: "MENT Fitness",
    date: "2026-10-26",
    day: "MON",
    time: "See event details",
    price: "$65",
    location: "Dallas, TX",
    category: "FITNESS",
    type: "fitness",
    description: "Four weeks of unlimited classes, recovery access, nutrition guidance, and accountability.",
    link: "https://linktr.ee/mentfitnesschallenge"
  },

  // TUESDAY, OCTOBER 27
  {
    title: "Pumpkins, Pilates & Prosecco",
    organizer: "HG Supply Co",
    date: "2026-10-27",
    day: "TUE",
    time: "5:45 PM",
    price: "$39.19",
    location: "HG Supply Co, Dallas",
    category: "PILATES",
    type: "pilates",
    description: "45-minute mat Pilates with Align Studio, pumpkin painting supplies, and a complimentary glass of La Marca Prosecco.",
    link: "https://www.eventbrite.com/e/pumpkins-pilates-prosecco-on-the-rooftop-tickets-2003096140478"
  },
  {
    title: "Track Workout",
    organizer: "Fleet Feet × Run It Up",
    date: "2026-10-27",
    day: "TUE",
    time: "6:30 PM",
    price: "FREE",
    location: "Pinkston High School Track",
    category: "RUN",
    type: "run",
    description: "Get your miles in and connect with the Dallas running community.",
    link: "https://www.instagram.com/runitup_dallas/"
  },
  {
    title: "Pilates & Pickleball",
    organizer: "Oak Cliff Pilates",
    date: "2026-10-27",
    day: "TUE",
    time: "7:00 PM",
    price: "FREE",
    location: "Four Corners Brewery",
    category: "PILATES",
    type: "pilates",
    description: "Enjoy a Pilates class and pickleball courts for free.",
    link: "https://www.oakcliffpilates.com/events"
  },

  // WEDNESDAY, OCTOBER 28
  {
    title: "One-Year Celebration Golf Social",
    organizer: "Golf Girly Club",
    date: "2026-10-28",
    day: "WED",
    time: "6:30 PM",
    price: "$40",
    location: "Golf Ranch, Richardson",
    category: "FITNESS",
    type: "fitness",
    description: "Celebrate with range time, golf balls, music, wine, and networking.",
    link: "https://www.golfgirlyclub.com/services-store/p/basic-service-6c62w-e6g3j-ezpel"
  },
  {
    title: "Yoga on the Plaza",
    organizer: "Le Clique × Toyota Music Factory",
    date: "2026-10-28",
    day: "WED",
    time: "6:00 PM",
    price: "FREE",
    location: "Toyota Music Factory, Irving",
    category: "WELLNESS",
    type: "yoga",
    description: "A 45-minute outdoor flow focused on strength, balance, and intention.",
    link: "https://www.prekindle.com/event/43732-yoga-on-the-plaza-irving"
  },

  // THURSDAY, OCTOBER 29
  {
    title: "Pumpkin Spice Pilates",
    organizer: "Velora Pilates Studio",
    date: "2026-10-29",
    day: "THU",
    time: "All Thursday class times",
    price: "$35 / class",
    location: "Design District, Dallas",
    category: "PILATES",
    type: "pilates",
    description: "Wear brown or autumn colors and enjoy pumpkin treats after class. Check the schedule for available times.",
    link: "https://velorapilates.com/schedule/?_mt=%2Fschedule%2Fdaily%2F48541%3FactiveDate%3D2026-10-29%26locations%3D48717"
  },
  {
    title: "Bring Your Boo to Pilates",
    organizer: "11:11 Pilates",
    date: "2026-10-29",
    day: "THU",
    time: "7:30 PM",
    price: "$33.85 for you and your boo",
    location: "Toyota Music Factory",
    category: "PILATES",
    type: "pilates",
    description: "Bring your favorite person for Pilates, vendors, and surprises after class.",
    link: "https://www.eventbrite.com/e/bring-your-boo-to-pilates-tickets-2002471918413"
  },
  {
    title: "Line Dance Class",
    organizer: "Fabulous Freda",
    date: "2026-10-29",
    day: "THU",
    time: "6:30 PM",
    price: "First class FREE / $10",
    location: "Holford Recreation Center",
    category: "FITNESS",
    type: "fitness",
    description: "A high-energy, low-impact aerobic line dance class.",
    link: "https://www.eventbrite.com/e/line-dance-class-tickets-2003514664294"
  },
  {
    title: "Halloween City Run",
    organizer: "City Run Meet Up",
    date: "2026-10-29",
    day: "THU",
    time: "7:00 PM",
    price: "See event details",
    location: "Burger Schmurger",
    category: "RUN",
    type: "run",
    description: "A Halloween-themed city run with a Schmurger and fries special and happy-hour cocktail pricing.",
    link: "https://www.instagram.com/cityrunofficial/"
  },
  {
    title: "Halloween Sip & Stroll",
    organizer: "The Star in Frisco",
    date: "2026-10-29",
    day: "THU",
    time: "6:00 PM",
    price: "$36.64",
    location: "The Star District, Frisco",
    category: "WELLNESS",
    type: "social",
    description: "Seasonal bites and cocktails, Halloween activities, festive photos, shopping, and music.",
    link: "https://www.eventbrite.com/e/halloween-sip-stroll-in-the-star-district-tickets-2003019091021"
  },

  // FRIDAY, OCTOBER 30
  {
    title: "Spooky Sculpt",
    organizer: "The Sculpt Squad",
    date: "2026-10-30",
    day: "FRI",
    time: "6:30 PM",
    price: "$20",
    location: "Farmers Branch",
    category: "FITNESS",
    type: "fitness",
    description: "A spooky-season HIIT, Pilates, and sculpt workout with socks and small treats included.",
    link: "https://www.eventbrite.com/e/20-in-studio-hiit-pilates-sculpt-workout-tickets-2003589653589"
  },
  {
    title: "Worship Night: Matcha & Mercy",
    organizer: "Pilates Caliente × Matcha Mercy",
    date: "2026-10-30",
    day: "FRI",
    time: "7:00 PM",
    price: "FREE",
    location: "Dallas, TX",
    category: "WELLNESS",
    type: "wellness",
    description: "A night of matcha, worship, community, and mercy.",
    link: "https://www.eventbrite.com/e/worship-night-matcha-mercy-tickets-2003427679119"
  },
  {
    title: "Serve It Up: Final One of 2026",
    organizer: "Outsiders",
    date: "2026-10-30",
    day: "FRI",
    time: "6:30 PM",
    price: "$9.95",
    location: "Coppell, TX",
    category: "FITNESS",
    type: "fitness",
    description: "Costumes, sand volleyball, $6 margaritas, and a DJ at the final Serve It Up of the year.",
    link: "https://posh.vip/e/serve-it-up-final-one-of-26"
  },
  {
    title: "Texas Tip Off Social",
    organizer: "Side Line Society",
    date: "2026-10-30",
    day: "FRI",
    time: "6:00 PM",
    price: "Ticket / waitlist",
    location: "American Airlines Center, Dallas",
    category: "FITNESS",
    type: "social",
    description: "Rockets vs. Mavs, group seating, pregame happy hour at Velour, and a postgame on-court group photo. Check the link for waitlist availability.",
    link: "https://www.tickettailor.com/events/sidelinesociete/2442141"
  },

  // SATURDAY, OCTOBER 31
  {
    title: "Community Workout + Trunk or Treat",
    organizer: "Run It Up Dallas × MENT Fitness",
    date: "2026-10-31",
    day: "SAT",
    time: "8:30 AM workout · 12:00 PM Trunk or Treat",
    price: "$10 adults / $5 kids",
    location: "See event details",
    category: "FITNESS",
    type: "fitness",
    description: "Start with a community workout, then bring the kids back for the Halloween Trunk or Treat at noon.",
    link: "https://events.eventnoire.com/e/community-workout-halloween"
  },
  {
    title: "Trap Pilates Block Party",
    organizer: "Pilates Caliente × DJ No Name",
    date: "2026-10-31",
    day: "SAT",
    time: "10:00 AM",
    price: "$25",
    location: "Omni Hotel, Dallas",
    category: "PILATES",
    type: "pilates",
    description: "Get your Pilates in to a playlist featuring Future, Key Glock, and Young Dolph.",
    link: "https://app.arketa.co/httpscalendlycompilatescalientedallas"
  },
  {
    title: "Halloween Party: Spicy Flow & Yogalates",
    organizer: "222 Studio",
    date: "2026-10-31",
    day: "SAT",
    time: "8:30 AM · 10:00 AM · 11:30 AM",
    price: "$20",
    location: "Dallas, TX",
    category: "PILATES",
    type: "yoga",
    description: "Choose 8:30 AM Spicy Flow, 10:00 AM Yogalates with a live DJ, or 11:30 AM Yogalates. Costumes and treats after class.",
    link: "https://momence.com/222-Studio/Spicy-Flow-%7C-Halloween-Party-%F0%9F%91%BB%F0%9F%AA%A9/134369141?skipPreview=true"
  },
  {
    title: "Fall Fit Fest Boot Camp",
    organizer: "Chiseled by Chi",
    date: "2026-10-31",
    day: "SAT",
    time: "10:00 AM",
    price: "$35",
    location: "DDD Performance Center",
    category: "FITNESS",
    type: "fitness",
    description: "A full-body boot camp to get your Halloween Saturday started strong.",
    link: "https://app.acuityscheduling.com/schedule/a65a102b/appointment/99465067/calendar/11556584/datetime/2026-10-31T10%3A00%3A00-05%3A00?appointmentTypeIds%5B%5D=99465067"
  },
  {
    title: "Spooky Hike",
    organizer: "Fuerte_y_fierce",
    date: "2026-10-31",
    day: "SAT",
    time: "8:00 AM",
    price: "See event details",
    location: "Cedar Ridge Preserve",
    category: "RUN",
    type: "walk",
    description: "A spooky-season hike. Candy is available for RSVPs, and everyone is welcome.",
    link: "https://sweatpals.com/host/fuerteyfierce"
  },

  // SUNDAY, NOVEMBER 1
  {
    title: "BFit Cardio Dance",
    organizer: "BFit Cardio Dance",
    date: "2026-11-01",
    day: "SUN",
    time: "12:00 PM",
    price: "$13.54",
    location: "Kumbala Dance Studio, Farmers Branch",
    category: "FITNESS",
    type: "fitness",
    description: "Move, sweat, and have fun with a Sunday cardio dance class.",
    link: "https://www.eventbrite.com/e/bfit-cardio-dance-sundays-tickets-1983900686358"
  },
  {
    title: "Free 30-Minute Sculpt & Sweat",
    organizer: "Kota Wellness × Klyde Warren Park",
    date: "2026-11-01",
    day: "SUN",
    time: "See event details",
    price: "FREE",
    location: "Klyde Warren Park, Dallas",
    category: "FITNESS",
    type: "fitness",
    description: "A high-energy, music-powered, low-impact workout. Mat-only, equipment-free, and open to all levels.",
    link: "https://www.eventbrite.com/e/free-30-min-sculpt-sweat-kota-wellness-x-klyde-warren-park-tickets-1996247008540"
  },
  {
    title: "Move, Groove & Connect",
    organizer: "Move, Groove & Connect",
    date: "2026-11-01",
    day: "SUN",
    time: "3:00 PM",
    price: "FREE",
    location: "Richardson, TX",
    category: "FITNESS",
    type: "fitness",
    description: "Explore dance styles from around the world, including Hip-Hop, Afro, K-Pop, Latin, Salsa, Bachata, Brazilian Zouk, Bollywood, Belly Dance, and more.",
    link: "https://www.eventbrite.com/e/move-groove-connect-experience-the-world-through-dance-tickets-2001241163191"
  },
  {
    title: "Crunch and Brunch",
    organizer: "Cash Cardio",
    date: "2026-11-01",
    day: "SUN",
    time: "11:30 AM",
    price: "$17.58",
    location: "Elite Performance Training, Frisco",
    category: "FITNESS",
    type: "fitness",
    description: "A high-energy dance class followed by fruit and mimosas.",
    link: "https://www.eventbrite.com/e/cash-cardios-crunch-and-brunch-tickets-1380899219739"
  },
  {
    title: "Community Care Sound Bath",
    organizer: "Breezy Movements",
    date: "2026-11-01",
    day: "SUN",
    time: "6:30 PM",
    price: "Donation only",
    location: "The Prosperith House",
    category: "WELLNESS",
    type: "wellness",
    description: "A gratitude ritual, light reflection activity, and restorative sound bath featuring crystal singing bowls.",
    link: "https://www.eventbrite.com/e/community-care-sound-bath-vii-tickets-1998786295616"
  }
];

// Find the event grid already present in your HTML.
const eventContainer =
  document.querySelector("#events-grid") ||
  document.querySelector("#event-grid") ||
  document.querySelector("#events-container") ||
  document.querySelector(".events-grid") ||
  document.querySelector(".event-grid");

const filterButtons = document.querySelectorAll(
  "[data-filter], .filter-btn, .filter-button"
);

const viewAllButton =
  document.querySelector("#view-all-events") ||
  document.querySelector("#view-all") ||
  document.querySelector(".view-all-events");

// Update the footer year.
const footerYear =
  document.querySelector("#year") ||
  document.querySelector("#current-year") ||
  document.querySelector(".current-year");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Escape text before inserting it into HTML.
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

// Format event dates.
function formatEventDate(dateString) {
  return new Date(dateString + "T12:00:00").toLocaleDateString(
    "en-US",
    { month: "short", day: "numeric" }
  );
}

// Render the event cards and apply category filters.
function renderEvents(filter = "all", showAll = false) {
  if (!eventContainer) {
    console.warn(
      "Event grid not found. Check the event container ID or class in your HTML."
    );
    return;
  }

  let filteredEvents = [...events];

  if (filter === "fitness") {
    filteredEvents = filteredEvents.filter(
      event => event.category === "FITNESS"
    );
  } else if (filter === "wellness") {
    filteredEvents = filteredEvents.filter(
      event => event.category === "WELLNESS"
    );
  } else if (filter === "pilates") {
    filteredEvents = filteredEvents.filter(
      event =>
        event.category === "PILATES" ||
        event.type === "yoga"
    );
  } else if (filter === "run") {
    filteredEvents = filteredEvents.filter(
      event => event.category === "RUN"
    );
  } else if (filter === "free") {
    filteredEvents = filteredEvents.filter(
      event => event.price.toUpperCase().includes("FREE")
    );
  }

  filteredEvents.sort((a, b) => {
    const dateDifference = a.date.localeCompare(b.date);
    if (dateDifference !== 0) return dateDifference;

    function toMinutes(time) {
      const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!match) return 9999;

      let hour = Number(match[1]) % 12;
      if (match[3].toUpperCase() === "PM") hour += 12;

      return hour * 60 + Number(match[2]);
    }

    return toMinutes(a.time) - toMinutes(b.time);
  });

  const visibleEvents = showAll
    ? filteredEvents
    : filteredEvents.slice(0, 6);

  if (!visibleEvents.length) {
    eventContainer.innerHTML = `
      <div class="no-events">
        <p>No events found in this category just yet.</p>
        <p>Check back soon for more Dallas fitness and wellness finds!</p>
      </div>
    `;
    return;
  }

  eventContainer.innerHTML = visibleEvents.map(event => `
    <article class="event-card" data-category="${escapeHTML(event.category.toLowerCase())}">
      <div class="event-card-content">
        <div class="event-card-top">
          <span class="event-category">${escapeHTML(event.category)}</span>
          <span class="event-price">${escapeHTML(event.price)}</span>
        </div>

        <p class="event-date">${escapeHTML(event.day)}, ${formatEventDate(event.date)}</p>

        <h3 class="event-title">${escapeHTML(event.title)}</h3>

        <p class="event-organizer">${escapeHTML(event.organizer)}</p>

        <div class="event-details">
          <p class="event-time">
            <span aria-hidden="true">◷</span>
            ${escapeHTML(event.time)}
          </p>
          <p class="event-location">
            <span aria-hidden="true">⌖</span>
            ${escapeHTML(event.location)}
          </p>
        </div>

        <p class="event-description">${escapeHTML(event.description)}</p>

        <a
          class="event-link"
          href="${escapeHTML(event.link)}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View details for ${escapeHTML(event.title)}"
        >
          View Event <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `).join("");

  if (viewAllButton) {
    const hasMore = filteredEvents.length > 6;

    viewAllButton.hidden = !hasMore;
    viewAllButton.textContent = showAll ? "Show Less" : "View All Events";
    viewAllButton.setAttribute("aria-expanded", String(showAll));
  }
}

// Filter buttons.
let activeFilter = "all";
let showingAllEvents = false;

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter = (
      button.dataset.filter ||
      button.textContent.trim()
    ).toLowerCase();

    activeFilter = selectedFilter;
    showingAllEvents = false;

    filterButtons.forEach(item => {
      const itemFilter = (
        item.dataset.filter ||
        item.textContent.trim()
      ).toLowerCase();

      const active = itemFilter === selectedFilter;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderEvents(activeFilter, showingAllEvents);
  });
});

// View All Events button.
if (viewAllButton) {
  viewAllButton.addEventListener("click", () => {
    showingAllEvents = !showingAllEvents;
    renderEvents(activeFilter, showingAllEvents);
  });
}

// Mobile navigation.
const menuToggle =
  document.querySelector("#menu-toggle") ||
  document.querySelector(".menu-toggle") ||
  document.querySelector(".mobile-menu-toggle") ||
  document.querySelector("[aria-label='Toggle menu']");

const mainNav =
  document.querySelector("#main-nav") ||
  document.querySelector("#nav-menu") ||
  document.querySelector(".main-nav") ||
  document.querySelector(".nav-menu");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Render the calendar on page load.
renderEvents();
