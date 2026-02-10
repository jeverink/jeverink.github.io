
/* ===============================
   Grid setup
=============================== */
function resetGrid() {
  grid = Array.from({ length: N }, () => Array(N).fill(''));
  activeCell = { active: false, x: 0, y: 0 };
  sinogram = null;
  Guesses = 0;
  Solved = false;

  angleSlider.value = 0;
  angleLabel.textContent = `Angle: 0°`;

  const maxWidth = Math.min(window.innerWidth - 24, 480);
  cellSize = Math.floor(maxWidth / N);

  canvas.width = N * cellSize;
  canvas.height = N * cellSize;

  dataCanvas.width = canvas.width;
  dataCanvas.height = canvas.height;

  referenceSinogram = null;
  
  if (Mode == "Explore"){
    topText.innerHTML = "Exploration";
    computeBtn.innerHTML = "Compute sinogram";
  } else {
    topText.innerHTML = "0 Guesses";
    computeBtn.innerHTML = "Guess";
    answer = pickRandomWord();

    wordGrid = Array.from({ length: N }, (_, row) =>
    Array.from({ length: N }, (_, col) =>
        answer[(row * N + col) % answer.length] // repeat letters if needed
    )
    );
    referenceSinogram = computeSinogramForGrid(wordGrid);
  }

  /* ===== Draw visible UI normally ===== */
  drawBothCanvases();
}

/* ===============================
   Angle slider
=============================== */
angleSlider.addEventListener('input', () => {
  const snapped = Math.round(angleSlider.value / snap) * snap;
  angleSlider.value = snapped;

  angleLabel.textContent = `Angle: ${snapped}°`;
  drawBothCanvases();
});

hiddenInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // optional, but recommended
    hiddenInput.blur();   // ← THIS closes the keyboard
    computeRadon();
  }
});



const introOverlay = document.getElementById('introOverlay');

const startExplore1Btn = document.getElementById('startExplore1Btn');
const startExplore4Btn = document.getElementById('startExplore4Btn');
const startExplore9Btn = document.getElementById('startExplore9Btn');

const startFull4Btn = document.getElementById('startFull4Btn');
const startFull9Btn = document.getElementById('startFull9Btn');

// const startLimited4Btn = document.getElementById('startLimited4Btn');
// const startLimited9Btn = document.getElementById('startLimited9Btn');

startExplore1Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 1; Mode = "Explore"; resetGrid();});
startExplore4Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 2; Mode = "Explore"; resetGrid();});
startExplore9Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 3; Mode = "Explore"; resetGrid();});

startFull4Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 2; Mode = "Full"; resetGrid();});
startFull9Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 3; Mode = "Full"; resetGrid();});

// startLimited4Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 2; Mode = "Limited"; resetGrid();});
// startLimited9Btn.addEventListener('click', () => {introOverlay.style.display = 'none'; N = 3; Mode = "Limited"; resetGrid();});

const backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', () => {
  document.getElementById('introOverlay').style.display = 'flex';
  resetGrid();
});




