const ZodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

const compliments = [
    "You inspire me to be a better person",
    "You have such a calming presence",
    "Your positivity is contagious",
    "You're an amazing friend",
    "Your confidence is infectious",
    "I love how you make everyone feel comfortable",
    "Your authenticity is so refreshing",
    "You make even the most boring stuff fun",
    "You have a great sense of humor",
    "You're a gift to those around you",
    "Your kindness shows in everything you do",
    "I really value your opinion",
    "You're a breath of fresh air",
    "Your passion is inspiring",
    "You're the kind of person people feel lucky to know",
    "Youre so smart",
"You have a great way of explaining things",
"I admire your work ethic",
"You're so creative",
"Your determination is motivating",
"You're a great listener",
"You have such a unique perspective",
"You're so organized",
"You always have interesting things to say",
"Your problem-solving skills are incredible",
"I appreciate you",
"I'm so grateful to have you in my life",
"You bring out the best in me",
"I can always count on you",
"You make my life better",
"You're making a difference"
];

const victimCaedCompliment=[
    "I admire your courage in facing such difficult circumstances.",
"The way you've handled this setback is truly inspiring.",
"You are one of the strongest people I know, and I'm consistently impressed by your perseverance.",
"I'm so proud of how far you've come through all the challenges you've faced.",
"I know things have been hard, and your strength through it all is amazing.",
"You've taken such tough experiences and used them to grow stronger.",
"You show immense grace under pressure.",
"It's remarkable how you continue to move forward, no matter what is thrown your way.",
"Your ability to rise above your struggles is a testament to your character.",
"You're a survivor, and that is one of your most powerful qualities.",
"Compliments for self-advocacy and growth",
"I respect that you stand up for yourself, especially when it's hard.",
"The way you've learned and grown from this experience is incredible.",
"It takes a lot of maturity to navigate what you've gone through, and you do it with so much poise.",
"You have such a powerful voice, and I'm glad you use it to speak your truth.",
"Your experience has given you a valuable perspective that others can learn from.",
"Your kindness is a powerful balm to everyone who encounters it, even after everything you've been through.",
"I see how hard you're trying, and that effort is worth so much.",
"You have so much inner light, and it still shines through even on the toughest days.",
"What you went through does not define you, and it is wonderful to see you living your life to the fullest.",
"You are worthy of happiness and support, and I'm always here to help celebrate your successes."
];


const recomendations=[
    "Create a dedicated workspace in your home to separate work from personal life",
"Set specific, achievable goals for each day to maintain focus and motivation",
"Take short breaks every hour to stretch and rest your eyes",
"Prioritize your tasks by importance and urgency using the Eisenhower Matrix",
"Automate recurring tasks to free up time for more critical work",
"Use a project management tool to track your progress and deadlines",
"Communicate clearly and effectively with colleagues and clients",
"Practice active listening to better understand others' perspectives",
"Read a book from a genre you've never explored",
"Try a new recipe and cook a meal from a different culture",
"Take a long walk in nature to clear your head",
"Learn a few basic phrases in a new language",
"Write in a journal for 10 minutes a day to reflect on your thoughts",
"Start a new hobby, like painting, playing an instrument, or gardening",
"Volunteer for a cause you care about",
"Go to a local museum or art gallery you've never visited",
"Call a friend or family member you haven't spoken to in a while",
"Do a digital detox for a day to reduce screen time",
"Establish a consistent bedtime routine to improve your sleep quality",
"Drink a full glass of water first thing in the morning",
"Incorporate a quick 15-minute exercise routine into your day",
"Plan a small getaway for the weekend to recharge",
"Create a playlist of music that lifts your mood",
"Organize one small area of your home, like a drawer or a shelf",
"Watch a documentary about a topic you know nothing about",
"Set aside time for a creative project you've been putting off",
"Practice a simple mindfulness or meditation exercise",
"Start a compliment jar and write a positive thing about yourself or someone else every day",
"Write a handwritten letter to someone",
"Have a 'no-decision' day where you go with the flow and don't overthink things"
];

const predictions=[
    "A period of professional advancement is coming, and your hard work will soon be recognized with new opportunities or a promotion",
"Your financial outlook is set to improve, but this is a time for disciplined spending to ensure long-term stability",
"New business ventures or creative projects will prove especially profitable if you approach them with patience and clear planning",
"You may face minor career obstacles, but they will teach you valuable lessons about your professional path and goals",
"A new source of income or a sudden windfall may present itself, bringing welcome relief to your financial situation",
 "You will find yourself drawn to new people, and an unexpected encounter could lead to a significant romantic connection",
 "Communication is key to resolving a lingering issue with a loved one; use this time to listen and build a stronger bond",
"For those in a committed relationship, a renewed sense of passion and intimacy will strengthen your connection",
"You must trust your intuition in matters of the heart and not rush into a decision before you are emotionally ready",
 "A past relationship or unresolved feelings may surface, but this will allow for healing and a clear path forward",

"Your overall vitality is high, but you are advised to maintain balance and avoid overexertion to prevent fatigue",
"A focus on mental well-being is needed, as anxiety or stress could take a toll on your overall health",
"Adopting a new wellness routine or diet will have a significant positive impact on your physical health",
"Digestive or stomach-related issues may arise, so it is a good time to pay closer attention to your diet",
"Your energy levels are linked to your emotional state; tending to your feelings will boost your physical health",

 "A period of deep introspection awaits, encouraging you to reevaluate your life's purpose and direction",
"You will feel a strong pull toward spiritual growth and exploring hidden knowledge",
"A transformative experience is on the horizon that will help you shed old habits and embrace personal regeneration",
 "Travel or relocation to a new place is possible and will lead to significant personal growth",
 "Trust your inner voice and let go of self-doubt, as it is a time of immense growth and newfound confidence",
];
let head=document.querySelector('h1');
document.querySelector('button').addEventListener('click',()=>{
    const prediction=Math.floor(Math.random()*predictions.length);
    const zodi=Math.floor(Math.random()*ZodiacSigns.length);
    const compliment=Math.floor(Math.random()*compliments.length);
    const victim=Math.floor(Math.random()*victimCaedCompliment.length);
    const recomendation=Math.floor(Math.random()*recomendations.length);

    head.textContent=`your zodiac sign is ${ZodiacSigns[zodi]} `+
     `compliment is: ${compliments[compliment]} `+
     `victimcardcompliment: ${victimCaedCompliment[victim]} `+
     `recomendation is: ${recomendations[recomendation]} `+
     `predicrtion is: ${predictions[prediction]}`;
});