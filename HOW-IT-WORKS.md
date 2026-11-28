# How My Year of the Horse Wall Works

This guide explains my project in plain language, so I can understand it, change it, and learn from it.

## The folders

```
year_of_the_horse/
├── index.html          The page itself: the skeleton
├── css/
│   └── styles.css      How it looks: colors, fonts, sizes
├── js/
│   ├── years-data.js   What's on it: my words and pictures for all 10 years
│   └── timeline.js     What it does: builds the wall, runs the tour, plays the songs
├── images/
│   ├── 2025/           The pictures for 2025
│   ├── 2026/           ...one folder for every year
│   └── 2054/
├── HOW-IT-WORKS.md     This guide
└── README.md           The project's front page on GitHub
```

## The three languages of a web page

Think of the page like a person getting ready for the day.

- **HTML is the body.** It says what's there: a title, buttons, a box for the wall.
- **CSS is the outfit.** It says how things look: the red, the gold, the black frames, the fonts.
- **JavaScript is the brain.** It makes things happen: the tour moves, photos pop up, songs play.

Keeping each one in its own file means I always know where to look.

## What happens when someone opens the page

1. The browser reads **index.html** and builds the header, an empty wall, and the audio guide bar.
2. It loads **css/styles.css**, so everything gets its colors and sizes.
3. It loads **js/years-data.js**. Now the computer knows my 10 years: titles, fortunes, reflections, songs and photos.
4. It loads **js/timeline.js**. This reads the data and builds one "station" on the wall for each year, then jumps to 2054, where the tour starts.

The order in step 3 and 4 matters. The data has to load first, because the code needs it.

## Common changes and where to make them

| I want to... | Open this file | What to change |
|---|---|---|
| Fix a typo or reword a reflection | `js/years-data.js` | The words inside the "quotes" for that year |
| Change a fortune or title | `js/years-data.js` | `fortune:` or `title:` |
| Swap a song | `js/years-data.js` | `song:` for the name and `spotify:` for the track code |
| Replace a photo | `images/<year>/` and `js/years-data.js` | Put the new picture in the year's folder, then update its `img:` path |
| Change a color | `css/styles.css` | The color codes in section 1, like `--red` |
| Make the tour faster or slower | `js/timeline.js` | `STEP` (30000 = 30 seconds) |
| Change which year shows first | `js/timeline.js` | `OPEN_YEAR` near the bottom |

## How to find a Spotify track code

1. In Spotify, tap **⋯**, then **Share**, then **Copy Song Link**.
2. The link looks like `https://open.spotify.com/track/1l32mo5oW5oIRRjNnVJBNR?si=...`
3. The code is the part after `/track/` and before `?`. Here that's `1l32mo5oW5oIRRjNnVJBNR`.

Check for the "E" badge in Spotify first, so the song is the clean version.

## Testing changes before I push

1. Make the change and save the file.
2. Right-click `index.html` in VS Code and choose **Open with Live Server**.
3. Check that it looks right.
4. Push it:

```bash
git add .
git commit -m "Describe what I changed"
git push
```

## If something breaks

- **The wall is empty:** there's probably a missing comma, quote or bracket in `years-data.js`. Press F12 in the browser and open the **Console** tab. The red message tells you the file and line number.
- **A picture is missing:** the `img:` path doesn't match the file name exactly. Capital letters count.
- **A song won't play:** that version may be blocked from playing on websites. Try another version of the song in Spotify.