const fourLetterWords = [
  "ABLE","ACID","AGED","ALSO","AREA","ARMY","AWAY","BABY","BACK","BALL",
  "BAND","BANK","BASE","BATH","BEAR","BEAT","BEEN","BEER","BELL","BEND",
  "BEST","BILL","BIRD","BITE","BLOW","BLUE","BOAT","BODY","BOMB","BOND",
  "BONE","BOOK","BOOM","BORN","BOSS","BOTH","BOWL","BULK","BURN","BUSH",
  "BUSY","CALL","CALM","CAME","CAMP","CARD","CARE","CASE","CASH","CAST",
  "CELL","CHAT","CHIP","CITY","CLUB","COAL","COAT","CODE","COLD","COME",
  "COOK","COOL","COPE","COPY","COST","CREW","CROP","DARK","DATA","DATE",
  "DAWN","DAYS","DEAD","DEAL","DEAN","DEAR","DEBT","DEEP","DEER","DIAL",
  "DICK","DIET","DISC","DOES","DONE","DOOR","DOWN","DRAW","DREW","DROP",
  "DRUG","DUAL","DUKE","DUST","DUTY","EACH","EARN","EASE","EAST","EASY",
  "EDGE","ELSE","EVEN","EVER","EXIT","FACE","FACT","FAIL","FAIR","FALL",
  "FAME","FARM","FAST","FATE","FEAR","FEED","FEEL","FELT","FILE","FILL",
  "FILM","FIND","FINE","FIRE","FIRM","FISH","FLAG","FLAT","FLEW","FLEX",
  "FLOW","FOOD","FOOT","FORD","FORM","FORT","FOUR","FREE","FROG","FROM",
  "FUEL","FULL","GAIN","GAME","GATE","GAVE","GEAR","GENE","GIFT",
  "GIRL","GIVE","GLAD","GOAL","GOES","GOLD","GOLF","GOOD","GOTO","GROW",
  "HAND","HARD","HAVE","HEAD","HEAR","HEAT","HELD","HELL","HELP","HERE",
  "HIGH","HILL","HIRE","HOLD","HOLE","HOME","HOPE","HOST","HOUR","HUGE",
  "HUNG","HUNT","HURT","IDEA","INCH","INTO","IRON","ITEM","JOIN","JUMP",
  "JUST","KEEP","KICK","KIND","KING","KNEW","KNOT","KNOW","LACK","LADY",
  "LAID","LAND","LAST","LATE","LEAD","LEAF","LEFT","LEND","LESS","LIFE",
  "LIFT","LIKE","LINE","LINK","LIST","LIVE","LOAD","LOAN","LOCK",
  "LONG","LOOK","LOST","LOVE","MADE","MAIL","MAIN","MAKE","MALE","MANY",
  "MARK","MASS","MATT","MEAL","MEAN","MEAT","MEET","MENU","MESS","MILE",
  "MILK","MIND","MINE","MISS","MOOD","MOON","MORE","MOST","MOVE",
  "MUCH","MUST","NAME","NEAR","NEED","NEWS","NEXT","NICE","NONE","NOSE",
  "NOTE","ODDS","ONCE","ONLY","OPEN","ORAL","OVER","PACE","PACK","PAGE",
  "PAID","PAIR","PALM","PART","PASS","PAST","PATH","PEAK","PEAR",
  "PEEK","PEEL","PENS","PERF","PERS","PICK","PILE","PINK","PIPE","PLAN",
  "PLAY","PLOT","PLUS","POLL","POOL","POOR","POPE","PORT","POST","PULL",
  "PUMP","PURE","PUSH","QUIT","RACE","RAID","RAIL","RAIN","RAIN","RANK",
  "RATE","READ","REAL","RELY","REST","RICE","RICH","RIDE","RING","RISE",
  "ROAD","ROCK","ROLE","ROLL","ROOF","ROOM","ROOT","ROSE","RULE","RUSH",
  "SAFE","SAME","SAND","SAVE","SEAL","SEAT","SEED","SEEK","SEEM","SEND",
  "SENT","SHIP","SHOP","SHOT","SHOW","SHUT","SIDE","SIGN","SILK","SING",
  "SITE","SIZE","SKIN","SLIP","SLOW","SNOW","SOFT","SOIL","SOME","SONG",
  "SOON","SORT","SOUL","SOUR","SPIN","SPOT","STAR","STAY","STEP","STOP",
  "SUCH","SUIT","SWIM","TALE","TALK","TALL","TANK","TASK","TEAM","TECH",
  "TELL","TERM","TEST","TEXT","THAN","THEM","THEN","THEY","THIN",
  "THIS","TIED","TIME","TINY","TOLD","TOOK","TOOL","TOWN","TRAP","TRAY",
  "TREE","TRIP","TRUE","TURN","TWIN","TYPE","UNIT","UPON","USED","USER",
  "VARY","VERY","VIEW","VOTE","WAGE","WAIT","WAKE","WALK","WALL","WANT",
  "WARD","WARM","WASH","WAST","WAVE","WAYS","WEAR","WEEK","WELL","WENT",
  "WHAT","WHEN","WHOM","WIDE","WIFE","WILD","WILL","WITH","WORD","WORK",
  "YARD","YEAH","YEAR","YOUR","ZERO","ZONE","ZOOM"
];

