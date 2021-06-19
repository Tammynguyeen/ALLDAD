var selectedFace;
var selectedContent;
const faceContentVar = [
   ["Yes!",
   "good try, but no.",
   "Thanks for the offer, but no thank you.", 
    "Sure thing, let's get to it right now!",
    "She really has better knowledge on this than I do.", 
    "This is a secret between us two, and that's what makes it so cool! Right?", 
    "I'm curious to find out what she said.",
    "Sorry I can't help you right now, but I will get to it right after this.", 
    "Let me know, maybe I can give you a lift there.",
    "I'll get to it in just a bit. Hold on a moment.", 
    "How can I help you today lovely?", 
    "It must have slipped my mind, my apologies.",
    "I'm truly so sorry! I really didn't mean it!", 
    "The clock is ticking and I'm concerned that you will be late for your appointment!",
    "Hold on a moment, I'll be right with you.", 
    "I'll be happy with whatever you decide on!",
    "Yes, just let me know.",
    "Sorry, I didn't catch that, can you repeat it please? ",
    "I'm almost there, see you shortly. ",
    "I'll call you back later, when i am safely parked. ",
    "I'm just happy you're still coming to me.",
    "How unusual, do share.",
    "I love you."],
    
    ["I'm fine with anything, you just go ahead. ",
    "No!",
    "I must remember to be polite while saying no. So, no thank you. ",
    "Ok can. Don't ask me again, if not I'll be very angry. ",
    "I don't know what you want, and I don't think she will either, but you can try. ",
    "You asking for trouble only. ",
    "I know she said what I said, I told you so. ",
    "Not now. ",
    "Need me to fetch you there or pick you up later? You have to tell me, because I won't ask you. ",
    "Okok, I will do it, have some patience la.",
    "what do u want from me? ",
    "But I bet your mother can help you with it.",
    "I'm sorry. Why do I always end up in these situations? ",
    "Hurry up la, waste my petrol waiting for you. ",
    "Stop right there. What do you mean by this?",
    "Even if i gave you my answer, you would still choose the other option.",
    "Can la, can la. If you need my help just ask. Don't need such a long story. ",
    "What did you say? Speak louder, only ants can hear you at that volume.",
    "I'm giving you a 10-min headstart because I know you like to dilly dally. ",
    "I scrambled to get my earpiece on, but it dropped, so you're on speaker now. This had better be important, what do you want? ",
    "Just make a decision, I don't want to think.",
    "This might buy me some time to find an answer to get out of this.",
    "Maybe I'll get some peace if you're out of the house."],
    
    ["HOW MANY TIMES YOU WANT ME TO SAY YES? YES MEANS YES RIGHT?!",
    "N-O. NO.",
    "i really don't want it and i can't understand why you can't understand that! Ok, thanks." ,
    "OK? IS THIS OK?! DO YOU THINK IT'S OK?!?",
    "Don't interrupt me right now, I'm super busy! ",
    "I've done something wrong, so help me cover not rat me out!",
    "Very likely that she will agree with what I said, so you had better listen to both of us!",
    "I cannot hear what you just said through this door, and I am currently focused on doing something very important, so whatever it is, handle it yourself la!",
    "Do you think this house is a hotel? Go out from morning to night, and then comeback to use my electricity and water!  COME, I FETCH YOU THERE NOW LA!",
    "CAN'T YOU SEE THAT I'M BUSY?",
    "This better be important, if not, why are you interrupting me for?  ",
    "At my age, you tend to forget things and i have no one to blame but myself, but I don't know how to channel this feeling except on to the next available person. ROAR!",
    "OK FINE. YOU WERE RIGHT. I WAS WRONG, HAPPY? ",
    "WHY IS EVERYONE SO SLOW???",
    "The news will be over in 5 mins, so you wait!",
    "I don't have time to argue with you on this, so is better you make the final decision as per usual. ",
    "So easy, you don't know how to do? Come I show you!",
    "I'm just double-checking you said what you did before my rage comes on.",
    "Hello, you better be there waiting for me, then we can zoom off more quickly.  ",
    "VERY DANGEROUS! BYE.",
    "HURRY UP AND DECIDE.",
    "This is my way to say yes i agree, and i hope this satistfies you as an adequate answer. ",
    "Head out and leave me alone."],

    ["Now please return to whatever you were doing before. The news is on.  ",
    "No. It means 'not ever'. Funny you should ask me a question when you know the answer for it will never change from 'no'. Now yes, that is my final answer. ",
    "No thanks. ",
    "ok. ",
    "Ask your mother. She's waiting for you to ask. ",
    "Don't tell her. ",
    "I hope it didn't involve me, but just needed to double check with you.",
    "I may not look it. But I am. ",
    "This is a courtesy question borne from care and concern of my spawn and/or brethren. ",
    "You always make me wait, so now I will make you wait. ",
    "I see you need something from me, but if i remain non-chalant and vague in my replies, you will disappear into the background again. ",
    "Or did i? Only I will know, but I shan't divulge the truth to you. ",
    "Sorry. Or am i? Who knew a simple 5-letter word could hold so much influence over a person. Interesting ",
    "It's either I want you to be here quickly, or could mean I would leave or start without you. Open for intepretation, either way, you're behind.",
    "Waiting is a test of patience and a measurement of importance in the news that you are disseminating to me. ",
    "If it were up to me, it would have already be done. ",
    "Ok, can. ",
    "I'm gonna need more details before I commit to something.",
    "Concentrating on the road, not on this call or conversation. But yes, I am reaching the destination. ",
    "There seems to be no traffic police in sight, but if there is, this call wil be abruptly cut, without prior warning.  ",
    "It's time for you to start making some decisions in life.",
    "I have the answer, but you will find out later. ",
    "Do I really want you to stay safe? Only one way to find out."],

    ["Yes?!???",
    "Where did i leave my phone? I thought it was in my pocket...",
    "What did you say again? If you could so kindly repeat it, i might say yes. ",
    "Ok to what ah? ",
    "That's the best that I can do to help you. I don't even know where she is actually....",
    "She will scold me, you, and everyone else we know. Really. ",
    "Did she ask you anything about me? I still have some errands to run.",
    "I'm busy looking for my phone. Where did I leave it? ",
    "You might need to help me pick up a few things that I might have forgotten earlier. Can you? ",
    "But later I may also forget. How?",
    "What???",
    "I forget many things, you should know this by now, or did you forget that too? ",
    "Beg your pardon, what did you say again? ",
    "FASTER! BEFORE I FORGET!",
    "Let me process my thoughts first, but you might need to repeat what you said again. Twice. ",
    "I can't decide so this would really be more a favour to me than to you." ,
    "Can I say cannot? ",
    "If you repeat what you said then maybe I'll understand you better.",
    "Should I wait here, or over there? Which place will be better and more feasible for you to notice me? I wonder. ",
    "Perhaps you can give me the directions to where I am supposed to be.",
    "I can't even remember the options, it's better I just let you decide.",
    "I hope this is convincing enough to throw them off my scent on forgetting a dozen other things today. ",
    "Do they need to stay safe for this? Better just say anyway."]
]

