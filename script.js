document.addEventListener('DOMContentLoaded', () => {
    const feedContainer = document.getElementById('feed-container');

    // Fülle diese Liste mit neuen Einträgen um weitere Posts zu erstellen
    // type: 'post' oder 'reel'
    // avatar: Das Profilbild des Posts - wenn fehlt gibt es ein Standard Bild
    // mediaSrc: Post oder Bild
    // likes: Wie viele Likes
    // comment: Hier kannst du Kommentare einfügen (wenn erwünscht)
    const feedData = [
        {
            type: 'post',
            username: 'Fake Tagesschau',
            avatar: '', // Pfad zu deinem Avatar-Bild
            mediaSrc: 'media/post1.jpg',  // Pfad zu deinem Post-Bild
            caption: 'Das ist der erste Post, und zwar ein Bild.',
            likes: 125,
            comments: [
                { user: 'Lukas', text: 'Du kannst auch eigene Kommentare eingeben!' },
                { user: 'Lukas', text: 'Du kannst auch eigene Kommentare eingeben!' }
            ]
        },
        {
            type: 'reel', // Hier ist es ein Reel
            username: 'Fake F1',
            avatar: 'media/avatar2.jpg',
            mediaSrc: 'media/reel1.mp4', // Pfad zu deinem Reel-Video (MP4, WebM, etc.)
            caption: 'Das ist der zweite Post, und zwar ein Reel',
            likes: 345,
            comments: [
            ]
        }
        // Füge hier weitere Post-Objekte hinzu!
    ];

    // Funktion zum Erstellen eines Post-Elements
    function createPostElement(post) {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        postCard.innerHTML = `
            <div class="post-header">
                ${post.avatar=== '' ? 
                `<img src="media/profile_pic.jpg" alt="${post.username}" class="profile-picture">` :
                `<img src="${post.avatar}" alt="${post.username}" class="profile-picture">`
                }
                <span class="username">${post.username}</span>
            </div>
            ${post.type === 'post' ? 
                `<img src="${post.mediaSrc}" alt="Post Image" class="post-media">` :
                `<video src="${post.mediaSrc}" class="post-media video" controls loop muted playsinline></video>`
            }
            <div class="post-actions">
                <div class="left-icons">
                    <img src="media/icon_heart.png" alt="Like">
                    <img src="media/icon_comment.png" alt="Comment">
                    <img src="media/icon_share.png" alt="Share">
                </div>
                <div class="right-icons">
                    <img src="media/icon_save.png" alt="Save">
                </div>
            </div>
            <div class="likes-count">Gefällt ${post.likes} Mal</div>
            <div class="post-caption">
                <span class="username">${post.username}</span> ${post.caption}
            </div>
            ${post.comments.length > 0 ? `<div class="post-comments">
                ${post.comments.map(comment => `<p><b>${comment.user}</b> ${comment.text}</p>`).join('')}
            </div>` : ''}
            <div class="post-time">View all comments</div>
            
            <hr>
        `;
        return postCard;
    }

    // Schleife durch die Daten und füge Posts zum Feed hinzu
    feedData.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });

    // Optional: Füge hier Dummy-Icons für die Aktionen hinzu
    // Du musst diese Bilder (icon_heart.png, icon_comment.png, etc.) selbst erstellen
    // oder von einer Icon-Bibliothek herunterladen und in den 'media'-Ordner legen.
    // Beispiel: Du kannst Font Awesome Icons verwenden und als PNG speichern oder direkt als SVG im HTML nutzen.
});