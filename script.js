document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query) {
        const cifraClubUrl = `https://www.cifraclub.com.br/busca/?q=${encodeURIComponent(query)}`;
        const songsterrUrl = `https://www.songsterr.com/a/wa/songlist?s=${encodeURIComponent(query)}`;
        const ultimateGuitarUrl = `https://www.ultimate-guitar.com/search.php?search_type=&value=${encodeURIComponent(query)}`;

        document.getElementById('cifraClubLink').href = cifraClubUrl;
        document.getElementById('songsterrLink').href = songsterrUrl;
        document.getElementById('ultimateGuitarLink').href = ultimateGuitarUrl;

        document.getElementById('cifraClub').style.display = 'block';
        document.getElementById('songsterr').style.display = 'block';
        document.getElementById('ultimateGuitar').style.display = 'block';
    } 
    else 
    {
        document.getElementById('cifraClub').style.display = 'none';
        document.getElementById('songsterr').style.display = 'none';
        document.getElementById('ultimateGuitar').style.display = 'none';
    }
});
