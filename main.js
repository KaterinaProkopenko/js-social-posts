const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let arrayLikes = [];

posts.forEach((element) => {
    createPost(element.author['image'], element.author['name'], element.created, element.content, element.media, element.likes);
    arrayLikes.push(element.likes);
});

const button = document.querySelectorAll('a.like-button');
console.log(button);

button.forEach((element) => {
    console.log(element);
    element.addEventListener('click', function() {
        this.style.color = "red";
        arrayLikes.forEach((element) => {
            console.log(element + 1);
        });
    });
});



function createPost(imgProfile, name, date, text, img, likes) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');
    document.getElementById('container').appendChild(postContainer);

    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    postContainer.appendChild(postHeader);

    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.appendChild(postMeta);

    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.appendChild(postMetaIcon);

    const imageProfile = document.createElement('img');
    imageProfile.classList.add('profile-pic');
    imageProfile.src = imgProfile;
    postMetaIcon.appendChild(imageProfile);

    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.appendChild(postMetaData);

    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaData.appendChild(postMetaAuthor);
    postMetaAuthor.innerHTML += name;

    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaData.appendChild(postMetaTime);
    postMetaTime.innerHTML += date;

    const postText = document.createElement('div');
    postText.classList.add('post__text');
    postContainer.appendChild(postText);
    postText.innerHTML += text;

    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    postContainer.appendChild(postImage);

    const contentImage = document.createElement('img');
    contentImage.src = img;
    postImage.appendChild(contentImage);

    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    postContainer.appendChild(postFooter);

    const likesJs = document.createElement('div');
    likesJs.classList.add('likes', 'js-likes');
    postFooter.appendChild(likesJs);

    const likesCta = document.createElement('div');
    likesCta.classList.add('likes', 'js-likes');
    likesJs.appendChild(likesCta);
    likesCta.innerHTML = `
    <a class="like-button  js-like-button" href="#" data-postid="1">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    </a>`;

    const likesCounter = document.createElement('div');
    likesCounter.classList.add('likes__counter');
    likesJs.appendChild(likesCounter);
    likesCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone`;
};



