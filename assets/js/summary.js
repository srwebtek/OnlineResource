import contentSitemap from "./menu/sitemap.js";

// Get an array of keys from the contentSitemap object
const keys = Object.keys(contentSitemap);

// Shuffle the array using the Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(keys);

// Select the first three shuffled keys
const selectedKeys = keys.slice(0, 6);

// Get the summary element by ID
const summaryElement = document.getElementById("summary");

// Create a wrapper for the cards
const cardWrapper = document.createElement("div");
cardWrapper.classList.add("card-container");

// Append the wrapper to the summary element
summaryElement.appendChild(cardWrapper);

// Function to fetch and extract the content of the first <p> tag
async function getFirstParagraphContent(url) {
  const response = await fetch(url);
  const text = await response.text();
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(text, "text/html");
  const firstParagraph = htmlDocument.querySelector("p");
  return firstParagraph.textContent;
}

// Create and append the selected entries to the card wrapper
selectedKeys.forEach(async (key, index) => {
  const entry = contentSitemap[key];

  // Create the card container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  // Create the title element
  const entryTitle = document.createElement("h2");
  entryTitle.textContent = entry.title;

  // Fetch and insert the first paragraph content
  const firstParagraphContent = await getFirstParagraphContent(entry.link);
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = firstParagraphContent;
  paragraphElement.classList.add("truncated-paragraph"); // Add the CSS class

  // Create the link element
  const entryLink = document.createElement("a");
  entryLink.href = entry.link;
  entryLink.textContent = "Read more";

  // Append elements to the card container
  cardContainer.appendChild(entryTitle);
  cardContainer.appendChild(paragraphElement);
  cardContainer.appendChild(entryLink);

  // Append the card to the card wrapper
  cardWrapper.appendChild(cardContainer);
});