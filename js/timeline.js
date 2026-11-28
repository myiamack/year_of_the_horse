/* ============================================================
   timeline.js  -  HOW MY WALL WORKS
   ------------------------------------------------------------
   years-data.js is the WHAT (my words and pictures).
   This file is the HOW. It:
     1. builds a "station" on the wall for every year,
     2. moves the red arrow and runs the 30-second guided tour,
     3. pops photos up, opens the full reflections,
     4. plays each year's song in the Spotify player.

   New words you'll see:
     const     a box with a name that holds something and never changes
     let       a box with a name whose value CAN change later
     function  a set of steps with a name. Saying its name runs the steps.
     =>        a short way to write a function
     ${ }      inside `backtick text`, drops a value into the text
   ============================================================ */


/* ---------- 1. SETUP ---------- */

// The wall runs BACK in time (2054 first, 2025 last), so we flip the list.
YEARS.reverse();
// $("name") is a shortcut. It finds the piece of the page with id="name".
const $ = id => document.getElementById(id);
// "track" is the long strip that holds every year. "wall" is the window you scroll through.
const track = $("track"),
  wall = $("wall");
// esc() makes text safe to put inside HTML, so a "<" in a caption can't break the page.
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");


/* ---------- 2. BUILD THE WALL ---------- */

// frameHTML() builds ONE picture frame.
//   p  = the photo (its img, cap, alt and size word)
//   yi = which year it belongs to,  pi = which photo it is in that year
// It adds the size word (small, wide, full, half) as a class, and the
// CSS file uses that class to decide how big the frame is.
function frameHTML(p, yi, pi) {
  const inner = `<img src="${p.img}" alt="${esc(p.alt||p.cap)}" loading="lazy">`;
  return `<div><button class="frame${p.small?" small":""}${p.wide?" wide":""}${p.full?" full":""}${p.half?" half":""}" data-y="${yi}" data-p="${pi}" aria-label="Open photo: ${esc(p.cap)}"><div class="ph">${inner}</div></button>${p.small?`<div class="frame-cap">${esc(p.cap)}</div>`:""}</div>`;
}
// "bridges" holds the in-between stops, like the 2026 -> 2027 commencement diamond.
const bridges = [];
// For EVERY year in the list, build a station and put it on the wall.
// .map() means "do this for each one and keep what you made".
// The finished stations are saved in "stations" so we can find them later.
const stations = YEARS.map((yr, i) => {
  // Stations take turns: words ABOVE the line, then words BELOW the line.
  // i % 2 === 0 means "i is an even number" (0, 2, 4...).
  const up = i % 2 === 0;
  // "placard" is the museum label: era, year, title, fortune,
  // the first paragraph of the reflection, the song and the dish.
  const placard = `<div class="era"><span>${yr.era}</span><span class="tag ${yr.status}">${yr.status==="real"?"Your words · draft":"Sample year"}</span></div>
    <p class="yr">${yr.y}</p><h2 class="ttl">${yr.title}</h2>
    <p class="fortune">${yr.fortune}</p>
    <div class="refl"><p>${yr.reflection[0]}</p></div>${yr.reflection.length>1?`<button class="more" data-r="${i}">Read the full reflection</button>`:""}
    <div class="song">♪ <b>${yr.song}</b>${yr.songNote?" · "+yr.songNote:""}</div>${yr.dish?`<div class="song">Favorite dish · <b>${yr.dish}</b></div>`:""}`;
  // "frames" is the group of pictures (bridge photos are skipped here,
  // because they get their own spot between two years).
  const frames = `<div class="frames">${yr.photos.map((p,pi)=>p.bridge?"":frameHTML(p,i,pi)).join("")}</div><div class="hint">Tap photo to enlarge</div>`;
  // Make the station box and fill it: top half, the dot on the line, bottom half.
  const el = document.createElement("article");
  el.className = "station " + (up ? "up" : "down");
  el.setAttribute("aria-label", yr.y + ", " + yr.title);
  el.innerHTML = `<div class="cell top">${up?placard:frames}</div>
    <div class="marker"><span class="stem"></span><button class="dot" aria-label="Go to ${yr.y}"></button></div>
    <div class="cell bottom">${up?frames:placard}</div>`;
  // Clicking a year's dot stops the tour and jumps to that year.
  el.querySelector(".dot").addEventListener("click", () => {
    stopTour();
    go(i)
  });
  // If this year has a bridge photo, build the diamond stop that sits
  // between this year and the next one.
  const bp = yr.photos.findIndex(p => p.bridge);
  if (bp >= 0) {
    const br = document.createElement("div");
    br.className = "bridge";
    br.dataset.y = i;
    br.innerHTML = `<div class="b-top"><div class="b-label">${yr.y+1} ← ${yr.y}</div>${frameHTML(yr.photos[bp],i,bp)}<div class="b-cap"><b>${esc(yr.photos[bp].cap)}</b><span>${esc(yr.photos[bp].sub||"")}</span></div></div><div class="b-mark"><button class="b-dot" data-y="${i}" data-p="${bp}" aria-label="Open ${esc(yr.photos[bp].cap)}, ${yr.y} to ${yr.y+1}"></button></div><div></div>`;
    // Clicking the diamond lights it up, blurs the other years and opens its photo.
    br.querySelector(".b-dot").addEventListener("click", e => {
      e.stopPropagation();
      if (touring) stopTour();
      resumeAfter = false;
      opener = e.currentTarget;
      bridges.forEach(b => b.classList.toggle("lit", b === br));
      stations.forEach(s => s.classList.remove("active"));
      wall.classList.add("focus");
      wall.scrollTo({
        left: Math.max(0, br.offsetLeft - (wall.clientWidth - br.offsetWidth) / 2)
      });
      showPhoto(+e.currentTarget.dataset.y, +e.currentTarget.dataset.p, false);
      $("popClose").focus();
    });
    track.appendChild(br);
    bridges.push(br);
  }
  track.appendChild(el);
  return el;
});

