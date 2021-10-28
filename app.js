const usersBox = document.querySelector('#users-list');
const albumsBox = document.querySelector('#albums-list');
const errorBox = document.querySelector('#error-message');

const modal = document.querySelector('.modal');
const modalBody = modal.querySelector('.modal-body');
const btnClose = modal.querySelector('.btn-close');

const URL = 'https://jsonplaceholder.typicode.com';

let users = [];
let albums = [];
let photos = [];

const main = () => {
    getAllUsers();
};

const getAllUsers = async () => {
    try {
        const response = await fetch(`${URL}/users`);
        users = await response.json();
    } catch (e) {
        workWithError(e);
    }

    renderUsers();
};

const renderUsers = () => {
    users.forEach(user => {
        const box = document.createElement('div');
        box.className = 'list-group-item';
        box.textContent = `${user.username} (${user.email})`;
        box.addEventListener('click', () => {
            clickUserHandler( user.id )
        });
        usersBox.append(box);
    });
};

const clickUserHandler = userId => {
    getAlbumsByUserId(userId);
};

const getAlbumsByUserId = async userId => {
    try {
        const response = await fetch(`${URL}/albums?userId=${userId}`);
        albums = await response.json();
    } catch (e) {
        workWithError(e);
    }
    renderAlbums();
};

const renderAlbums = () => {
    albumsBox.innerHTML = '';
    albums.forEach(album => {
        const box = document.createElement('div');
        box.className = 'list-group-item';
        box.textContent = album.title;
        box.addEventListener('click', () => {
            clickAlbumHandler(album.id);
        });
        albumsBox.append(box);
    });
};

const clickAlbumHandler = albumId => {
    getPhotosByAlbumId(albumId);
};

const getPhotosByAlbumId = async albumId => {
    try {
        const response = await fetch(`${URL}/photos?albumId=${albumId}`);
        photos = await response.json();
    } catch (e) {
        workWithError(e);
    }
    renderPhotos();
};

const renderPhotos = () => {
    modalBody.innerHTML = '';
    photos.forEach(photo => {
        const box = document.createElement('div');
        box.className = 'col-sm-3 pb-3 text-center photo-card';
        const img = document.createElement('img');
        img.className = 'img-fluid';
        img.src = photo.thumbnailUrl;
        img.alt = photo.title;
        const title = document.createElement('h4');
        title.textContent = photo.title;
        box.append(img, title);
        // box.append(title)
        modalBody.append(box);
    })
    openModalWindow();
};

const openModalWindow = () => {
    modal.classList.add('modal-show');
};

const closeModalWindow = () => {
    modal.classList.remove('modal-show');
};

const workWithError = error => {
    console.log( error.message );
    let errorMsg = '';
    if (error.message === 'Failed to fetch') {
        errorMsg = "Сервер недоступен. Повторите попытку позже!";
    }
    errorBox.textContent = errorMsg ?? error.message;
    errorBox.classList.remove('hidden');
};

btnClose.addEventListener( 'click', (event) => {
    event.preventDefault();
    closeModalWindow();
});

main();