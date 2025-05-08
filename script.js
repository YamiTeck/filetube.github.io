// === File Data ===
const files = [
    {
      name: "Fantasy Texture Pack",
      url: "https://mega.nz/file/DTRUGBJY#sviCEH5YzG3bQoDafiZYMffrOKkWLADLoOKlACjJ6Vw",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/fddedd74-cdae-4e92-844d-78d32f8202af/FantasyTexturePack_Thumbnail_0.jpg",
      description: "Transport yourselves to a time where knights were heroes.",
      tags: ["Minecraft", "Texture"]
    },
    {
      name: "City Texture Pack",
      url: "https://mega.nz/file/LH5liYBJ#3h7m9q5t_T77zM3tHydkMc7dHKbCrOrxwzBaFHnXx8w",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/5f4990a2-61c1-4c18-b080-5d5cbb62be4b/CityTexturePack_Thumbnail_0.jpg",
      description: "Free your inner architect and shape the world around you.",
      tags: ["Minecraft", "Texture"]
    },
    {
      name: "Plastic Texture Pack",
      url: "https://mega.nz/file/iPRVRZTR#4NBVZZB779bknKwKKZ8BnSTf4ULbs4OnzXbHirdlqCY",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/10ac7d0b-5ee5-47e7-b1a9-b0745302b028/PlasticTexturePack_Thumbnail_0.jpg",
      description: "Make your worlds simple, colorful and vibrant!",
      tags: ["Minecraft", "Texture"]
    }
  ];
  
  // === Rendering Logic ===
  const container = document.getElementById("fileContainer");
  const searchInput = document.getElementById("searchInput");
  
  function renderFiles(filter = "") {
    container.innerHTML = "";
    const keyword = filter.toLowerCase().trim();
    const isTagSearch = keyword.startsWith("@");
    const searchTerm = isTagSearch ? keyword.slice(1) : keyword;
  
    const filtered = files.filter(file => {
      if (isTagSearch) {
        return file.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      } else {
        return (
          file.name.toLowerCase().includes(searchTerm) ||
          file.description.toLowerCase().includes(searchTerm)
        );
      }
    });
  
    if (filtered.length === 0) {
      container.innerHTML = "<p>No files found.</p>";
      return;
    }
  
    filtered.forEach(file => {
      const card = document.createElement("div");
      card.className = "file-card";
  
      card.innerHTML = `
        <img src="${file.thumbnail}" class="file-thumb" alt="Thumbnail">
        <div class="file-title"><a href="${file.url}" target="_blank">${file.name}</a></div>
        <div class="file-desc">${file.description}</div>
        <div class="tags">
          ${file.tags.map(tag => `<span class="tag">@${tag}</span>`).join("")}
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  searchInput.addEventListener("input", () => {
    renderFiles(searchInput.value);
  });
  
  renderFiles();  