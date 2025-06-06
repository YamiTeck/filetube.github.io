// === Video Data ===
const videos = [
  {
    name: "Mickey 17-1080P",
    url: "https://mega.nz/file/gFwlGKYY#YAIoGKtNum2Ljj_HZaM5ME7g48kQofZ0PSYhrmXAH5M",
    thumbnail: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdrVqHLLdDyvoVvB1alcO6ZYJOJPuDd89Hhb_Y8OUBN9sV5TCb",
    description: "During a human expedition to colonize space, Mickey 17, a so-called expendable employee, is sent to explore an ice planet.",
    genres: ["Adventure", "Comedy", "Sci-Fi"]
  },
];

// === Minecraft Data ===
const minecraft = [
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
      tags: ["Minecraft", "Texture"]
    },
    {
      name: "Festive Mash-up 2016",
      url: "https://mega.nz/file/bD43kTwJ#SJKv_i1LjQNexEfgcN8Ix894AB0Txjl0z-Z3Cw7X284",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e97add21-372e-469e-b665-ec77110e7ecc/Festive_Mashup_thumbnail_0.jpg",
      description: "Wander through a winter wonderland! World, textures, skins and more!",
      tags: ["Minecraft", "World"]
    },
    {
      name: "Festive Mash-up 2016",
      url: "https://mega.nz/file/Xfw0BIaL#9pc_rgBqeFhf031RxTGObxqGHz6xtjUHupzTpliOyYY",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/e97add21-372e-469e-b665-ec77110e7ecc/Festive_Mashup_thumbnail_0.jpg",
      description: "Wander through a winter wonderland! World, textures, skins and more!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/WHBzHKKL#2HA8eslJC9LX61jlfRJarneV-GaATgLt9vXSmE96WZw",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecraft", "Texture"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/HHBjlZ6J#B8-0Fjs5rD7qlUk3BfM-bNKCHY1LNC9cfbE6sKiDreQ",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecraft", "World"]
    },
    {
      name: "Halloween Mash-up",
      url: "https://mega.nz/file/OfJUnAxA#lgDzuAEu1YTXtQNBFTpAC3fFvXx0-TH6Wv8XcIaCJRY",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/d3ce4a51-7f02-450d-ad90-098c190b84a2/Halloween_Thumbnail_0.jpg",
      description: "Happy Halloween! Dress suitably spookily and prepare for the ultimate Minecraft Halloween thrill ride!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "1st Birthday Skin Pack",
      url: "https://mega.nz/file/mHQ1jYBI#eH2d0U61tdTgRljY36e6SDlwvPlIt8dlcy5GPFyhYiY",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-title-b63a0803d3653643-20ca2/b3292e60-9898-4813-869c-40b301b5ac0a/1stBirthday_Thumbnail_0.jpg",
      description: "Join the Minecraft party now!",
      tags: ["Minecraft", "Skin"]
    },
      {
      name: "2nd Birthday Skin Pack",
      url: "https://mega.nz/file/nX4DFDwL#2_rq3kTu8rrGMBA5uom7Wl3bNXDvfywDiXN-E-tA6dU",
      thumbnail: "https://cdn.mobygames.com/covers/2257914-minecraft-xbox-one-edition-2nd-birthday-skin-pack-xbox-one-front.png",
      description: "Dress up for the party… and celebrate Minecraft’s 2nd birthday with us!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "3rd Birthday Skin Pack",
      url: "https://mega.nz/file/vKhnmCzZ#cxYmVcs0koaBr-OiapnnSp-LKboApAduvuShFgtPBqA",
      thumbnail: "https://cdn.mobygames.com/covers/3222553-minecraft-xbox-one-edition-3rd-birthday-skin-pack-xbox-one-front.png",
      description: "Celebrate Minecraft’s 3rd Birthday on Xbox with the original Minecraft developers! Find their personal skins in this free celebration pack",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "MINECON Earth 2017 Skin Pack",
      url: "https://mega.nz/file/CGgxVDTS#-TTsQ14uo8OWc4AJ0I8X4xadCGTeBwIV2AmzTLsVwUc",
      thumbnail: "https://xforgeassets002.xboxlive.com/serviceid-18231953-4b1d-472c-a39e-48b10105b7b7-public/e08abe63-a71c-492d-a166-000d3b5cf121/MINECONEARTH_Thumbnail_0.jpg",
      description: "Join the party, wherever you are - and get dressed for the occasion with these fancy skins, celebrating everything from cosplay to cake! Available for a short time only, so get 'em fast!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "4th Birthday Skin Pack",
      url: "https://mega.nz/file/iToRUaTT#fTSy2j97vzccusFfaBoqOJVIa2wNGfc0A-cyJlLS_Z4",
      thumbnail: "https://cdn.mobygames.com/covers/2258952-minecraft-xbox-one-edition-4th-birthday-skin-pack-xbox-one-front.png",
      description: "Dress up for the party with this new, Free skin pack and celebrate together the 4th Minecraft birthday!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "Skin Pack 1 - Classic",
      url: "https://mega.nz/file/mGQX0DTI#4175Sds2e0YaumPxbdMrIU3ncPj1Raf_F7rVDgEMuCU",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-title-b63a0803d3653643-ee7b/db90b652-cfe4-40a5-bb5f-9e534d01daa4/SkinPack1Sony_Thumbnail_0.jpg",
      description: "A special edition of Skin Pack 1 for PlayStation®4, featuring exclusive characters plus favorites from the Classic version.",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "Skin Pack 2 - Classic",
      url: "https://mega.nz/file/3fAhRaDC#De-jm9rugzNWBLPJ6UxwMop0PiQgpwfvdLJ8stgPSpI",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-title-b63a0803d3653643-ee7b/65c0d4ee-e8f9-417d-97b1-3d05419fcf08/Minecraft_SkinPack2_Thumbnail_0.jpg",
      description: "Customise your Minecraft character with this 2nd selection of stunning skins!",
      tags: ["Minecraft", "Skin"]
    },
    {
      name: "Magic Spells",
      url: "https://mega.nz/file/XKYlGASY#Eue7W4aWbS29n0si7OuOYCmfL0icmtafNVv4q5lutPI",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/01bc5296-3c3d-4920-8333-cde9172f887b/Magic_Spells_thumbnail_0.jpg",
      description: "Level up your Minecraft world with 15 epic spells, custom magic armor, and powers like fireballs, minions, and time control—ready to transform any new or existing world!",
      tags: ["Cyclone", "Mod"]
    },
    {
      name: "Dinosaurs Add-On 2.1",
      url: "https://mega.nz/file/nfBCjbpR#jDmPFZIgh2Ma1UidZAtAdW1z4np6oxJ1VhlsjnTLYd4",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/28a45b12-4893-45ed-bea8-5f5deb20fb0e/dinos_addon_Thumbnail_0.jpg",
      description: "Travel back in time with the Dinosaurs Add-On—featuring 150+ biome-specific dinos, DNA extraction, morphing, taming, and new gear in the official Bedrock Edition of The Lost World Modpack!",
      tags: ["Honeyfrost", "Mod"]
    },
    {
      name: "More TNT! Add-On",
      url: "https://mega.nz/file/zHARBLBD#4kUNSR2C0lnoAKvJvBhbUoWLsdvWwiuGApNYdZHBYNw",
      thumbnail: "https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/be3c2cc1-8426-4486-914c-13aa4b0f11ef/MoreTNT_Thumbnail_0.jpg",
      description: "This explosive Add-On is pretty simple… It adds more TNT to any world you want! Craft yourself a wide selection of super overpowered and unique TNT types!",
      tags: ["Tsunami Studios", "Mod"]
    },
    {
      name: "DWELLERS 2.0 Add-On",
      url: "https://mega.nz/file/iKZRWR7T#I4Q4_hMk000WGN-R7v9dIFSyRRUZS2GTGCcTRl1p50M",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/5edd43a0-3004-4523-9aa2-d498069ef8c1/Dwellers_Thumbnail_0.jpg",
      description: "Enter a world of terror with DWELLERS—face jump scares, blood moons, and horrors like The Knocker, Shadow Dweller, and 6 Mimics, all packed with VFX, sounds, and creepy new items!",
      tags: ["Panascais", "Mod"]
    },
    {
      name: "Cherry Tree Temple",
      url: "https://mega.nz/file/OTBxQLJC#N5GpP8X4GidwC5shKmAK58Q6ZislVdBa5jtxDpla6PQ",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/f25534b8-4dcf-46c8-8354-26610f92d50b/CC_CTT24_Thumbnail_0.jpg",
      description: "UPDATED! Perched high in a massive cherry tree, this tiered treehouse temple is perfect for hangouts or battles—featuring a vast cherry forest, custom textures, and cherry-themed skins by CrackedCubes!",
      tags: ["CrackedCubes", "World"]
    },
    {
      name: "Cherry Tree Temple",
      url: "https://mega.nz/file/HLAyALDR#UKQ7wlOr6GHIWeXVaPTHypwZ04RYkhKrcRtp_LMOzKU",
      thumbnail: "https://xforgeassets002.xboxlive.com/pf-namespace-b63a0803d3653643/f25534b8-4dcf-46c8-8354-26610f92d50b/CC_CTT24_Thumbnail_0.jpg",
      description: "UPDATED! Perched high in a massive cherry tree, this tiered treehouse temple is perfect for hangouts or battles—featuring a vast cherry forest, custom textures, and cherry-themed skins by CrackedCubes!",
      tags: ["CrackedCubes", "Skin"]
    }
  ];

