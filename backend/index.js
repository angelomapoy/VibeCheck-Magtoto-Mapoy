/**
 * ==========================================
 * 🚦 VibeCheck API (CPE 411L)
 * ==========================================
 * Purpose:
 * - Runs on localhost
 * - Serves good vibes via JSON
 * - Judges your coding mood (nicely)
 *
 * Warning:
 * - May cause motivation
 * - Side effects include laughter & commits
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// 🛂 Let frontend talk to backend (no beef)
app.use(cors());

// 📦 Accept JSON bodies (POST-friendly)
app.use(express.json());

// ------------------------------------------
// 🎲 Utility Functions
// ------------------------------------------
const pickRandom = (array) =>
  array[Math.floor(Math.random() * array.length)];

// ------------------------------------------
// 🔮 Data Pools (Customize freely)
// ------------------------------------------
const fortunes = [
  "You will debug it in 5 minutes... after 55 minutes of panic.",
  "Your next commit will be clean and meaningful.",
  "A bug will disappear when you add one console.log().",
  "You passed the vibe check today. 😎",
  "Stack Overflow will save you today.",
];

const jokes = [
  "Why did the developer go broke? Because they used up all their cache.",
  "My code has two moods: works or why-is-this-happening.",
  "I told my program a joke... it just threw an exception.",
  "99 little bugs in the code... take one down, 127 left.",
];

const vibeMap = {
  happy: {
    emoji: "😄",
    message: "Keep going — you're shipping greatness!",
  },
  tired: {
    emoji: "🥱",
    message: "Hydrate. Stretch. Then commit.",
  },
  stressed: {
    emoji: "😵‍💫",
    message: "Breathe. One bug at a time.",
  },
};

// ------------------------------------------
// 💥 Smash Counter (in-memory vibes)
// ------------------------------------------
let smashes = 0;

// ------------------------------------------
// 🚀 API Endpoints
// ------------------------------------------

// 🔮 GET /api/fortune
app.get("/api/fortune", (req, res) => {
  res.json({
    fortune: pickRandom(fortunes),
    vibe: "mystical ✨",
  });
});

// 😂 GET /api/joke
app.get("/api/joke", (req, res) => {
  res.json({
    joke: pickRandom(jokes),
    laughterLevel: "😂😂😂",
  });
});

// 🎭 GET /api/vibe?mood=happy|tired|stressed
app.get("/api/vibe", (req, res) => {
  const mood = (req.query.mood || "").toLowerCase();
  const vibe = vibeMap[mood];

  if (!vibe) {
    return res.json({
      mood: mood || "unknown",
      emoji: "🤔",
      message: "Try mood=happy, tired, or stressed.",
      tip: "Yes, your code has feelings.",
    });
  }

  res.json({
    mood,
    ...vibe,
    status: "vibe-verified ✅",
  });
});

// 💥 POST /api/smash
app.post("/api/smash", (req, res) => {
  smashes++;
  res.json({
    smashes,
    message: "SMASH registered 💥",
  });
});

// 📊 GET /api/smashes
app.get("/api/smashes", (req, res) => {
  res.json({
    smashes,
    intensity: smashes > 10 ? "🔥🔥🔥" : "🙂",
  });
});

// 🕵️ GET /api/secret?code=411L
app.get("/api/secret", (req, res) => {
  if (req.query.code === "411L") {
    return res.json({
      message: "🎉 Secret unlocked!",
      reward: "+10 luck on your next merge",
    });
  }

  res.status(403).json({
    message: "Access denied 😄",
    hint: "Try code=411L",
  });
});

// ------------------------------------------
// 🟢 Server Boot Sequence
// ------------------------------------------
app.listen(PORT, () => {
  console.log(`
🚀 VibeCheck API is LIVE!
📍 http://localhost:${PORT}
✨ Ready to judge your vibes
`);
});
