
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
    description: "Celebrate the full moon with a swim, lunar crystal kit, wellness goodies, and a complimentary drink.",
    link: "https://www.eventbrite.com/e/full-moon-swim-on-the-wet-deck-tickets-2002820689597?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVK-UVleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ9EE4F2YjumqGvIOSHKivkixPhRiHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp4GZ4c5aeZbT7Lk2r1NGwoCMWbohOxLRBMuHNTPtAciyfPYjDuN0wclGrhaD_aem_wGizUSRJqjH3hqjML1bJMg"
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
    description: "Meet new people and get moving at this community pickleball social.",
    link: "https://www.instagram.com/ghostmammoth.pb?obrf=MWNkdnkzNGJhZGl3dA=="
  },
  {
    title: "The Habit Challenge",
    organizer: "MENT Fitness",
    date: "2026-10-26",
    day: "MON",
    time: "SEE EVENT DETAILS",
    price: "$65",
    location: "Dallas, TX",
    category: "FITNESS",
    type: "fitness",
    description: "A four-week challenge featuring unlimited classes, recovery access, nutrition guidance, and accountability.",
    link: "https://linktr.ee/mentfitnesschallenge?utm_source=linktree_profile_share&ltsid=9810c22f-364d-4a1a-b7f2-979286507060"
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
    description: "Enjoy 45 minutes of mat Pilates with Align Studio, pumpkin painting supplies, and a complimentary glass of La Marca Prosecco.",
    link: "https://www.eventbrite.com/e/pumpkins-pilates-prosecco-on-the-rooftop-tickets-2003096140478?utm_campaign=button_list_PUMPKINSPILATESPROSECCO&utm_medium=referral&utm_source=later-linkinbio&aff=oddtdtcreator&fbclid=PAVERFWAVJ5IdleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ5-5J2Z9vuZTIkgeGVAMtg7FHWrx3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp69cGfJDfUMLKiMpv3NDEKB2l8NA6MQbjyVP79rrD9kFqMstConLWQrUyWjs_aem__Sz1_3i9_4FTS1baBcoxaw"
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
    description: "Get your miles in and connect with the local running community.",
    link: "https://www.instagram.com/runitup_dallas?obrf=MWJ2dnNreHZzZ3c1Mg=="
  },
  {
    title: "Pilates & Pickleball",
    organizer: "Oak Cliff Pilates",
    date: "2026-10-27",
    day: "TUE",
    time: "7:00 PM",
    price: "FREE",
    location: "Four Corners Brewing Company",
    category: "PILATES",
    type: "pilates",
    description: "Enjoy a Pilates class and pickleball courts at no cost.",
    link: "https://www.oakcliffpilates.com/events?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVLQeJleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ8eIaKVkkshDPLtsPcb_OU3xA-DJHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp70ErPWPrtByqMzvpwLmD-qs0YZb4GFoq7D54hCV1ydTomydX9BEUk18h0FJ_aem_fDV05933IuyEapLCZwrfPw"
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
    description: "A 45-minute dynamic outdoor yoga flow focused on strength, balance, and intention.",
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
    description: "Wear brown or autumn colors and enjoy pumpkin treats after class. Check the schedule for available class times.",
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
    description: "Bring your favorite person for Pilates, then stay for vendors and post-class surprises.",
    link: "https://www.eventbrite.com/e/bring-your-boo-to-pilates-tickets-2002471918413?aff=oddtdtcreator&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ9yxleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ5HNgiGQcaqCoTDFW1erxmaTvHn6nNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpzt_txDle3rbRolYAQaU8-2DQh4lb1Lm6tAkEn-fLXGDBBzjwyml1v44mJjv_aem_TDkcTiUXm5RqfbblzStXQA"
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
    description: "A high-energy, low-impact aerobic line dancing class.",
    link: "https://www.eventbrite.com/e/line-dance-class-tickets-2003514664294?aff=ebdsoporgprofile"
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
    description: "Meet up for a Halloween-themed run, with a Schmurger and fries special plus happy-hour cocktail pricing.",
    link: "https://www.instagram.com/cityrunofficial?mdxt=aWFkenRmcHRsOGRn"
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
    description: "Enjoy seasonal bites and cocktails, Halloween activations, festive photo spots, shopping, and music.",
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
    location: "Farmers Branch, TX",
    category: "FITNESS",
    type: "fitness",
    description: "A spooky-season sculpt workout with socks and small treats included.",
    link: "https://www.eventbrite.com/e/20-in-studio-hiit-pilates-sculpt-workout-tickets-2003589653589?aff=oddtdtcreator&keep_tld=true"
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
    link: "https://www.eventbrite.com/e/worship-night-matcha-mercy-tickets-2003427679119?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ7htleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ4OBF023jrrrtyR89NtEpxZ40PG-nNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpxKHvINnh8LRs-sMhoEiJ5UjLGyUH05_uKSn1UJoOL3_qe9tlvih41QEXrsW_aem_ZN5J_mrOaQpsKqcf9cjTsw"
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
    description: "A costume-friendly sand volleyball social with $6 margaritas and a DJ.",
    link: "https://posh.vip/e/serve-it-up-final-one-of-26?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ70JleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ6gPra3JFu90YZ34u3zgc-TWzMd9XNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp0izUBTZwY1drot2mi2GodDjtNQSL3J5S4N406Imhn032AHu35D70z4u1iox_aem_5ARxWoqNEAriVNaKhEijow"
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
    description: "Rockets vs. Mavs with group seating, pregame happy hour at Velour, and a postgame on-court group photo. Check the event page for waitlist availability.",
    link: "https://www.tickettailor.com/events/sidelinesociete/2442141?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ9I5leHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ6RAKF48LtiDRxMuqOxfmZ18UgUcHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpxA1FPLJtVp9cZ8Ii8pvP1DZ6O3dN4x29BOChc0PyOFvNK2EV0KuUegzf_aem_w-fxFJeBaf52aEpB_y0Ypg"
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
    link: "https://events.eventnoire.com/e/community-workout-halloween?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ5d5leHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ6jUyAeWLWoEsL5A53lMWvV_KbdF3NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp1QeKIoaqOcCdJ2eLGxTMYHyAXUq_2yrTpoKxF1eyvoey_s0hG2nz0lOllAD_aem_GeW07uUKpygk068gfqxn6w"
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
    link: "https://app.arketa.co/httpscalendlycompilatescalientedallas?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ6E1leHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ5YF_YBYhK-0tybTVQomhxrXR-y23NydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp4dxPBxosMz8-sO7HF5JRxONnm3bB14g7ydHwYHtKk34LBoALXNUaN9OB861_aem_Oz7YISdTImY7rJeewUZcLg"
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
    description: "Choose from 8:30 AM Spicy Flow, 10:00 AM Yogalates with a live DJ, or 11:30 AM Yogalates. Costumes and post-class treats encouraged.",
    link: "https://momence.com/222-Studio/Spicy-Flow-%7C-Halloween-Party-%F0%9F%91%BB%F0%9F%AA%A9/134369141?skipPreview=true&fbclid=PAVERFWAVJ6hRleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ7GXbMW9gSe6mB35Nuqkr2Q0v22YHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp4sAiIS9sXdhtqf-6ksk9cIPU-_5gjcHYFWvG_4QbyDvqXo09NOFl9nSMgCx_aem_s00yiSN_mv9L9N19bbqwvw"
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
    description: "Show up for a full-body boot camp and a strong start to your Halloween Saturday.",
    link: "https://app.acuityscheduling.com/schedule/a65a102b/appointment/99465067/calendar/11556584/datetime/2026-10-31T10%3A00%3A00-05%3A00?appointmentTypeIds%5B%5D=99465067&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVJ7MJleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ6gjs8lGr5btbz57fzqAM0szbRxjHNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2o4ql5Kv8XW9J5Gn1FSAalO9wTycnsOR44UVimsOHn8NDhGC0dKp96l1-Rc_aem_fHfWokAhHDZWbcfLsQXsyQ"
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
    description: "Get outside for a spooky-season hike. Candy is available for RSVPs, and everyone is welcome.",
    link: "https://sweatpals.com/host/fuerteyfierce?fbclid=PAVERFWAVK-phleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ9XYJYaTKwen9u05zV8QDo_nGIBpnNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2gIKG1M1KMrZFcpLHcx04n12GuYKsOEMJ8Lga4mEqlMSrCaPBxDV2Lr-0pl_aem_-HuXIMXIITnX290krn-rJw"
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
    link: "https://www.eventbrite.com/e/bfit-cardio-dance-sundays-tickets-1983900686358?dsrp_sid=6f31398d-3a62-43ff-aec8-9adbda2ea9f0&dsrp_item_id=1983900830790&aff=ebdssbdestsearch"
  },
  {
    title: "Free 30-Minute Sculpt & Sweat",
    organizer: "Kota Wellness × Klyde Warren Park",
    date: "2026-11-01",
    day: "SUN",
    time: "SEE EVENT DETAILS",
    price: "FREE",
    location: "Klyde Warren Park, Dallas",
    category: "FITNESS",
    type: "fitness",
    description: "A high-energy, music-powered, low-impact workout. Mat-only, equipment-free, and open to all levels.",
    link: "https://www.eventbrite.com/e/free-30-min-sculpt-sweat-kota-wellness-x-klyde-warren-park-tickets-1996247008540?dsrp_sid=6be3c630-3707-4ee6-91c1-60e86abdb8c5&dsrp_item_id=1996247284365&aff=ebdssbdestsearch"
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
    description: "Experience dance styles from around the world, including Hip-Hop, Afro, K-Pop, Latin, Salsa, Bachata, Brazilian Zouk, Lambada, Bollywood, Belly Dance, and more.",
    link: "https://www.eventbrite.com/e/move-groove-connect-experience-the-world-through-dance-tickets-2001241163191?dsrp_sid=6be3c630-3707-4ee6-91c1-60e86abdb8c5&dsrp_item_id=2001241209329&aff=ebdssbdestsearch"
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
    link: "https://www.eventbrite.com/e/cash-cardios-crunch-and-brunch-tickets-1380899219739?dsrp_sid=abf9de40-361c-4119-971e-09f61fc69de7&dsrp_item_id=1997333731959&aff=ebdssbdestsearch"
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
    link: "https://www.eventbrite.com/e/community-care-sound-bath-vii-tickets-1998786295616?aff=ebdsoporgprofile&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAVK_DRleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQ8oHuOcWLUQBbKoS7Jjzn-0MgjA8XNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp2slDEYXkQcqEMTnrdBf5NWcSE7-X9FI_v9YnussQT7wXnaZhQCkknveC4Cf_aem_s3_l0YpUIg8Jalrk01RsJg"
  }
];