// The last box on the wall, after 2025: my closing line.
const fin = document.createElement("div");
fin.className = "final";
fin.innerHTML = `<div class="final-box"><p>Every whole story begins with one brave chapter. <em>Mine started here.</em></p></div>`;
track.appendChild(fin);


/* ---------- 3. MOVE TO A YEAR ---------- */

// "cur" remembers which year is selected right now. -1 means "none yet".
let cur = -1;
// center() finds the middle of something on the wall, from the left edge.
const center = el => el.offsetLeft + el.offsetWidth / 2;


// setRail() draws the red part of the timeline line.
//   p goes from 0 to 1: 0 = sitting on this year, 1 = arrived at the next one.
// That's how the arrow slides like a song's progress bar.
function setRail(p) {
  if (cur < 0) return;
  const a = center(stations[cur]),
    b = cur < stations.length - 1 ? center(stations[cur + 1]) : center(fin);
  const x = a + (b - a) * p;
  $("railDone").style.width = x + "px";
  $("railTip").style.transform = "translateX(" + (x + 14) + "px)";
}


// go(i) jumps to year number i. It:
//   - lights that year up and blurs the others,
//   - lights the bridge diamond if it touches this year,
//   - scrolls the wall so the year is in the middle,
//   - shows the song name and loads that year's song in Spotify.
// "instant" means jump right there with no smooth scrolling.
function go(i, instant) {
  cur = i;
  wall.classList.add("focus");
  stations.forEach((s, k) => s.classList.toggle("active", k === i));
  bridges.forEach(b => {
    const y = YEARS[+b.dataset.y].y;
    b.classList.toggle("lit", YEARS[i].y === y || YEARS[i].y === y + 1);
  });
  const s = stations[i];
  setRail(0);
  const left = s.offsetLeft - (wall.clientWidth - s.offsetWidth) / 2;
  wall.scrollTo({
    left: Math.max(0, left),
    behavior: instant ? "auto" : undefined
  });
  $("nowSong").textContent = YEARS[i].y + " · " + YEARS[i].song;
  // Load this year's Spotify song, but only if it's a different song,
  // so the player doesn't restart every time.
  {
    const sp = YEARS[i].spotify,
      f = $("spotify");
    if (sp) {
      if (f.dataset.id !== sp) {
        f.src = "https://open.spotify.com/embed/track/" + sp + "?utm_source=generator";
        f.dataset.id = sp;
      }
      f.hidden = false;
    } else f.hidden = true;
  }
}


