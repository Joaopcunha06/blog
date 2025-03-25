document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        let views = localStorage.getItem(`views_${postId}`);
        views = views ? parseInt(views) + 1 : 1;
        localStorage.setItem(`views_${postId}`, views);
        document.getElementById('viewsPost').innerText = views;
    }
});
