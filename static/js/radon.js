

/* ===============================
   Radon Transform
=============================== */
function radonTransform(imageData, width, height, angles) {
  const sinogram = [];
  const srcCanvas = document.createElement('canvas');
  const srcCtx = srcCanvas.getContext('2d');
  srcCanvas.width = width;
  srcCanvas.height = height;
  srcCtx.putImageData(imageData,0,0);

  const offCanvas = document.createElement('canvas');
  const offCtx = offCanvas.getContext('2d');
  const diag = Math.ceil(Math.sqrt(width*width + height*height));
  offCanvas.width = diag;
  offCanvas.height = diag;

  angles.forEach(theta=>{
    offCtx.clearRect(0,0,diag,diag);
    offCtx.save();
    offCtx.translate(diag/2, diag/2);
    offCtx.rotate(theta*Math.PI/180);
    offCtx.translate(-width/2, -height/2);
    offCtx.drawImage(srcCanvas,0,0);
    offCtx.restore();

    const data = offCtx.getImageData(0,0,diag,diag).data;
    const proj = new Float32Array(diag);
    for (let x=0;x<diag;x++){
      let sum=0;
      for (let y=0;y<diag;y++){
        sum += data[(y*diag + x)*4]; // red channel
      }
      proj[x]=sum;
    }
    sinogram.push(proj);
  });

  return sinogram;
}



/* ===============================
   Compute Radon
=============================== */
function computeRadon(){
  let flag = false;
  //if (grid.flat().join('') === lastGuess){return;}

  if (Mode != "Explore"){
    if((grid.flat().join('') === answer) && !Solved){
        Guesses++;
        Solved = true;
        flag = true;
    }

    if(!Solved){
        Guesses++;
        topText.innerHTML = "Guesses: " + Guesses;
    } else {
        topText.innerHTML = "Final guesses: " + Guesses;
    }
  }
  if (!Solved || flag) {
    const imageData = dataCtx.getImageData(0,0,dataCanvas.width,dataCanvas.height);
    const angles = [];
    for (let a = -90; a <= 90; a += snap) {
        angles.push(a);
    }
    sinogram = radonTransform(imageData, imageData.width, imageData.height, angles);
  }
  drawBothCanvases();
}

function computeSinogramForGrid(tempGrid) {
  // Backup real grid
  const originalGrid = grid;

  // Replace grid temporarily
  grid = tempGrid;

  // Draw ONLY to data canvas (not UI)
  drawDataCanvas();
  const imageData = dataCtx.getImageData(0, 0, dataCanvas.width, dataCanvas.height);

  // Restore grid
  grid = originalGrid;

  // Compute snapped-angle sinogram
  const angles = [];
  for (let a = -90; a <= 90; a += snap) angles.push(a);

  return radonTransform(imageData, imageData.width, imageData.height, angles);
}