const linkContentVar = [
["	Happy-Yes.png	",
"	Happy-No.png",
"	Happy-No Thanks.png		",
"	Happy-Ok.png	",
"	Happy-Ask Your Mother.png	",
"	Happy-Don_t Tell Your Mother.png	",
"	Happy-What Did Your Mother Say.png	",
"	Happy-I_m Busy.png	",
"	Happy-Where Are You Going.png	",
"	Happy-Later.png	",
"	Happy-What.png	",
"	Happy-I Forgot.png	",
"	Happy-Sorry.png	",
"	Happy-Faster.png	",
"	Happy-Wait.png	",
"	Happy-Up To You.png	",
"	Happy-Can.png	",
"	Happy-Huh.png	",
"	Happy-Reaching.png	",
"	Happy-Driving.png	",
"	Happy-Anything.png	",
"	Happy-Hmmm.png	",
"	Happy-Stay Safe.png	"],

["	Grumpy-Yes.png	",
"	Grumpy-No.png	",
"	Grumpy-No Thanks.png	",
"	Grumpy-Ok.png	",
"	Grumpy-Ask Your Mother.png	",
"	Grumpy-Don_t Tell Your Mother.png	",
"	Grumpy-What Did Your Mother Say.png	",
"	Grumpy-I_m busy.png	",
"	Grumpy-What Are You Doing.png	",
"	Grumpy-Late.png	",
"	Grumpy-What.png",
"	Grumpy-I Forgot.png	",
"	Grumpy-Sorry.png	",
"	Grumpy-Faster.png	",
"	Grumpy-Wait.png	",
"	Grumpy-Up To You.png	",
"	Grumpy-Can.png	",
"	Grumpy-Huh.png	",
"	Grumpy-Reaching.png	",
"	Grumpy-Driving.png	",
"	Grumpy-Anything.png	",
"	Grumpy-Hmmm.png	",
"	Grumpy-Stay Safe.png	"],


["	Hangry-Yes.png	",
"	Hangry-No.png	",
"	Hangry-No Thanks.png	",
"	Hangry-Ok.png	",
"	Hangry-Ask Your Mother.png	",
"	Hangry-Don_t Tell Your Mother.png	",
"	Hangry-What Did Your Mother Say.png		",
"	Hangry-I_m Busy.png	",
"	Hangry-Where Are You Going.png	",
"	Hangry-Later.png	",
"	Hangry-What.png",
"	Hangry-I Forgot.png	",
"	Hangry-Sorry.png	",
"	Hangry-Faster.png	",
"	Hangry-Wait.png	",
"	Hangry-Up To You.png	",
"	Hangry-Can.png	",
"	Hangry-Huh.png	",
"	Hangry-Reaching.png	",
"	Hangry-Driving.png	",
"	Hangry-Anything.png	",
"	Hangry-Hmmm.png	",
"	Hangry-Stay Safe.png	"],

["	Poker Face-Yes.png	",
"	Poker Face-No.png	",
"	Poker Face-No Thanks.png	",
"	Poker Face-Ok.png	",
"	Poker Face-Ask Your Mother.png	",
"	Poker Face-Don_t Tell Your Mother.png	",
"	Poker Face-What Did Your Mother Say.png	",
"	Poker Face-I_m Busy.png	",
"	Poker Face-Where Are You Going.png	",
"	Poker Face-Later.png	",
"	Poker Face-What.png	",
"	Poker Face-I Forgot.png	",
"	Poker Face-Sorry.png	",
"	Poker Face-Faster.png	",
"	Poker Face-Wait.png	",
"	Poker Face-Up To You.png	",
"	Poker Face-Can.png	",
"	Poker Face-Huh.png	",
"	Poker Face-Reaching.png	",
"	Poker Face-Driving.png	",
"	Poker Face-Anything.png	",
"	Poker Face-Hmmm.png	",
"	Poker Face-Stay Safe.png	"],

["	Confused-Yes.png	",
"	Confused- No.png	",
"	Confused-No Thanks.png	",
"	Confused-Ok.png	",
"	Confused- Ask Your Mother.png	",
"	Confused- Don_t Tell Your Mother.png	",
"	Confused-What Did Your Mother Say.png	",
"	Confused-I_m Busy.png	",
"	Confused-Where Are You Going.png	",
"	Confused-Later.png	",
"	Confused-What.png	",
"	Confused-I Forgot.png	",
"	Confused-Sorry.png	",
"	Confusaed-Faster.png	",
"	Confused-Wait.png	",
"	Confused-Up To You.png	",
"	Confused-Can.png	",
"	Confused-Huh.png	",
"	Confused-Reaching.png	",
"	Confused-Driving.png	",
"	Confused-Anything.png	",
"	Confused-Hmmm.png	",
"	Confused-Stay Safe.png	"],
]

