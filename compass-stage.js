/* =====================================================================
   SETTINGS — the control panel.
   David: change a value, save, refresh. That's it.
   ===================================================================== */
const SETTINGS = {
  version: "stage",              // "stage" (keynote) | "street" (shared with the world) — internal names
  shuffleAnswers: true,          // shuffle answer order so option 1 isn't always Autonomy
  autoAdvance: true,             // tap an answer -> next question automatically
  allowBack: false,              // stage: no back buttons, first reaction stands; Street: true
  welcome: {
    showLogo: true,              // David Allison logo at the top of the welcome page
    showIntro: false,            // compass-in-your-pocket setup paragraph (Street; David says it on stage)
    showSiteLink: false,         // quiet davidallisoninc.com link at the bottom of the welcome page (Street)
    centered: true,              // center the welcome page around the logo (both versions)
  },
  questionLogo: true,            // small David Allison logo in the bottom third of each question page
  results: {
    showTagline: true,
    showDial: true,              // the compass dial under the cluster name
    showDescription: true,
    showScenarios: "hidden",     // "open" | "collapsed" | "one" | "hidden" — hidden on Stage; "one" teases on Street
    showCompassHeadings: true,
    showHeadingsHelp: false,     // how-to-use-the-headings line (Street; David explains it on stage)
    showScoreBars: true,         // "Your Score"
    showRoomSplit: false,        // stage: the room split lives ONLY on David's presenter view
    showEmailCapture: true,
    showFollowBlock: false,      // Street: follow-David block right under the email card
    showShare: false,            // "Share this quiz" button (Street)
    exploreMode: "secondary",    // "secondary" | "all" | "none" — both versions show secondary only;
                                 // the other two clusters are part of what the email delivers
  },
  api: {
    url: "https://script.google.com/macros/s/AKfycbz9atc6XfyO-ccomTp4kCiKhbctje9zX9n0l5HziBGRw54jzQMgTw0q2v2SuW5ekmKtgQ/exec",                     // paste the Google Apps Script web-app URL here
    demoMode: false,              // true = fake room numbers until the backend is wired up
    hostKey: "david",            // David's presenter view: open the quiz URL + ?host=david
    source: "",                  // "" for the Stage build; "street" tags responses so they never
                                 // mix into a live keynote room count
  },
};

/* =====================================================================
   CONTENT — everything the audience reads.
   Source: THE VALUES MAP, Chapter 11 (The Cluster Compass).
   ===================================================================== */