/* ---------- 4. THE GUIDED TOUR ---------- */

// STEP = how long each year lasts on the tour, in milliseconds.
// 1000 milliseconds = 1 second, so 30000 = 30 seconds.
const STEP = 30000;
// The tour's memory:
//   touring = is the tour playing right now?
//   elapsed = how long we've been on this year
//   last    = the clock time of the last check
//   raf     = a ticket we can use to cancel the next check
//   started = has the tour ever been started?
let touring = false,
  elapsed = 0,
  last = 0,
  raf, started = false;


// fmt() turns the time left into a clock like "0:27".
function fmt(ms) {
  const s = Math.ceil((STEP - ms) / 1000);
  return "0:" + String(Math.max(0, s)).padStart(2, "0")
}


// frame() runs about 60 times a second while the tour plays.
// Each time, it adds up the time, moves to the next year after 30 seconds,
// pops up photos, and moves the arrow, the progress bar and the clock.
function frame(now) {
  if (!touring) return;
  elapsed += now - last;
  last = now;
  if (elapsed >= STEP) {
    if (cur < YEARS.length - 1) {
      go(cur + 1);
      elapsed = 0;
    } else {
      stopTour();
      wall.scrollTo({
        left: wall.scrollWidth
      });
      return;
    }
  }
  autoPhotos();
  setRail(Math.min(1, elapsed / STEP));
  $("barFill").style.width = (elapsed / STEP * 100) + "%";
  $("time").textContent = fmt(elapsed);
  raf = requestAnimationFrame(frame);
}


// ui() updates the Play button (Start / Pause / Resume) and the dancing
// bars in the audio guide, so they match whether the tour is playing.
function ui() {
  $("playLabel").textContent = touring ? "Pause tour" : (started ? "Resume tour" : "Start the tour");
  $("playIcon").innerHTML = touring ? '<path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" fill="currentColor"/>' : '<path d="M4 2.5v11l9-5.5z" fill="currentColor"/>';
  $("guide").classList.toggle("on", touring);
  wall.classList.toggle("touring", touring);
}


// startTour() starts or resumes the tour. The first time, it starts at 2054.
function startTour() {
  if (!started) {
    go(0);
    elapsed = 0;
    started = true;
  }
  touring = true;
  last = performance.now();
  ui();
  raf = requestAnimationFrame(frame);
}


// stopTour() pauses the tour and closes any photo that popped up by itself.
function stopTour() {
  touring = false;
  cancelAnimationFrame(raf);
  ui();
  if (!$("pop").hidden && $("pop").classList.contains("auto")) hidePop();
}


// resetClock() puts the 30-second clock back to the start.
function resetClock() {
  elapsed = 0;
  setRail(0);
  $("barFill").style.width = "0";
  $("time").textContent = fmt(0);
}

/* ---------- 5. THE BUTTONS ---------- */

// Play button: if the tour is playing, pause it. If not, play it.
$("play").addEventListener("click", () => touring ? stopTour() : startTour());
// "Start over" button: go back to the first year and play from the beginning.
$("restart").addEventListener("click", () => {
  stopTour();
  hidePop();
  skipYear = -1;
  resetClock();
  started = true;
  go(0);
  startTour();
});

