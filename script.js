const events = [
  // MONDAY, OCTOBER 12
  {
    date: "MON, OCT 12",
    title: "Hot Girl Strides",
    category: "RUN",
    time: "6:45 PM",
    location: "Grand Prairie, TX",
    price: "SEE EVENT DETAILS",
    description: "Pink Out community stride featuring a HOKA shoe demo with Fleet Feet.",
    type: "run",
    link: "https://linktr.ee/HotGirlStridee"
  },
  {
    date: "MON, OCT 12",
    title: "Bodyweight Training in the Park",
    category: "FITNESS",
    time: "5:30 PM",
    location: "Cedar Hill Park",
    price: "FREE",
    description: "Full-body bodyweight workout in the park.",
    type: "fitness",
    link: "https://www.instagram.com/cedarhillpard/"
  },

  // TUESDAY, OCTOBER 13
  {
    date: "TUE, OCT 13",
    title: "Nooma: Signature Class Mix",
    category: "FITNESS",
    time: "9:00 PM",
    location: "Nooma Dallas Mockingbird, Dallas, TX",
    price: "SEE EVENT DETAILS",
    description: "Experience seven of Nooma's signature classes mixed into one workout.",
    type: "fitness",
    link: "https://nooma-dallasmockingbird.brandbot-checkout.com/noomadallasambassadordiamond.html"
  },
  {
    date: "TUE, OCT 13",
    title: "F45 Run Club",
    category: "RUN",
    time: "6:30 AM",
    location: "Germany Park, Dallas, TX",
    price: "FREE",
    description: "Join the weekly community run hosted by F45 Dallas Arena.",
    type: "run",
    link: "https://www.instagram.com/f45_dallasarena/"
  },
  {
    date: "TUE, OCT 13",
    title: "Yoga with the YMCA",
    category: "YOGA",
    time: "5:30 PM",
    location: "Burnett Park, Fort Worth, TX",
    price: "FREE",
    description: "Enjoy a community yoga session at Burnett Park.",
    type: "yoga",
    link: "https://www.instagram.com/burnettparkfw/"
  },

  // WEDNESDAY, OCTOBER 14
  {
    date: "WED, OCT 14",
    title: "Yoga on the Plaza",
    category: "YOGA",
    time: "6:00 PM",
    location: "Toyota Music Factory Plaza, Irving, TX",
    price: "DONATION-BASED • $5 MINIMUM",
    description: "Le Clique invites you to a 45-minute dynamic outdoor flow.",
    type: "yoga",
    link: "https://www.leclique.net/events"
  },
  {
    date: "WED, OCT 14",
    title: "Rooftop Pilates & Recovery",
    category: "PILATES",
    time: "5:45 PM",
    location: "HG Supply Co., Greenville Ave., Dallas, TX",
    price: "$47.80",
    description: "Rooftop Pilates, wellness market, cold plunge, IV services, and discounted happy-hour drinks and bites.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/rooftop-pilates-wellness-market-in-greenville-tickets-2000659630812"
  },
  {
    date: "WED, OCT 14",
    title: "Not Really Runners",
    category: "RUN",
    time: "7:00 PM",
    location: "River Pig Saloon, Dallas, TX",
    price: "FREE",
    description: "Social run with HOKA shoe demos, complimentary post-run drinks, and a chance to win a free pair of shoes.",
    type: "run",
    link: "https://sweatpals.com/event/wnrr-arl-run/2026-10-14"
  },

  // THURSDAY, OCTOBER 15
  {
    date: "THU, OCT 15",
    title: "Sunset Sculpt with Joana & Tierra",
    category: "FITNESS",
    time: "6:00 PM",
    location: "Location shared after RSVP",
    price: "$20",
    description: "Sculpt class led by instructor Tay Diggs. Wear 80s aerobic attire, bring a mat and journal, and dress your best for a chance to win a gift.",
    type: "fitness",
    link: "https://luma.com/5703zkde"
  },

  // FRIDAY, OCTOBER 16
  {
    date: "FRI, OCT 16",
    title: "Girls Night Out: Sculpt & Tennis",
    category: "FITNESS",
    time: "SEE EVENT DETAILS",
    location: "Madison Ace Sports",
    price: "SEE EVENT DETAILS",
    description: "Join Madison Ace Sports' Girls Night Out series. Visit the website for event details.",
    type: "fitness",
    link: "https://www.madisonace.com/"
  },
  {
    date: "FRI, OCT 16",
    title: "Travis Scott Sculpt",
    category: "PILATES",
    time: "6:30 PM",
    location: "Farmers Branch, TX",
    price: "$15",
    description: "A 50-minute blend of Pilates, HIIT, and sculpt set to Travis Scott.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/15-indoor-full-body-sculpt-workout-tickets-2002918789015"
  },

  // SATURDAY, OCTOBER 17
  {
    date: "SAT, OCT 17",
    title: "Elevated Links Permanent Jewelry",
    category: "WELLNESS",
    time: "8:00 AM",
    location: "Forme Pilates, Dallas, TX",
    price: "SEE EVENT DETAILS",
    description: "Discover Elevated Links permanent jewelry at Forme Pilates.",
    type: "wellness",
    link: "https://www.formesculpt.com/"
  },
  {
    date: "SAT, OCT 17",
    title: "Hip Hop Step Class at Dick's House of Sport",
    category: "FITNESS",
    time: "8:00 AM",
    location: "Dick's House of Sport, Arlington, TX",
    price: "FREE",
    description: "Join Kinetic RX Athletic Club for a hip-hop step class.",
    type: "fitness",
    link: "https://www.kneticrx.com/event-details/hip-hop-step-class-at-dicks-house-of-sports-arlington"
  },
  {
    date: "SAT, OCT 17",
    title: "Bonbon Farms x Run It Up Social Run",
    category: "RUN",
    time: "8:30 AM",
    location: "6911 Bexar Street, Dallas, TX 75212",
    price: "SEE EVENT DETAILS",
    description: "Join the social run, then stay for live music and a DJ.",
    type: "run",
    link: "https://www.instagram.com/bontonwellnesscenter/"
  },
  {
    date: "SAT, OCT 17",
    title: "Neon Strong: 8-Year Celebration",
    category: "FITNESS",
    time: "8:45 AM",
    location: "Neon Strong, Plano, TX",
    price: "FREE CLASSES",
    description: "Celebrate eight years of Neon Strong with free classes, vendors, giveaways, prizes, wellness treatments, snacks, and surprises.",
    type: "fitness",
    link: "https://www.neonstrong.com/schedule/"
  },
  {
    date: "SAT, OCT 17",
    title: "Zen Wellness Community Classes",
    category: "WELLNESS",
    time: "9:30 AM & 10:30 AM",
    location: "Zen Wellness Studio",
    price: "SEE CLASS DETAILS",
    description: "Community classes supporting the studio's next group of instructors as they gain teaching experience.",
    type: "yoga",
    link: "https://www.zenwellness-studio.com/classes"
  },
  {
    date: "SAT, OCT 17",
    title: "PFit x lululemon HYROX Simulation",
    category: "FITNESS",
    time: "10:00 AM",
    location: "Uptown, Dallas, TX",
    price: "SEE EVENT DETAILS",
    description: "Eight runs, eight stations, and a DJ. The first 50 people to sign up receive lululemon shorts to race in.",
    type: "fitness",
    link: "https://pitfitworkout.com/book"
  },
  {
    date: "SAT, OCT 17",
    title: "Pilates & Besties",
    category: "PILATES",
    time: "SEE EVENT DETAILS",
    location: "Legacy Food Hall, Plano, TX",
    price: "$45",
    description: "Enjoy a 45-minute Pilates class, mini massages, vitamin patches, a WorldSprings giveaway, and more.",
    type: "pilates",
    link: "https://sweatpals.com/event/pilates-besties-9ea"
  },
  {
    date: "SAT, OCT 17",
    title: "Diamond's One Year Hotter",
    category: "PILATES",
    time: "11:30 AM",
    location: "Nooma Dallas Mockingbird, Dallas, TX",
    price: "FREE CLASS",
    description: "Celebrate Diamond's birthday with a hot Pilates class. Use the event link for booking and RSVP details.",
    type: "pilates",
    link: "https://nooma-dallasmockingbird.brandbot-checkout.com/dallasmockingbirdeventscp.html"
  },
  {
    date: "SAT, OCT 17",
    title: "Meet Her on the Mat",
    category: "PILATES",
    time: "12:00 PM",
    location: "Wesley Wellness Club",
    price: "$35",
    description: "Celebrate one year of Pilates with intentional icebreakers, treats, and opportunities to meet new people.",
    type: "pilates",
    link: "https://www.joinkahlab.com/events/meet-her-on-the-mat"
  },

  // SUNDAY, OCTOBER 18
  {
    date: "SUN, OCT 18",
    title: "Puppies & Pilates",
    category: "PILATES",
    time: "10:00 AM",
    location: "Session Pilates",
    price: "$45",
    description: "A 50-minute, beat-based mat Pilates class featuring adoptable puppies.",
    type: "pilates",
    link: "https://www.zeffy.com/en-US/ticketing/puppies-and-pilates-9"
  },
  {
    date: "SUN, OCT 18",
    title: "Pilates & Brunch",
    category: "PILATES",
    time: "10:00 AM, 11:00 AM & 12:00 PM",
    location: "Sixty Vines Uptown, Dallas, TX",
    price: "$30",
    description: "Enjoy 35 minutes of mat Pilates followed by a brunch buffet and beverages.",
    type: "pilates",
    link: "https://oakcliffpilates.com/events/"
  },
  {
    date: "SUN, OCT 18",
    title: "Mats & Matcha",
    category: "FITNESS",
    time: "11:30 AM",
    location: "Dallas, TX",
    price: "$28",
    description: "A mat-based HIIT workout followed by specialty matcha with house-made syrups.",
    type: "fitness",
    link: "https://partiful.com/e/tlBs2ZCZicBPi8NAnZJT"
  },
  {
    date: "SUN, OCT 18",
    title: "Pilates in Pink",
    category: "WELLNESS",
    time: "2:00 PM",
    location: "Connect Studio",
    price: "SEE EVENT DETAILS",
    description: "A women's wellness and networking experience celebrating Breast Cancer Awareness Month.",
    type: "pilates",
    link: "https://luma.com/op0mr5wm"
  },
  {
    date: "SUN, OCT 18",
    title: "11:11 Pilates Grand Opening",
    category: "FITNESS",
    time: "5:00 PM",
    location: "11:11 Pilates, Uptown, Dallas, TX",
    price: "SEE EVENT DETAILS",
    description: "Celebrate the grand opening with a ribbon cutting, matcha tasting, B12 shots, and a chance for the first 25 guests to receive an 11:11 tote and grip socks.",
    type: "fitness",
    link: "https://www.instagram.com/1111pilates/"
  }
];

