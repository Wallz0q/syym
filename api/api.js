const BASE = "https://api.sonzaix.indevs.in";

// HOME
export async function getHome(){
  const res = await fetch(`${BASE}/samehada/home?page=1`);
    return res.json();
    }

    // SEARCH
    export async function search(q){
      const res = await fetch(`${BASE}/samehada?search=${q}`);
        return res.json();
        }

        // DETAIL
        export async function detail(slug){
          const res = await fetch(`${BASE}/samehada?detail=${slug}`);
            return res.json();
            }

            // STREAM
            export async function stream(slug, ep){
              const res = await fetch(`${BASE}/samehada?stream=${slug}-episode-${ep}`);
                return res.json();
                }