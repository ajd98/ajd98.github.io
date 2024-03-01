var backgroundImage = new Image();
backgroundImage.src = 'images/glacier3.jpg'
var canvas = document.getElementById('background');

function updateBackgroundSize(event) {
  let ctx = canvas.getContext('2d');
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)*window.devicePixelRatio;
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)*window.devicePixelRatio;
  canvas.width = vw;
  canvas.height = vh;

  let dx = 0;
  let dy = 0;
  let dWidth = vw;
  let dHeight = vh;
  let sx = 0;
  let sy = 0;
  let sHeight = 0;
  let sWidth = 0;
  // Viewport has wider aspect ratio than backgroundImage
  if (vw/vh > backgroundImage.naturalWidth/backgroundImage.naturalHeight) {
    sx = 0;
    sWidth = backgroundImage.naturalWidth;
    sHeight = ((vh/vw)/(backgroundImage.naturalHeight/backgroundImage.naturalWidth))*backgroundImage.naturalHeight;
    sy = (backgroundImage.naturalHeight-sHeight)/10;
    //sy = 0
  // Viewport has taller aspect ratio than backgroundImage
  } else {
    sy = 0;
    sHeight = backgroundImage.naturalHeight;
    sWidth = ((vw/vh)/(backgroundImage.naturalWidth/backgroundImage.naturalHeight))*backgroundImage.naturalWidth;
    sx = (backgroundImage.naturalWidth-sWidth)/7;
    //sx = 0;
  }
  //console.log(sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  ctx.drawImage(backgroundImage, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
}
window.addEventListener('resize', updateBackgroundSize);
backgroundImage.addEventListener('load', updateBackgroundSize);
backgroundImage.addEventListener('load', function (event) {
  document.body.classList.remove('hidden');
  document.body.classList.add('visible');
});
