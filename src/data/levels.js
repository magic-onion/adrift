const levels =
  [
    {
      name: 'intro',
      id: 0,
      item: 'You wake up on the damp deck of a boat. Your throat is dry. You have injuries.',
      title: "You are ADRIFT",
      button0: 100,
      button1: 900,
      button0Text: 'Are you Ok?',
      button1Text: 'Run frantically',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'investigateSelf',
      id: 100,
      item: 'Your injuries are minor, but you must be careful. You need water, and find a bucket of standing rain water on the deck',
      button0: 101,
      button1: 902,
      button0Text: 'Look around the deck',
      button1Text: 'Drink the water',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'investigatedBoat',
      id: 101,
      item: 'The sail is broken. You are adrift. There is one large deck and stairs leading to a hold.',
      button0: 903,
      button1: 200,
      button0Text: 'Check out the sail',
      button1Text: 'Search the hold',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'intro',
      id: 200,
      item: `You find three crates that are sealed shut. You can't open them with your bare hands. You also find a barrel of fresh water! You have enough here to last for several days.`,
      title: "You are ADRIFT",
      button0: 201,
      button1: 904,
      button0Text: 'Check for damage in the hold',
      button1Text: 'Open the water tap',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'check hold',
      id: 201,
      item: 'It is dark. Your eyes adjust as you make your way amongst the crates. You find the skeleton of a man. Oddly, this does not shake you. He is holding something. You take a crowbar from his cold, dead hands.',
      button0: 310,
      button1: 202,
      button0Text: 'Search the man further',
      button1Text: 'Thank him and open a crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 202,
      item: 'Even by holding the crowbar, you can feel how exhausted you are. You can only open one of the three crates before you, at least for today. Which one do you open?',
      button0: 203,
      button1: 906,
      button0Text: 'Look at the crates',
      button1Text: 'Open the closest one',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Which crate',
      id: 203,
      item: `The first crate is clasped shut with heavy chains a serious looking lock. You realize you probably cannot open it without a key. The other two look as if they can be opened with a crowbar. Which do you open?`,
      button0: 204,
      button1: 204,
      button0Text: 'Open the first crate',
      button1Text: 'Open the second crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 204,
      item: `prying the lid open just one inch on one side takes you at least 20 minutes. It is a very well-built crate, and you are very tired. You look inside and find a large cache of dried food and medical supplies.`,
      button0: 205,
      button1: 907,
      button0Text: 'eat something',
      button1Text: 'Try to open the second crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: `Eating Sausage`,
      id: 205,
      item: `You grab some dried sausage and wonder how you got here. The food is hearty. You drift to sleep...`,
      button0: 206,
      button1: 206,
      button0Text: 'Rest',
      button1Text: 'Open the second crate',
      showButton2: false,
      showAnimation: false
    },
    {
      name: `Waking Up`,
      id: 206,
      item: `You wake in the damp, musty hold. You feel somewhat refreshed. You look around, and realize you have not opened the second crate`,
      button0: 207,
      button1: 301,
      button0Text: 'Open the second crate',
      button1Text: 'Evaluate Surroundings',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Open the second crate',
      id: 207,
      item: `You open the second crate after much less effort than the first one, and find a sail and shipbuilding materials! You can now repair your newfound vessel`,
      button0: 208,
      button1: 209,
      button0Text: 'go to the deck and check things out',
      button1Text: 'nothing',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 208,
      item: `You make your way up to the deck. Your steps falter as the boat shakes. You look over the side, a man-sized translucent eel curls above the water and dips back below the glassy surface. A dark shadow, twice the size of the ship zooms away from the boat. It's moving faster than anything you've seen before.`,
      button0: 209,
      button1: 302,
      button0Text: 'keep watching',
      button1Text: 'Hide below deck',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 209,
      item: 'You hold still and observe the thing retreat into the distance. You feel alone again. You look at the sail and realize the torn sail needs to be replaced',
      button0: 210,
      button1: 916,
      button0Text: 'Fix the sail',
      button1Text: 'Pick your nose',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 210,
      item: `You take the sail and other materials from the hold and are able to repair the sail. You aren't sure what you're doing, but your hands seem to know. You can now navigate your ship, but there is nothing to navigate to except endless waters.`,
      button0: 304,
      button1: 211,
      button0Text: `ponder your existence`,
      button1Text: 'search the hold again',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 211,
      item: `The light from above speckles into the hold. You have been trying to avoid the corpse in the corner, but something around his neck catches your eye`,
      button0: 212,
      button1: 307,
      button0Text: 'Check the corpse again',
      button1Text: 'Smash the Corpse',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Open a crate',
      id: 212,
      item: `You look at the corpse again and realize the man has an intact shirt, around his neck is a leather loop with a key at the end.`,
      button0: 310,
      button1: 213,
      button0Text: 'Search his shirt pocket',
      button1Text: 'take the key',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'take the key',
      id: 213,
      item: `You take the key. It looks like it might fit the lock to the third crate. You also notice a small book tucked into the man's shirt pocket.`,
      button0: 214,
      button1: 308,
      button0Text: 'Open the last crate',
      button1Text: `Look at the book`,
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'third crate',
      id: 214,
      item: `Inside the third crate is a bundle of hay, nestled carefully is a spyglass, a compass, and a map`,
      button0: 215,
      button1: 216,
      button0Text: 'Look at the map',
      button1Text: 'Look at the compass',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Look at the Map',
      id: 215,
      item: `You take a look at the map. Curiously, it shows a large lake surrounded by islands, turning the lake into a series of rivers. If this is a representation of where you are, the lake must be enormous. there is no visible land in any direction.`,
      button0: 217,
      button1: 912,
      button0Text: 'check the compass',
      button1Text: 'Destroy the map',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Look at the Compass 1',
      id: 216,
      item: `The compass spins rapidly. Your eyes flutter as you attempt to focus your eyes on it. You get a headache.`,
      button0: 215,
      button1: 310,
      button0Text: 'Look at the map',
      button1Text: 'Check the Corpse Again',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Look at the Compass 2',
      id: 217,
      item: `The compass points south. You have no bearings or landmarks to work off of. You must look outside.`,
      button0: 218,
      button1: 999,
      button0Text: 'Use the spyglass outside',
      button1Text: 'Check the corpse again',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Looking Outside', //you can look outside and then you find a mass of stuff out of the spyglass. You go towards it and encounrter the monster again. Then you find the dog.
      id: 218,
      item: `You step outside and step to each side of the ship, sweeping the horizon with the spyglass. You see nothing at first. Only endless, calm waters.`,
      button0: 219,
      button1: 313,
      button0Text: 'Keep Looking',
      button1Text: 'Consult the Map',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Check Again',
      id: 219,
      item: `You look at everything the waters have to offer. You think you see a black dot, far off on the distance. You check your spyglass for smudges. You look again. It is a distinct mass of something.`,
      button0: 220,
      button1: 313,
      button0Text: 'Head towards it',
      button1Text: 'Check the map',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'change course',
      id: 220,
      item: `You change your heading. You have a goal now, but what will it bring?`,
      button0: 221,
      button1: 241,
      button0Text: 'Maintain heading',
      button1Text: 'Eat something',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Maintain Heading',
      id: 221,
      item: `You dilligently check the compass, your spyglass and the sail to ensure you maintain course. Oddly, the light breeze allows you to move effortlessly toward the speck as it becomes visible to the naked eye.`,
      button0: 222,
      button1: 999,
      button0Text: 'Continue',
      button1Text: 'button1',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Monster Encounter 2',
      id: 222,
      item: `You begin to almost feel pleasant as you sail. It occurs to you to be worried about your predicament, but those doubtful thoughts don't occur to you. As you focus away from the growing mass, something in your periphery catches your attention.`,
      button0: 223,
      button1: 242,
      button0Text: 'Try to ignore it.',
      button1Text: 'Turn and look',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Monster Encounter 2a',
      id: 223,
      item: `The huge shadow approaches the boat again. You feel a pit of anxiety as its wrathful presence looms underneath. You see a swirling mass of tentacles, each as thick as the mast of the ship and twice the length of the vessel.`,
      button0: 224,
      button1: 302,
      button0Text: 'throw a bucket at it',
      button1Text: 'retreat to the hold',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'You threw a bucket at an enormous monster',
      id: 224,
      item: `Just as the jelly-like tentacles rise from the surface and wrap themselves around your ship, you toss the bucket of stagnant water at the thing terrorizing you. It strikes one tentacle, and the writhing tentacles become still for a moment.`,
      button0: 225,
      button1: 302,
      button0Text: 'observe it',
      button1Text: 'hide',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Barf City',
      id: 225,
      item: `The thing emits a deafening shriek that penetrates your mind and reverberates through your skull. You watch as the tentacle you've struck with the bucket explodes in thick goo, which sprays your face.`,
      button0: 226,
      button1: 999,
      button0Text: 'continue',
      button1Text: 'button1',
      showButton2: false,
      showAnimation: false
    },
    {
      name: '',
      id: 226,
      item: `The thing uncoils itself from the boat and slithers underwater. You wipe thing-goo from your eyes as you watch it dart away from your boat.`,
      button0: 227,
      button1: 911,
      button0Text: 'Clean up your face',
      button1Text: 'Weep in Fear',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 227,
      item: `You clean up some of that... thing's goo off your face and hope you haven't been poisoned with some thing-neurotoxin. Curiously, you are calm. You consider the fact that you are truly lost.`,
      button0: 229,
      button1: 228,
      button0Text: 'check boat for damage',
      button1Text: 'Are you really lost?',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 228,
      item: `You have a goal now. Maybe being lost is ok. At least you have things to eat and stuff to do.`,
      button0: 913,
      button1: 230,
      button0Text: 'continue questioning sanity',
      button1Text: `You're OK`,
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 229,
      item: `The boat doesn't appear to be damaged. You ensure that the ship's heading is correct. It seems the wind has picked up. You are traveling faster now.`,
      button0: 230,
      button1: 999,
      button0Text: 'Maintain heading',
      button1Text: 'button1',
      showButton2: false,
      showAnimation: false
    },
    {
      name: '',
      id: 230,
      item: `You clean up your face, and press your goo-free visage to the spyglass. The black speck now appears to be a mass of wreckage. The wind has also picked up. You are traveling faster now.`,
      button0: 231,
      button1: 311,
      button0Text: 'observe the mass',
      button1Text: 'What was that thing?',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 231,
      item: `You can now see the goal with your naked eye, distinct and getitng larger by the minute. Through the spyglass, you see broken wood and some hairy looking creature huddled up among the wreckage. You think you hear snarling.`,
      button0: 232,
      button1: 917,
      button0Text: 'Press On',
      button1Text: 'Look around You',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 232,
      item: 'You can see the sun going down over the horizon to the West. As the light grows dim, so does the wind. Thought you are close to your quarry, with only endless water surrounding you, you realize you are no longer traveling forward',
      button0: 233,
      button1: 999,
      button0Text: 'get some rest',
      button1Text: 'love yourself',
      showButton2: false,
      showAnimation: false
    },
    {
      name: '',
      id: 233,
      item: `After eating more dried sausage and drinking some water, your eyelids become heavy`,
      button0: 234,
      button1: 312,
      button0Text: 'sleep',
      button1Text: 'stay up and keep watch',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 234,
      item: `You dream of wrestling a toothless crocodile in a kiddie pool full of jello while someone pours bucket after bucket of adult pythons on you`,
      button0: 312,
      button1: 235,
      button0Text: 'linger on your dream',
      button1Text: 'Forget it',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 235,
      item: `You come to attention and find that your heading is correct. You are nearly upon the mass of wreckage. It is just that. Through the spyglass, you see the hairy creature amongst broken planks. Suddenly, the creature moves.`,
      button0: 236,
      button1: 302,
      button0Text: 'Keep watching',
      button1Text: 'hide below deck',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 236,
      item: `First you see something like a hairy tentacle waving up and down. Then, you see a butt wiggling. Finally, with your own naked eye you see the cheerful face of a beagle barking and wagging its tail at you!`,
      button0: 237,
      button1: 243,
      button0Text: 'Wave a dried sausage at her',
      button1Text: 'throw a bucket at her',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 237,
      item: `The hound dog leaps off the wreckage and begins swimming toward the starboard side. You are able to lower a bucket into the water and hoist the dog onto the ship.`,
      button0: 238,
      button1: 999,
      button0Text: 'continue',
      button1Text: 'button1',
      showButton2: false,
      showAnimation: false
    },
    {
      name: '',
      id: 238,
      item: `The dog is wet, and eats a sausage hungrily. She is happy to be found. As soon as she shakes the water off, she looks at you and begins barking off the side of the ship.`,
      button0: 239,
      button1: 999,
      button0Text: 'Look towards her barking',
      button1Text: 'button1',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 239,
      item: `You stand next to her and take a look at the water, but there is only calm. She nudges your hand with her nose. It is the hand with the spyglass. You take a a look. You see land!`,
      button0: 240,
      button1: 999,
      button0Text: 'continue',
      button1Text: 'button1',
      showButton2: true,
      showAnimation: false
    },
    {
      name: '',
      id: 240,
      item: `You change course and your new friend approves. You have enough supplies to get to your new destination. More importantly, you now have a companion on your journey.`,
      button0: 0,
      button1: 0,
      button0Text: 'You win',
      button1Text: 'start over',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'change course',
      id: 241,
      item: `You ate a tasty snack. Yum!`,
      button0: 221,
      button1: 241,
      button0Text: 'Maintain heading',
      button1Text: 'Eat something',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Turn and Look',
      id: 242,
      item: `As you turn, you know the thing is upon you. Its tentacles rise out of the water and surround you.`,
      button0: 910,
      button1: 241,
      button0Text: 'Try to resist',
      button1Text: 'Eat something',
      showButton2: false,
      showAnimation: false
    },
    {
      name: ``,
      id: 243,
      item: `You are a huge jerk.`,
      button0: 236,
      button1: 0,
      button0Text: `Don't do that again`,
      button1Text: 'start over',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Starting to Go Nuts',
      id: 300,
      item: `You find a curious notebook in the man's pockets. It is covered with mysterious drawings and symbols`,
      button0: 905,
      button1: 202,
      button0Text: 'Try to deciper',
      button1Text: 'Ignore it - go open a crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Starting to Go Nuts',
      id: 300,
      item: `You find a curious notebook in the man's pockets. It is covered with mysterious drawings and symbols`,
      button0: 905,
      button1: 202,
      button0Text: 'Try to deciper',
      button1Text: 'Ignore it - go open a crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Hiding Below Deck',
      id: 302,
      item: `You immediately leave the deck for the hold. You find a corner of the hold, opposite from the side holding the skeleton, and tuck yourself into the fetal position.`,
      button0: 303,
      button1: 908,
      button0Text: 'stay in fetal position',
      button1Text: 'hide in a crate',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Staying Fetal',
      id: 303,
      item: `As you pathetically huddle in cowardice, you hear scraping along the sides of your vessel. Whatever was out there, it has come for you.`,
      button0: 305,
      button1: 304,
      button0Text: 'Pace Around Nervously',
      button1Text: 'Grab a weapon',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Pacing Around Nervously',
      id: 304,
      item: `You pace around the hold, trying to figure out what to do. You hear the thing wailing in the distance. You want to visit the deck, but you're not sure if you should.`,
      button0: 909,
      button1: 306,
      button0Text: 'Visit the Deck',
      button1Text: 'Keep Pacing',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Grabbing a Weapon',
      id: 305,
      item: `You reach for the first thing you can find, the crowbar. You sit back down and clutch it to your chest. From across the hold, you see the skeleton of the last inhabitant of this ship.`,
      button0: 307,
      button1: 911,
      button0Text: 'Smash the skeleton',
      button1Text: 'Weep in Fear',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Keep Pacing',
      id: 306,
      item: `You reach for the first thing you can find, the crowbar. You sit back down and clutch it to your chest. From across the hold, you see the skeleton of the last inhabitant of this ship.`,
      button0: 307,
      button1: 911,
      button0Text: 'Smash the skeleton',
      button1Text: 'Weep in Fear',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Smash the Corpse',
      id: 307,
      item: `In a vain attempt at control, you destroy the thing you fear becoming. In a flurry of swipes, you notice a notebook fly from the corpse's shirt pocket`,
      button0: 308,
      button1: 911,
      button0Text: 'Read the Book',
      button1Text: 'Huddle in the Corner',
      showButton2: true,
      showAnimation: false
    },
    {
      name: 'Read the Book',
      id: 308,
      item: `You take a closer look. There appear to be no dates or any recognizable words. Strange symbols, often repeated, cover each page. There is very little blank space. You wonder if there are any answers here.`,
      button0: 905,
      button1: 911,
      button0Text: 'Try to deciper',
      button1Text: 'Huddle in the Corner',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Search the Corpse',
      id: 310,
      item: `You find a book in the man's shirt pocket. It appears to have handwritten notes in it.`,
      button0: 308,
      button1: 911,
      button0Text: 'Read the Book',
      button1Text: 'Huddle in the Corner',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Questioning the thing',
      id: 311,
      item: `As you try to remmber what that thing looked like, strange shapes and symbols flash before your eyes.`,
      button0: 905,
      button1: 911,
      button0Text: 'Try to remember',
      button1Text: 'Forget about it',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Stay awake all night',
      id: 312,
      item: `Memories of tentacles and laughing skeletons haunt you as you stay awake. You begin to hallucinated faces you have never seen, and see strange shapes and symbols materialize in the air. Is the food okay to eat?`,
      button0: 914,
      button1: 911,
      button0Text: 'Throw out the food',
      button1Text: 'What are these symbols?',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Search the Corpse',
      id: 313,
      item: `The map is completely different than the first time you gazed upon it. It is covered in strange symbols, none of them in a language you can understand.`,
      button0: 905,
      button1: 911,
      button0Text: 'Try to Decipher',
      button1Text: 'Huddle in the Corner',
      showButton2: false,
      showAnimation: false
    },
    {
      name: 'Look Around You',
      id: 314,
      item: `Out of nowhere a jelly-like tentacle wraps itself around you and squeezes the air out of you. The thing is back.`,
      button0: 910,
      button1: 918,
      button0Text: 'resist',
      button1Text: 'defy',
      showButton2: false,
      showAnimation: false
    },
  ]


export default levels
