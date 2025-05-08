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
    },
    {
      name: "PureBDcraft HD UI",
      url: "https://mega.nz/file/OKJFXQhC#yHv2iBrXOAi8b9vvwAUs8mcw5CAxQl0jaidziGE9A_4",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/deeb7ed3-e925-43da-a34b-cb06cd40e616/purebdcraft_Thumbnail_0.jpg",
      description: "Turn your adventures into a comic book with BDcraft’s detailed HD textures, geeky references, and support for the Spring to Life update—available in 256x to 32x resolutions with an HD UI.",
      tags: ["BDcraft", "Texture"]
    },
    {
      name: "PureBDcraft",
      url: "https://mega.nz/file/eeIlwRiB#Ox2zqRJWNaP43z3RCPOlhrdyG5px0gZ5A8Xhcb2OZHc",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/deeb7ed3-e925-43da-a34b-cb06cd40e616/purebdcraft_Thumbnail_0.jpg",
      description: "Turn your adventures into a comic book with BDcraft’s detailed HD textures, geeky references, and support for the Spring to Life update—available in 256x to 32x resolutions with an HD UI.",
      tags: ["BDcraft", "Texture"]
    },
    {
     name: "Better Default 2.1 Textures",
      url: "https://mega.nz/file/afpBBS6K#TCFT6-Kjz63jiEkevvPyUIW7NYpS6xr1M5JPS3qAZaw",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/0c6f2c71-c223-4858-9470-fb9b77974798/BetterDefault_Thumbnail_0.jpg",
      description: "Biggest update yet—refresh your Minecraft experience with 1000+ new textures, full retexturing, and subtle animations, all while staying true to the classic vanilla style!",
      tags: ["Owls Cubed", "Texture"]
    },
    {
      name: "Steampunk Texture Pack",
      url: "https://mega.nz/file/LOozmB4B#N0AtCL6LqwESuK_nJxTCIOUsyeNkLr6ll1PY8FxYNDc",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/f7187803-99b8-4de5-99cf-70fe520ce57e/SteampunkTexturePack_Thumbnail_0.jpg",
      description: "Create your own Industrial Revolution with this Victorian inspired Steampunk texture pack!",
      tags: ["Minecraft", "Texture"]
    },
    {
      name: "Festive Mash-up 2016",
      url: "https://mega.nz/file/bDJmlKKT#uh2OMwpNjlVrksCbC-dhIIGFcWQeBH0EIamhqb6id8s",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e97add21-372e-469e-b665-ec77110e7ecc/Festive_Mashup_thumbnail_0.jpg",
      description: "Wander through a winter wonderland! World, textures, skins and more!",
      tags: ["Minecarft", "Texture"]
    },
    {
      name: "Festive Mash-up 2016",
      url: "https://mega.nz/file/bD43kTwJ#SJKv_i1LjQNexEfgcN8Ix894AB0Txjl0z-Z3Cw7X284",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e97add21-372e-469e-b665-ec77110e7ecc/Festive_Mashup_thumbnail_0.jpg",
      description: "Wander through a winter wonderland! World, textures, skins and more!",
      tags: ["Minecarft", "World"]
    },
    {
      name: "Festive Mash-up 2016",
      url: "https://mega.nz/file/Xfw0BIaL#9pc_rgBqeFhf031RxTGObxqGHz6xtjUHupzTpliOyYY",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e97add21-372e-469e-b665-ec77110e7ecc/Festive_Mashup_thumbnail_0.jpg",
      description: "Wander through a winter wonderland! World, textures, skins and more!",
      tags: ["Minecarft", "Skin"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/WHBzHKKL#2HA8eslJC9LX61jlfRJarneV-GaATgLt9vXSmE96WZw",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecarft", "Texture"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/HHBjlZ6J#B8-0Fjs5rD7qlUk3BfM-bNKCHY1LNC9cfbE6sKiDreQ",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecarft", "World"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/OfJUnAxA#lgDzuAEu1YTXtQNBFTpAC3fFvXx0-TH6Wv8XcIaCJRY",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecarft", "Skin"]
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