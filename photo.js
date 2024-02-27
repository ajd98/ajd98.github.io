const sections = {
  names: [
    'Mountains',
    'Layers',
    'Nature'
  ],
  images: [
    'images/photography/thumb_mountain.jpg',
    'images/photography/devil_layers.jpg',
    'images/photography/thumb_hummingbird.jpg'
  ],
  ids: [
    'mountain-button',
    'layers-button',
    'nature-button'
  ]
}

const generalImages = [
  'images/photography/awe.jpg',
  'images/photography/edge.jpg',
  'images/photography/mp_sunset.jpg',
  'images/photography/trees_in_snow.jpg',
  'images/photography/cloud_line.jpg',
  'images/photography/b_waterfall.jpg',
  'images/photography/cm.jpg',
  'images/photography/er.jpg',
  'images/photography/pp.jpg',
  'images/photography/yy.jpg',
  'images/photography/moulin.jpg',
  'images/photography/trees_astro.jpg',
  'images/photography/cloud.jpg',
  'images/photography/shuksan.jpg',
  'images/photography/rainier_astro.jpg'
];

const layerImages = [
  'images/photography/pt_layers.jpg',
  'images/photography/agnes_layers.jpg',
  'images/photography/devil_layers.jpg',
  'images/photography/snoq_layers.jpg',
  'images/photography/wp_layers.jpg'
]

const natureImages = [
  'images/photography/hummingbird1.jpg',
  'images/photography/dragonfly.jpg',
  'images/photography/ptarmigan.jpg',
  'images/photography/bee.jpg',
  'images/photography/spider.jpg',
  'images/photography/hummingbird2.jpg',
  'images/photography/osprey.jpg',
  'images/photography/frog1.jpg',
  'images/photography/mushroom.jpg',
  'images/photography/fly.jpg',
  'images/photography/otter.jpg',
  'images/photography/frog2.jpg'
];

const scrollObserverOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1
}

const photoContainer = document.getElementById('photo-container');

function clearPhotoContainer() {
  while (photoContainer.firstChild) {
    photoContainer.removeChild(photoContainer.lastChild);
  }
}

function scrollObserverCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting & document.documentElement.scrollTop > 0) {
      const downArrow = document.getElementById('down-arrow');
      downArrow.classList.add('down-arrow-hidden');
    }
  });
}
const scrollObserver = new IntersectionObserver(scrollObserverCallback, scrollObserverOptions);


function use_arbitrary (imageList) {
  clearPhotoContainer();
  innerPhotoContainer = document.createElement('div');
  innerPhotoContainer.classList.add('inner-photo-container');
  photoContainer.appendChild(innerPhotoContainer);
  for (const [idx, imagePath] of imageList.entries()) {
    img = document.createElement('img');
    img.src = imagePath;
    img.classList.add('photo', 'fade', 'fadeOut');
    observer.observe(img);
    if (idx == 1) {
      scrollObserver.observe(img);
    }
    innerPhotoContainer.appendChild(img);
  }
  const arrow = document.createElement('img');
  arrow.src = 'images/back_arrow.svg';
  arrow.addEventListener('click', function () {
    clearPhotoContainer();
    generateMenu();
    window.scrollTo(0,0);
  });
  arrow.addEventListener('mouseover', function () {
    arrow.src = 'images/back_arrow_selected.svg';
  });
  arrow.addEventListener('mouseout', function () {
    arrow.src = 'images/back_arrow.svg';
  });
  arrow.classList.add('back-arrow');
  photoContainer.appendChild(arrow);
  const downArrow = document.createElement('img');
  downArrow.src = 'images/down_arrow.svg';
  downArrow.id = 'down-arrow';
  //function handleScroll () {
  //  downArrow.classList.add('down-arrow-hidden');
  //  window.removeEventListener('scroll', handleScroll);
  //}
  //window.addEventListener('scroll', handleScroll);
  
  photoContainer.appendChild(downArrow);
}

function useGeneral() {
  use_arbitrary(generalImages);
}

function useLayers() {
  use_arbitrary(layerImages);
}

function useNature() {
  use_arbitrary(natureImages);
}

function generateMenu() {
  const photoContainer = document.getElementById('photo-container');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('photo-menu-container');
  photoContainer.appendChild(menuContainer);
  for (const [idx, name] of sections.names.entries()) {
    const path = sections.images[idx];
    const id = sections.ids[idx];
    const link = document.createElement('div');
    link.id = id;
    link.classList.add('photo-nav-button');
    const text = document.createElement('a');
    const image = document.createElement('img');
    text.innerHTML = name;
    text.classList.add('nav-photo-label');
    image.src = path;
    image.classList.add('nav-photo');
    link.appendChild(image);
    link.appendChild(text);
    menuContainer.appendChild(link);
  }
  document.getElementById('mountain-button').addEventListener('click', useGeneral);
  document.getElementById('layers-button').addEventListener('click', useLayers);
  document.getElementById('nature-button').addEventListener('click', useNature);
}

generateMenu();
document.body.classList.replace('hidden', 'visible');
