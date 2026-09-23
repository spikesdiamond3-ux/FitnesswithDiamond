const events = [
  /* MONDAY */
  {
    date: "MON, SEP 21",
    title: "JC's Boxing Academy",
    category: "FITNESS",
    time: "6:00 AM / 9:00 AM",
    location: "Lewisville, TX",
    price: "$7.18",
    description: "Morning Group Class at JC's Boxing Academy.",
    type: "sports",
    link: "https://www.eventbrite.com/e/morning-group-class-tickets-1409560004919?aff=ebdsshcopyurl&utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=&utm-share-source=mobile-search-results"
  },
  {
    date: "MON, SEP 21",
    title: "BFit Cardio Dance",
    category: "FITNESS",
    time: "7:00 PM",
    location: "Kumbala Dance Studio",
    price: "$13.54",
    description: "BFit Cardio Dance Mondays.",
    type: "sports",
    link: "https://www.eventbrite.com/e/bfit-cardio-dance-mondays-tickets-1983900954159?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile"
  },

  /* TUESDAY */
  {
    date: "TUE, SEP 22",
    title: "The YMCA & Downtown Dallas",
    category: "SPORTS",
    time: "7:00–9:00 PM",
    location: "Harwood Park",
    price: "$45 INDIVIDUAL / $239 TEAM",
    description: "Adult kickball league running for six weeks, with games played Tuesday or Wednesday nights. Teams can have up to 14 players.",
    type: "sports",
    link: "https://dallas.recliquecore.com/programs/82513998/?locations=19"
  },

  /* WEDNESDAY */
  {
    date: "WED, SEP 23",
    title: "Fit Swank",
    category: "YOGA",
    time: "6:00 PM",
    location: "Arlington, TX",
    price: "$15",
    description: "Stillness Yoga & Sound Bowl featuring yoga flow and intentional breathwork, followed by a peaceful sound bowl experience designed to help you slow down, reset, and reconnect. Beginner friendly and modifiable for higher fitness levels.",
    type: "yoga",
    link: "https://na.spatime.com/loews9172/4807805/activity/activity-view/60251499?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcGCRwZG9mAmZkaWQWUOxmm4SdusHCGu1mMe3BpK0O-oiV_mV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpyjGXI0ZtDldHGzCaDGc9gXGUSm15QKUeEEOWdf8My7sf0dvSW5Nd2AxuMat_aem_3ZD6DERtUd3cPbmP76MHpw&utm_id=97760_v0_s00_e0_tv3"
  },
  {
    date: "WED, SEP 23",
    title: "Golf Like a Girl",
    category: "SPORTS",
    time: "5:00 PM",
    location: "2nd Swing Golf, The Colony",
    price: "$50",
    description: "Golf experience taught by LPGA/PGA professional Megan Buzza. Proceeds go toward free mother/daughter golf lessons.",
    type: "sports",
    link: "https://givebutter.com/GLGxTX923W"
  },

  /* THURSDAY */
  {
    date: "THU, SEP 24",
    title: "Resilience Project Non Profit",
    category: "FITNESS",
    time: "6:30 PM",
    location: "Toyota Music Factory",
    price: "FREE",
    description: "Commit 2 the Hit with a hydration station, ice-cold water, cold towels, and a mister to cool you down. All fitness levels are welcome, with a live DJ and a healthy community atmosphere.",
    type: "hiit",
    link: "https://www.eventbrite.com/e/commit2hiit-92426-tickets-1999532959909?aff=oddtdtcreator&keep_tld=true&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcJetwZG9mAmZkaWQWUOzEG-8yh_305m0DX0IrU-e0ywSjV2V4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp7KkuhAlYi_eywi2gL4YCrsW-XXc-O0JpNaGNp13hWce-Xo9TYKR8Mg6PerS_aem_6zPXb5rfar3Do9TbupT1Dg"
  },

  /* FRIDAY */
  {
    date: "FRI, SEP 25",
    title: "Afro Pickle Ball",
    category: "SPORTS",
    time: "8:00 PM",
    location: "Paddle Club",
    price: "$10",
    description: "Open play pickleball with a live DJ.",
    type: "sports",
    link: "https://paddleclub.podplay.app/community/events/01a0533b-4147-755d-96e4-b4411d58b7c9?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcKGJwZG9mAmZkaWQWUOw8GNCBl8Rg3NYLkwjoVf3mZY7s3WV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwtScOl0e_Zf48D6HtX1CBnazp8woS5DYv1_cDvHMa3ZC6zTcmdMUj5L3V6f_aem_BlkFcBN6DXIxyDj4wXE0fA&utm_id=97760_v0_s00_e0_tv3"
  },
  {
    date: "FRI, SEP 25",
    title: "The Third Space & Instructor Kendra",
    category: "YOGA",
    time: "7:00 PM",
    location: "Addison, TX",
    price: "$25",
    description: "After Hours: R&B Yoga & Flow with mocktails. A portion of proceeds supports women in need of dental care and feminine hygiene products.",
    type: "yoga",
    link: "https://www.eventbrite.com/e/after-hours-rb-yoga-flow-registration-1999219797231?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcObZwZG9mAmZkaWQWUOxgTVaz1nx3zOdTxoBr4GjyzuO9q2V4dG4DYWVtAjExAHNydGMGYXBpDzEyNDAyNDU3NDI4NzQxNAABp4EH9bXwU1-PKLbF-girgN4kf2hodPFJcBcXrgRB-XsE3kGa3KtKzOkdARHa_aem_Cu-gCihRLBo5152EZYg6ew&keep_tld=true"
  },

  /* SATURDAY */
  {
    date: "SAT, SEP 26",
    title: "The Creatives Juices Group",
    category: "PILATES",
    time: "2:00 PM",
    location: "Strong Pilates, Mockingbird Station",
    price: "$47.16",
    description: "Pilates & Profit: guided Pilates by Johanna, conversations, light refreshments, and a swag bag. An intimate experience for creatives, entrepreneurs, and professionals ready to slow down, become more intentional, and reconnect through movement.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/pilates-profits-tickets-1997004205336?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile"
  },
  {
    date: "SAT, SEP 26",
    title: "Social House & MNSR Athletics",
    category: "SPORTS",
    time: "2:00 PM",
    location: "Paddle Club",
    price: "$20",
    description: "Pickleball Social — an afternoon built around movement, wellness, competition, and community.",
    type: "sports",
    link: "https://www.gatekeepers.app/events/pickleball-social-social-house-x-mnsr-athletics-3a658a?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcG3dwZG9mAmZkaWQWUOxcYnnKkckgqIqQByUc5RmChFB4zGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp-a0uv9Hxtfy7dXO-hKq09PMZtrlq_fp4cW7ha8qZgk_UVALqn0XghJLM_r8_aem_sgrSDQWgpi9C_3zNp7goNg"
  },
  {
    date: "SAT, SEP 26",
    title: "Pulse Pilates",
    category: "PILATES",
    time: "7:00 PM",
    location: "Rowlett, TX",
    price: "FREE",
    description: "Pilates in the Park with a local vendor market afterward. Attendees will also have a chance to win one of three free classes.",
    type: "pilates",
    link: "https://www.pulsepilatesbayside.com/offerings/sunset-on-the-mat-free?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcHJpwZG9mAmZkaWQWUOwzBn2H2drkM-jrDY5ENi3wjMA732V4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1iafOlVbTQ_ntPvLCqEhCiZG8MZo3OerBVVxZ-FumpiLd9nHC0uMdJT-S9c_aem_3cylLmw9XfV_Z-deEAiCpQ"
  },
  {
    date: "SAT, SEP 26",
    title: "She Walks",
    category: "WALK",
    time: "10:00 AM",
    location: "Katy Trail",
    price: "FREE",
    description: "A morning walk with the girls on the Katy Trail.",
    type: "run",
    link: "https://posh.vip/e/she-walks-a-morning-with-the-girls-on-katy-trail-?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcHYlwZG9mAmZkaWQWUOxS8vDdNo5S3g4Y935Td95mxKZxFWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp0B5pJhXy9sL1huMzYToO3TNe2PB_Z8o0qKNfyfX2heBbny-X2itNB34fDic_aem_Cp1fPKrrz-6TTi6FJhVRW"
  },
  {
    date: "SAT, SEP 26",
    title: "Corporate Athletic HQ & Sweat440",
    category: "FITNESS",
    time: "10:45 AM CHECK-IN",
    location: "DICK'S House of Sport, Dallas",
    price: "FREE",
    description: "Runner-focused workout led by SWEAT440 Prestonwood, with live DJ beats, recovery partners, wellness experiences, and an opportunity to connect with Dallas' running community.",
    type: "sports",
    link: "https://www.dickssportinggoods.com/s/scheduling/f/1985e203-a1ec-42c8-9f89-075c5b9643a6?s=1619&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcIJBwZG9mAmZkaWQWUOzR_v85fuSA2r4dZPQYI7tWf5obmGV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp3ep0vNAuI_P5H1Sf393rH7ND0iCTJwuGbbrKgsx7OjsJWkopFGDp-MWT6DG_aem_EKUCJ_8T0-QRUZP1HR_1JA"
  },
  {
    date: "SAT, SEP 26",
    title: "Lupus Lone Star / Lupus Foundation of America",
    category: "WALK",
    time: "9:00 AM",
    location: "Klyde Warren Park",
    price: "SEE REGISTRATION OPTIONS",
    description: "Walk to End Lupus. Choose an individual registration or form/join a team. Fundraise for lupus research, support, and education services while earning incentives along the way.",
    type: "run",
    link: "https://support.lupus.org/site/TR?fr_id=2280&pg=entry&_gl=1*eaazwo*_gcl_au*Mzg5NjQwMDQwLjE3ODk4NzM2OTI.*_ga*MTczNTQ5OTM2MC4xNzg5ODczNjky*_ga_YYDMSWHGD2*czE3ODk4NzM2OTIkbzEkZzEkdDE3ODk4NzQxNTYkajIxJGwwJGgw&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcL0lwZG9mAmZkaWQWUOx3Af_zgVpb0lw0eZI8ir7tRpHrJWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp9DmDdo4AyzwaRRbENiYw9s3taBIeC5A8VA1U7mX_OHevADRM9A9h5hHYlRt_aem_QWHV9kQbxu3CtuR4rUSp-g"
  },
  {
    date: "SAT, SEP 26",
    title: "Carries Pilates",
    category: "PILATES",
    time: "9:00 AM",
    location: "Assembly Park, Plano",
    price: "FREE",
    description: "Rise & Shine Pilates on the Lawn with a live DJ, complimentary Force of Nature water, and an exclusive discount at on-site favorite Cliff Coffee.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/rise-shine-pilates-on-the-lawn-tickets-1998254904210?aff=oddtdtcreator"
  },
  {
    date: "SAT, SEP 26",
    title: " Blank Haus x Soft Launch Pop-Up",
    category: "WELLNESS",
    time: "9:00–12:30 PM",
    location: "650 Fort Worth Ave #135",
    price: "$9 a cup",
    description: "Wellness pop-up featuring low-calorie, high-protein soft serve. You do not have to take a class to attend.",
    type: "sports",
    link: "https://www.instagram.com/softlaunchicecream?stkn=MTcxeng2cXJtZ2NjYQ=="
  },
  {
    date: "SAT, SEP 26",
    title: "O2 Pilates x The Adolphus",
    category: "PILATES",
    time: "8:30 AM",
    location: "The Adolphus, Dallas",
    price: "$52",
    description: "Poolside Pilates featuring a 45-minute mat Pilates class, all-day pool access, one mimosa or zero-proof Ritual Cocktail, and valet parking.",
    type: "pilates",
    link: "https://www.adolphus.com/event/poolside-pilates-with-o2"
  },

  /* SUNDAY */
  {
    date: "SUN, SEP 27",
    title: "Dallas All Girls Tennis x Pax & Beneficia",
    category: "SPORTS",
    time: "9:30 AM",
    location: "The Courts at Cypress Waters",
    price: "$30",
    description: "Pax & Play featuring tennis lessons and open play. Ticket includes three live electrolyte drink flavors.",
    type: "sports",
    link: "https://posh.vip/e/crafts-on-the-court-?u=elliebrock35&_t=mu1snn4j&os=ios&src=event_page&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcHpJwZG9mAmZkaWQWUOw_d_TVvN7pTaxMslya-rZPrpwwRmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp0yP1QG2g_8d1sZW-pJnEjDD_N6KS-j5J8ho-Z-bMyKQWtQ6UAG0PKb_EpvX_aem_GxJVmiLlV-ai-uicJsnbvg"
  },
  {
    date: "SUN, SEP 27",
    title: "DTR Run Club",
    category: "RUN",
    time: "8:30 AM",
    location: "Irving, TX",
    price: "FREE",
    description: "A 3-mile loop around Lake Carolyn with community, vendors, a DJ, giveaways, and coffee from Pax and Beneficia.",
    type: "run",
    link: "https://www.eventbrite.com/e/saturday-run-club-tickets-2000661098201?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcH_pwZG9mAmZkaWQWUOzsbghiD_jpIdLdBgW_3cNtQEAEBmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp75yN9cwnID9O9MwXKDPhVtcZFxjd4Zc3OoJffsw-lNZQRHpJ66oELRjAsef_aem_n4FyGGHpan67eeVzUlVqcA"
  },
  {
    date: "SUN, SEP 27",
    title: "Bodied by LA & Honey Scented Co",
    category: "PILATES",
    time: "10:00 AM",
    location: "Dallas, TX",
    price: "$85",
    description: "Sculpt & Scent starts with a 50-minute full-body sculpt class, followed by a custom scented sugar scrub. Enjoy gift bags, local vendors, and a matcha bar. Option to participate in sculpt only.",
    type: "pilates",
    link: "https://www.bodiedbyla.com/hourglassflowsculpt"
  },
  {
    date: "SUN, SEP 27",
    title: "Shine Hot Pilates & Jungles Studio",
    category: "PILATES",
    time: "GROUP A 10:00 AM / GROUP B 11:30 AM",
    location: "Leela's Uptown, Dallas",
    price: "$42.24",
    description: "Pilates on the lawn and Leela's brunch, with IV and permanent jewelry vendors. Brunch is included.",
    type: "pilates",
    link: "https://www.eventbrite.com/e/pilates-brunch-at-leelas-in-uptown-dallas-tickets-2001576001702?aff=ebdsoporgprofile&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAUcNMxwZG9mAmZkaWQWUOyppUpPSx2-X5pEpQYvHwSeti73sWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp4PXMjZuDPLbcJ7qpij3ZPGGJHqYSDjeRrt3B4T5l_WbSmM6vidyHG5m2LtR_aem_iHC9XfTYAxgAfpdHnhMcpg"
  },
  {
    date: "SUN, SEP 27",
    title: "In Life Wellness Richardson",
    category: "PILATES",
    time: "10:00 AM",
    location: "Richardson, TX",
    price: "SEE EVENT DETAILS",
    description: "Outdoor Pilates morning on the grass.",
    type: "pilates",
    link: "https://www.instagram.com/inlifewellness_richardson?stkn=MWJ6MTNoOXoyYml0NQ=="
  },
  {
    date: "SUN, SEP 27",
    title: "Green Light Social Dallas",
    category: "WELLNESS",
    time: "12:00 PM",
    location: "Dallas, TX",
    price: "WORKOUT FREE",
    description: "Abs & Ass + Burn & Brunch featuring a high-energy workout, cold plunge, brunch and drink specials, music, and local vendors.",
    type: "hiit",
    link: "https://www.instagram.com/theheartandsoulmarket?stkn=MXB1bGJ1ZzN2NjEwdg=="
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
