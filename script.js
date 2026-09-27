const events = [
  /* MONDAY */
  {
    date: "MON, SEP 28",
    title: "Stay in the Game: The Workshop for Competitive Athletes",
    category: "WELLNESS",
    time: "6:30 PM",
    location: "Palmercare Chiropractic, Fort Worth, TX",
    price: "FREE",
    description: "Learn practical strategies to reduce injury risk, recover when injuries happen, and return to activity stronger.",
    type: "fitness",
    link: "https://www.eventbrite.com/e/stay-in-the-game-the-workshop-for-competitive-athletes-tickets-2002094115394?aff=ebdsoporgprofile"
  },

  /* TUESDAY */
  {
    date: "TUE, SEP 29",
    title: "Boxing Fundamentals",
    category: "FITNESS",
    time: "7:00 PM",
    location: "Flexy Fitness",
    price: "$16.43",
    description: "Learn real boxing technique, burn calories, and boost your cardio.",
    type: "sports",
    link: "https://www.eventbrite.com/e/boxing-fundamentals-tickets-1987206815078?aff=ebdssbdestsearch"
  },

  /* WEDNESDAY */
  {
    date: "WED, SEP 30",
    title: "Sunset Pilates + Wellness Market",
    category: "PILATES",
    time: "5:30–9:00 PM",
    location: "HG Supply Co., Dallas",
    price: "SEE EVENT DETAILS",
    description: "Energizing rooftop Pilates, then head over to explore our post-workout Wellness Market.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/rooftop-pilates-wellness-market-in-greenville-tickets-2000659630812?aff=ebdsoporgprofile&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUlSb9leHRuA2FlbQIxMQBwZG9mAmZkaWQWUPPKU9PjzZs8LEOT6WKbh0iQcE9xKXNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp80kVaP5VzwtMH80Z2exv5tH0tYcODJ2DrvZ7g8DDui0pMt_a7_pNkTq-w9I_aem_v8fjIjYpZaIMEuqz9VLYuQ"
  },

  /* THURSDAY */
  {
    date: "THU, OCT 1",
    title: "Sis, Let's Stroll Walking Club",
    category: "WALK",
    time: "SEE EVENT DETAILS",
    location: "Dogwood Canyon Audubon Center",
    price: "FREE",
    description: "A weekly walking experience created just for Black and Brown women in South Dallas.",
    type: "run",
    link: "https://www.eventbrite.com/e/sis-lets-stroll-walking-club-tickets-1986041576819?aff=ebdssbdestsearch"
  },

  /* FRIDAY */
  {
    date: "FRI, OCT 2",
    title: "Sound Bath",
    category: "WELLNESS",
    time: "12:15 PM",
    location: "Forme Pilates",
    price: "FREE CLASS • WAITLIST",
    description: "A sound bath experience at Forme Pilates. Currently waitlisted.",
    type: "yoga",
    link: "https://www.formesculpt.com/schedule?_mt=%2Fclasses%2F12955%2Freserve%2F"
  },
  {
    date: "FRI, OCT 2",
    title: "Pomp & Pucks",
    category: "SPORTS",
    time: "6:30 PM DINNER / 8:00 PM PUCK DROP",
    location: "Urban Italia + American Airlines Center",
    price: "SEE TICKET DETAILS",
    description: "An intimate live-game experience from The Sideline Société, the social club for women who love sports. Pregame dinner at Urban Italia followed by puck drop at American Airlines Center.",
    type: "sports",
    link: "https://www.tickettailor.com/events/sidelinesociete/2422920?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUlaOpleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPN6zE7RyTPPfUrAymr8Ml995vJkb3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3aQ-5f10K7KRBtxeEGJzvb1FtYHIq040ZsB-PrJ1KkFKFrxdTet9ECpV6As_aem_LYCw4s6EeTl5gD_uFky5gw"
  },
  {
    date: "FRI, OCT 2",
    title: "The Dallas Cup",
    category: "SPORTS",
    time: "6:30 PM",
    location: "Brookhaven Country Club Ballroom",
    price: "$75",
    description: "Party and tournament fundraiser featuring live music, food and drinks, casino games and prizes, a live auction, and a 50/50 raffle.",
    type: "sports",
    link: "https://www.zeffy.com/en-US/ticketing/2026-dallas-cup-friday-party?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmN_hleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPOUDp5uG3h_tABfJ2ItSQDX_i-_qHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3uGCl7FyR2AiEDsHL7-pxTiOZqrF4onntEj0ePcMF4F2xtisZWkYAy6_iGf_aem_jP2fehiMuVSihBSfiO43_g"
  },

  /* SATURDAY */
  {
    date: "SAT, OCT 3",
    title: "Breathe & Brew: Dallas Edition",
    category: "WELLNESS",
    time: "9:00 AM–12:00 PM",
    location: "Reunion Tower, Dallas",
    price: "$65",
    description: "R&B yoga and Pilates with a live DJ, mimosas, and access to the GeO-Deck.",
    type: "yoga",
    link: "https://sweatpals.com/event/breathe-brew-dallas-edition?utm_source=user_share_fe07ef23-1310-4245-82df-c5d1687e5fe9&utm_medium=shared_link&utm_campaign=event_share&utm_content=link_in_bio&fbclid=PAdGRleAUlSL5leHRuA2FlbQIxMQBwZG9mAmZkaWQWUPP2ywHoRudYgCG5vYE5DVGHXBofPnNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpzEZ3msNoanIQbfQOXg5QETbFwB2NMI4oUljDg5A5l22NgkuIbprKKLGjkv-_aem_V3jbmsKza2a9hvpYmZeP1Q"
  },
  {
    date: "SAT, OCT 3",
    title: "Core in Chrome",
    category: "PILATES",
    time: "10:00 AM",
    location: "Dallas, TX",
    price: "$27.50",
    description: "Mat Pilates led by [solidcore], followed by a live DJ, coffee and matcha from Local Jonny's Coffee, plus recovery and wellness vendors.",
    type: "pilates",
    link: "https://sweatpals.com/event/core-in-chrome?utm_source=user_share_866eef36-0060-415a-896d-912133e39308&utm_medium=shared_link&utm_campaign=event_share&utm_content=link_in_bio&fbclid=PAdGRleAUlZ-5leHRuA2FlbQExAHBkb2YCZmRpZBZQ80n04rDWBXgXEOU4d-0V5uGvkmnPc3J0YwZhcHBfaWQPMTI0MDI0NTc0Mjg3NDE0AAGnqjFvN-pNI2Bnhhrvd2AyCWUs-nIb7non5lsxjjHH8qV8tWPJrZT36fEIOt0_aem_lL1pwnhSOoEp65FmUgiUZw"
  },
  {
    date: "SAT, OCT 3",
    title: "Trap Pilates",
    category: "PILATES",
    time: "8:00 PM",
    location: "Alpha Midway Dance Studio",
    price: "$24",
    description: "Trap music, low lights, and club energy. Mat is included.",
    type: "pilates",
    link: "https://resonancepilates.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmNY5leHRuA2FlbQIxMQBwZG9mAmZkaWQWUPOFKQQ7fn9mcs-Sy2SFtgv6F21wGHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1yCylc4FqGzAsPwY_YcgIRdL0rfJmS37YtC1cZ1tMpGJsozZkpR7viU_zrb_aem_7SXtKDHWUyP_4GLF3N1fCw"
  },
  {
    date: "SAT, OCT 3",
    title: "Vuori x Corporate Athletes",
    category: "FITNESS",
    time: "8:00 AM",
    location: "NorthPark Lawn",
    price: "FREE",
    description: "A 45-minute full-body burn led by Khadijah Taylor, plus exclusive shopping at Vuori with 20% off your purchase.",
    type: "fitness",
    link: "https://www.eventbrite.com/e/private-shop-vuori-northpark-x-corporate-athletes-tickets-2001066652224?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmNpZleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPMxeHKckJzhOPCF1t6WJA4kN3t_GXNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3Go4fw5vj-4A-QAX5U-FAgArvNo32_WvXqj4XjpateSkZzunIRaN3zeIXZQ_aem_ohvk6_ckR0GyI9MOBKYR2w"
  },
  {
    date: "SAT, OCT 3",
    title: "Sunrise Walk",
    category: "WELLNESS",
    time: "10:00 AM",
    location: "Dallas, TX",
    price: "FREE",
    description: "Coffee, prayer, and a reflective walk with Flourish Affairs.",
    type: "run",
    link: "https://www.eventbrite.com/e/sunrise-walk-tickets-2000484904200?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmQMxleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPOmuUjPQP30kuGqUc9cZG-zxzkC4HNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp5cvXeiB9m-bxFUf3imilyPGNKVZdcmJkGU0D43Df1ivFt1ZCYsLg4G7gmow_aem_CAWfeny23QwjvReWxy8PEQ&keep_tld=true"
  },

  /* SUNDAY */
  {
    date: "SUN, OCT 4",
    title: "Sip & Sculpt",
    category: "FITNESS",
    time: "10:00 AM–1:00 PM",
    location: "Ohm Fitness",
    price: "$35",
    description: "EMS workout, red light therapy, sauna, and drinks.",
    type: "fitness",
    link: "https://partiful.com/e/edv7HCOzSVt2Ebas4ikc?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUlRvlleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPMwNYOBCBccLMuztL1qwBJ7u8lYaHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp69K_HeS_FrneCGmpRlDvJM2vZ1Ha1jxYLvGxM8Xpb9vRq3xGeiaMkRWfgzk_aem_qA9kNKtcE3qcce6fA2YWuw"
  },
  {
    date: "SUN, OCT 4",
    title: "BFit Cardio Dance",
    category: "FITNESS",
    time: "6:00 PM",
    location: "Legacy Hall",
    price: "FREE",
    description: "A high-energy cardio dance workout with Brandon Biscoe.",
    type: "fitness",
    link: "https://www.eventbrite.ca/e/dance-cardio-with-brandon-biscoe-tickets-2000015264495?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmNypleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPORm9G4oN7LCr9eyk4g_0f4PQwnm3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp5xdyyS_q-maBpLvZYp0V6feOVhK10bZkmnBcvUx0A-xt7aAe1TofFE4bPJr_aem_QiZ9fx7FRbFhpyB3w4aheQ"
  },
  {
    date: "SUN, OCT 4",
    title: "Community Care Sound Bath: The Anniversary Wellness Experience",
    category: "WELLNESS",
    time: "2:00 PM",
    location: "The Greenhouse Lounge",
    price: "DONATION-BASED • $15 MINIMUM",
    description: "Anniversary sound bath wellness experience with vendors including waist beads, vitamin D shots, and flash tattoos.",
    type: "yoga",
    link: "https://www.eventbrite.com/e/community-care-sound-bath-the-anniversary-wellness-experience-tickets-2001151167010?sg=4f32abeae90ea5ef66f25b03912cc1f8d3304d60959f6a9a0a21d755235d1e3219d563b37f6c391cbe9bf00ca223921e5fbc4096a40ff95e2469554b040797370496d7e274307c5b814a123489&aff=ebdsshios&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUmPNpleHRuA2FlbQIxMQBwZG9mAmZkaWQWUPPCNx6bPS66U744eWh8wRSPWjJUcnNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3jkPwo7T9ZoX71jUzIiMJOzJUVzTiOdq6KUHP5_K9Yq5n0q-w0-bXCeYKOJ_aem_VDj1qQXzHdcAUOl2dwuEHg"
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
