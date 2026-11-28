/* ============================================================
   years-data.js  -  THE CONTENT OF MY WALL
   ------------------------------------------------------------
   This file holds the WORDS and PICTURES for every year.
   It has no "how it works" code in it, just information.

   Think of it like a stack of 10 index cards, one card per year.
   Each card (the part between { and }) has the same labels:

     y          the year, like 2025
     era        the small label above the year ("The past", "Near future"...)
     status     "real" = my own words,  "sample" = placeholder text
     title      the big title, "The Year of ___"
     fortune    the short fortune-cookie line in italics
     reflection my reflection. Each "..." in the [ ] list is one paragraph.
                The wall shows paragraph 1; the pop-up shows all of them.
     song       the song name and artist shown on the wall
     spotify    the Spotify track code (the letters after /track/ in a
                Spotify link). It tells the player which song to play.
     dish, dishName, dishImg
                only 2025 and 2026 have these: my favorite dish,
                a short name for it, and its photo
     photos     the pictures for that year (see below)

   Each photo has:
     img    where the picture file lives, inside the images folder
     cap    the caption (the short title of the photo)
     alt    a description of the picture for people who use screen readers
   And one size word (only one!):
     small: true   a smaller frame next to the first photo
     wide:  true   a wide frame underneath
     full:  true   one big wide frame across the top (used in 2049)
     half:  true   two tall frames side by side (used in 2049)
     bridge: true  the photo sits BETWEEN two years (the 2026 graduation)
   No size word = the normal main frame.

   HOW TO CHANGE SOMETHING:
   Change the words inside the "quotes", save the file, and refresh
   the page. Be careful to keep the quotes, commas and brackets.
   ============================================================ */

