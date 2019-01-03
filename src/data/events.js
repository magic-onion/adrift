const events = [
  {
    name: 'dehydration',
    id: 900,
    item: 'You try to take a step forward, but a dark ring surrounds your vision as you stumble. You are completely dehydrated. You collapse. No one will ever find your withered and crusted corpse.',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Fell Down',
    id: 901,
    item: 'Suddenly, the thought of arriving to class naked on the first day of University flashes through your mind. You trip and fall on a sharp piece of wood jutting out from the boath. It pierces your abdomen. You spend the next day barely able to move, attempting in vain to re-gather the the pile of viscera and feces that has spilled out of you',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Poisoned',
    id: 902,
    item: 'You drink the water and immediately feel nauseous. Your death involves diarrhea.',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Check sail',
    id: 903,
    item: `You jiggle a fastener and a rope snaps free, slashing you across the eye. As blood gushes across your face, you walk backward and fall overboard. You aren't able to get on board again. You drown, flailing in the water half-blind.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Open the tap',
    id: 904,
    item: 'You open the tap and water starts gushing out. You try to close it, but the pressure is too great to put the plug back in. You lose nearly all of your water, and die within a few days.',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Deciphering',
    id: 905,
    item: `After regarding the strange symbols for a few minutes you begin to feel different. You black out, and wake three days later bleeding to death with the same symbols carved into your skin from splinters scraped from the walls of the ship's hold.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `open the first crate`,
    id: 906,
    item: `The crate is covered in chains, but you proceed anyway. The crowbar slips on the lid and goes right into your nose. You can't stop the blood loss before passing out. You end up dying from the world's worst nosebleed.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Open the second crate too soon`,
    id: 907,
    item: `You try to open the next crate, but you are too tired. You lose your balance and fall backwards, splitting your head open on a support beam behind you. Your life flashes before your eyes as you convulse and foam at the mouth.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Hide in a crate`,
    id: 908,
    item: `You lower yourself into a crate and pull the lid on it. To your surprise, the lid snaps shut, sealing you inside. You bloody your fists against the insides, attempting to escape. Nobody finds your corpse.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Visit the Deck`,
    id: 909,
    item: `You travel to the deck to look at the thing that has been tormenting you. As your foot touches the last stair going up, you are surrounded by those translucent eels. You realize they are tentacles.`,
    button0: 910,
    button1: 0,
    button0Text: 'continue',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `It killed you`,
    id: 910,
    item: `You feel the slimy, watery texture of the tentcales all over you as they being to constrict your breathing. Somehow you open your eyes and look through the watery appendages. You see endless, ethereal faces moaning and screaming. The lost souls fill the thing and beg for your help as your last cry joins their collective agony.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Weep in Fear`,
    id: 911,
    item: `You weep in fear. It is hopeless. You don't know what to do, so you do nothing. You stay below deck, drifing aimlessly until the food and water are replaced with pools of your waste. You last a miserable three weeks of psychological torture, and are never able to discover what it is that torments you.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Destroy the map`,
    id: 912,
    item: `you tear the map in half. Your left hand starts to fade away like in "Back to the Future." You realize that your life is meaningless fiction, and you completely disappear.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: 'Questioning',
    id: 913,
    item: `You wonder if any of this is real. You come to the conclusion it is not. You grab the crowbar and chains from the hold and tie them around your feet before throwing yourself overboard.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Throw out the food`,
    id: 914,
    item: `In a fit of paranoia you throw your food overboard. You needed that to live.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: ``,
    id: 915,
    item: `You are a huge jerk.`,
    button0: 236,
    button1: 0,
    button0Text: `Don't do that again`,
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Picking your Nose`,
    id: 916,
    item: `You pick your nose so hard you break a piece of bone off and it slides into your frontal lobe. You are lucky enough to not be found with two full digits up your nostril.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `Suddenly Killed`,
    id: 917,
    item: ``,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  },
  {
    name: `snapped your own neck`,
    id: 918,
    item: `In one last act of will, you find the strength to place your hands at the sides of your face and snap your own neck. At least it was your choice.`,
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false,
    showAnimation: false
  }
]
export default events
