document.addEventListener('DOMContentLoaded', () => {
    // Llama al archivo JSON para obtener los datos
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('biblioteca');
            
            // Recorre cada libro en el JSON y crea su estructura en HTML
            data.forEach((libro) => {
                const card = document.createElement('div');
                card.className = 'book-card';
                
                card.innerHTML = `
                    <div class="book-cover-container">
                        <img src="${libro.imagen}" alt="Portada de ${libro.titulo}" class="book-image">
                    </div>
                    <div class="book-info">
                        <h2 class="book-title">${libro.titulo}</h2>
                        <div class="book-author"><i class="fas fa-pen-nib"></i> ${libro.autor}</div>
                        <p class="book-desc">${libro.descripcion}</p>
                        <a href="${libro.link}" class="btn" target="_blank">
                            <i class="fas fa-cloud-download-alt"></i> Obtener Libro
                        </a>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error cargando la biblioteca:', error);
            document.getElementById('biblioteca').innerHTML = '<p style="text-align:center; padding: 2rem;">Error al cargar la colección. Por favor verifica tu conexión.</p>';
        });
});
