/**
 * ======================================
 * 🎮 VibeCheck Frontend Controller
 * ======================================
 * Handles button clicks
 * Talks to the backend API
 * Prints results to the screen
 *
 * If something breaks:
 * - Check backend is running
 * - Check localhost:3000
 * - Check your vibes
 */

const out = document.getElementById("out");

// 🏠 Backend base URL
const API_BASE = "http://localhost:3000";

// --------------------------------------
// 🧠 Helper Functions
// --------------------------------------
function show(data) {
  out.textContent =
    typeof data === "string"
      ? data
      : JSON.stringify(data, null, 2);
}

function loading(msg = "Loading vibes... ⏳") {
  out.textContent = msg;
}

async function getJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Server said nope ❌");
  return res.json();
}

// --------------------------------------
// 🔮 Fortune
// --------------------------------------
document.getElementById("btnFortune").addEventListener("click", async () => {
  loading("Consulting the fortune cookie... 🔮");
  try {
    const data = await getJSON(`${API_BASE}/api/fortune`);
    show(data);
  } catch (err) {
    show({ error: err.message });
  }
});

// --------------------------------------
// 😂 Joke
// --------------------------------------
document.getElementById("btnJoke").addEventListener("click", async () => {
  loading("Fetching dad-level humor... 😂");
  try {
    const data = await getJSON(`${API_BASE}/api/joke`);
    show(data);
  } catch (err) {
    show({ error: err.message });
  }
});

// --------------------------------------
// 🎭 Mood Buttons
// --------------------------------------
document.querySelectorAll(".btnMood").forEach(btn => {
  btn.addEventListener("click", async () => {
    const mood = btn.dataset.mood;
    loading(`Analyzing mood: ${mood}... 🎭`);
    try {
      const data = await getJSON(`${API_BASE}/api/vibe?mood=${mood}`);
      show(data);
    } catch (err) {
      show({ error: err.message });
    }
  });
});

// --------------------------------------
// 💥 Smash Counter
// --------------------------------------
document.getElementById("btnSmash").addEventListener("click", async () => {
  loading("SMASHING button... 💥");
  try {
    const res = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
    const data = await res.json();
    show({
      message: "💥 SMASH registered!",
      totalSmashes: data.smashes,
    });
  } catch (err) {
    show({ error: err.message });
  }
});

// --------------------------------------
// 🕵️ Secret Endpoint
// --------------------------------------
document.getElementById("btnSecret").addEventListener("click", async () => {
  loading("Attempting secret access... 🕵️");
  try {
    const data = await getJSON(`${API_BASE}/api/secret?code=411L`);
    show(data);
  } catch (err) {
    show({
      error: "Access denied po🚫",
      hint: "Try code=411L",
    });
  }
});