// Calendar elements — supports common IDs and classes.
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

const footerYear =
  document.querySelector("#year") ||
  document.querySelector("#current-year") ||
  document.querySelector(".current-year");

// Keep the footer year current.
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

// Format dates for the event cards.
function formatEventDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

// Render event cards.
function renderEvents(filter = "all", showAll = false) {
  if (!eventContainer) {
    console.warn(
      "Dallas Fitness Finds: Could not find the event container. Check your HTML event-grid ID or class."
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
      event =>
        event.category === "RUN" ||
        event.type === "run" ||
        event.type === "walk"
    );
  } else if (filter === "free") {
    filteredEvents = filteredEvents.filter(
      event => event.price.toUpperCase().includes("FREE")
    );
  }

  // Sort by date, then by time where possible.
  filteredEvents.sort((a, b) => {
    const dateComparison = a.date.localeCompare(b.date);
    if (dateComparison !== 0) return dateComparison;

    const getMinutes = time => {
      const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
      if (!match) return 9999;

      let hour = Number(match[1]) % 12;
      const minute = Number(match[2]);
      const period = match[3].toUpperCase();

      if (period === "PM") hour += 12;
      return hour * 60 + minute;
    };

    return getMinutes(a.time) - getMinutes(b.time);
  });

  const visibleEvents = showAll
    ? filteredEvents
    : filteredEvents.slice(0, 6);

  if (visibleEvents.length === 0) {
    eventContainer.innerHTML = `
      <div class="no-events">
        <p>No events found in this category just yet.</p>
        <p>Check back soon for more Dallas fitness and wellness finds!</p>
      </div>
    `;
    return;
  }

  eventContainer.innerHTML = visibleEvents
    .map(event => {
      const eventDate = formatEventDate(event.date);

      return `
        <article class="event-card" data-category="${event.category.toLowerCase()}">
          <div class="event-card-content">
            <div class="event-card-top">
              <span class="event-category">${event.category}</span>
              <span class="event-price">${event.price}</span>
            </div>

            <p class="event-date">${event.day}, ${eventDate}</p>

            <h3 class="event-title">${event.title}</h3>

            <p class="event-organizer">${event.organizer}</p>

            <div class="event-details">
              <p class="event-time">
                <span aria-hidden="true">◷</span>
                ${event.time}
              </p>
              <p class="event-location">
                <span aria-hidden="true">⌖</span>
                ${event.location}
              </p>
            </div>

            <p class="event-description">${event.description}</p>

            <a
              class="event-link"
              href="${event.link}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View details for ${event.title}"
            >
              View Event <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  // Update View All button text if present.
  if (viewAllButton) {
    const hasMoreEvents = filteredEvents.length > 6;
    viewAllButton.hidden = !hasMoreEvents;
    viewAllButton.textContent = showAll
      ? "Show Less"
      : "View All Events";
    viewAllButton.setAttribute("aria-expanded", String(showAll));
  }
}

// Set up category filters.
let activeFilter = "all";
let showingAllEvents = false;

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedFilter =
      button.dataset.filter ||
      button.getAttribute("data-filter") ||
      button.textContent.trim().toLowerCase();

    activeFilter = selectedFilter;
    showingAllEvents = false;

    filterButtons.forEach(filterButton => {
      const filterValue =
        filterButton.dataset.filter ||
        filterButton.textContent.trim().toLowerCase();

      const isActive = filterValue === selectedFilter;

      filterButton.classList.toggle("active", isActive);

      if (isActive) {
        filterButton.setAttribute("aria-pressed", "true");
      } else {
        filterButton.setAttribute("aria-pressed", "false");
      }
    });

    renderEvents(activeFilter, showingAllEvents);
  });
});

// Set up View All Events.
if (viewAllButton) {
  viewAllButton.addEventListener("click", () => {
    showingAllEvents = !showingAllEvents;
    renderEvents(activeFilter, showingAllEvents);
  });
}

// Mobile navigation menu.
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

  // Close the menu after a navigation link is selected.
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Clean up URL parameters on your own site only.
// This does not change the event links stored above.
if (
  window.location.search &&
  window.history &&
  window.history.replaceState
) {
  const cleanUrl =
    window.location.origin +
    window.location.pathname +
    window.location.hash;

  window.history.replaceState({}, document.title, cleanUrl);
}

// Initial calendar render.
renderEvents();