const CONTENT = {
  appTitleLines: ["The Values Cluster", "Compass Quiz"],
  // Eyebrow at the top of the welcome screen. HTML allowed here (book title underlined).
  kickerHtml: 'From <u>The Values Map</u> by David Allison, © 2027 John Wiley &amp; Sons, Inc.',
  introStreet: "Five questions that point you at your primary values cluster: the team of values that, more often than not, are true for you. Think of it as a compass in your pocket. Something you can pull out anytime you feel a bit lost, glance at, and see which way to go.",
  instructions: [
    "For the following questions, choose the answer that instantly feels right.",
    "Don't overthink it.",
    "Answer for the version of you that exists today, not the version you'd like to become.",
  ],
  startLabel: "Find your heading",
  resultKicker: "Your Primary Cluster",

  roomButton: "See how everyone scored",
  roomTitle: "How Everyone Scored",
  roomIntro: "Everyone here answered the same five questions. Here's how the room's compasses split.",
  roomRefresh: "Refresh",
  roomDemoNote: "Preview numbers. Live room results appear once the backend is connected.",
  roomErrorNote: "Couldn't reach the room results just now. Tap refresh to try again.",

  headingsHelp: "Stuck on a decision? Read these words. The one that tugs at you is your values talking.",
  // {cluster} is replaced with the person's cluster name at render time
  moreScenariosNote: "That's just one example of how people in the {cluster} cluster react to the world around them. For more examples, deeper context from a million surveys, and the two clusters you haven't met yet, drop your email below and it's all yours.",
  followLine: "I share what we keep learning about what matters most to people. Come along:",
  shareButton: "Share this quiz",
  shareCopied: "Link copied. Paste it anywhere.",
  welcomeSiteLabel: "davidallisoninc.com",
  emailTitle: "Take your cluster with you",
  emailBody: "Give us your email address. We'll send you more about your cluster and how to put it to work in your life.",
  emailPlaceholder: "you@example.com",
  emailButton: "Send me more",
  emailInvalid: "That email doesn't look quite right.",
  emailError: "Something went wrong. Give it another try.",
  emailSuccess: "Done. Keep an eye on your inbox.",

  exploreTitle: "Explore the Other Clusters",
  exploreIntro: "Your compass points here first, but everyone in your life belongs to one of these teams too. Have a look around. You'll recognize people you know.",
  exploreKicker: "Another Team",
  secondaryTitle: "Explore Your Secondary Cluster",
  secondaryIntro: "Nobody fits into one tidy category; humans are far too complex for that. Your primary cluster does most of the driving, but this one grabs the wheel sometimes too. Here's your second most important cluster.",
  secondaryKicker: "Your Secondary Cluster",
  exploreBack: "← Back to my primary cluster",
  exploreBackSticky: "Back to my primary cluster",

  tieHeading: "You're between two teams",
  tieIntro: "Your answers put two clusters in a dead heat. That happens. Read both descriptions and choose the one that resonates most. That one is your primary cluster.",
  tieChoose: "This one is me",

  footer: {
    bookLinePrefix: "From ",
    bookTitle: "The Values Map",
    bookLineSuffix: ", published by Wiley, copyright 2027",
    bookUrl: "https://www.porchlightbooks.com/products/values-map-david-allison-9781394424276",
    siteLabel: "davidallisoninc.com",
    siteUrl: "https://davidallisoninc.com",
    instagram: "https://www.instagram.com/davidallisoninc",
    linkedin: "https://www.linkedin.com/in/davidallisoninc/",
    youtube: "https://www.youtube.com/channel/UC_u-aVjhTEzZjg4t1zw9gsw",
  },

  host: {
    kicker: "Presenter View",
    title: "The Room",
    readingsWord: "compass readings",
    reportButton: "Email me this room's report",
    reportSending: "Sending…",
    reportSent: "Sent. Check your inbox.",
    reportError: "Couldn't send it. Try again.",
    resetButton: "Start a fresh room",
    resetConfirm: "Tap again to confirm",
    resetNote: "This zeroes the room count for a new audience. Collected email addresses are kept.",
    openQuiz: "Open the quiz",
  },

  questions: [
    {
      q: "When making a major decision, what matters most to you?",
      options: {
        A: "That it gives me the freedom to pursue what I want for myself.",
        B: "That it keeps the people I care about close and strengthens my relationships.",
        C: "That it reflects the kind of person I believe I should be.",
        D: "That it provides a secure and stable foundation going forward.",
      },
    },
    {
      q: "What does a genuinely good day feel like?",
      options: {
        A: "I had the space to do things my way and move toward my own goals.",
        B: "I spent real, meaningful time with people who matter to me.",
        C: "I acted in a way that felt true to my principles.",
        D: "Things went to plan, and I felt settled, grounded, and in control.",
      },
    },
    {
      q: "When life feels off-track, what do you most want to restore?",
      options: {
        A: "My sense of direction and freedom to pursue what I'm after.",
        B: "Closeness and a feeling of belonging with others.",
        C: "Clarity about what I stand for and how I want to live.",
        D: "Routine, order, and a sense of security.",
      },
    },
    {
      q: "When you feel most satisfied with your work or effort, what's usually true?",
      options: {
        A: "I had the freedom to approach things in my own way.",
        B: "I worked closely with others and felt part of something shared.",
        C: "I did what I believed was right, even if it wasn't the easiest path.",
        D: "I created something stable, reliable, and well-structured.",
      },
    },
    {
      q: "Imagine you're looking back on your life. What would make you feel it was well-lived?",
      options: {
        A: "That I pursued what genuinely mattered to me and didn't hold back.",
        B: "That I built deep, lasting relationships and made people feel loved.",
        C: "That I lived according to what I believed was right.",
        D: "That I created stability and security that stood the test of time.",
      },
    },
  ],

  clusters: {
    A: {
      name: "The Autonomy Cluster",
      cssColor: "var(--autonomy)",
      hex: "#AE5510",
      shortLabel: "Autonomy",
      tagline: "Living life on your own terms.",
      description: "Autonomy is about living life on your own terms. If this is your cluster, you want to be free to choose your own path and chase after the things that make you feel good. You don't want anyone or anything to get in the way. You will gravitate toward the opportunities, people, and ideas that feed your ambition and help you get to where you want to go. That freedom to choose your own path is what drives you.",
      scenarios: [
        "Your partner wants the two of you to share your GPS phone locations, and that seems like a perfectly reasonable request: they just want to know where you are. But when you imagine turning that functionality on, something deep inside you says no, and you come up with all kinds of reasons why it's just not going to work.",
        "A group of your closest friends is planning a big trip together, and somebody has already sent around a detailed itinerary in the form of a spreadsheet. There are tabs for restaurant reservations, flights, dress code, and a schedule showing which must-see points of interest are pre-booked for each day. You love these people dearly, but you already know you are going to fake a stomach bug somewhere around day three.",
        "You look at your calendar three weeks out, and it's full; it looks like a Jenga puzzle of colored time blocks. But the alarm bells start going off when you notice that none of it is about doing what you want to do. It's all about doing things for other people, because they need you to help them move their workload in the right direction. You realize it's part of your role, but it still feels punitive.",
      ],
      headings: ["Direction", "Self-trust", "Expression", "Growth", "Freedom", "Drive", "Exploration", "Possibility"],
    },
    B: {
      name: "The Connection Cluster",
      cssColor: "var(--connection)",
      hex: "#9C3577",
      shortLabel: "Connection",
      tagline: "People who need people.",
      description: "The Connection cluster is for people who need people. You're always looking to strengthen bonds with others and for shared experiences that make you feel like you belong. A life filled with relationships is not optional for you; it's mandatory. Relationships are what make your life feel good, worth getting out of bed for, worth living. Those connections are what drive you forward and keep you going.",
      scenarios: [
        "It's Friday night, and you're exhausted. You've had a huge week, so you plan to collapse on the couch, binge-watch your favorite Netflix series, and not speak to another human being until Sunday. You've even stocked up on sushi, salty snacks, and chardonnay, so you don't need to leave the apartment for anything. Then a friend texts to ask if they can come over, and while the logical part of you says, “I don't want this,” you say “Yes, of course.” You can't say no.",
        "You are offered a job that allows you to work from home on a permanent basis. It even has better pay, and of course, there's the inherent benefit of not having to commute for 90 minutes a day. You say yes, but you find yourself inventing reasons to go into the office because the office is where your people are; people who you really enjoy being with and who make your job worth doing.",
        "You wake up on a rare Saturday when you have absolutely nothing to do. You think about going for a nice long hike with your dog on your favorite back-country trail, but there's also your niece's tenth birthday party. You realize the birthday party option will leave you covered in cake, and you know it will be noisy and overstimulating. But you already know which one you'll still be thinking about in 20 years. So you wrap up a gift in Pokémon wrapping paper and off you go.",
      ],
      headings: ["Belongingness", "Closeness", "Support", "Loyalty", "Togetherness", "Care", "Shared", "Bonds"],
    },
    C: {
      name: "The Resolute Cluster",
      cssColor: "var(--resolute)",
      hex: "#1E7A6B",
      shortLabel: "Resolute",
      tagline: "All about your principles.",
      description: "If you fall into the Resolute cluster, you are all about your principles. You have strong beliefs about how life should be lived, how things are meant to be, and those ideals show up in everything you do. They shape the decisions you make, the way you react to things, and how you treat other people. In fact, they shape your entire approach to life. You do what you believe is right. That's what drives you.",
      scenarios: [
        "A close friend just asked you to tell a little white lie to their partner about where they were last Thursday. It's not a big fib; it fits into the cross-your-fingers-behind-your-back category. And they have what sounds like a perfectly reasonable explanation for why it's necessary. You love this friend to pieces, but you already know you can't help them like this. And you also know this conversation is going to become a little awkward now.",
        "The barista at your local coffee place gave you too much change this morning. Four dollars too much, in fact. Nobody saw, and you could just walk out of the place right now, and it wouldn't be the end of the world. But your hand is already sliding those bills back across the counter while you kindly point out their mistake before your conscious brain is even aware of what you're doing. It's a reflex.",
        "You're in a meeting, and somebody makes a joke about somebody else who's not in the room. And while it's not technically a mean joke, it's definitely not something they would have said if that person had been in the room. Even though the joke is not about you it may as well have been, because it makes you feel incredibly uncomfortable. And you're biting your tongue to prevent yourself from publicly shaming the joke teller.",
      ],
      headings: ["Principles", "Fairness", "Integrity", "Discipline", "Impact", "Conviction", "Regard", "Contribution"],
    },
    D: {
      name: "The Stability Cluster",
      cssColor: "var(--stability)",
      hex: "#3D5A80",
      shortLabel: "Stability",
      tagline: "Focused on security and predictability.",
      description: "The Stability cluster is home to people who are focused on security and predictability. If this is your cluster, those two factors will guide all of your major life decisions. You are conscientious, generally thoughtful about long-term consequences, and appreciative of routines that help you feel steady and grounded.",
      scenarios: [
        "A friend you've known for a million years has decided to quit their job and open the restaurant that they've been dreaming about for a decade. It's a really great concept, and some terrific people are already involved. Your friend came over for dinner and asked you to invest. You politely listen to the pitch, but before you even look at the numbers, you know you will say no. It's just not something you can bring yourself to do. There's too much risk.",
        "Your partner suggests you repaint the downstairs. The entire downstairs. Which means the furniture will have to come out into the dining room, it will traumatize your labradoodle, and it will be at least a week of living inside a disaster zone. You know they're right; it absolutely needs to be done. But you also know you're going to stall for as long as possible.",
        "You are invited to join a camping trip with a group of people you've just met. The plan is loose; they aren't sure where they're going to go. And they've offered to lend you some of their gear. The plan is to proceed regardless of the weather. Your brain is working overtime to come up with a plausible conflict for that weekend because saying yes to anything with that many unknown issues is already causing minor heart palpitations.",
      ],
      headings: ["Safety", "Consistency", "Accountability", "Steadiness", "Reliability", "Preparedness", "Foundations", "Order"],
    },
  },
};

