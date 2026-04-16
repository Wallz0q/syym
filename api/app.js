import { getHome, search } from "./api.js";
import { playAnime } from "./player.js";

const list = document.getElementById("animeList");

// LOAD HOME
async function loadHome(){
  const data = await getHome();

    render(data.data);
    }

    // RENDER
    function render(anime){
      list.innerHTML = "";

        anime.forEach(a=>{
            list.innerHTML += `
                  <div class="card" onclick="play('${a.slug}')">
                          <img src="${a.thumbnail}">
                                  <p>${a.title}</p>
                                        </div>
                                            `;
                                              });
                                              }

                                              // SEARCH
                                              window.searchAnime = async ()=>{
                                                const q = document.getElementById("search").value;
                                                  const data = await search(q);
                                                    render(data.data);
                                                    };

                                                    // PLAY GLOBAL
                                                    window.play = (slug)=>{
                                                      playAnime(slug, 1);
                                                      };

                                                      // INIT
                                                      loadHome();