
//add three attributes to each even that will at least define the button text
//the goal is to be able to pass these attr into all buttons and problem is solved
const events = [
  {
    name: 'dehydration',
    id: 900,
    item: 'You try to take a step forward, but a dark ring surrounds your vision as you stumble. You are completely dehydrated. You collapse. No one will ever find your withered and crusted corpse.',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: 'fell down',
    id: 901,
    item: 'Suddenly, the thought of arriving to class naked on the first day of University flashes through your mind. You trip and fall on a sharp piece of wood jutting out from the boath. It pierces your abdomen. You spend days barely able to move, attempting in vain to re-gather the the pile of viscera and feces that has spilled out of you',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: 'killed by monster - one',
    id: 902,
    item: 'You gaze in awe at the thing before you. ',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: 'investigatedBoat',
    id: 903,
    item: 'YOU ARE ON Tree 4 item 3',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 904,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 905,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 906,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 907,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 908,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 909,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 910,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 911,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 912,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 913,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 914,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 915,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 916,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 917,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 918,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 919,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 920,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 921,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 922,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 923,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 924,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 925,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 926,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 927,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  },
  {
    name: '',
    id: 928,
    item: '',
    button0: 0,
    button1: 0,
    button0Text: 'start over',
    button1Text: 'start over',
    showButton2: false
  }
]
export default events
