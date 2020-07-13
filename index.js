function main() {
    artist_name = document.getElementById("inp").value;

    fetch("//www.songsterr.com/a/ra/songs.json?pattern=" + artist_name)

    fetch("https://www.songsterr.com/a/ra/songs.json?pattern=" + artist_name)

    fetch("//www.songsterr.com/a/ra/songs.json?pattern=" + artist_name)

    .then(res => res.json())
        .then(res => {
            let item = res[Math.floor(Math.random() * res.length)];
            console.log(item)
            artist = item['artist'].name
            song_title = item.title

            console.log(`${song_title} - (${artist})`)
            document.getElementById("out").innerText = `${song_title} - (${artist})`


            let song_link = `//www.songsterr.com/a/wa/bestMatchForQueryString?s={${song_title}}&a={${artist}}`

            document.getElementById("tab-link").setAttribute("href", song_link)
            document.getElementById("tab-link").style.visibility = "visible"
            console.log(song_link)

        })
}