// Full screen button. Some phones (like iPhones) don't allow full screen
// for web pages, so the button only shows up where it works.
// When you switch, the wall re-centers on the year you were on.
(() => {
  const d = document,
    el = d.documentElement;
  const req = el.requestFullscreen || el.webkitRequestFullscreen,
    can = !!req && (d.fullscreenEnabled !== false || d.webkitFullscreenEnabled);
  if (!can) return;
  const btn = $("fs");
  btn.hidden = false;
  const isFs = () => !!(d.fullscreenElement || d.webkitFullscreenElement);
  const sync = () => {
    const on = isFs();
    $("fsLabel").textContent = on ? "Exit full screen" : "Full screen";
    $("fsIcon").setAttribute("d", on ? "M6 2v4H2M14 6h-4V2M10 14v-4h4M2 10h4v4" : "M2 6V2h4M10 2h4v4M14 10v4h-4M6 14H2v-4");
    setTimeout(() => {
      if (cur >= 0) go(cur, true);
    }, 300);
  };
  btn.addEventListener("click", () => {
    try {
      if (isFs())(d.exitFullscreen || d.webkitExitFullscreen).call(d);
      else {
        const p = req.call(el);
        if (p && p.catch) p.catch(() => {});
      }
    } catch (e) {}
  });
  d.addEventListener("fullscreenchange", sync);
  d.addEventListener("webkitfullscreenchange", sync);
})();

// Previous and next buttons move one year at a time.
$("prev").addEventListener("click", () => {
  stopTour();
  resetClock();
  go(Math.max(0, cur - 1))
});
$("next").addEventListener("click", () => {
  stopTour();
  resetClock();
  go(Math.min(YEARS.length - 1, cur + 1))
});


/* ---------- 6. POP-UPS ---------- */

// During the tour, each year's photos pop up by themselves:
//   PH_START = wait 3 seconds before the first photo
//   PH_EACH  = show each photo for 4.5 seconds
// resumeAfter = should the tour keep going when the pop-up closes?
// opener      = what was clicked, so we can return there after closing
// autoKey     = which photo popped up by itself last
// skipYear    = a year whose pop-ups you closed, so they stop popping
let resumeAfter = false,
  opener = null,
  autoKey = null,
  skipYear = -1;
const PH_START = 3000,
  PH_EACH = 4500;


// showPhoto() opens a photo in the pop-up with its caption.
// "auto" is true when the tour opened it by itself.
function showPhoto(yi, pi, auto) {
  const yr = YEARS[yi],
    p = yr.photos[pi];
  $("popRead").hidden = !!p.bridge || yr.reflection.length < 2;
  $("popRead").dataset.y = yi;
  $("popBig").innerHTML = `<img src="${p.img}" alt="${esc(p.alt||p.cap)}">`;
  $("popCap").textContent = (p.bridge ? (yr.y + 1) + " ← " + yr.y + " · " + p.cap + (p.sub ? " · " + p.sub : "") : yr.y + " · " + p.cap) + (p.bridge ? "" : "") + (!p.bridge && yr.photos.length > 1 ? " · photo " + (pi + 1) + " of " + yr.photos.filter(q => !q.bridge).length : "");
  const card = $("popCard");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
  $("pop").classList.toggle("auto", auto);
  $("pop").hidden = false;
}


// showText() opens the full reflection (and the favorite dish, if the year has one).
function showText(yi) {
  $("popRead").hidden = true;
  const yr = YEARS[yi];
  $("popBig").innerHTML = `<div class="pop-text"><div class="era">${yr.y} · Reflection</div><h3>${yr.title}</h3>${yr.reflection.map(p=>"<p>"+p+"</p>").join("")}${yr.dish?`<div class="dish-row">${yr.dishImg?`<button class="dish-img" id="dishBtn" data-y="${yi}" aria-label="Open photo of ${yr.dishName}"><img src="${yr.dishImg}" alt="${yr.dishName}"></button>`:""}<p class="dish">Favorite dish: ${yr.dish}</p></div>`:""}</div>`;
  $("popCap").textContent = yr.y + " · Full reflection";
  const card = $("popCard");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";
  $("pop").classList.remove("auto");
  $("pop").hidden = false;
}


// hidePop() closes the pop-up.
function hidePop() {
  $("pop").hidden = true;
  autoKey = null;
}


