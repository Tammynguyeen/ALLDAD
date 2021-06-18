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
    "I forget many things, you should know this by know, or did you forget that too? ",
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
["https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b5b301b71ee393f7a_Happy-Yes.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516aeef92cab95d0763c_Happy-No.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a4806194aca5a8b90_Happy-No%20Thanks.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516bfb6316354f57edc9_Happy-Ok.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516afea2f1b2fde1b301_Happy-Ask%20Your%20Mother.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a46fc80dc038a6e1f_Happy-Don_t%20Tell%20Your%20Mother.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b91229814c5e3b502_Happy-What%20Did%20Your%20Mother%20Say.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a8bf91177cee49b9a_Happy-I_m%20Busy.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b2411f12279e412b9_Happy-Where%20Are%20You%20Going.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a390ab3faf595537b_Happy-Later.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516bbaeefb9677b00c69_Happy-What.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516ac43e3ea7a026c671_Happy-I%20Forgot.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b20d414007e45132a_Happy-Sorry.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516ab03c620ba8b7210f_Happy-Faster.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b390ab35f0095537c_Happy-Wait.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b5b301bc719393f79_Happy-Up%20To%20You.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51696b76023a411c6d57_Happy-Can.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a48bbf7d2386cab1c_Happy-Huh.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b9927381046335626_Happy-Reaching.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a48bbf7d2386cab1c_Happy-Huh.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5169f80f3c2cda4cd3de_Happy-Anything.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516a02d638bf2ee3bf07_Happy-Hmmm.png",
"https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc516b67e06d82282d831a_Happy-Stay%20Safe.png"],

["	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc517656075850a1d7e46d_Grumpy-Yes.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175c46546574ecf735d_Grumpy-No.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51758c3c2cc132e22738_Grumpy-No%20Thanks.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc517502613077e0fd1f8c_Grumpy-Ok.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51749329d90f6bca4fcc_Grumpy-Ask%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51749f1dda09496daf26_Grumpy-Don_t%20Tell%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51769f1ddaf4866daf28_Grumpy-What%20Did%20Your%20Mother%20Say.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5174ce118837bdbffab3_Grumpy-I_m%20busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5176b03c623f87b7218d_Grumpy-What%20Are%20You%20Doing.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175c46546233ccf735e_Grumpy-Late.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51769329d96a09ca4fcd_Grumpy-What.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5174ef191bb658ae555b_Grumpy-I%20Forgot.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175026130515dfd1f8d_Grumpy-Sorry.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51742a3de5203be2b7bf_Grumpy-Faster.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5176cfa515db5c28003b_Grumpy-What-1.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175d7bc52ca26db4613_Grumpy-Up%20To%20You.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51740097858f10cb67fe_Grumpy-Can.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5174c465464021cf735c_Grumpy-Huh.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175e50f53be409cd961_Grumpy-Reaching.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51740182f80b3a1974e5_Grumpy-Driving.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51742411f195fae412e3_Grumpy-Anything.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5174fea2f14354e1b303_Grumpy-Hmmm.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5175a1155abc9777c9c4_Grumpy-Stay%20Safe.png	"],


["	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b849304b1f5ce79f47_Hangry-Yes.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b78bf9118419e49d68_Hangry-No.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b6a1155af37b77cdf5_Hangry-No%20Thanks.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b7fea2f18009e1b349_Hangry-Ok.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51acb03c62e570b72236_Hangry-Ask%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51ac421b8046e8168ce8_Hangry-Don_t%20Tell%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b72a3de593e9e2b99a_Hangry-What%20Did%20Your%20Mother%20Say.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b7a1155a1d5f77cdf6_Hangry-I_m%20Busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b8560758cd8cd7e49d_Hangry-Where%20Are%20You%20Going.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b6b03c6201ceb7223d_Hangry-Later.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b748061945415a8bab_Hangry-Wait.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b70529c602c81cb039_Hangry-I%20Forgot.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b79f1dda73356db035_Hangry-Sorry.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51ac9122987349e3b5a9_Hangry-Faster.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b748061945415a8bab_Hangry-Wait.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b70529c636611cb03a_Hangry-Up%20To%20You.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51ac4c4064ed2ca7df90_Hangry-Can.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b7f80f3c7c7b4cd5c3_Hangry-Huh.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b74c40641460a7df96_Hangry-Reaching.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51ac8bf91182c6e49d64_Hangry-Driving.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51ac67e06d95562d8338_Hangry-Anything.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b6a1155a161077cdf4_Hangry-Hmmm.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51b748bbf7b68c6cab35_Hangry-Stay%20Safe.png	"],

