export interface EngagementItem {
  type: 'joke' | 'fact' | 'mnemonic';
  content: string;
  mannanVersion?: string;
  tahiraVersion?: string;
}

export const engagementContent: Record<string, EngagementItem[]> = {
  mathematics: [
    {
      type: 'joke',
      mannanVersion: "Why was the math book sad? 😂 Because it had too many PROBLEMS! Just like my homework... 📚",
      tahiraVersion: "Why was the math book sad? 🌸 Because it had too many problems — but every problem has a solution, just like in life! ✨",
      content: "Why was the math book sad? Because it had too many problems!",
    },
    {
      type: 'fact',
      content: "Zero is the only number that cannot be represented in Roman numerals!",
      mannanVersion: "Bro, did you know? 🤯 ZERO cannot be written in Roman numerals! The Romans had no concept of zero — that's why they couldn't do advanced math! India gave the world ZERO! 🇮🇳",
      tahiraVersion: "Interesting fact, dear! 🌸 Zero cannot be represented in Roman numerals. India gifted the concept of zero to the world — isn't that beautiful? 🌍",
    },
    {
      type: 'mnemonic',
      content: "BODMAS: Brackets, Orders, Division, Multiplication, Addition, Subtraction",
      mannanVersion: "Remember BODMAS yaar! 🎯 'Big Old Dogs Make A Sound' — Brackets, Orders, Division, Multiplication, Addition, Subtraction! Never forget the order! 💪",
      tahiraVersion: "A sweet way to remember BODMAS 🌸: 'Beautiful Orange Daisies Make Amazing Sunsets' — Brackets, Orders, Division, Multiplication, Addition, Subtraction! 🌻",
    },
    {
      type: 'fact',
      content: "The word 'mathematics' comes from the Greek word 'mathema' meaning 'knowledge'.",
      mannanVersion: "Gyaan bomb! 💣 'Mathematics' comes from Greek 'mathema' = knowledge! So when you study math, you're literally gaining ancient Greek wisdom! 🏛️",
      tahiraVersion: "Did you know? 💫 The word 'mathematics' comes from the Greek word 'mathema' meaning 'knowledge'. Every equation you solve adds to your wisdom! 📖",
    },
    {
      type: 'joke',
      content: "Why do plants hate math? Because it gives them square roots!",
      mannanVersion: "Hahaha! 🌱 Why do plants hate math? Because it gives them SQUARE ROOTS! Get it? Square roots... root... plant roots! 😂",
      tahiraVersion: "Here's a gentle smile for you 😊: Why do plants dislike math? Because it gives them square roots! Nature and numbers are connected! 🌿",
    },
    {
      type: 'mnemonic',
      content: "Pi = 3.14159... Remember: 'May I have a large container of coffee?'",
      mannanVersion: "Pi trick! 🥧 Count the letters: 'May(3) I(1) have(4) a(1) large(5) container(9) of(2) coffee(6)' = 3.141592! Mind blown? 🤯",
      tahiraVersion: "A lovely way to remember Pi 🌸: Count the letters in 'May I have a large container of coffee?' = 3.141592! Beautiful, isn't it? ☕",
    },
  ],
  science: [
    {
      type: 'fact',
      content: "A bolt of lightning is 5 times hotter than the surface of the Sun!",
      mannanVersion: "WHOA! ⚡ Lightning is 5 TIMES hotter than the Sun's surface! 30,000 Kelvin vs 6,000 Kelvin! Nature is absolutely WILD! 🔥",
      tahiraVersion: "Amazing nature fact! ⚡ A bolt of lightning reaches 30,000 Kelvin — five times hotter than the Sun's surface! Nature is full of wonders! 🌟",
    },
    {
      type: 'joke',
      content: "Why can't you trust an atom? Because they make up everything!",
      mannanVersion: "Classic science joke! 😂 Why can't you trust an atom? Because they MAKE UP everything! Atoms literally make up all matter! 🔬",
      tahiraVersion: "A little science humor 😊: Why can't you trust an atom? Because they make up everything! And that's scientifically true! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Kingdoms of life: King Philip Came Over For Good Soup = Kingdom, Phylum, Class, Order, Family, Genus, Species",
      mannanVersion: "Bio classification trick! 👑 'King Philip Came Over For Good Soup' = Kingdom, Phylum, Class, Order, Family, Genus, Species! Use this in your exam! 📝",
      tahiraVersion: "Remember taxonomy with this story 🌸: 'King Philip Came Over For Good Soup' = Kingdom, Phylum, Class, Order, Family, Genus, Species! 🍲",
    },
    {
      type: 'fact',
      content: "Honey never spoils. Archaeologists found 3000-year-old honey in Egyptian tombs that was still edible!",
      mannanVersion: "Dude! 🍯 Honey found in Egyptian pyramids — 3000 years old — was STILL EDIBLE! Honey is basically immortal food! 😱",
      tahiraVersion: "Isn't this wonderful? 🍯 Honey never spoils! Archaeologists found 3000-year-old honey in Egyptian tombs that was still perfectly edible. Nature's gift! 🌺",
    },
    {
      type: 'fact',
      content: "The human body has enough iron to make a 3-inch nail!",
      mannanVersion: "Body facts! 💪 Your body has enough iron to make a 3-inch nail! You're literally made of metal, bro! Iron Man is real! 🦾",
      tahiraVersion: "Fascinating body science! 💫 The human body contains enough iron to make a small nail. Our bodies are truly remarkable! 🌸",
    },
  ],
  physics: [
    {
      type: 'joke',
      content: "Why did the physics teacher break up with the biology teacher? There was no chemistry!",
      mannanVersion: "Physics joke incoming! 😂 Why did the physics teacher break up with the biology teacher? There was NO CHEMISTRY! Double meaning — get it? 🔬⚡",
      tahiraVersion: "A sweet science joke 😊: Why did the physics teacher break up with the biology teacher? There was no chemistry! Science and love are connected! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Newton's Laws: 1-Inertia, 2-F=ma, 3-Action-Reaction. Remember: 'I Feel Amazing'",
      mannanVersion: "Newton's Laws shortcut! 🍎 'I Feel Amazing' = Inertia, F=ma, Action-Reaction! Newton dropped an apple and changed physics forever! 💪",
      tahiraVersion: "Remember Newton's three laws with 'I Feel Amazing' 🌸: Inertia, Force=mass×acceleration, Action-Reaction! Simple and beautiful! ✨",
    },
    {
      type: 'fact',
      content: "Light takes 8 minutes and 20 seconds to travel from the Sun to Earth!",
      mannanVersion: "Space fact! 🌞 The sunlight you see RIGHT NOW left the Sun 8 minutes 20 seconds ago! You're literally seeing the past! Time travel is real! 🚀",
      tahiraVersion: "Isn't space magical? 🌟 The sunlight warming your face right now left the Sun 8 minutes and 20 seconds ago. We're always seeing a little bit of the past! ✨",
    },
    {
      type: 'fact',
      content: "Sound travels 4 times faster in water than in air!",
      mannanVersion: "Physics bomb! 💥 Sound travels 4x FASTER in water than air! That's why whales can communicate across entire oceans! 🐋",
      tahiraVersion: "Beautiful physics fact! 🌊 Sound travels four times faster in water than in air. That's how whales sing to each other across vast oceans! 🐋",
    },
    {
      type: 'mnemonic',
      content: "Electromagnetic spectrum: Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma = 'Raging Martians Invaded Venus Using X-ray Guns'",
      mannanVersion: "EM spectrum trick! 👽 'Raging Martians Invaded Venus Using X-ray Guns' = Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma! Aliens helping you study! 😂",
      tahiraVersion: "Remember the EM spectrum 🌈: 'Raging Martians Invaded Venus Using X-ray Guns' = Radio, Microwave, Infrared, Visible, UV, X-ray, Gamma! 🌸",
    },
  ],
  chemistry: [
    {
      type: 'joke',
      content: "Why do chemists like nitrates so much? Because they're cheaper than day rates!",
      mannanVersion: "Chemistry pun alert! 😂 Why do chemists love nitrates? Because they're cheaper than DAY RATES! Ni-trates... night rates... get it? 🧪",
      tahiraVersion: "A chemistry smile for you 😊: Why do chemists like nitrates? Because they're cheaper than day rates! Science humor is the best! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Periodic Table first 20 elements: H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca",
      mannanVersion: "First 20 elements trick! 🧪 'Hi Hello Little Betty Brown Came Near Our Friendly Neighborhood, Naughty Magician Always Sings Pretty Songs, Clearly Arguing, Keeping Count!' 🎵",
      tahiraVersion: "Learn the first 20 elements with this story 🌸: 'Hi Hello Little Betty Brown Came Near Our Friendly Neighborhood, Naughty Magician Always Sings Pretty Songs, Clearly Arguing, Keeping Count!' 📖",
    },
    {
      type: 'fact',
      content: "Gold is so rare that more steel is poured in an hour than gold has been poured since the beginning of time!",
      mannanVersion: "Gold fact! 🥇 More steel is made in ONE HOUR than all the gold ever mined in human history! Gold is THAT rare! No wonder it's valuable! 💰",
      tahiraVersion: "Precious knowledge! 🌟 More steel is produced in one hour than all the gold ever mined throughout human history. That's why gold is so precious! ✨",
    },
    {
      type: 'fact',
      content: "Water expands by 9% when it freezes — that's why ice floats!",
      mannanVersion: "Ice science! 🧊 Water EXPANDS 9% when it freezes! That's why ice floats — it's less dense than liquid water! This is why fish survive in frozen lakes! 🐟",
      tahiraVersion: "Beautiful chemistry! 🌊 Water expands by 9% when it freezes, making ice less dense than liquid water. That's why ice floats — and why aquatic life survives winter! 🐟",
    },
    {
      type: 'mnemonic',
      content: "Valency of common elements: H=1, O=2, N=3, C=4. Remember: 'HONC if you love chemistry!'",
      mannanVersion: "Valency trick! 🎯 'HONC if you love chemistry!' H=1, O=2, N=3, C=4! Honk honk! 🚗 Now you'll never forget valencies! 😂",
      tahiraVersion: "Remember valencies with 'HONC' 🌸: Hydrogen=1, Oxygen=2, Nitrogen=3, Carbon=4! HONC if you love chemistry! 🧪",
    },
  ],
  biology: [
    {
      type: 'joke',
      content: "Why did the biology student fail the exam? Because they couldn't find the nerve to study!",
      mannanVersion: "Bio joke! 😂 Why did the bio student fail? They couldn't find the NERVE to study! Nervous system pun! Get it? 🧠",
      tahiraVersion: "A gentle biology joke 😊: Why did the biology student struggle? They couldn't find the nerve to study! The nervous system is fascinating! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Mitosis phases: PMAT = Prophase, Metaphase, Anaphase, Telophase. 'People Meet And Talk'",
      mannanVersion: "Mitosis trick! 🔬 'People Meet And Talk' = Prophase, Metaphase, Anaphase, Telophase! Cell division made easy! 💪",
      tahiraVersion: "Remember mitosis phases 🌸: 'People Meet And Talk' = Prophase, Metaphase, Anaphase, Telophase! Cells are like little communities! 🌺",
    },
    {
      type: 'fact',
      content: "The human brain generates about 20 watts of power — enough to power a dim light bulb!",
      mannanVersion: "Brain power! 🧠 Your brain generates 20 WATTS of electricity! You literally have a light bulb in your head! That's why we say 'bright idea'! 💡",
      tahiraVersion: "Isn't the human brain amazing? 🌟 It generates about 20 watts of power — enough to light a small bulb! Your mind is truly a source of light! 💡",
    },
    {
      type: 'fact',
      content: "DNA in a single human cell, if stretched out, would be about 2 meters long!",
      mannanVersion: "DNA fact! 🧬 The DNA in ONE cell = 2 meters long! Your body has 37 trillion cells! That's enough DNA to reach the Sun and back 300 times! 🌞",
      tahiraVersion: "Wonderful biology! 🧬 The DNA in a single cell, if stretched out, would be 2 meters long. Your body contains enough DNA to reach the Sun and back 300 times! ✨",
    },
    {
      type: 'mnemonic',
      content: "Photosynthesis: 6CO2 + 6H2O + light → C6H12O6 + 6O2. 'Carbon dioxide and water, with sunlight's power, make sugar and oxygen every hour!'",
      mannanVersion: "Photosynthesis rap! 🌱 'Carbon dioxide and water, with sunlight's power, make sugar and oxygen every hour!' Plants are basically solar-powered sugar factories! 🏭",
      tahiraVersion: "Remember photosynthesis with this poem 🌸: 'Carbon dioxide and water, with sunlight's power, make sugar and oxygen every hour!' Plants are nature's miracle! 🌿",
    },
  ],
  english: [
    {
      type: 'joke',
      content: "Why was the grammar teacher always late? Because she was always correcting herself!",
      mannanVersion: "English joke! 😂 Why was the grammar teacher always late? She was always CORRECTING herself! Self-editing is real! ✏️",
      tahiraVersion: "A sweet English joke 😊: Why was the grammar teacher always late? She was always correcting herself! Attention to detail is a virtue! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Spelling rule: 'I before E, except after C, or when sounded like A as in neighbor and weigh'",
      mannanVersion: "Spelling hack! ✏️ 'I before E, except after C!' believe, achieve, receive, ceiling! This rule saves you in every English exam! 📝",
      tahiraVersion: "A classic spelling rule 🌸: 'I before E, except after C' — believe, achieve, receive, ceiling. English has beautiful patterns! ✨",
    },
    {
      type: 'fact',
      content: "The word 'set' has the most definitions in the English dictionary — over 430!",
      mannanVersion: "Word fact! 📚 'SET' has 430+ definitions in the dictionary! It's the most overworked word in English! Poor 'set'! 😂",
      tahiraVersion: "Fascinating language fact! 📖 The word 'set' has over 430 definitions — the most of any word in English! Language is endlessly rich! 🌸",
    },
    {
      type: 'fact',
      content: "Shakespeare invented over 1700 words we still use today, including 'bedroom', 'lonely', and 'generous'!",
      mannanVersion: "Shakespeare was a LEGEND! 🎭 He invented 1700+ words! 'Bedroom', 'lonely', 'generous' — all Shakespeare! Imagine inventing words that billions use! 🤯",
      tahiraVersion: "Isn't Shakespeare wonderful? 🌹 He invented over 1700 words we still use today — 'bedroom', 'lonely', 'generous'. Words are his immortal gift to us! ✨",
    },
    {
      type: 'mnemonic',
      content: "8 Parts of Speech: NAVPACIP = Noun, Adjective, Verb, Pronoun, Adverb, Conjunction, Interjection, Preposition",
      mannanVersion: "Parts of speech shortcut! 🎯 'NAVPACIP' = Noun, Adjective, Verb, Pronoun, Adverb, Conjunction, Interjection, Preposition! Say it fast: NAV-PA-CIP! 🚀",
      tahiraVersion: "Remember the 8 parts of speech 🌸: NAVPACIP = Noun, Adjective, Verb, Pronoun, Adverb, Conjunction, Interjection, Preposition! Language is music! 🎵",
    },
  ],
  history: [
    {
      type: 'fact',
      content: "The Great Wall of China is NOT visible from space with the naked eye — that's a myth!",
      mannanVersion: "Myth busted! 💥 The Great Wall of China is NOT visible from space! It's only 30 feet wide! Astronauts confirmed this! Don't believe everything you read! 🚀",
      tahiraVersion: "An important history correction 🌸: The Great Wall of China is not visible from space with the naked eye. It's a common myth! Always verify your facts! 📖",
    },
    {
      type: 'joke',
      content: "Why did the history teacher go to the doctor? Because he had too many dates!",
      mannanVersion: "History joke! 😂 Why did the history teacher go to the doctor? Too many DATES! 1857, 1947, 1950... dates everywhere! 📅",
      tahiraVersion: "A history smile 😊: Why did the history teacher visit the doctor? Too many dates! But dates are what make history come alive! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Indian Independence: 15 August 1947. Remember: '1-5-8-1947' — 1+5=6 letters in 'August', 8+1+9+4+7=29 (Nehru's speech was 29 minutes!)",
      mannanVersion: "Independence Day trick! 🇮🇳 15 August 1947 — 'Jai Hind' has 7 letters, 1947 ends in 7! India's lucky number! 🎉",
      tahiraVersion: "Remember India's independence 🌸: 15 August 1947. 'Jai Hind' — two words, just like our two-word national motto 'Satyameva Jayate'! 🇮🇳",
    },
    {
      type: 'fact',
      content: "India was the world's largest economy for 1700 years before British colonization!",
      mannanVersion: "India was RICH! 💰 For 1700 years, India was the world's largest economy! We had 25% of global GDP! That's our heritage, bro! 🇮🇳",
      tahiraVersion: "Proud history fact! 🌟 India was the world's largest economy for approximately 1700 years before colonization. Our heritage is one of abundance and wisdom! 🇮🇳",
    },
    {
      type: 'fact',
      content: "Chess was invented in India! It was called 'Chaturanga' in ancient times.",
      mannanVersion: "India invented CHESS! ♟️ 'Chaturanga' — the ancient Indian game that became chess! We gave the world the greatest strategy game! 🧠",
      tahiraVersion: "Beautiful heritage! ♟️ Chess was invented in India as 'Chaturanga'. Our ancestors gave the world one of its greatest intellectual games! 🌸",
    },
  ],
  geography: [
    {
      type: 'fact',
      content: "India has the world's largest postal network with over 1.5 lakh post offices!",
      mannanVersion: "India facts! 📮 India has 1.5 LAKH post offices — the world's largest postal network! Even remote Himalayan villages get mail! 🏔️",
      tahiraVersion: "Wonderful India fact! 📮 India has the world's largest postal network with over 1.5 lakh post offices. Connecting every corner of our vast nation! 🌸",
    },
    {
      type: 'joke',
      content: "Why did the geography student fail? Because he couldn't find his way around the subject!",
      mannanVersion: "Geography joke! 😂 Why did the geo student fail? He couldn't find his way around the SUBJECT! Lost without a map! 🗺️",
      tahiraVersion: "A gentle geography joke 😊: Why did the geography student struggle? He couldn't find his way around the subject! But with maps, we can go anywhere! 🌍",
    },
    {
      type: 'mnemonic',
      content: "Continents: 'Eat An Apple As A Nice Snack' = Europe, Antarctica, Asia, Africa, Australia, North America, South America",
      mannanVersion: "7 continents trick! 🌍 'Eat An Apple As A Nice Snack' = Europe, Antarctica, Asia, Africa, Australia, North America, South America! Snack time = geography time! 🍎",
      tahiraVersion: "Remember the 7 continents 🌸: 'Eat An Apple As A Nice Snack' = Europe, Antarctica, Asia, Africa, Australia, North America, South America! 🌍",
    },
    {
      type: 'fact',
      content: "The Thar Desert in Rajasthan is one of the most densely populated deserts in the world!",
      mannanVersion: "Desert fact! 🏜️ The Thar Desert is one of the MOST POPULATED deserts on Earth! 83 people per sq km! Rajasthanis are tough! 💪",
      tahiraVersion: "Fascinating India geography! 🌸 The Thar Desert in Rajasthan is one of the world's most densely populated deserts. Human resilience is remarkable! 🏜️",
    },
    {
      type: 'fact',
      content: "India has the world's highest battlefield — the Siachen Glacier at 5,400 meters!",
      mannanVersion: "India's highest battlefield! ⛰️ Siachen Glacier at 5,400 meters — our brave soldiers guard it in -50°C temperatures! Jai Hind! 🇮🇳",
      tahiraVersion: "Brave India! 🌟 The Siachen Glacier at 5,400 meters is the world's highest battlefield. Our soldiers guard it in extreme conditions. True heroes! 🇮🇳",
    },
  ],
  hindi: [
    {
      type: 'fact',
      content: "Hindi is the 3rd most spoken language in the world with over 600 million speakers!",
      mannanVersion: "Hindi power! 🗣️ Hindi is spoken by 600 MILLION people — 3rd most in the world! Apni bhasha ka garv karo! 🇮🇳",
      tahiraVersion: "Proud language fact! 🌸 Hindi is the third most spoken language in the world with over 600 million speakers. Hamari bhasha, hamari pehchaan! 🇮🇳",
    },
    {
      type: 'joke',
      content: "Hindi joke: Ek student ne teacher se pucha — 'Sir, homework kab karna chahiye?' Teacher: 'Ghar par!' Student: 'Toh school mein kya karein?' Teacher: 'Homework!'",
      mannanVersion: "Hindi joke! 😂 Student: 'Sir, homework kab karna chahiye?' Teacher: 'Ghar par!' Student: 'Toh school mein kya karein?' Teacher: 'Homework!' 🤣",
      tahiraVersion: "Ek pyaari si joke 😊: Student: 'Sir, homework kab karna chahiye?' Teacher: 'Ghar par!' Student: 'Toh school mein kya karein?' Teacher: 'Homework!' 🌸",
    },
    {
      type: 'mnemonic',
      content: "Hindi vowels (Swar): अ आ इ ई उ ऊ ए ऐ ओ औ अं अः — 12 swar in Hindi",
      mannanVersion: "Hindi swar trick! 🎵 12 swar hain Hindi mein! 'Aa Ii Uu E O' — sing them like a song! अ आ इ ई उ ऊ ए ऐ ओ औ! 🎶",
      tahiraVersion: "Hindi ke 12 swar yaad karo 🌸: अ आ इ ई उ ऊ ए ऐ ओ औ अं अः — inhe ek baar roz bolne se yaad ho jaate hain! 🌺",
    },
    {
      type: 'fact',
      content: "The Devanagari script used for Hindi is one of the most scientific writing systems in the world!",
      mannanVersion: "Devanagari is SCIENTIFIC! 🔬 Every letter has a specific sound — no exceptions! Unlike English where 'gh' can sound like 'f' (enough)! Hindi is logical! 🧠",
      tahiraVersion: "Beautiful language fact! 🌸 Devanagari script is one of the most scientific writing systems — every letter has exactly one sound. Our language is perfectly designed! ✨",
    },
    {
      type: 'fact',
      content: "Hindi has no articles (a, an, the) — making it simpler in some ways than English!",
      mannanVersion: "Hindi advantage! 😎 Hindi has NO articles — no 'a', 'an', 'the'! One less thing to worry about! Hindi is actually simpler than English in this way! 🎉",
      tahiraVersion: "Interesting comparison! 🌸 Hindi has no articles like 'a', 'an', 'the' — making it simpler in this aspect than English. Every language has its own beauty! 📖",
    },
  ],
  socialStudies: [
    {
      type: 'fact',
      content: "India is the world's largest democracy with over 900 million eligible voters!",
      mannanVersion: "India is MASSIVE! 🗳️ 900 MILLION eligible voters — the world's largest democracy! One election in India is bigger than the entire population of most countries! 🇮🇳",
      tahiraVersion: "Proud civic fact! 🌸 India is the world's largest democracy with over 900 million eligible voters. Every vote shapes our nation's future! 🇮🇳",
    },
    {
      type: 'joke',
      content: "Why did the civics student do well? Because he knew all his rights!",
      mannanVersion: "Civics joke! 😂 Why did the civics student ace the exam? Because he knew all his RIGHTS! Fundamental rights = exam rights! 📜",
      tahiraVersion: "A civic smile 😊: Why did the civics student do well? Because he knew all his rights! Knowing your rights is your greatest power! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Fundamental Rights: REECCP = Right to Equality, Education, Freedom, Constitutional Remedies, Cultural Rights, Protection against Exploitation",
      mannanVersion: "Fundamental Rights trick! 🇮🇳 'REECCP' — Right to Equality, Education, Freedom, Constitutional Remedies, Cultural Rights, Protection! 6 rights, 6 letters! 💪",
      tahiraVersion: "Remember Fundamental Rights 🌸: REECCP = Equality, Education, Freedom, Constitutional Remedies, Cultural Rights, Protection against Exploitation! Our constitutional gifts! 📜",
    },
    {
      type: 'fact',
      content: "The Indian Constitution is the longest written constitution in the world!",
      mannanVersion: "India's Constitution is the LONGEST! 📜 470 articles, 12 schedules, 25 parts! It took 2 years, 11 months, 18 days to write! Dr. Ambedkar was a genius! 🙏",
      tahiraVersion: "Constitutional pride! 🌟 India's Constitution is the longest written constitution in the world — a testament to our diverse and complex democracy! Dr. Ambedkar's masterpiece! 🌸",
    },
    {
      type: 'fact',
      content: "Panchayati Raj gives power to villages — India has over 2.5 lakh gram panchayats!",
      mannanVersion: "Grassroots democracy! 🏘️ India has 2.5 LAKH gram panchayats! Democracy reaches every village! That's the beauty of our system! 🇮🇳",
      tahiraVersion: "Beautiful democracy! 🌸 India has over 2.5 lakh gram panchayats through Panchayati Raj. Power truly belongs to the people, even in the smallest villages! 🌺",
    },
  ],
  computerScience: [
    {
      type: 'joke',
      content: "Why do programmers prefer dark mode? Because light attracts bugs!",
      mannanVersion: "Programmer joke! 😂 Why do coders use dark mode? Because LIGHT ATTRACTS BUGS! And we have enough bugs in our code already! 🐛",
      tahiraVersion: "A tech smile 😊: Why do programmers prefer dark mode? Because light attracts bugs! And in programming, we want fewer bugs! 🌸",
    },
    {
      type: 'fact',
      content: "The first computer bug was an actual bug — a moth found in a Harvard computer in 1947!",
      mannanVersion: "First bug! 🐛 The first computer 'bug' was a REAL moth stuck in Harvard's Mark II computer in 1947! Grace Hopper found it! That's why we call errors 'bugs'! 🤯",
      tahiraVersion: "Fascinating tech history! 🌸 The first computer 'bug' was literally a moth found in Harvard's Mark II computer in 1947. Grace Hopper documented it! 🦋",
    },
    {
      type: 'mnemonic',
      content: "Binary: 0 and 1. Remember: 'There are 10 types of people — those who understand binary and those who don't!'",
      mannanVersion: "Binary joke! 😂 'There are 10 types of people — those who understand binary and those who don't!' 10 in binary = 2 in decimal! 🤓",
      tahiraVersion: "Binary wisdom 🌸: 'There are 10 types of people — those who understand binary and those who don't!' 10 in binary equals 2 in decimal! 💻",
    },
    {
      type: 'fact',
      content: "India produces the most software engineers in the world — over 1.5 million per year!",
      mannanVersion: "India dominates tech! 💻 India produces 1.5 MILLION software engineers every year! Silicon Valley runs on Indian talent! 🇮🇳🚀",
      tahiraVersion: "Proud tech fact! 🌟 India produces the most software engineers in the world — over 1.5 million per year. Our nation leads the digital revolution! 🇮🇳",
    },
    {
      type: 'fact',
      content: "The @ symbol was chosen for email by Ray Tomlinson in 1971 because it was the least-used key on the keyboard!",
      mannanVersion: "Email history! 📧 Ray Tomlinson chose '@' for email in 1971 because it was the LEAST USED key! Now it's the most famous symbol on the internet! 😂",
      tahiraVersion: "Interesting tech history! 📧 The @ symbol was chosen for email in 1971 because it was rarely used. Now it connects billions of people worldwide! 🌸",
    },
  ],
  economics: [
    {
      type: 'fact',
      content: "India is the 5th largest economy in the world and growing fast!",
      mannanVersion: "India rising! 📈 India is the 5th largest economy and will be 3rd by 2030! We're on fire! 🔥🇮🇳",
      tahiraVersion: "Inspiring economic fact! 🌟 India is the 5th largest economy in the world and growing rapidly. Our nation's future is bright! 🇮🇳",
    },
    {
      type: 'joke',
      content: "Why did the economist cross the road? To get to the other side — but he's still calculating the opportunity cost!",
      mannanVersion: "Economics joke! 😂 Why did the economist cross the road? To get to the other side — but he's still calculating the OPPORTUNITY COST! 📊",
      tahiraVersion: "An economics smile 😊: Why did the economist cross the road? He's still calculating the opportunity cost! Every decision has a trade-off! 🌸",
    },
    {
      type: 'mnemonic',
      content: "GDP = C + I + G + NX (Consumption + Investment + Government spending + Net Exports)",
      mannanVersion: "GDP formula! 📊 'Can I Get Noodles eXtra?' = Consumption + Investment + Government + Net Exports! Economics made delicious! 🍜",
      tahiraVersion: "Remember GDP formula 🌸: C + I + G + NX = 'Can I Get Noodles eXtra?' = Consumption, Investment, Government spending, Net Exports! 📈",
    },
    {
      type: 'fact',
      content: "The Reserve Bank of India was established in 1935 and nationalized in 1949!",
      mannanVersion: "RBI history! 🏦 RBI was established in 1935 — before independence! It was nationalized in 1949. The RBI controls India's money supply! 💰",
      tahiraVersion: "Important economic history! 🌸 The Reserve Bank of India was established in 1935 and nationalized in 1949. It's the guardian of our nation's financial health! 🏦",
    },
    {
      type: 'fact',
      content: "India's UPI (Unified Payments Interface) processes over 10 billion transactions per month!",
      mannanVersion: "India's fintech revolution! 📱 UPI processes 10 BILLION transactions per month! India leads the world in digital payments! 🇮🇳🚀",
      tahiraVersion: "Digital India pride! 🌟 India's UPI processes over 10 billion transactions monthly — leading the world in digital payments innovation! 🇮🇳",
    },
  ],
  politicalScience: [
    {
      type: 'fact',
      content: "India's Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950!",
      mannanVersion: "Constitution dates! 📜 Adopted: 26 Nov 1949. Effective: 26 Jan 1950 — Republic Day! Two important dates every Indian must know! 🇮🇳",
      tahiraVersion: "Constitutional milestone! 🌸 India's Constitution was adopted on 26 November 1949 and came into effect on 26 January 1950 — our Republic Day! 🇮🇳",
    },
    {
      type: 'joke',
      content: "Why did the politician go to school? To learn how to make promises he could keep!",
      mannanVersion: "Political joke! 😂 Why did the politician go to school? To learn how to make promises he could KEEP! Still learning... 📚",
      tahiraVersion: "A gentle political smile 😊: Why did the politician go to school? To learn how to make promises he could keep! Education shapes better leaders! 🌸",
    },
    {
      type: 'mnemonic',
      content: "Three branches of Indian government: Legislature, Executive, Judiciary = 'LEJ' = 'Laws Executed Justly'",
      mannanVersion: "Government branches! ⚖️ 'Laws Executed Justly' = Legislature, Executive, Judiciary! Three pillars of Indian democracy! 🏛️",
      tahiraVersion: "Remember India's three branches 🌸: 'Laws Executed Justly' = Legislature, Executive, Judiciary! Three pillars holding up our democracy! 🏛️",
    },
    {
      type: 'fact',
      content: "India has a federal system with 28 states and 8 Union Territories!",
      mannanVersion: "India's structure! 🗺️ 28 states + 8 Union Territories = India! Each state has its own culture, language, and government! Unity in diversity! 🇮🇳",
      tahiraVersion: "Beautiful India! 🌸 India has 28 states and 8 Union Territories — each with its own culture and language. Unity in diversity is our strength! 🇮🇳",
    },
    {
      type: 'fact',
      content: "The Preamble of India begins with 'We, the People of India' — power belongs to citizens!",
      mannanVersion: "Preamble power! 📜 'WE, THE PEOPLE OF INDIA' — the Constitution starts with US! Not the government, not the king — the PEOPLE! That's democracy! 🇮🇳",
      tahiraVersion: "Empowering words! 🌟 'We, the People of India' — the Preamble reminds us that power belongs to every citizen. You matter! 🌸",
    },
  ],
};

export function getRandomEngagement(subject: string, teacherName: 'Mannan' | 'Tahira'): EngagementItem & { displayContent: string } {
  const items = engagementContent[subject] || engagementContent['science'];
  const item = items[Math.floor(Math.random() * items.length)];
  const displayContent = teacherName === 'Mannan'
    ? (item.mannanVersion || item.content)
    : (item.tahiraVersion || item.content);
  return { ...item, displayContent };
}