// autoPhotos() decides which photo should be showing right now during the tour,
// based on how many seconds we are into this year.
function autoPhotos() {
  if (cur === skipYear) return;
  const n = YEARS[cur].photos.length,
    k = Math.floor((elapsed - PH_START) / PH_EACH);
  const key = (elapsed >= PH_START && k < n) ? cur + ":" + k : null;
  if (key === autoKey) return;
  if (key) {
    autoKey = key;
    showPhoto(cur, k, true);
  } else hidePop();
}

// One listener for the whole wall: it checks what you clicked.
// "Read the full reflection" opens the text. A frame opens its photo.
// Either one pauses the tour while you look.
track.addEventListener("click", e => {
  const m = e.target.closest(".more");
  if (m) {
    resumeAfter = touring;
    if (touring) stopTour();
    opener = m;
    showText(+m.dataset.r);
    $("popClose").focus();
    return;
  }
  const f = e.target.closest(".frame");
  if (!f) return;
  resumeAfter = touring;
  if (touring) stopTour();
  opener = f;
  showPhoto(+f.dataset.y, +f.dataset.p, false);
  $("popClose").focus();
});


// closePop() closes the pop-up and puts things back how they were.
// If you closed a photo that popped up by itself, that year stops popping photos.
function closePop() {
  const wasAuto = $("pop").classList.contains("auto");
  hidePop();
  if (wasAuto) {
    skipYear = cur;
    return;
  }
  if (opener) opener.focus();
  if (resumeAfter) startTour();
}
// The Close button, and the "Read the full reflection" link inside a photo pop-up.
$("popClose").addEventListener("click", closePop);
$("popRead").addEventListener("click", () => {
  const y = +$("popRead").dataset.y;
  if (touring) {
    stopTour();
    resumeAfter = true;
  }
  showText(y);
  $("popClose").focus();
});
// Inside the pop-up: tapping the dish photo shows it big.
// Tapping the dark area outside the card closes the pop-up.
$("pop").addEventListener("click", e => {
  const dbtn = e.target.closest("#dishBtn");
  if (dbtn) {
    $("popRead").hidden = true;
    const yr = YEARS[+dbtn.dataset.y];
    $("popBig").innerHTML = `<img src="${yr.dishImg}" alt="${yr.dishName}">`;
    $("popCap").textContent = yr.y + " · Favorite dish · " + yr.dishName;
    $("popClose").focus();
    return;
  }
  if (e.target.id === "pop") closePop();
});

// Keyboard: Escape closes the pop-up. The left and right arrow keys move between years.
document.addEventListener("keydown", e => {
  if (!$("pop").hidden) {
    if (e.key === "Escape") {
      closePop();
      return;
    }
    if (!$("pop").classList.contains("auto")) return;
  }
  if (e.key === "ArrowRight") {
    $("next").click()
  }
  if (e.key === "ArrowLeft") {
    $("prev").click()
  }
});


/* ---------- 7. SIZE THE WALL AND START ---------- */

// fitWall() makes every station as tall as the tallest one,
// so the timeline line stays straight across the middle.
function fitWall() {
  const all = [...stations, fin];
  all.forEach(s => s.style.height = "0px");
  let m = 0;
  document.querySelectorAll(".cell").forEach(c => {
    m = Math.max(m, c.scrollHeight)
  });
  const H = Math.max(700, 2 * m + 64);
  all.forEach(s => s.style.height = H + "px");
  if (cur >= 0) {
    setRail(0)
  }
}
// Size the wall now, again when the window changes size, and again once the fonts load.
fitWall();
addEventListener("resize", fitWall);
if (document.fonts) document.fonts.ready.then(fitWall);

// OPEN_YEAR = the year the wall shows when the page first opens.
// 2054 is also where the tour starts, since the wall runs back in time.
const OPEN_YEAR = 2054;
const START = Math.max(0, YEARS.findIndex(y => y.y === OPEN_YEAR));
// Jump to that year now, and once more after everything (like pictures) has loaded.
addEventListener("load", () => {
  fitWall();
  go(START, true);
});
go(START, true);
