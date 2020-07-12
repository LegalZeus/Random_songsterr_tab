function main() {
    artist_name = document.getElementById("inp").value;

    fetch("https://www.songsterr.com/a/ra/songs.json?pattern=" + artist_name)
        .then(res => res.json())
        .then(res => {
            let item = res[Math.floor(Math.random() * res.length)];
            console.log(item)
            artist = item['artist'].name
            song_title = item.title

            console.log(`${song_title} - (${artist})`)
            document.getElementById("out").innerText = `${song_title} - (${artist})`

            let song_link = `https://www.songsterr.com/a/wa/bestMatchForQueryString?s={${song_title}}&a={${artist}}`
            document.getElementById("tab-link").setAttribute("href", song_link)
            console.log(song_link)

        })
}