const YEARS = [

  /* ---------- 2025: The Year of Resilience ---------- */
  {
    y: 2025,
    era: "The past",
    status: "real",
    title: "The Year of Resilience",
    fortune: "What you release makes room for who you're becoming.",
    reflection: [
      "2025 was about resilience, self-discipline, and staying true to myself. I was unemployed and always looking for solutions: keeping the bills paid, the household stocked, food on the table, and myself cared for. I kept my routine and protected a healthy mindset, and I became my own encourager.",
      "I earned a deep self-respect by pushing past my fears and limits, seeking out opportunities, and stepping outside my comfort zone. I started creating my own path, one that felt authentic to me. My wish for the year was to see results for all the hard work I was putting in.",
      "Some relationships had to go, people who saw my new direction as a risk. I also let go of being comfortable before anything could change. What I gained was a new level of trust and determination in what I truly value and how I want to show up for myself, no matter what.",
      "I learned that I can rely on myself, that discomfort is where growth starts, and that not everyone comes along, and that's okay. I built healthy routines and found new ways of learning as I stepped fully into my independence.",
      "If I could change one thing, it would be how I managed my time. I would have been more selfish with what mattered most to me, and I would have stopped hoping people would show me something different from the patterns they kept repeating. In a word, I was over-giving. What I'd keep: my healthy routines, setting my own agenda every day, and leaning even further into my self-care rituals."
    ],
    song: "Iced Tea · Joyce Wrice",
    spotify: "3AC9Qas9KydyJPZCeYcs5h",
    dish: "Rare Beef Pho from Joy Yee Noodle in Chicago's Chinatown, a huge bowl of beef broth and rice noodles with thin-sliced rare beef, bean sprouts, Thai basil and fresh jalapeño. Going to Joy Yee for a bowl of our favorite new addiction became a tradition between my sister and me.",
    dishName: "Rare Beef Pho, Joy Yee Noodle",
    dishImg: "images/2025/favorite-dish.jpg",
    photos: [
      { img: "images/2025/holding-it-together-anyway.jpg",
        cap: "Holding it together anyway",
        alt: "Fenneko from Aggretsuko smiling calmly while an explosion goes off behind her" },
      { img: "images/2025/breathe-keep-going.jpg",
        cap: "Breathe. Keep going.",
        alt: "Retsuko sitting at a table with her eyes closed, staying calm",
        small: true },
      { img: "images/2025/protecting-my-peace.jpg",
        cap: "Protecting my peace",
        alt: "Retsuko wrapped up in a green blanket",
        wide: true }
    ]
  },

  /* ---------- 2026: The Year of the Silent Climb ---------- */
  {
    y: 2026,
    era: "The present",
    status: "real",
    title: "The Year of the Silent Climb",
    fortune: "Every quiet step you take now brings you closer to the people and dreams waiting for you ahead.",
    reflection: [
      "This year is about tunnel vision. I locked in on one path and let everything else go quiet. I've learned to stay open to perspectives shaped by lives different from mine, to understand how I learn, and how I handle pressure and conflict. I've learned to separate personal feelings from business so the work still gets done well.",
      "I didn't give anything up. I pressed pause. I stepped back from my business, my sessions with my business coach, posting for my personal brand, and bonding time with my niece and my sister. I carry them with me as the reason I keep going.",
      "I'm still learning the line between delegating and developing people, when to hold a firm standard for the bigger picture, and how to communicate in a way that earns trust. I want to grow in project management, data and web development, and I want to establish my LLC.",
      "I'm letting go of being hard on myself, expecting perfection, and needing to always have the answer. I'm carrying forward my routine, my healthy mindset, being my own encourager, and stepping outside my comfort zone. My wish is a complete, solid foundation for the start of my career."
    ],
    song: "The Climb · Miley Cyrus",
    spotify: "0Irr2bElPqiraVh4o7BKuQ",
    dish: "Shrimp Bowl from KALA Modern Greek, with lemon rice, feta, harissa and garlic sauce. I had it the day I graduated from Growing Home.",
    dishName: "Shrimp Bowl, KALA Modern Greek",
    dishImg: "images/2026/favorite-dish.jpg",
    photos: [
      { img: "images/2026/quiet-focus-with-home-in-mind.jpg",
        cap: "Quiet focus, with home in mind",
        alt: "Director Gori from Aggretsuko walking calmly down a hallway, holding a book" },
      { img: "images/2026/some-days.jpg",
        cap: "Some days",
        alt: "Gori crying dramatically on the office floor",
        small: true },
      { img: "images/2026/hard-days-held-up-anyway.jpg",
        cap: "Hard days, held up anyway",
        alt: "Retsuko crying while Washimi and Gori walk beside her",
        wide: true },
      { img: "images/2026/commencement.jpg",
        cap: "Commencement",
        sub: "Jumping off the porch",
        alt: "Hello Kitty in a graduation cap and gown with a pink-trimmed collar and red tie",
        bridge: true }
    ]
  },

  /* ---------- 2027: The Year of The Fool ---------- */
  {
    y: 2027,
    era: "Near future",
    status: "real",
    title: "The Year of The Fool",
    fortune: "The leap you take with an open heart is the start of everything you've been waiting for.",
    reflection: [
      "This year I'm jumping off the porch with my eyes closed. Most people would say this can resemble the Fool card. I'm choosing to embrace the unknown with an optimistic mindset. I'm walking into new opportunities.",
      "Most people don't get it, and even fewer would try things such as stepping fully into project management or fully committing to becoming a content creator. I'm building a platform where my videos and entries become my archive diary, flourishing more and more every day, like a web I keep casting out further and further. People tell me it doesn't work. I do it anyway.",
      "I'm growing my network in business and in my career, establishing my LLC, and building my project management and people-building skills. I'm leaving behind the things that turned me upside down, such as self-doubt, negative self-talk, procrastination, and unhealthy eating and sleeping habits.",
      "I carry my resilience from 2025, when I kept pushing toward a light at the end of the tunnel I could barely see. 2026 is when I finally came out of that tunnel, saw my hard work paying off, and realized there's still a full road ahead. What a beautiful sight to see, the world opening up to me.",
      "This year I find my soul tribe, my sisters in healing. My wish is to build my own community: an oasis for my healing circle, a safe place to talk honestly and hold each other accountable on the journey."
    ],
    song: "Closer · Goapele",
    spotify: "27aEPEuvErnRltWJJUrN6H",
    photos: [
      { img: "images/2027/small-in-the-room-stepping-in-anyway.jpg",
        cap: "Small in the room, stepping in anyway",
        alt: "Hello Kitty in a gray suit and green tie, holding a briefcase, standing among much taller businessmen" },
      { img: "images/2027/building-my-archive-diary.jpg",
        cap: "Building my archive diary",
        alt: "Hello Kitty working at a pink laptop with a drink beside her and a clock on the wall",
        small: true },
      { img: "images/2027/project-manager-mode.jpg",
        cap: "Project manager mode",
        alt: "Hello Kitty in glasses and a blazer at her desk with a calculator and paperwork",
        wide: true }
    ]
  },

  /* ---------- 2028: The Year of the Soul Tribe ---------- */
  {
    y: 2028,
    era: "Near future",
    status: "real",
    title: "The Year of the Soul Tribe",
    fortune: "Your people are finding their way to you. Together, you'll be stronger than you ever were as one.",
    reflection: [
      "This year is about aligning with the right people at the right time. I receive support, love and acceptance without judgment, from people who still hold me accountable to staying true to myself no matter what.",
      "I know it's real because when I'm feeling low and questioning my purpose, my community lifts me back up. I feel safe enough to fully be myself through all seasons, and they stay by my side like an anchor for a ship. I feel grounded around them. They work with me toward my goals, stand up for me without hesitation even when I'm not in the room, remind me to be present, and show me how much they appreciate me in their lives.",
      "The bonding time I paused in 2026 is back, and my sister and my niece are right there with me again. New friends, business colleagues, partnerships and collaborations come in too, and tons of networking builds a net that stretches across countries, with people I've met in person and virtually.",
      "I create a permanent place where my healing circles reside, plus platforms curated for empowerment, networking and connection, but most of all community. I learn to connect with a full cup of love, secured and protected by my strong boundaries, and my people respect those boundaries and remind me to keep them, even when it's for them, without any penalty.",
      "I let go of believing I had to carry everything on my own. In 2025 I learned I could rely on myself. In 2028 I learn I don't have to do it alone.",
      "My wish is to keep popping out with my friends: planned sleepover rituals, study dates and networking buddies, and taking chances on building with people intentionally and strategically."
    ],
    song: "Come Together · The Internet",
    spotify: "1l32mo5oW5oIRRjNnVJBNR",
    photos: [
      { img: "images/2028/my-people-all-together.jpg",
        cap: "My people, all together",
        alt: "The Steven Universe cast laughing together in a big group shot" },
      { img: "images/2028/selfies-with-my-soul-tribe.jpg",
        cap: "Selfies with my soul tribe",
        alt: "Steven taking a phone selfie with Garnet, Pearl and Amethyst",
        small: true },
      { img: "images/2028/held-by-the-ones-who-chose-me.jpg",
        cap: "Held by the ones who chose me",
        alt: "Amethyst, Garnet and Pearl wrapping Steven in a group hug",
        wide: true }
    ]
  },

  /* ---------- 2029: The Year of Partnership ---------- */
  {
    y: 2029,
    era: "Near future",
    status: "real",
    title: "The Year of Partnership",
    fortune: "You deserve the love you've always given. This year, it finds its way back to you.",
    reflection: [
      "This year is about partnership, in love and in business. We crossed paths while I was becoming and flourishing in my tech career, and we connected easily over the things we both love: reading, video games, time in nature and meditation.",
      "We've grown together over the years while I've been learning who I am through my career. We bounce business ideas off each other and map out the plans to bring them to life.",
      "Together we earn YouTube creator rewards for our podcast, where we take on hard conversations about politics, race, gender and relationship dynamics. We also build a community center for youth who are into tech, art, science, entertainment and production: an after-school program that works like an internship.",
      "Early in our relationship, we chose couples therapy to show how serious we were about making it work.",
      "I knew they were the one through the art of being noticed. They fill in missing pieces of my life I never knew I needed. After a long, tough workday, they're there with my favorite comfort snack and the living room set up to watch my favorite comfort shows together. They run my bath and lay my favorite pajamas on the bed for when I get out. They call just to hear me ramble about random things, because they know how much I love to communicate. They buy the book I pointed out months ago and surprise me with gifts I only mentioned once.",
      "I learned that I deserve the same companionship I always gave to my past partners, and that I can love someone while I'm still growing into myself. Love doesn't slow my evolution down. It supports it.",
      "I let go of the belief that a partner would pull me off course while I was still becoming who I'm meant to be. I also released my fear of long-term commitment and of building a family, a fear fed by the picture society and social media paint of love. My partner stayed by my side and showed me through their actions that something better is possible when you truly believe in it and work toward it.",
      "My wish is to gain a lifetime partner in crime for my journey, someone who's my biggest fan and my biggest support."
    ],
    song: "Sunshine · Alexander O'Neal",
    spotify: "7oZxDOnBPUVEYzI5tDLH4r",
    photos: [
      { img: "images/2029/love-that-builds.jpg",
        cap: "Love that builds",
        alt: "Two brown Sanrio cats, one kissing the other on the cheek, with hearts above them" },
      { img: "images/2029/my-safe-place.jpg",
        cap: "My safe place",
        alt: "Tiny Hello Kitty sitting happily on a giant brown cat's flexed arm",
        small: true },
      { img: "images/2029/a-power-couple.jpg",
        cap: "A power couple",
        alt: "Chibi Storm and Black Panther holding hands with hearts around them",
        wide: true }
    ]
  },

  /* ---------- 2034: The Year of Becoming HER ---------- */
  {
    y: 2034,
    era: "Long-range",
    status: "real",
    title: "The Year of Becoming HER",
    fortune: "The woman you're becoming has been waiting for you to choose yourself.",
    reflection: [
      "This is the year I become HER. She knows who she is, stands up for what she believes in, and doesn't back down for anyone. She still leads with heart and compassion, but she stands firm on her boundaries, sets the record straight when she needs to, and puts herself first in her career. When she walks in, she lights up the room. Her presence is felt while she's there and missed when she's gone.",
      "She owns homes in a few different places and travels the world for business, pleasure and comfort. She loves trips, walks, hikes and time in nature. She hosts guided meditation classes, virtually and in person, and documents her life and journey on her YouTube channel, teaching women how to step into their own energy.",
      "She speaks at seminars, has written books, and has a strong platform of supporters who ignite her. On the platforms she built, she sells her own handcrafted divination tools, like tarot cards, pendulums and oracle cards.",
      "She has cultivated a village around her, people who work together toward the goal they share in life: freedom and peace among their people.",
      "Becoming her took prioritizing herself over everything and everyone. She no longer carries other people's opinions about how she moves, or the guilt of putting herself first and keeping her boundaries. My wish for this year is to stay true to myself no matter what, and to always remember where I came from."
    ],
    song: "Girl on Fire · Alicia Keys",
    spotify: "4esOae7i4rqTbAu9o5Pxco",
    photos: [
      { img: "images/2034/becoming-her.jpg",
        cap: "Becoming her",
        alt: "Boa Hancock from One Piece with gold earrings, surrounded by hearts and pink flowers" },
      { img: "images/2034/confidence-earned.jpg",
        cap: "Confidence, earned",
        alt: "Boa Hancock smiling, touching her gold hoop earring",
        small: true },
      { img: "images/2034/eyes-on-whats-mine.jpg",
        cap: "Eyes on what's mine",
        alt: "Close-up of Boa Hancock with a focused, serious look",
        wide: true }
    ]
  },

  /* ---------- 2039: The Year of Black Girl Rest ---------- */
  {
    y: 2039,
    era: "Long-range",
    status: "real",
    title: "The Year of Black Girl Rest",
    fortune: "Rest isn't a reward. It's your birthright.",
    reflection: [
      "This is the year I rest, simply because I choose to. My days start early with my guided meditation playlist, and I take my self-care rituals at my own pace. I catch up on my favorite anime, like Yu Yu Hakusho and Jujutsu Kaisen, make vlogs for my TikTok and YouTube channel, take myself on solo dates and travel across countries.",
      "I finally have time for the things I love: gaming, reading lots of books, sketching and painting.",
      "I can rest because I built a secure, efficient and reliable team I trust to keep everything running without me.",
      "I let go of believing that being busy meant being productive, and of waiting to have fun and enjoy my life.",
      "My days are filled with my digital systems, my collectibles, my book club, Between the Lines Society, and the subscribers to my House of Nova newsletter and monthly magazine.",
      "My wish is for other Black and brown women to take time out of their day or week to rest and relax, too."
    ],
    song: "Free · Deniece Williams",
    spotify: "5aPVQqYEEZKREbFRxLiAp5",
    photos: [
      { img: "images/2039/time-to-read.jpg",
        cap: "Time to read",
        alt: "Pusheen reading a book on a beanbag with tea and a stack of books" },
      { img: "images/2039/play-on-my-terms.jpg",
        cap: "Play, on my terms",
        alt: "Pusheen gaming in a pink chair with headphones",
        small: true },
      { img: "images/2039/anime-night-snacks-included.jpg",
        cap: "Anime night, snacks included",
        alt: "Pusheen bundled in a polka-dot blanket on a couch with snacks",
        wide: true }
    ]
  },

  /* ---------- 2044: The Year of Expanding My Horizons ---------- */
  {
    y: 2044,
    era: "Long-range",
    status: "real",
    title: "The Year of Expanding My Horizons",
    fortune: "The world is your garden. Wander it freely.",
    reflection: [
      "My passport stays busy this year. From Greece to Japan, from Thailand to across Africa, I'm finally seeing places I used to only dream about. Back home, I road-trip across the country, from New York to New Mexico, Washington to Louisiana, and everywhere in between.",
      "Every stop teaches me something: a new language, a new dish, a new way of thinking. When I'm home, I'm still creating. I build my own PCs, make video games from scratch, code games for the youth, and add every new destination to my own digital map.",
      "I used to be afraid to travel alone or go too far from home. Now I know the real wisdom comes from taking the time to truly see where you are. My people are with me every step of the way, and my only wish is to keep exploring."
    ],
    song: "Leave My Home · FKJ",
    spotify: "52t3ddfTYXhGdLTz84w1Wb",
    photos: [
      { img: "images/2044/exploring-freely.jpg",
        cap: "Exploring freely",
        alt: "Mocha from Sanrio doing a jump on a pink skateboard" },
      { img: "images/2044/road-trip-ready.jpg",
        cap: "Road trip ready",
        alt: "Mocha riding a little bike with a striped scarf blowing behind her",
        small: true },
      { img: "images/2044/boba-in-hand.jpg",
        cap: "Boba in hand, bag packed, out seeing the world",
        alt: "Mocha in glasses sipping boba with a small crossbody bag",
        wide: true }
    ]
  },

  /* ---------- 2049: The Year of My Empire's Legacy: House of Nova ---------- */
  {
    y: 2049,
    era: "Long-range",
    status: "real",
    title: "The Year of My Empire's Legacy: House of Nova",
    fortune: "The house you built with love will keep its doors open long after you've walked through them.",
    reflection: [
      "By 2049, House of Nova is no longer a dream I'm chasing. It's an empire built on my vision, with businesses, platforms, a magazine, a youth center, products, and more than I ever imagined when I started.",
      "What started as a jewelry business, a metaphysical store and a healing circle grew into a movement of change. House of Nova helps people embrace their beauty, step into their confidence and believe in themselves at the soul level, all while being held and supported by a community that believes in them too.",
      "Its future rests in trusted hands. My healing circle and soul tribe carry its heart forward, my partner continues to build beside me, and my trusted team keeps its foundation strong. House of Nova is no longer just mine. It belongs to everyone it was built to serve.",
      "I learned that an empire is only as strong as the people who uplift it. I let go of the fear that it would fall apart without me. My wish is that every person who walks through our doors leaves believing in themselves a little more."
    ],
    song: "Golden · Jill Scott",
    spotify: "0bHs3ly4Bv5BlzE3KrePfX",
    photos: [
      { img: "images/2049/house-of-nova.jpg",
        cap: "House of Nova",
        alt: "The House of Nova logo, an interlocking H and N monogram",
        full: true },
      { img: "images/2049/crystals-and-intention.jpg",
        cap: "Crystals and intention",
        alt: "House of Nova beaded bracelets, including evil eye and opalite, arranged with amethyst and selenite",
        half: true },
      { img: "images/2049/every-bead-part-of-the-legacy.jpg",
        cap: "Every bead, part of the legacy",
        alt: "A stack of House of Nova gemstone bead bracelets in amethyst, jasper, aventurine, onyx, quartz and sodalite",
        half: true }
    ]
  },

  /* ---------- 2054: The Year of Wholeness ---------- */
  {
    y: 2054,
    era: "Full circle",
    status: "real",
    title: "The Year of Wholeness",
    fortune: "You didn't just find yourself. You built a home where others can find themselves too.",
    reflection: [
      "In 2027 I leapt as The Fool. In 2054, I am The World: whole, complete and still dancing.",
      "At 50, I live in my inner knowing. Like Semiu, whose glasses let her see a person's true essence, I see clearly now. I've seen it all, done it all and felt it all, and I pass the wisdom and knowledge I've gained on to others.",
      "Looking back, I'm most proud that I never gave up on myself. I kept pushing when things were hard, gave myself grace when I didn't have the answers, and moved past every defeating belief I was ever taught.",
      "Wholeness, to me, is being aligned with myself in spirit, mind and body, and living in connection with Mother Nature, the earth and the people around me. My village surrounds me: my community, my partner, and family in whatever form it takes, as a proud auntie and maybe even a grandmother.",
      "To my 2025 self: there is light at the end of the tunnel. Keep pushing, and believe what everyone around you already sees: you are destined for great things. What's inside you is meant to be shared, and one day you'll pass it on.",
      "My wish is that everything I've built keeps blooming in the hands I trusted, long after mine let go."
    ],
    song: "BOSS (Clean) · The Carters",
    spotify: "3eC4QEzAZ1EMyoWvhz5KII",
    photos: [
      { img: "images/2054/her-light-fully-on.jpg",
        cap: "Her light, fully on",
        alt: "Semiu Grier from Gachiakuta, golden eyes glowing behind her round glasses" },
      { img: "images/2054/seeing-clearly.jpg",
        cap: "Seeing clearly",
        alt: "Semiu Grier with her round glasses on a beaded chain, hand raised thoughtfully to her face",
        small: true },
      { img: "images/2054/wisdom-in-focus.jpg",
        cap: "Wisdom in focus",
        alt: "Close-up of Semiu Grier adjusting her round glasses, one golden eye looking through the lens",
        wide: true }
    ]
  }
];
