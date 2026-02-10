/* ===============================
   Cursor movement
=============================== */
function moveCursor(dx, dy) {
  if (activeCell.x === N-1 && activeCell.y === N-1 && dx > 0) {activeCell.active = false; return;};

  let x = activeCell.x + dx;
  let y = activeCell.y + dy;

  // right overflow → next row
  if (x >= N) { x=0; y+=1; }
  // left overflow → previous row
  if (x<0) { x=N-1; y-=1; }

  // clamp to grid
  y = Math.max(0, Math.min(N-1, y));
  x = Math.max(0, Math.min(N-1, x));

  let active = true;
  activeCell = {active,x,y};
}

/* ===============================
   Unified Input Handling (Desktop + Mobile)
=============================== */

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

/* ===============================
   Cell Selection (click/tap)
=============================== */
function selectCellFromEvent(e) {
  if(Solved){return;};
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  const clientX = e.clientX ?? e.touches?.[0]?.clientX;
  const clientY = e.clientY ?? e.touches?.[0]?.clientY;

  const x = Math.floor((clientX - rect.left) / cellSize);
  const y = Math.floor((clientY - rect.top) / cellSize);

  if (x >= 0 && x < N && y >= 0 && y < N) {
    activeCell = { active: true, x, y };
    drawBothCanvases();

    if (isTouchDevice) {
      hiddenInput.blur();
      // Focus hidden input on mobile to open keyboard
      setTimeout(() => hiddenInput.focus({ preventScroll: true }), 50);
    }
  }
}

// Handle both pointer and touch events
canvas.addEventListener('pointerdown', selectCellFromEvent);
canvas.addEventListener('touchstart', selectCellFromEvent, { passive: false });

/* ===============================
   Keyboard / Hidden Input
=============================== */
function handleInputChar(char) {
  if (!activeCell.active) return;
  grid[activeCell.y][activeCell.x] = char.toUpperCase();
  moveCursor(1, 0);
  drawBothCanvases();
}

// Hidden input for mobile
hiddenInput.addEventListener('input', () => {
  const val = hiddenInput.value;
  hiddenInput.value = '';
  if (val) handleInputChar(val);
});

hiddenInput.addEventListener('keydown', e => {
  if (!activeCell.active) return;

  if (e.key === 'Backspace') {
    grid[activeCell.y][activeCell.x] = '';
    drawBothCanvases();
  } 
  else if (e.key === 'Enter') {
    e.preventDefault();
    hiddenInput.blur();
    computeRadon();
  }
});


/* ===============================
   Desktop Keyboard
=============================== */
window.addEventListener('keydown', e => {
  if (!activeCell.active || Solved) return;
  if (document.activeElement === hiddenInput) return; // Skip if typing in mobile input

  if (e.key === 'Backspace') {
    grid[activeCell.y][activeCell.x] = '';
    drawBothCanvases();
  } else if (e.key.length === 1) {
    handleInputChar(e.key);
  } else if (e.key === 'ArrowRight') moveCursor(1, 0);
  else if (e.key === 'ArrowLeft') moveCursor(-1, 0);
  else if (e.key === 'ArrowDown') moveCursor(0, 1);
  else if (e.key === 'ArrowUp') moveCursor(0, -1);
});
