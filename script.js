// Stain guide: fictional tips for demo purposes.
const STAINS = {
  "Blood": ["#8a1c1c", "Rinse with cold water right away, apply Brightcurrent liquid directly, then wash cold."],
  "Chocolate": ["#4a2c1a", "Scrape off excess, soak in cool water with a little detergent, then wash warm."],
  "Coffee": ["#5a3a22", "Flush from the back with cool water, pretreat with liquid, then wash on the warmest safe setting."],
  "Grass": ["#3f8a3a", "Work detergent into the stain, let sit 10 minutes, then wash warm."],
  "Grease": ["#c9a227", "Blot, dab liquid detergent on the spot, let sit 15 minutes, then wash hot if fabric allows."],
  "Ink": ["#1f2a6b", "Place a towel under the stain, dab with rubbing alcohol, then pretreat and wash."],
  "Mud": ["#6b4f35", "Let it dry, brush off the dirt, pretreat with liquid, then wash."],
  "Red wine": ["#6d1030", "Blot (don't rub), rinse with cold water, pretreat and wash cold."],
  "Sweat": ["#e8d9a0", "Pretreat underarms with liquid, let sit 10 minutes, then wash warm."],
  "Tomato sauce": ["#c4351c", "Rinse from the back with cold water, pretreat, then wash warm."]
};

const select = document.getElementById("stain-select");
const tip = document.getElementById("stain-tip");
const blob = document.getElementById("stain-blob");

Object.keys(STAINS).forEach((name) => {
  const opt = document.createElement("option");
  opt.value = name;
  opt.textContent = name;
  select.appendChild(opt);
});

select.addEventListener("change", () => {
  const entry = STAINS[select.value];
  if (!entry) {
    tip.textContent = "Pick a stain to see how to treat it.";
    return;
  }
  blob.setAttribute("fill", entry[0]);
  tip.textContent = entry[1];
});