const container = document.getElementById("videoContainer");
const searchInput = document.getElementById("searchInput");
const movieTab = document.getElementById("movie-tab");
const minecraftTab = document.getElementById("minecraft-tab");

let currentTab = "movie";

function renderVideos(filter = "") {
  container.innerHTML = "";
  const keyword = filter.toLowerCase().trim();
  const isGenreSearch = keyword.startsWith("@");
  const searchTerm = isGenreSearch? keyword.slice(1) : keyword;

  const filtered = videos.filter(video => {
    if (isGenreSearch) {
      return video.genres.some(genre => genre.toLowerCase().includes(searchTerm));
    } else {
      return (
        video.name.toLowerCase().includes(searchTerm) ||
        video.description.toLowerCase().includes(searchTerm)
      );
    }
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No videos found.</p>";
    return;
  }

  filtered.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card"; 

    card.innerHTML = `
      <img loading="lazy" src="${video.thumbnail}" class="video-thumb" alt="Thumbnail for ${video.name}">
      <div class="video-title"><a href="${video.url}" target="_blank">${video.name}</a></div>
      <div class="video-desc">${video.description}</div>
      <div class="genres">
        ${video.genres.map(genre => `<span class="genre" onclick="renderVideos('@${genre}')">@${genre}</span>`).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

function renderMinecraft(filter = "") {
  container.innerHTML = "";
  const keyword = filter.toLowerCase().trim();
  const isTagSearch = keyword.startsWith("@");
  const searchTerm = isTagSearch? keyword.slice(1) : keyword;

  const filtered = minecraft.filter(pack => {
    if (isTagSearch) {
      return pack.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    } else {
      return (
        pack.name.toLowerCase().includes(searchTerm) ||
        pack.description.toLowerCase().includes(searchTerm)
      );
    }
  });

  if (filtered.length === 0) {
    container.innerHTML = "<p>No Minecraft packs found.</p>";
    return;
  }

  filtered.forEach(pack => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
      <img loading="lazy" src="${pack.thumbnail}" class="video-thumb" alt="Thumbnail for ${pack.name}">
      <div class="video-title"><a href="${pack.url}" target="_blank">${pack.name}</a></div>
      <div class="video-desc">${pack.description}</div>
      <div class="genres">
        ${pack.tags.map(tag => `<span class="genre" onclick="renderMinecraft('@${tag}')">@${tag}</span>`).join("")}
      </div>
    `;

    container.appendChild(card);
  });
}

function switchTab(tab) {
  if (tab === "movie") {
    movieTab.classList.add("active");
    minecraftTab.classList.remove("active");
    currentTab = "movie";
    renderVideos(searchInput.value);
  } else if (tab === "minecraft") {
    movieTab.classList.remove("active");
    minecraftTab.classList.add("active");
    currentTab = "minecraft";
    renderMinecraft(searchInput.value);
  }
}

// Debounce helper
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

searchInput.addEventListener("input", debounce(() => {
  if (currentTab === "movie") {
    renderVideos(searchInput.value);
  } else if (currentTab === "minecraft") {
    renderMinecraft(searchInput.value);
  }
}, 200));

renderVideos();