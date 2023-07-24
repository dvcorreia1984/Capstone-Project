const cards = [
  {
    image: 'Assets/Speakers/Yochai-Benkler.jpeg',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    text: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    image: 'Assets/Speakers/eva.jpg',
    name: 'Eva Vlaardingderbroek',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    text: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: 'Assets/Speakers/lila.jpg',
    name: 'Lila Tretiko',
    title: 'Executive Director of the Wikimedia Foundation',
    text: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    image: 'Assets/Speakers/kilnamchon.jpg',
    name: 'Kilnam Chon',
    title: 'Director of Entrepreneurial Legal Studies at Harvard Law School',
    text: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    image: 'Assets/Speakers/julia.jpg',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    text: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    image: 'Assets/Speakers/ryan.jpg',
    name: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    text: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

// Add only 2 cards for smaller screens
if (window.innerWidth < 768) {
  cards.length = 2;
}

const createCards = () => {
  for (let i = 0; i < cards.length; i += 1) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-container">
        <div class="chess">
        <img class="cardimage" src="${cards[i].image}" alt="${cards[i].name}">
      </div>
      <div class="grid-item grid-content">
        <h6 id="h6subtitle">${cards[i].name}</h6>
        <p id="cardsubtitle">${cards[i].title}</p>
        <line class="line grey-line"></line>
              <p id="h6text">${cards[i].text}</p>
        </div>
      </div>
    `;
    document.querySelector('.cards').appendChild(card);
  }
};

createCards();
