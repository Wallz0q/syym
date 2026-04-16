import { stream } from "./api.js";

let currentSlug = "";
let currentEpisode = 1;

export async function playAnime(slug, episode = 1){
  currentSlug = slug;
    currentEpisode = episode;

      const data = await stream(slug, episode);

        const video = document.getElementById("video");
          video.src = data.stream_url;

            document.getElementById("playerBox").classList.remove("hidden");

              // AUTO NEXT
                video.onended = ()=>{
                    currentEpisode++;
                        playAnime(currentSlug, currentEpisode);
                          };
                          }