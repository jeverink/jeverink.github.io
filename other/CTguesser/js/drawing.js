
/* ===============================
   Graphics settings
=============================== */

const color_projection = 'rgba(255, 0, 0, 0.9)';
const lw_projection = 5;

const color_reference = 'rgba(0, 255, 0, 0.9)';
const lw_reference = 5;

const color_highlight = 'yellow';
const lw_highlight = 2;


/* ===============================
   Drawing functions
=============================== */
function drawBothCanvases() {
  drawDataCanvas();
  drawUICanvas();
}

function drawDataCanvas() {
  dataCtx.fillStyle = '#000';
  dataCtx.fillRect(0, 0, dataCanvas.width, dataCanvas.height);
  drawLetters(dataCtx);
}

function drawUICanvas() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // grid lines
  ctx.strokeStyle = '#333';
  for (let i = 0; i <= N; i++) {
    ctx.beginPath();
    ctx.moveTo(i*cellSize, 0);
    ctx.lineTo(i*cellSize, canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i*cellSize);
    ctx.lineTo(canvas.width, i*cellSize);
    ctx.stroke();
  }

  // letters
  drawLetters(ctx);

  // highlight
  if(activeCell.active){
    ctx.strokeStyle = color_highlight;
    ctx.lineWidth = lw_highlight;
    ctx.strokeRect(
      activeCell.x*cellSize+1,
      activeCell.y*cellSize+1,
      cellSize-2,
      cellSize-2
    );
    ctx.lineWidth = 1;
  }

  // if sinogram exists, draw selected angle projection
  drawProjectionAtAngle(parseInt(angleSlider.value));
}

function drawLetters(context) {
  context.fillStyle = '#fff';
  context.textAlign = 'center';

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const letter = grid[y][x];
      if (!letter) continue;

      // Start with maximum font size
      let fontSize = cellSize;
      context.font = `${fontSize}px Arial, sans-serif`;

      // Measure text dimensions
      let metrics = context.measureText(letter);
      let textWidth = metrics.width;
      let textHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

      // Scale down to fit cell
      const scale = Math.min(cellSize / textWidth, cellSize / textHeight);
      fontSize = Math.floor(fontSize * scale);
      context.font = `${fontSize}px Arial, sans-serif`;

      // Re-measure with scaled font
      metrics = context.measureText(letter);
      const ascent = metrics.actualBoundingBoxAscent;
      const descent = metrics.actualBoundingBoxDescent;

      // Compute vertical offset to perfectly center the letter
      const yOffset = (ascent - descent) / 2;

      // Draw letter
      context.fillText(
        letter,
        x * cellSize + cellSize / 2,
        y * cellSize + cellSize / 2 + yOffset
      );
    }
  }
}
/* ===============================
   Draw projection at selected angle
=============================== */
function drawProjectionAtAngle(theta){
  theta = -theta;

  const index = Math.round((theta + 90) / snap);
  const proj = sinogram?.[index] ?? null;
  const refProj = referenceSinogram?.[index] ?? null;

  // If neither exists, nothing to draw
  if (!proj && !refProj) return;

  // Determine length and normalization
  const length = (proj ?? refProj).length;

  let maxVal = 0;
  if (proj) maxVal = Math.max(...proj);
  if (refProj) maxVal = Math.max(maxVal, ...refProj);

  let scale = cellSize * 0.5;
  if (N == 1){scale = scale * 0.5}; // Weird edge case

  const offsetX = -length / 2;

  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-theta * Math.PI / 180);

  /* ===== Zero axis ===== */
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(offsetX, 0);
  ctx.lineTo(offsetX + length, 0);
  ctx.stroke();

  /* ===== Reference projection (if exists) ===== */
  if (refProj) {
    ctx.strokeStyle = color_reference;
    ctx.lineWidth = lw_reference;
    ctx.beginPath();
    for (let i = 0; i < length; i++) {
      const v = refProj[i] / maxVal * scale;
      const x = offsetX + i;
      const y = -v;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  /* ===== Current projection (if exists) ===== */
  if (proj) {
    ctx.strokeStyle = color_projection;
    ctx.lineWidth = lw_projection;
    ctx.beginPath();
    for (let i = 0; i < length; i++) {
      const v = proj[i] / maxVal * scale;
      const x = offsetX + i;
      const y = -v;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  ctx.restore();
}
