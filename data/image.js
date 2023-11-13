let images = [
    { id: 1, title: 'Godisable Jacob', url: '/images/pexels-godisable-jacob.jpg' },
    { id: 2, title: 'Hiago Italo', url: '/images/pexels-hiago-italo.jpg' },
    { id: 3, title: 'Hia Nguyen', url: '/images/pexels-hải-nguyễn.jpg' },
    { id: 4, title: 'JC Laurio', url: '/images/pexels-jc-laurio.jpg' },
    { id: 5, title: 'Jennifer Enujiugha', url: '/images/pexels-jennifer-enujiugha-1.jpg' },
    { id: 6, title: 'Jermainer Ulinwa', url: '/images/pexels-jermaine-ulinwa.jpg' },
    { id: 7, title: 'Arsham Haghani', url: '/images/pexels-arsham-haghani.jpg'},
    { id: 8, title: 'Aryane Vilarim', url: '/images/pexels-aryane-vilarim.jpg'},
    { id: 9, title: 'Engin Akyurt', url: '/images/pexels-engin-akyurt.jpg'},
    { id: 10, title: 'Maria Orlova', url: '/images/pexels-maria-orlova.jpg'},
    { id: 11, title: 'Seun Oderinde', url: '/images/pexels-seun-oderinde.jpg'},
    { id: 12, title: 'Yuri Manei', url: '/images/pexels-yuri-manei.jpg'},
    { id: 13, title: 'Juliana Stein', url: '/images/pexels_juliana_stein.jpg'},
    { id: 14, title: 'Alisa', url: '/images/Alisa.jpg'},
    { id: 15, title: 'Amila', url: '/images/Amila.jpg'},
    { id: 16, title: 'Kate', url: '/images/Kate.jpg'}

];

module.exports = {
    getImages: () => images,
    addImage: (newImage) => {
        images.push(newImage);
        return images;
    },
    setImages: (newImages) => {
        images = newImages;
        return images;
    },
};