const eventGrid = document.getElementById("event-grid");

function renderEvents(filter = "all") {
  if (!eventGrid) return;

  let filteredEvents = events;

  if (filter === "fitness") {
    filteredEvents = events.filter(event =>
      event.category === "FITNESS"
    );
  } else if (filter === "wellness") {
    filteredEvents = events.filter(event =>
      event.category === "WELLNESS"
    );
  } else if (filter === "pilates") {
    filteredEvents = events.filter(event =>
      event.category === "PILATES" ||
      event.category === "YOGA" ||
      event.type === "yoga"
    );
  } else if (filter === "run") {
    filteredEvents = events.filter(event =>
      event.category === "RUN" ||
      event.category === "WALK"
    );
  } else if (filter === "free") {
    filteredEvents = events.filter(event =>
      /^(FREE|FREE CLASS|FREE CLASSES)$/i.test(event.price.trim())
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

        ${event.link ? `
          <a
            class="event-link"
            href="${event.link}"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW DETAILS &nbsp; →
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");
}

// Display all events when the page loads.
renderEvents();

// CATEGORY FILTERS
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

    document.querySelectorAll(".main-nav a").forEach(navLink => {
      navLink.classList.remove("active");
    });

    const matchingNav = document.querySelector(
      `.main-nav a[data-filter="${filter}"]`
    );

    if (matchingNav) {
      matchingNav.classList.add("active");
    }

    if (mainNav && menuToggle) {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// VIEW ALL EVENTS
document.querySelectorAll(
  'a[href="#events"]:not([data-filter])'
).forEach(link => {
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

// FOOTER YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// MOBILE MENU
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

// Newsletter signup is handled by the Kit form embedded in the page.

// REMOVE UNNECESSARY QUERY STRINGS FROM THE CURRENT PAGE URL
if (window.location.search) {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname + window.location.hash
  );
}
