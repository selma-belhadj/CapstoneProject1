const speakers = [
  {
    name: 'Franz Dellinger',
    title: 'Director Business Operations – Emerging Markets',
    image: './images/FRANZDELLINGER.webp',
    description:
        'Serving as a catalyst for change that results in the growth of knowledge and wealth as economic indicators in Morgan.',
  },
  {
    name: 'Deepak Sharma',
    title: 'Head of Sales',
    image: './images/DEEPAKSHARMA.webp',
    description: "Deepak Sharma co-leads Simon-Kucher's global Software, Internet and Media practice with over 17 years of consulting.",
  },
  {
    name: 'Christin Schreyl',
    title: 'Head of Sales',
    image: './images/CHRISTINSCHREYL.webp',
    description:
          'Christin always knows how to keep track of things and to concentrate on the essentials. She has a professional approach to her work.',
  },
  {
    name: 'PROF. Florian Hummel',
    title: 'Prorector International',
    image: './images/FLORIANHUMMEL.webp',
    description:
          'Dr. Florian Hummel is an Associate Consultant with KK Aviation and a University Professor.  He holds a Bachelor degree from Brighton. ',
  },
  {
    name: 'Yuki Kobler',
    title: 'Director Marketing',
    image: './images/YUKIKOBLER.webp',
    description:
          'Bilingual Marketing Specialist with 15 years of relevant international work experience in the service and education sectors.',
  },
  {
    name: 'Modha Sandip',
    title: 'Assistant Professor of International Business',
    image: './images/Modhasandip.jpeg',
    description:
          'Sandip Modha works at LDRP Institute of Technology Gandhinagar. He does research in Information Retrieval and Digital Humanities.',
  },
];

const speakersWrap = document.querySelector('.speakers .list');
for (let i = 0; i < speakers.length; i += 1) {
  const speaker = speakers[i];
  speakersWrap.innerHTML += `
    <div class="speaker-card">
      <div class="image">
        <img src="${speaker.image}" alt="picture of ${speaker.name}" />
      </div>
      <div class="details">
        <h4>${speaker.name}</h4>
        <p class="description">${speaker.title}</p>
        <hr />
        <p>
          ${speaker.description}
        </p>
      </div>
    </div>
  `;
}

const moreBtn = document.querySelector('.more-btn');
moreBtn.addEventListener('click', () => {
  if (moreBtn.classList.contains('less-btn')) {
    moreBtn.querySelector('span').textContent = 'MORE';
    moreBtn.classList.remove('less-btn');
    document
      .querySelectorAll('.speakers .speaker-card:not(:first-child):not(:nth-child(2))')
      .forEach((c) => {
        c.style.display = 'none';
      });
    return;
  }

  moreBtn.querySelector('span').textContent = 'LESS';
  moreBtn.classList.add('less-btn');
  document.querySelectorAll('.speakers .list > .speaker-card').forEach((c) => {
    c.style.display = 'flex';
  });
});