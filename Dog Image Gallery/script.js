document.getElementById('load-images').addEventListener('click', loadDogImages);

function loadDogImages() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear the gallery

    fetch('https://dog.ceo/api/breeds/image/random/10')
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching dog images:', error));
}