const nineLetterWords = [
  "ABANDONED", "ABILITIES", "ABOLISHED", "ABUNDANCE", "ACADEMICS", "ACCEPTING", "ACCESSING", "ACCIDENTS", "ACCLAIMED", "ACCOMPANY",
  "ACCORDING", "ACCOUNTED", "ACHIEVING", "ACOUSTICS", "ACQUIRING", "ACTIVATED", "ACTIVISTS", "ADAPTANCE", "ADDITIONS", "ADDRESSES",
  "ADHERENCE", "ADJECTIVE", "ADJUSTING", "ADMISSION", "ADULTHOOD", "ADVANTAGE", "ADVENTURE", "ADVERTISE", "ADVOCATES", "AESTHETIC",
  "AFFECTION", "AFFORDING", "AFTERNOON", "AGGREGATE", "AGREEMENT", "AIRPLANES", "ALIGNMENT", "ALLEGEDLY", "ALLOWANCE", "ALTERNATE",
  "AMAZEMENT", "AMBITIOUS", "AMENDMENT", "AMPLITUDE", "ANALYZING", "ANATOMIES", "ANCESTORS", "ANNOUNCED", "ANONYMOUS", "ANSWERING",
  "ANTARCTIC", "ANXIETIES", "APARTMENT", "APOLOGIZE", "APPARATUS", "APPEALING", "APPLIANCE", "APPLICANT", "APPOINTED", "APPRAISAL",
  "APPROACHS", "APPROVALS", "AQUARIUMS", "ARBITRARY", "ARCHITECT", "ARGUMENTS", "ARRANGING", "ARRESTING", "ARTIFACTS", "ASCENDING",
  "ASPIRANTS", "ASSERTING", "ASSESSING", "ASSIGNING", "ASSISTANT", "ASSOCIATE", "ASSURANCE", "ASTEROIDS", "ATHLETICS", "ATTACHING",
  "ATTAINING", "ATTENTION", "ATTITUDES", "ATTRACTED", "ATTRIBUTE", "AUCTIONED", "AUDIENCES", "AUTHENTIC", "AUTHORITY", "AUTOMATED",
  "AUTOMATIC", "AVAILABLE", "AVALANCHE", "AWARENESS", "BACKDROPS", "BACKSTAGE", "BACKWARDS", "BACTERIAL", "BALANCING", "BANKRUPTS",
  "BARGAINED", "BARRIERED", "BASKETFUL", "BEAUTIFUL", "BEGINNING", "BEHAVIOUR", "BELIEVERS", "BENCHMARK", "BENEFITED", "BETRAYING",
  "BEVERAGES", "BIOGRAPHY", "BIOLOGIST", "BIRTHDAYS", "BLACKMAIL", "BLESSINGS", "BLOCKHEAD", "BLUEPRINT", "BODYGUARD", "BOOKSTORE",
  "BOUNDSSET", "BREAKFAST", "BREAKDOWN", "BREATHING", "BRILLIANT", "BROADCAST", "BROKERAGE", "BUILDINGS", "BULLETINS", "BURNISHED",
  "BYSTANDER", "CALCULATE", "CALIBRATE", "CAMPAIGNS", "CANCELLED", "CANDIDATE", "CAPACITOR", "CAPTIONED", "CAPTIVITY", "CARPENTER",
  "CARRYOVER", "CASHIERED", "CASUALTIE", "CATALOGUE", "CATHEDRAL", "CELEBRATE", "CELEBRITY", "CELLPHONE", "CERTAINTY", "CHALLENGE",
  "CHAMPIONS", "CHARACTER", "CHARCOALS", "CHARITABL", "CHECKLIST", "CHEMISTRY", "CHILDHOOD", "CHOCOLATE", "CHOPSTICK", "CHRONICLE",
  "CIGARETTE", "CIRCULATE", "CITIZENRY", "CIVILIZED", "CLASSROOM", "CLEARANCE", "CLINICALS", "COALITION", "COGNITIVE", "COHERENCE",
  "COINCIDED", "COLLAPSED", "COLLECTOR", "COLLISION", "COLONIALS", "COLOURFUL", "COMBINING", "COMFORTED", "COMMANDER", "COMMENCED",
  "COMMERING", "COMMITTEE", "COMMODITY", "COMMUNITY", "COMPANIES", "COMPARING", "COMPETENT", "COMPLETED", "COMPLEXED", "COMPLIANT",
  "COMPONENT", "COMPOSING", "COMPOUNDS", "COMPRISED", "COMPUTERS", "CONCEALED", "CONCEIVED", "CONCERNED", "CONCLUDES", "CONDITION",
  "CONDUCTOR", "CONFERRED", "CONFIDENT", "CONFIRMED", "CONFLICTS", "CONFORMED", "CONFUSION", "CONGESTED", "CONGRESSO", "CONNECTED",
  "CONQUERED", "CONSCIOUS", "CONSENSUS", "CONSIDERS", "CONSIGNOR", "CONSISTED", "CONSONANT", "CONSTABLE", "CONSTRUCT", "CONSUMING",
  "CONTAINED", "CONTEMPTS", "CONTINUED", "CONTRACTS", "CONTRASTS", "CONTRIBUT", "CONTROLER", "CONVENING", "CONVERGED", "CONVERTED",
  "CONVICTED", "CONVINCED", "COOKBOOKS", "COOPERATE", "COPYRIGHT", "CORPORATE", "CORRECTED", "CORRIDORS", "COSMETICS", "COUNCILOR",
  "COUNSELOR", "COUNTLESS", "COUNTRIES", "COVENANTS", "COVERAGES", "CRAFTSMAN", "CREDITING", "CRIMINALS", "CRITERION", "CRITICISM",
  "CRITICIZE", "CROSSOVER", "CRUCIALLY", "CULTIVATE", "CURIOSITY", "CURVATURE", "CUSTODIAN", "CUSTOMARY", "CYBERNETS", "CYLINDERS",
  "DANGEROUS", "DATABASES", "DAUGHTERS", "DEADLINES", "DEBATABLE", "DECADENCE", "DECEPTION", "DECISIONS", "DECLARING", "DECLINING",
  "DECORATED", "DECREASED", "DEDICATED", "DEFENDANT", "DEFENSIVE", "DEFERENCE", "DEFICIENT", "DEFINABLE", "DELEGATED", "DELIGHTED",
  "DELIVERED", "DEMOCRACY", "DEPARTURE", "DEPENDENT", "DEPOSITED", "DEPRESSED", "DESCRIBED", "DESERTION", "DESERVING", "DESIGNERS",
  "DESIRABLE", "DESPERATE", "DESTROYED", "DETACHING", "DETAILING", "DETECTION", "DETERMINE", "DEVELOPED", "DEVIATION", "DIAGNOSIS",
  "DIALOGUES", "DIAMETERS", "DIFFERENT", "DIFFICULT", "DIGESTION", "DIGNITARY", "DIMENSION", "DIRECTING", "DIRECTORY", "DISAGREED",
  "DISAPPEAR", "DISASTERS", "DISCHARGE", "DISCIPLIN", "DISCLOSED", "DISCOUNTS", "DISCOURSE", "DISCOVERY", "DISCUSSES", "DISGRACED",
  "DISGUISED", "DISMISSAL", "DISORDERS", "DISPLAYED", "DISPOSALS", "DISPUTING", "DISRUPTED", "DISSOLVED", "DISTANCED", "DISTINCTS",
  "DISTORTED", "DISTRACTS", "DISTRICTS", "DIVERSITY", "DIVISIONS", "DOCTRINAL", "DOCUMENTS", "DOMINATED", "DONATIONS", "DORMITORY",
  "DOWNSTAIR", "DOWNTOWNS", "DRAMATIST", "DRIFTWOOD", "DUPLICATE", "DURATIONS", "DWELLINGS", "ECCENTRIC", "ECONOMICS", "EDITORIAL",
  "EDUCATION", "EFFECTIVE", "EFFICIENT", "EFFORTFUL", "ELABORATE", "ELECTORAL", "ELECTRONS", "ELEMENTAL", "ELEVATION", "ELIMINATE",
  "ELSEWHERE", "EMBARRASS", "EMBRACING", "EMERGENCY", "EMOTIONAL", "EMPHASIZE", "EMPIRICAL", "EMPLOYEES", "EMPLOYING", "EMPOWERED",
  "ENCLOSURE", "ENCOUNTER", "ENCOURAGE", "ENDURANCE", "ENERGETIC", "ENFORCING", "ENGINEERS", "ENJOYABLE", "ENLIGHTEN", "ENRICHING",
  "ENROLMENT", "ENTERTAIN", "ENTRANCES", "ENVELOPED", "EQUIPMENT", "EQUITABLE", "ERRONEOUS", "ESCAPADES",
  "ESSENTIAL", "ESTABLISH", "ESTIMATED", "ETHICALLY", "EVACUATED", "EVALUATED", "EVAPORATE", "EVERYBODY", "EVERYTHIN",
  "EVIDENCED", "EVOLUTION", "EXCELLENT", "EXCEPTION", "EXCESSIVE", "EXCHANGED", "EXCLUDING", "EXCLUSIVE", "EXCURSION", "EXECUTING",
  "EXECUTIVE", "EXEMPLARY", "EXERCISES", "EXHAUSTED", "EXHIBITED", "EXISTENCE", "EXPANDING", "EXPANSION", "EXPECTING", "EXPEDIENT",
  "EXPENSIVE", "EXPERTISE", "EXPLAINED", "EXPLODING", "EXPLOITED", "EXPLORING", "EXPLOSION", "EXPORTING", "EXPOSURES", "EXPRESSED",
  "EXTENSION", "EXTENSIVE", "EXTERIORS", "EXTERNALS", "EXTREMELY", "FABRICATE", "FACSIMILE", "FACTORIES", "FAIRFIELD", "FAITHFULL",
  "FALSIFIED", "FAMILIARS", "FANTASTIC", "FAREWELLS", "FASCINATE", "FAVOURITE", "FEARFULLY", "FEEDBACKS", "FESTIVALS", "FILTRATED",
  "FINANCIAL", "FIREPLACE", "FIRSTHAND", "FOLLOWING", "FOOTPRINT", "FORBIDDEN", "FORECASTS", "FOREGOING", "FOREIGNER", "FORENSICS",
  "FORMATION", "FORMULATE", "FORTHWITH", "FORTUNATE", "FRANCHISE", "FREEZINGS", "FRIGHTING", "FRONTIERS", "FRUSTRATE", "FULFILLED",
  "FUNCTIONS", "FURNITURE", "FURTHERED", "GATHERING", "GENERALLY", "GENERATED", "GENTLEMEN", "GENUINELY", "GEOGRAPHY", "GEOMETRIC",
  "GLITTERED", "GOODNIGHT", "GOVERNORS", "GRADUATED", "GRAMMATIC", "GRATITUDE", "GRAVEYARD", "GREETINGS", "GROUNDING", "GUARANTEE",
  "GUIDELINE", "GYMNASTIC", "HANDSHAKE", "HAPPENING", "HAPPINESS", "HARDSHIPS", "HARDWARES", "HARMONIES", "HARVESTED", "HEADACHES",
  "HEADLINES", "HEALTHIER", "HEARTBEAT"
];


function pickRandomWord() {
    if (N == 2){
      const randomIndex = Math.floor(Math.random() * fourLetterWords.length);
      return fourLetterWords[randomIndex];
    }
    if (N == 3){
      const randomIndex = Math.floor(Math.random() * nineLetterWords.length);
      return nineLetterWords[randomIndex];
    }
    console.log("Word length not supported.");
}