const faceOutput = document.querySelector('#face-output');
const contentOutput = document.querySelector('#content-output');
const allOutput = document.querySelector('#translation');
const linkOutput = document.querySelector("#save-link");
console.log(contentOutput);
console.log(faceOutput);
console.log(linkOutput);
const faceBtn = document.querySelectorAll('input[name="face"]');
faceBtn.forEach((item) => {
    item.addEventListener("click", f => {
        console.log(f.target.value);
        const faceImg = faceOutput.querySelector("img");
        selectedFace = f.target.dataset.row;
        //faceOutput.innerHTML = e.target.value;
        switch (f.target.value) {
            case "happy":
                faceImg.src = "https://assets.website-files.com/60c6ef47c6ce5c4543f51c31/60c78035b345ed86cb32f6ab_happy.png";
                break;
            case "funny":
                faceImg.src = "https://assets.website-files.com/60c6ef47c6ce5c4543f51c31/60c78036d849e1ccbc211fe2_funny.png";
                break;
            case "grumpy":
                faceImg.src = "https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60c7803636536d3469ff5870_grumpy.png";
                break;
            case "hangry":
                faceImg.src = "https://assets.website-files.com/60c6ef47c6ce5c4543f51c31/60c780354a8b47a8b8544226_hangry.png";
                break;
            case "poker":
                faceImg.src = "https://assets.website-files.com/60c6ef47c6ce5c4543f51c31/60c78035e39cde3f724d508c_poker.png";
                break;
            case "confused":
                faceImg.src = "https://assets.website-files.com/60c6ef47c6ce5c4543f51c31/60c7803669d2476939472bbc_confused.png";
                break;
            default:
                ;
        }
    })
})

const btnContent = document.querySelectorAll('input[name="content"]');
btnContent.forEach((item) => {
    item.addEventListener("click", c => {
        console.log(c.target.value);
        selectedContent = c.target.dataset.col;
        contentOutput.innerHTML = c.target.value;
    })
})

const submitBtn = document.querySelector("#submitBtn");
if(submitBtn) {
submitBtn.addEventListener("click", e => {
    if (selectedContent && selectedFace) {
        console.log(selectedContent);
        console.log(selectedFace);
        console.log(faceContentVar[selectedFace][selectedContent]);
        console.log(linkContentVar[selectedFace][selectedContent]);
        allOutput.innerHTML = faceContentVar[selectedFace][selectedContent];
        linkOutput.href = linkContentVar[selectedFace][selectedContent];
        
    }
})}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener("click", e => {
console.log(document.querySelector("#form"));
	document.querySelector("#form").reset();
        })
        
