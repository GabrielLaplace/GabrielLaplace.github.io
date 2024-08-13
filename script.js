document.getElementById('searchCifra').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query) {
        const cifraClubUrl = `https://www.cifraclub.com.br/?q=${encodeURIComponent(query)}`;
        document.getElementById('cifraClubLink').href = cifraClubUrl;
        document.getElementById('cifraClub').style.display = 'block';
    } 
    else 
    {
        document.getElementById('cifraClub').style.display = 'none';
    }
});

document.getElementById('searchSongster').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query) {
        const songsterrUrl = `https://www.songsterr.com/?pattern=${encodeURIComponent(query)}`;
        document.getElementById('songsterrLink').href = songsterrUrl;
        document.getElementById('songsterr').style.display = 'block';
    } 
    else 
    {
        document.getElementById('songsterr').style.display = 'none';
    }
});

document.getElementById('searchUltimate').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
       
    if (query) {
        const ultimateGuitarUrl = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(query)}`;
        document.getElementById('ultimateGuitarLink').href = ultimateGuitarUrl;
        document.getElementById('ultimateGuitar').style.display = 'block';
    } 
    else 
    {
        document.getElementById('ultimateGuitar').style.display = 'none';
    }
});
