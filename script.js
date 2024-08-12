document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&titles=${encodeURIComponent(query)}&inprop=url&origin=*`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pages = data.query.pages;
                const pageId = Object.keys(pages)[0];
                const page = pages[pageId];
                const resultText = document.getElementById('resultText');
                const resultLink = document.getElementById('resultLink');

                if (page.missing) {
                    resultText.textContent = 'Nenhum resultado encontrado.';
                    resultLink.href = '#';
                    resultLink.textContent = '';
                } else {
                    resultText.textContent = page.title;
                    resultLink.href = `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`;
                    resultLink.textContent = 'Leia na Wikipédia';
                }
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
                document.getElementById('resultText').textContent = 'Erro ao buscar dados.';
                document.getElementById('resultLink').href = '#';
                document.getElementById('resultLink').textContent = '';
            });
    } else {
        document.getElementById('resultText').textContent = 'Digite um texto para buscar.';
        document.getElementById('resultLink').href = '#';
        document.getElementById('resultLink').textContent = '';
    }
});
