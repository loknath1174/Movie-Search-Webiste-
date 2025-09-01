const Series=[
  {
    id: 1,
    name: 'Stranger Things',
    image: 'https://images.plex.tv/photo?size=large-1280&scale=1&url=https:%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FrbnuP7hlynAMLdqcQRCpZW9qDkV.jpg',
    description: 'In a small town in the 1980s, a group of kids uncover supernatural mysteries involving secret experiments and a terrifying alternate dimension.',
    director: 'The Duffer Brothers',
    videoUrl: 'https://youtu.be/mnd7sFt5c3A?si=ksbq4DXYuPqRaZ6r',
    cast: [
      { id: 1, name: 'Millie Bobby Brown' },
      { id: 2, name: 'Finn Wolfhard' },
      { id: 3, name: 'David Harbour' }
    ],
    directors: [
      { id: 1, name: 'Matt Duffer' },
      { id: 2, name: 'Ross Duffer' }
    ],
    genres: [
      { id: 1, name: 'Drama' },
      { id: 2, name: 'Fantasy' },
      { id: 3, name: 'Horror' }
    ],
    rating: '8.7',
    releaseDate: '2016-07-15',
    runtime: 50,
    popularity: 98.5,
    votes: 1400000,
    revenue: 'N/A',
    budget: '$6 million per episode',
    homepage: 'https://www.imdb.com/title/tt4574334/'
  },
  {
    id: 2,
    name: 'The Witcher',
    image: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/06/the-witcher-netflix-poster.jpg',
    description: 'Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.',
    director: 'Lauren Schmidt Hissrich',
    videoUrl: 'https://youtu.be/ndl1W4ltcmg?si=qU5yWW-MbCGwCB8N',
    cast: [
      { id: 1, name: 'Henry Cavill' },
      { id: 2, name: 'Anya Chalotra' },
      { id: 3, name: 'Freya Allan' }
    ],
    directors: [{ id: 1, name: 'Lauren Schmidt Hissrich' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
      { id: 3, name: 'Fantasy' }
    ],
    rating: '8.1',
    releaseDate: '2019-12-20',
    runtime: 60,
    popularity: 92.4,
    votes: 370000,
    revenue: 'N/A',
    budget: '$10 million per episode',
    homepage: 'https://www.imdb.com/title/tt5180504/'
  },
  {
    id: 3,
    name: 'Money Heist ',
    image: 'https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844',
    description: 'A criminal mastermind known as "The Professor" recruits eight people with unique skills to carry out the biggest heist in history.',
    director: 'Álex Pina',
    videoUrl: 'https://youtu.be/_InqQJRqGW4?si=2uKAmclEqzPhFAqN',
    cast: [
      { id: 1, name: 'Álvaro Morte' },
      { id: 2, name: 'Úrsula Corberó' },
      { id: 3, name: 'Pedro Alonso' }
    ],
    directors: [{ id: 1, name: 'Álex Pina' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Crime' },
      { id: 3, name: 'Drama' }
    ],
    rating: '8.2',
    releaseDate: '2017-05-02',
    runtime: 70,
    popularity: 96.3,
    votes: 580000,
    revenue: 'N/A',
    budget: '$2 million per episode',
    homepage: 'https://www.imdb.com/title/tt6468322/'
  },
  {
    id: 4,
    name: 'Breaking Bad',
    image: 'https://th.bing.com/th/id/R.fa6199280ffbbd0352af90d3ca549ce6?rik=VAW2HGGHsHhJLw&riu=http%3a%2f%2ffr.web.img5.acsta.net%2fpictures%2f19%2f06%2f18%2f12%2f11%2f3956503.jpg&ehk=Q3YzE8DgsXOotmqIF00vZilbvzFmImuvCqGNJ2Ra9C4%3d&risl=&pid=ImgRaw&r=0',
    description: 'A high school chemistry teacher turned methamphetamine producer partners with a former student, leading to dangerous consequences.',
    director: 'Vince Gilligan',
    videoUrl: 'https://youtu.be/HhesaQXLuRY?si=F_fHo3uN9RewJtKk',
    cast: [
      { id: 1, name: 'Bryan Cranston' },
      { id: 2, name: 'Aaron Paul' },
      { id: 3, name: 'Anna Gunn' }
    ],
    directors: [{ id: 1, name: 'Vince Gilligan' }],
    genres: [
      { id: 1, name: 'Crime' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'Thriller' }
    ],
    rating: '9.5',
    releaseDate: '2008-01-20',
    runtime: 47,
    popularity: 99.0,
    votes: 2100000,
    revenue: 'N/A',
    budget: '$3 million per episode',
    homepage: 'https://www.imdb.com/title/tt0903747/'
  },
  {
    id: 5,
    name: 'Game of Thrones',
    image: 'https://i.redd.it/h7uga1bv24fz.jpg',
    description: 'Nine noble families wage war for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    director: 'David Benioff, D.B. Weiss',
    videoUrl: 'https://youtu.be/KPLWWIOCOOQ?si=7uJk-rpx2uFd3V0b',
    cast: [
      { id: 1, name: 'Emilia Clarke' },
      { id: 2, name: 'Kit Harington' },
      { id: 3, name: 'Peter Dinklage' }
    ],
    directors: [
      { id: 1, name: 'David Benioff' },
      { id: 2, name: 'D.B. Weiss' }
    ],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'Fantasy' }
    ],
    rating: '9.2',
    releaseDate: '2011-04-17',
    runtime: 57,
    popularity: 99.3,
    votes: 2100000,
    revenue: 'N/A',
    budget: '$15 million per episode',
    homepage: 'https://www.imdb.com/title/tt0944947/'
  },
  {
    id: 6,
    name: 'The Boys',
    image: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-boys-season-4-poster-showing-homelander-with-victoria-neuman-surrounded-by-confetti.jpg',
    description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their powers.',
    director: 'Eric Kripke',
    videoUrl: 'https://youtu.be/M1bhOaLV4FU?si=VZsLGpV-DZruDiBe',
    cast: [
      { id: 1, name: 'Karl Urban' },
      { id: 2, name: 'Jack Quaid' },
      { id: 3, name: 'Antony Starr' }
    ],
    directors: [{ id: 1, name: 'Eric Kripke' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Crime' },
      { id: 3, name: 'Drama' }
    ],
    rating: '8.7',
    releaseDate: '2019-07-26',
    runtime: 60,
    popularity: 94.8,
    votes: 550000,
    revenue: 'N/A',
    budget: '$11 million per episode',
    homepage: 'https://www.imdb.com/title/tt1190634/'
  },
  {
    id: 7,
    name: 'Loki',
    image: 'https://kenh14cdn.com/203336854389633024/2021/6/7/bztiga-16230402472372099821172.jpeg',
    description: 'The God of Mischief steps out of his brother’s shadow to embark on an adventure that takes place after the events of Avengers: Endgame.',
    director: 'Kate Herron',
    videoUrl: 'https://youtu.be/nW948Va-l10?si=5A3eU_k-y5Y2Ol_G',
    cast: [
      { id: 1, name: 'Tom Hiddleston' },
      { id: 2, name: 'Owen Wilson' },
      { id: 3, name: 'Sophia Di Martino' }
    ],
    directors: [{ id: 1, name: 'Kate Herron' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
      { id: 3, name: 'Fantasy' }
    ],
    rating: '8.2',
    releaseDate: '2021-06-09',
    runtime: 50,
    popularity: 93.5,
    votes: 370000,
    revenue: 'N/A',
    budget: '$9 million per episode',
    homepage: 'https://www.imdb.com/title/tt9140554/'
  },
  {
    id: 8,
    name: 'Squid Game',
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/09/squid-game-poster.jpg',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children’s games for a tempting prize, but deadly stakes.',
    director: 'Hwang Dong-hyuk',
    videoUrl: 'https://youtu.be/oqxAJKy0ii4?si=JqFypWRUheCETzJP',
    cast: [
      { id: 1, name: 'Lee Jung-jae' },
      { id: 2, name: 'Park Hae-soo' },
      { id: 3, name: 'Wi Ha-joon' }
    ],
    directors: [{ id: 1, name: 'Hwang Dong-hyuk' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'Thriller' }
    ],
    rating: '8.0',
    releaseDate: '2021-09-17',
    runtime: 55,
    popularity: 97.2,
    votes: 600000,
    revenue: 'N/A',
    budget: '$21.4 million total',
    homepage: 'https://www.imdb.com/title/tt10919420/'
  },
  {
    id: 9,
    name: 'Peaky Blinders',
    image: 'https://starsmydestination.files.wordpress.com/2020/08/peaky_blinders_4.jpg',
    description: 'A gangster family epic set in 1900s England, centering on a gang who sews razor blades into the peaks of their caps.',
    director: 'Steven Knight',
    videoUrl: 'https://youtu.be/oVzVdvGIC7U?si=ZQ0oLW1o3cB7xYrs',
    cast: [
      { id: 1, name: 'Cillian Murphy' },
      { id: 2, name: 'Paul Anderson' },
      { id: 3, name: 'Helen McCrory' }
    ],
    directors: [{ id: 1, name: 'Steven Knight' }],
    genres: [
      { id: 1, name: 'Crime' },
      { id: 2, name: 'Drama' },
      { id: 3, name: 'History' }
    ],
    rating: '8.8',
    releaseDate: '2013-09-12',
    runtime: 60,
    popularity: 91.9,
    votes: 580000,
    revenue: 'N/A',
    budget: '$1.5 million per episode',
    homepage: 'https://www.imdb.com/title/tt2442560/'
  },
  {
    id: 10,
    name: 'The Mandalorian',
    image: 'https://tse3.mm.bing.net/th/id/OIP.9TLOgOEPUtYuRLo0IaFBwgHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.',
    director: 'Jon Favreau',
    videoUrl: 'https://youtu.be/aOC8E8z_ifw?si=GHwnsUuOi4Wns1rj',
    cast: [
      { id: 1, name: 'Pedro Pascal' },
      { id: 2, name: 'Gina Carano' },
      { id: 3, name: 'Carl Weathers' }
    ],
    directors: [{ id: 1, name: 'Jon Favreau' }],
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
      { id: 3, name: 'Sci-Fi' }
    ],
    rating: '8.7',
    releaseDate: '2019-11-12',
    runtime: 40,
    popularity: 94.2,
    votes: 540000,
    revenue: 'N/A',
    budget: '$15 million per episode',
    homepage: 'https://www.imdb.com/title/tt8111088/'
  },
{
  id: 11,
  name: "Wednesday Season 1",
  image: "https://artworks.thetvdb.com/banners/v4/season/1928012/posters/637dd90704f91.jpg",
  description: "Wednesday Addams, a student at Nevermore Academy, investigates mysteries .",
  director: "Tim Burton",
  videoUrl: "https://youtu.be/Di310WS8zLk?si=UV79kmv44vvT-IFe",
  cast: [
    { id: 1, name: "Jenna Ortega" },
    { id: 2, name: "Catherine Zeta-Jones" },
    { id: 3, name: "Luis Guzmán" }
  ],
  directors: [{ id: 1, name: "Tim Burton" }],
  genres: [
    { id: 1, name: "Supernatural" },
    { id: 2, name: "Mystery" },
    { id: 3, name: "Comedy" }
  ],
  rating: 8.1,
  releaseDate: "2022-11-23",
  runtime: 60,
  popularity: 95.4,
  votes: 350000,
  revenue: "N/A",
  budget: "N/A",
  homepage: "https://www.netflix.com/title/81231974"
}


]
export default Series