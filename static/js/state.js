/* ===============================
   State
=============================== */
let N = 2;
let Mode = null; // Either Explore, Full or Limited

let Guesses = 0;
let Solved = false;

let answer = null;
let wordGrid = null;

let grid = [];
let activeCell = {active: false, x:0, y:0};
let sinogram = null;
let referenceSinogram = null;
let snap = 5

const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

/* Hidden data canvas (letters only) */
const dataCanvas = document.createElement('canvas');
const dataCtx = dataCanvas.getContext('2d');

const hiddenInput = document.getElementById('hiddenInput');
const angleSlider = document.getElementById('angleSlider');
const angleLabel = document.getElementById('angleLabel');

const topText = document.getElementById('backText');

const computeBtn = document.getElementById('computeBtn');