const LOGO_DATA_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAEsCAYAAACbnn2RAADrhElEQVR42uy9eZxcZZX//znnubc6nYWQpTsJgrigQEAWA+kG0Y4IgoCIQGUDdcb5fXFmvqOzOIsrlcJtnO0743xnviOzOioJKRURFRCXNAokgaigRBFGBJGQ7ixk7e66z3PO7497q9OBBPpWV3dXd87bV0lo0rfufe7znOec85wFMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMCYQlH2MkY2hYYwKzobAMAzDMAzDqI8So9jOaGtzeNnLGE/8FoBuHZaBUyw6tLU5LF5M2FykYf7e5DT2nj8WL2QE0kHj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";

/* =====================================================================
   APP LOGIC — no need to touch anything below this line.
   ===================================================================== */
(function () {
  const app = document.getElementById("app");
  const KEYS = ["A", "B", "C", "D"];
  const ANGLES = { A: 0, B: 90, C: 180, D: 270 };
  let answers = [];
  let optionOrders = [];
  let primaryKey = null;
  let lastAgg = null;
  let roomOpen = false;
  let emailDone = false;
  let submittedFlagMem = {};
  const demoCounts = { A: 34, B: 52, C: 27, D: 9 };

  /* ---------- utilities ---------- */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function store(k, v) { try { localStorage.setItem(k, v); } catch (e) {} submittedFlagMem[k] = v; }
  function getStore(k) { try { const v = localStorage.getItem(k); if (v !== null) return v; } catch (e) {} return submittedFlagMem[k] || null; }
  function scores() {
    const s = { A: 0, B: 0, C: 0, D: 0 };
    answers.forEach((k) => { if (k) s[k]++; });
    return s;
  }
  function topClusters() {
    const s = scores();
    const max = Math.max(...KEYS.map((k) => s[k]));
    return KEYS.filter((k) => s[k] === max);
  }

  /* ---------- backend ---------- */
  const demo = () => SETTINGS.api.demoMode || !SETTINGS.api.url;

  async function apiGet() {
    if (demo()) {
      return { ok: true, session: "demo", total: KEYS.reduce((t, k) => t + demoCounts[k], 0), counts: Object.assign({}, demoCounts), demo: true };
    }
    const r = await fetch(SETTINGS.api.url, { method: "GET" });
    return await r.json();
  }
  async function apiPost(payload) {
    if (demo()) {
      if (payload.action === "submit") demoCounts[payload.cluster]++;
      if (payload.action === "reset") KEYS.forEach((k) => { demoCounts[k] = 0; });
      return { ok: true, session: "demo", total: KEYS.reduce((t, k) => t + demoCounts[k], 0), counts: Object.assign({}, demoCounts), demo: true };
    }
    const r = await fetch(SETTINGS.api.url, { method: "POST", body: JSON.stringify(payload) });
    return await r.json();
  }
  async function submitOnce(cluster) {
    try {
      const info = await apiGet();
      const key = "ccq_done_" + (info.session || "x");
      if (getStore(key)) { lastAgg = info; return; }
      const agg = await apiPost({ action: "submit", cluster: cluster, source: SETTINGS.api.source });
      store(key, "1");
      lastAgg = agg;
    } catch (e) { /* room results are optional; never block the reveal */ }
  }

  /* ---------- shared pieces ---------- */
  function compassRose(size, color) {
    // simple eight-point compass rose with cardinal letters
    const pts = [];
    for (let i = 0; i < 8; i++) {
      const big = i % 2 === 0;
      const a = (i * 45 - 90) * Math.PI / 180;
      const r1 = big ? 44 : 27, w = big ? 7 : 5;
      const ax = 50 + r1 * Math.cos(a), ay = 50 + r1 * Math.sin(a);
      const b = a + Math.PI / 2, cxa = 50 + w * Math.cos(b), cya = 50 + w * Math.sin(b);
      const cxb = 50 - w * Math.cos(b), cyb = 50 - w * Math.sin(b);
      pts.push('<path d="M' + ax + ' ' + ay + ' L' + cxa + ' ' + cya + ' L' + cxb + ' ' + cyb + ' Z" fill="' + color + '" opacity="' + (big ? '1' : '.45') + '"/>');
    }
    const letters = [["N", 50, 9], ["E", 92, 53], ["S", 50, 97], ["W", 8, 53]]
      .map((l) => '<text x="' + l[1] + '" y="' + l[2] + '" text-anchor="middle" font-family="Georgia, serif" font-size="9" font-weight="700" fill="' + color + '">' + l[0] + '</text>').join("");
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 100 100">' +
      '<circle cx="50" cy="50" r="49" fill="none" stroke="' + color + '" stroke-width="1" opacity=".5"/>' +
      '<circle cx="50" cy="50" r="36" fill="none" stroke="' + color + '" stroke-width=".7" stroke-dasharray="1.5 4" opacity=".6"/>' +
      pts + '<circle cx="50" cy="50" r="4" fill="' + color + '"/>' + letters + '</svg>';
  }
  function mountMotif() {
    if (!document.getElementById("motif")) {
      const d = document.createElement("div");
      d.id = "motif";
      d.innerHTML = compassRose(230, "#172A4D");
      document.body.appendChild(d);
    }
  }

  function dialSVG(key) {
    const c = CONTENT.clusters[key];
    const dots = KEYS.map((k) => {
      const a = (ANGLES[k] - 90) * Math.PI / 180;
      const x = 60 + 46 * Math.cos(a), y = 60 + 46 * Math.sin(a);
      return '<circle cx="' + x + '" cy="' + y + '" r="5" fill="' + CONTENT.clusters[k].hex + '" opacity="' + (k === key ? 1 : 0.35) + '"/>';
    }).join("");
    return '<div class="dial-wrap"><svg width="120" height="120" viewBox="0 0 120 120">' +
      '<circle cx="60" cy="60" r="56" fill="var(--card)" stroke="' + c.hex + '" stroke-opacity=".45" stroke-width="2"/>' +
      '<circle cx="60" cy="60" r="46" fill="none" stroke="var(--line)" stroke-width="1" stroke-dasharray="2 6"/>' +
      dots +
      '<g class="needle" id="needle" style="transform: rotate(0deg)">' +
      '<path d="M60 22 L66 60 L60 68 L54 60 Z" fill="' + c.hex + '"/>' +
      '<circle cx="60" cy="60" r="6" fill="var(--ink)"/>' +
      '</g></svg></div>';
  }
  function spinNeedle(key) {
    const n = document.getElementById("needle");
    if (n) requestAnimationFrame(() => requestAnimationFrame(() => {
      n.style.transform = "rotate(" + (360 + ANGLES[key]) + "deg)";
    }));
  }

  function clusterBlock(key, kickerText) {
    const c = CONTENT.clusters[key];
    const R = SETTINGS.results;
    let html = '<div class="result-kicker" style="color:' + c.hex + '">' + esc(kickerText) + '</div>' +
      '<h2 class="cluster-name">' + esc(c.name) + '</h2>' +
      (R.showTagline ? '<p class="tagline">' + esc(c.tagline) + '</p>' : "") +
      '<div style="width:46px;height:5px;border-radius:3px;background:' + c.hex + ';margin:2px 0 16px"></div>';
    if (R.showDial && kickerText === CONTENT.resultKicker) html += dialSVG(key);
    if (R.showDescription) html += '<p class="desc">' + esc(c.description) + '</p>';
    if (R.showCompassHeadings) {
      html += '<div class="section-label" style="color:' + c.hex + '">Your Compass Headings</div><div class="chips">' +
        c.headings.map((h) => '<span class="chip" style="border-color:' + c.hex + ';background:' + c.hex + '14;color:' + c.hex + '">' + esc(h) + '</span>').join("") + '</div>';
      if (R.showHeadingsHelp && kickerText === CONTENT.resultKicker) {
        html += '<p class="desc" style="font-size:.93rem;color:var(--ink-soft);margin-top:12px">' + esc(CONTENT.headingsHelp) + '</p>';
      }
    }
    if (R.showScenarios === "one") {
      if (kickerText === CONTENT.resultKicker) {
        html += '<div class="section-label" style="color:' + c.hex + '">What It Looks Like</div>' +
          '<p class="scenario" style="padding:0 0 8px 14px;border-left:4px solid ' + c.hex + '">' + esc(c.scenarios[0]) + '</p>' +
          '<p class="room-note">' + esc(CONTENT.moreScenariosNote.replace("{cluster}", c.shortLabel)) + '</p>';
      }
    } else if (R.showScenarios !== "hidden") {
      html += '<details class="scenarios"' + (R.showScenarios === "open" ? " open" : "") + '><summary>What it looks like</summary>' +
        c.scenarios.map((s) => '<p class="scenario">' + esc(s) + '</p>').join("") + '</details>';
    }
    return html;
  }

  function roomBars(agg, youKey) {
    const total = Math.max(agg.total, 1);
    return '<div class="bars">' + KEYS.map((k) => {
      const c = CONTENT.clusters[k];
      const pct = Math.round((agg.counts[k] / total) * 100);
      return '<div class="bar-row">' +
        '<span class="lbl">' + esc(c.shortLabel) + (youKey === k ? '<span class="you">You</span>' : "") + '</span>' +
        '<div class="bar-track"><div class="bar-fill" data-w="' + pct + '" style="background:' + c.hex + '"></div></div>' +
        '<span class="num">' + pct + '%</span></div>';
    }).join("") + '</div>';
  }

  function growBars(scope) {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      (scope || document).querySelectorAll(".bar-fill").forEach((el) => { el.style.width = el.dataset.w + "%"; });
    }));
  }

  function socialsRow() {
    const f = CONTENT.footer;
    const icons = {
      instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5.2"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.2" cy="6.8" r="1.25" fill="#fff" stroke="none"/></svg>',
      linkedin: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z"/></svg>',
      youtube: '<svg viewBox="0 0 24 24" fill="#fff"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/></svg>',
    };
    return '<div class="socials">' +
      '<a href="' + f.instagram + '" target="_blank" rel="noopener" aria-label="Instagram">' + icons.instagram + '</a>' +
      '<a href="' + f.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn">' + icons.linkedin + '</a>' +
      '<a href="' + f.youtube + '" target="_blank" rel="noopener" aria-label="YouTube">' + icons.youtube + '</a>' +
      '</div>';
  }

  function footer() {
    const f = CONTENT.footer;
    // when the follow block sits up near the email card, the footer skips the icon row
    const showIcons = !SETTINGS.results.showFollowBlock;
    return '<div class="footer">' +
      '<img class="logo" src="' + LOGO_DATA_URL + '" alt="David Allison. What Matters Most.">' +
      '<div class="bookline">' + esc(f.bookLinePrefix) + '<a href="' + f.bookUrl + '" target="_blank" rel="noopener"><em>' + esc(f.bookTitle) + '</em></a>' + esc(f.bookLineSuffix) + '</div>' +
      '<div class="siteline"><a href="' + f.siteUrl + '" target="_blank" rel="noopener">' + esc(f.siteLabel) + '</a></div>' +
      (showIcons ? socialsRow() : "") +
      '</div>';
  }

  /* ---------- screens ---------- */
  function renderWelcome() {
    answers = [];
    primaryKey = null;
    roomOpen = false;
    emailDone = false;
    optionOrders = CONTENT.questions.map(() => (SETTINGS.shuffleAnswers ? shuffle(KEYS) : KEYS.slice()));
    const W = SETTINGS.welcome;
    app.innerHTML = '<div class="screen' + (W.centered ? " welcome-center" : "") + '">' +
      (W.showLogo ? '<img class="wlogo" src="' + LOGO_DATA_URL + '" alt="David Allison. What Matters Most.">' : "") +
      '<div class="kicker">' + CONTENT.kickerHtml + '</div>' +
      '<h1 class="title">' + CONTENT.appTitleLines.map(esc).join("<br>") + '</h1>' +
      '<div class="hero-compass">' + compassRose(W.centered ? 76 : 92, "#172A4D") + '</div>' +
      (W.showIntro ? '<p class="lede soft">' + esc(CONTENT.introStreet) + '</p><hr class="rule" style="width:56px;margin-left:auto;margin-right:auto">' : "") +
      CONTENT.instructions.map((t) => '<p class="instr">' + esc(t) + '</p>').join("") +
      '<div class="push"><button class="btn" id="start">' + esc(CONTENT.startLabel) + '</button>' +
      (W.showSiteLink ? '<div style="text-align:center;margin-top:16px"><a href="' + CONTENT.footer.siteUrl + '" target="_blank" rel="noopener" style="color:var(--ink-soft);font-size:.8rem;text-decoration:underline">' + esc(CONTENT.welcomeSiteLabel) + '</a></div>' : "") +
      '</div></div>';
    document.getElementById("start").onclick = () => renderQuestion(0);
  }

  function renderQuestion(i) {
    const q = CONTENT.questions[i];
    const order = optionOrders[i];
    const pct = (i / CONTENT.questions.length) * 100;
    app.innerHTML = '<div class="screen">' +
      '<div class="topbar">' +
      (SETTINGS.allowBack ? '<button class="backlink" id="back">' + (i === 0 ? "← Start over" : "← Back") + '</button>' : '<span></span>') +
      '<span class="count">' + (i + 1) + ' of ' + CONTENT.questions.length + '</span></div>' +
      '<div class="progress"><div style="width:' + pct + '%"></div></div>' +
      '<h2 class="question">' + esc(q.q) + '</h2>' +
      '<div id="opts">' +
      order.map((k) => '<button class="opt' + (answers[i] === k ? " picked" : "") + '" data-key="' + k + '">' + esc(q.options[k]) + '</button>').join("") +
      '</div>' +
      (SETTINGS.questionLogo ? '<img class="qlogo" src="' + LOGO_DATA_URL + '" alt="David Allison. What Matters Most.">' : "") +
      '</div>';

    if (SETTINGS.allowBack) document.getElementById("back").onclick = () => (i === 0 ? renderWelcome() : renderQuestion(i - 1));
    document.querySelectorAll(".opt").forEach((btn) => {
      btn.onclick = () => {
        answers[i] = btn.dataset.key;
        document.querySelectorAll(".opt").forEach((b) => b.classList.remove("picked"));
        btn.classList.add("picked");
        const next = () => (i + 1 < CONTENT.questions.length ? renderQuestion(i + 1) : renderResults());
        SETTINGS.autoAdvance ? setTimeout(next, 320) : next();
      };
    });
  }

  function renderResults(chosenKey) {
    const s = scores();
    const top = topClusters();
    const isTie = top.length > 1 && !chosenKey && !primaryKey;

    if (isTie) {
      app.innerHTML = '<div class="screen">' +
        '<div class="result-kicker" style="color:var(--ink-soft)">' + esc(CONTENT.resultKicker) + '</div>' +
        '<h2 class="cluster-name">' + esc(CONTENT.tieHeading) + '</h2>' +
        '<p class="desc">' + esc(CONTENT.tieIntro) + '</p>' +
        top.map((k) => {
          const c = CONTENT.clusters[k];
          return '<div class="tie-card" style="border-color:' + c.hex + '">' +
            '<h3 style="color:' + c.hex + '">' + esc(c.name) + '</h3>' +
            '<p>' + esc(c.description) + '</p>' +
            '<button class="btn" data-choose="' + k + '" style="background:' + c.hex + '">' + esc(CONTENT.tieChoose) + '</button></div>';
        }).join("") +
        '</div>';
      document.querySelectorAll("[data-choose]").forEach((b) => {
        b.onclick = () => renderResults(b.dataset.choose);
      });
      window.scrollTo(0, 0);
      return;
    }

    primaryKey = primaryKey || chosenKey || top[0];
    const R = SETTINGS.results;
    submitOnce(primaryKey).then(() => { if (roomOpen) refreshRoom(false); });

    let html = '<div class="screen">' + clusterBlock(primaryKey, CONTENT.resultKicker);

    if (R.showScoreBars) {
      html += '<div class="section-label">Your Score</div><div class="bars">' +
        KEYS.map((k) => {
          const c = CONTENT.clusters[k];
          return '<div class="bar-row">' +
            '<span class="lbl"' + (k === primaryKey ? ' style="color:' + c.hex + '"' : "") + '>' + esc(c.shortLabel) + '</span>' +
            '<div class="bar-track"><div class="bar-fill" data-w="' + (s[k] / CONTENT.questions.length) * 100 + '" style="background:' + c.hex + '"></div></div>' +
            '<span class="num">' + s[k] + '</span></div>';
        }).join("") + '</div>';
    }

    if (R.showRoomSplit) html += '<div id="roomwrap"></div>';
    html += ctasHtml();

    if (R.exploreMode && R.exploreMode !== "none") {
      const others = KEYS.filter((k) => k !== primaryKey).sort((a, b) => s[b] - s[a]);
      const shown = R.exploreMode === "secondary" ? others.slice(0, 1) : others;
      const title = R.exploreMode === "secondary" ? CONTENT.secondaryTitle : CONTENT.exploreTitle;
      const intro = R.exploreMode === "secondary" ? CONTENT.secondaryIntro : CONTENT.exploreIntro;
      html += '<div class="section-label">' + esc(title) + '</div>' +
        '<p class="desc" style="font-size:.93rem;color:var(--ink-soft);margin-bottom:14px">' + esc(intro) + '</p>' +
        shown.map((k) => {
          const c = CONTENT.clusters[k];
          return '<button class="explore-row" data-explore="' + k + '" style="border-left-color:' + c.hex + '">' +
            '<span><span class="en" style="color:' + c.hex + '">' + esc(c.name) + '</span><br><span class="et">' + esc(c.tagline) + '</span></span>' +
            '<span class="arrow">→</span></button>';
        }).join("");
    }

    html += footer() + '</div>';
    app.innerHTML = html;

    growBars();
    spinNeedle(primaryKey);
    if (R.showRoomSplit) mountRoom();
    bindCtas();
    document.querySelectorAll("[data-explore]").forEach((b) => {
      b.onclick = () => renderExplore(b.dataset.explore);
    });
    window.scrollTo(0, 0);
  }

  /* ---------- calls to action (shared by results + explore screens) ---------- */
  function ctasHtml() {
    const R = SETTINGS.results;
    let html = "";
    if (R.showEmailCapture) html += '<div id="emailwrap"></div>';
    if (R.showFollowBlock) {
      html += '<div class="follow-card"><p>' + esc(CONTENT.followLine) + '</p>' + socialsRow() + '</div>';
    }
    if (R.showShare) {
      html += '<div style="margin-top:24px"><button class="btn ghost" id="shareBtn">' + esc(CONTENT.shareButton) + '</button>' +
        '<p class="email-msg ok" id="shareMsg" style="text-align:center"></p></div>';
    }
    return html;
  }
  function bindCtas() {
    const R = SETTINGS.results;
    if (R.showEmailCapture) mountEmail();
    if (R.showShare) {
      const sb = document.getElementById("shareBtn");
      if (sb) sb.onclick = async () => {
        const url = location.origin + location.pathname;
        const msg = document.getElementById("shareMsg");
        if (navigator.share) {
          try { await navigator.share({ title: "The Values Cluster Compass Quiz", url: url }); } catch (e) {}
        } else {
          try { await navigator.clipboard.writeText(url); msg.textContent = CONTENT.shareCopied; } catch (e) {}
        }
      };
    }
  }

  /* ---------- room split ---------- */
  function mountRoom() {
    const wrap = document.getElementById("roomwrap");
    if (!wrap) return;
    if (!roomOpen) {
      wrap.innerHTML = '<div style="margin-top:28px"><button class="btn" id="roomBtn">' + esc(CONTENT.roomButton) + '</button></div>';
      document.getElementById("roomBtn").onclick = () => { roomOpen = true; mountRoom(); refreshRoom(true); };
      return;
    }
    wrap.innerHTML = '<div class="section-label">' + esc(CONTENT.roomTitle) + '</div>' +
      '<p class="desc" style="font-size:.93rem;color:var(--ink-soft);margin-bottom:14px">' + esc(CONTENT.roomIntro) + '</p>' +
      '<div id="roombars"><p class="room-note">…</p></div>' +
      '<div class="room-total" id="roomtotal"></div>' +
      '<button class="linkbtn" id="roomRefresh">' + esc(CONTENT.roomRefresh) + '</button>' +
      '<div class="room-note" id="roomnote"></div>';
    document.getElementById("roomRefresh").onclick = () => refreshRoom(true);
    if (lastAgg) paintRoom(lastAgg);
  }
  function paintRoom(agg) {
    const bars = document.getElementById("roombars");
    if (!bars) return;
    bars.innerHTML = roomBars(agg, primaryKey);
    growBars(bars);
    const t = document.getElementById("roomtotal");
    if (t) t.textContent = agg.total + " compass readings in this room so far";
    const n = document.getElementById("roomnote");
    if (n) n.textContent = agg.demo ? CONTENT.roomDemoNote : "";
  }
  async function refreshRoom(showErr) {
    try {
      lastAgg = await apiGet();
      paintRoom(lastAgg);
    } catch (e) {
      const n = document.getElementById("roomnote");
      if (n && showErr) n.textContent = CONTENT.roomErrorNote;
    }
  }

  /* ---------- email capture ---------- */
  function mountEmail() {
    const wrap = document.getElementById("emailwrap");
    if (!wrap) return;
    if (emailDone) {
      wrap.innerHTML = '<div class="card-box"><h3>' + esc(CONTENT.emailTitle) + '</h3><p class="email-msg ok">' + esc(CONTENT.emailSuccess) + '</p></div>';
      return;
    }
    wrap.innerHTML = '<div class="card-box">' +
      '<h3>' + esc(CONTENT.emailTitle) + '</h3>' +
      '<p>' + esc(CONTENT.emailBody) + '</p>' +
      '<div class="email-row">' +
      '<input type="email" id="emailInput" inputmode="email" autocomplete="email" placeholder="' + esc(CONTENT.emailPlaceholder) + '">' +
      '<button class="btn" id="emailBtn" style="padding:14px 18px;font-size:.98rem">' + esc(CONTENT.emailButton) + '</button>' +
      '</div><div class="email-msg" id="emailMsg"></div></div>';
    document.getElementById("emailBtn").onclick = async () => {
      const input = document.getElementById("emailInput");
      const msg = document.getElementById("emailMsg");
      const email = (input.value || "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        msg.className = "email-msg err"; msg.textContent = CONTENT.emailInvalid; return;
      }
      msg.className = "email-msg"; msg.textContent = "…";
      try {
        await apiPost({ action: "email", email: email, source: SETTINGS.api.source });
        emailDone = true;
        mountEmail();
      } catch (e) {
        msg.className = "email-msg err"; msg.textContent = CONTENT.emailError;
      }
    };
  }

  /* ---------- explore another cluster ---------- */
  function renderExplore(key) {
    const kicker = SETTINGS.results.exploreMode === "secondary" ? CONTENT.secondaryKicker : CONTENT.exploreKicker;
    app.innerHTML = '<div class="screen" style="padding-bottom:90px">' +
      '<div class="topbar"><button class="backlink" id="backTop">' + esc(CONTENT.exploreBack) + '</button></div>' +
      clusterBlock(key, kicker) +
      ctasHtml() +
      footer() +
      '</div>' +
      '<button class="btn stickyback" id="backBottom" style="background:' + CONTENT.clusters[primaryKey].hex + '">' + esc(CONTENT.exploreBackSticky) + '</button>';
    const back = () => renderResults();
    document.getElementById("backTop").onclick = back;
    document.getElementById("backBottom").onclick = back;
    bindCtas();
    window.scrollTo(0, 0);
  }

  /* ---------- presenter view ---------- */
  function renderHost() {
    const H = CONTENT.host;
    app.innerHTML = '<div class="screen">' +
      '<div class="kicker">' + esc(H.kicker) + '</div>' +
      '<h1 class="title">' + esc(H.title) + '</h1>' +
      '<div class="host-big" id="hostTotal">…</div>' +
      '<div class="host-sub" id="hostSub">' + esc(H.readingsWord) + '</div>' +
      '<div id="hostbars"></div>' +
      '<div class="host-session" id="hostSession"></div>' +
      '<div class="room-note" id="hostNote"></div>' +
      '<div class="push">' +
      '<button class="btn" id="hostReport">' + esc(H.reportButton) + '</button>' +
      '<p class="email-msg" id="hostReportMsg" style="text-align:center"></p>' +
      '<button class="btn danger" id="hostReset" style="margin-top:14px">' + esc(H.resetButton) + '</button>' +
      '<p class="room-note" style="text-align:center;margin-top:10px">' + esc(H.resetNote) + '</p>' +
      '<button class="btn ghost" id="hostOpen" style="margin-top:14px">' + esc(H.openQuiz) + '</button>' +
      '</div></div>';

    const reportBtn = document.getElementById("hostReport");
    const reportMsg = document.getElementById("hostReportMsg");
    reportBtn.onclick = async () => {
      reportMsg.className = "email-msg"; reportMsg.textContent = H.reportSending;
      try {
        const r = await apiPost({ action: "report", secret: SETTINGS.api.hostKey });
        reportMsg.className = "email-msg " + (r.ok ? "ok" : "err");
        reportMsg.textContent = r.ok ? H.reportSent : H.reportError;
      } catch (e) {
        reportMsg.className = "email-msg err"; reportMsg.textContent = H.reportError;
      }
    };

    let armed = false;
    const resetBtn = document.getElementById("hostReset");
    resetBtn.onclick = async () => {
      if (!armed) { armed = true; resetBtn.textContent = H.resetConfirm; setTimeout(() => { armed = false; resetBtn.textContent = H.resetButton; }, 3500); return; }
      armed = false; resetBtn.textContent = H.resetButton;
      try { lastAgg = await apiPost({ action: "reset", secret: SETTINGS.api.hostKey }); paintHost(lastAgg); } catch (e) {}
    };
    document.getElementById("hostOpen").onclick = () => { location.href = location.pathname; };

    const poll = async () => {
      try { lastAgg = await apiGet(); paintHost(lastAgg); } catch (e) {}
    };
    poll();
    setInterval(poll, 3000);
  }
  function paintHost(agg) {
    const t = document.getElementById("hostTotal");
    if (t) t.textContent = agg.total;
    const bars = document.getElementById("hostbars");
    if (bars) { bars.innerHTML = roomBars(agg, null); growBars(bars); }
    const sess = document.getElementById("hostSession");
    if (sess) sess.textContent = "Room ID: " + agg.session;
    const n = document.getElementById("hostNote");
    if (n) n.textContent = agg.demo ? CONTENT.roomDemoNote : "";
  }

  /* ---------- boot ---------- */
  mountMotif();
  const params = new URLSearchParams(location.search);
  if ((params.get("host") || "").toLowerCase() === SETTINGS.api.hostKey.toLowerCase()) {
    renderHost();
  } else {
    renderWelcome();
  }
})();
