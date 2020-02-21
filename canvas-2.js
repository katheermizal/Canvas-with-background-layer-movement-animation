$(() => {  
  var fixedLayer = new Image();
  var topLayer = new Image();
  var bottomLayer = new Image();
  var canvas = document.getElementById('hero-canvas');
  var context = canvas.getContext('2d');
  var x = canvas.width;
  var y = 0;


  fixedLayer.src = 'fixed-gr.png';
  topLayer.src = "top-layer.png";
  bottomLayer.src = 'bottom-layer.png';

  var h = window.innerHeight;
  var w = window.innerWidth;

  canvas.height = h;
  canvas.width = w;

  window.requestAnimFrame = function () {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  //moving image
  var mover = {
    x: 0,
    y: 0,
    down: true,
    right: true,
    up: true
  }

  function animate() {
    clear();
    render();
    requestAnimFrame(animate);
  }

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function render() {
    //set direction
    if (mover.down && mover.y >= 30)
      mover.down = false;

    if (!mover.down && mover.y <= 0)
      mover.down = true;

    if (mover.right && mover.x >= 30)
      mover.right = false;

    if (!mover.right && mover.x <= 0)
      mover.right = true;
//make move
    if (mover.down)
      mover.y += 0.4;
    else
      mover.y -= 0.4;
  
    
    if (mover.right)
      mover.x += 0.4;
    else
    mover.x -= 0.4;

	context.drawImage(topLayer, 0, mover.y,topLayer.width, topLayer.height,  
                     0, 0, canvas.width, canvas.height); 
    context.drawImage(bottomLayer, mover.x, 0,bottomLayer.width, bottomLayer.height,  
                     0, 0, canvas.width, canvas.height);
	context.drawImage(fixedLayer, 0, 0,fixedLayer.width, fixedLayer.height,  
                     0, 0, canvas.width, canvas.height);
  }

	animate();
});