["	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519a89c676433e8757c4_Poker%20Face-Yes.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5199f017e0d10e648b13_Poker%20Face-No%20Thanks.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5199421b80be5d168cc3_Poker%20Face-No.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51992411f15d11e41338_Poker%20Face-Ok.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5198baeefb5a43b00cc3_Poker%20Face-Ask%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51988c3c2c65fce22792_Poker%20Face-Don_t%20Tell%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519aeef92c5724d0770f_Poker%20Face-What%20Did%20Your%20Mother%20Say.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5198d7bc522421db4653_Poker%20Face-I_m%20Busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519af80f3c3c834cd4a5_Poker%20Face-Where%20Are%20You%20Going.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51992411f14061e41339_Poker%20Face-Later.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519afb6316bc3f57eebf_Poker%20Face-What.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5198870646fc111eacfa_Poker%20Face-I%20Forgot.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519967e06df70f2d8336_Poker%20Face-Sorry.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5198992738559a3356df_Poker%20Face-Faster.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5198fb6316670057eebe_Poker%20Face-Busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519a0182f895dc197506_Poker%20Face-Up%20To%20You.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51975b301b9c39393f89_Poker%20Face-Can.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51985b301b04ff393f8a_Poker%20Face-Huh.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc5199ce11881934bffac3_Poker%20Face-Reaching.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519820d4144a484513a4_Poker%20Face-Driving.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51981207840ca92d8a05_Poker%20Face-Anything.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc519856075862ebd7e491_Poker%20Face-Hmmm.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51999329d981f0ca4fde_Poker%20Face-Stay%20Safe.png	"],

["	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa46fc80023e8a6e3c_Confused-Yes.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a846fc80391c8a6e3b_Confused-No.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a318701853332444f8_Confused-%20No%20Thanks.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a9026130241afd2064_Confused-Ok.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a3f017e02476648b62_Confused-%20Ask%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a34c4064a14ca7dece_Confused-%20Don_t%20Tell%20Your%20Mother.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa46fc80387d8a6e3d_Confused-What%20Did%20Your%20Mother%20Say.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a648bbf74f836cab30_Confused-I_m%20Busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa09c9c158a33c2e9c_Confused-Where%20Are%20You%20Going.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a81207849a3a2d8a0d_Confused-Later.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa4806196b225a8ba1_Confused-What.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a467e06d1f832d8337_Confused-I%20Forgot.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a8fea2f17a2ee1b342_Confused-Sorry.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a3ef191b3825ae56d3_Confusaed-Faster.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a34c406430c2a7decd_Confused-Busy.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa5607584f7dd7e495_Confused-Up%20To%20You.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a30097853767cb68b6_Confused-Can.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a68bf911f195e49d62_Confused-Huh.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51aa89c6763c818757ca_Confused-Reaching.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a4480619cc275a8b9e_Confused-Driving.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a4e50f53a9599cd98e_Confused-Anything.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a6390ab31d199553a7_Confused-Hmmm.png	",
"	https://uploads-ssl.webflow.com/60c6ef47c6ce5c4543f51c31/60cc51a9b691469fc313f1ed_Confused-Stay%20Safe.png	"],
]

const faceOutput = document.querySelector('#face-output');
const contentOutput = document.querySelector('#content-output');
const allOutput = document.querySelector('#translation');
const linkOutput = document.querySelector('[href="#save-link"]');
console.log(contentOutput);
console.log(faceOutput);
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
        linkOutput.innerHTML = linkContentVar[selectedFace][selectedContent];
        
    }
})}

const resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener("click", e => {
console.log(document.querySelector("#form"));
	document.querySelector("#form").reset();
        })
        
