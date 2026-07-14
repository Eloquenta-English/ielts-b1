// ═══════════════════════════════════════════════════
// GRAMMAR DATA - Rich interactive content for all levels
// ═══════════════════════════════════════════════════
var GRAMMAR_DATA = {
  "A1": {
    "name": "A1 - Elementary",
    "color": "#34d399",
    "topics": [
      {
        "t": "Present Simple: to be",
        "vocab": [{"word":"subject","def":"The person or thing doing the action: I, you, he, she, it, we, they."},{"word":"contraction","def":"A short form like I'm, she's, we're made by joining two words."},{"word":"negative","def":"A sentence or verb form that says something is NOT true: I'm not, isn't, aren't."},{"word":"short answer","def":"A short reply: Yes, I am. / No, she isn't."}],
        "intro": "The verb <strong>be</strong> is the most important verb in English. It is irregular. In the present simple, it has three forms: <strong>am</strong>, <strong>is</strong>, <strong>are</strong>.",
        "sections": [
          {"title": "The Three Forms", "type": "table", "content": "I am (I'm)|He is (He's)|She is (She's)|It is (It's)|We are (We're)|You are (You're)|They are (They're)"},
          {"title": "When to Use Each Form", "type": "flipcards", "cards": [{"front": "I", "back": "<strong>I am</strong> happy. I + am. Always. Only with I."}, {"front": "He / She / It", "back": "<strong>He is</strong> tall. <strong>She is</strong> a doctor. <strong>It is</strong> cold."}, {"front": "We / You / They", "back": "<strong>We are</strong> ready. <strong>You are</strong> my friend. <strong>They are</strong> students."}]},
          {"title": "Do Not Forget the Subject", "type": "warning", "content": "In English, we ALWAYS need a subject before the verb. Unlike Spanish or French, you cannot drop it!", "examples": [{"correct": "It is cold.", "wrong": "Is cold.", "why": "We need It as the subject."}, {"correct": "Sally is a teacher.", "wrong": "Is a teacher.", "why": "We need Sally as the subject."}]},
          {"title": "Contractions (Short Forms)", "type": "reveal", "intro": "In spoken English and informal writing, we use contractions almost all the time:", "items": [{"label": "I am", "answer": "I'm"}, {"label": "He is", "answer": "He's"}, {"label": "She is", "answer": "She's"}, {"label": "It is", "answer": "It's"}, {"label": "We are", "answer": "We're"}, {"label": "You are", "answer": "You're"}, {"label": "They are", "answer": "They're"}]},
          {"title": "Negative Forms", "type": "table", "content": "I am not (I'm not)|He/She/It is not (isn't)|We/You/They are not (aren't)"},
          {"title": "Questions and Short Answers", "type": "flipcards", "cards": [{"front": "Am I...?", "back": "<strong>Am I</strong> late? Yes, you are. / No, you aren't."}, {"front": "Is he/she/it...?", "back": "<strong>Is she</strong> French? Yes, she is. / No, she isn't."}, {"front": "Are we/you/they...?", "back": "<strong>Are they</strong> here? Yes, they are. / No, they aren't."}]},
          {"title": "Positive Short Answers", "type": "warning", "content": "We do NOT use contractions in positive short answers. This is a very common error!", "examples": [{"correct": "Yes, I am.", "wrong": "Yes, I'm.", "why": "Full form only in positive short answers."}, {"correct": "Yes, she is.", "wrong": "Yes, she's.", "why": "Same rule - full form in positive short answers."}]},
          {"title": "When Do We Use be?", "type": "reveal", "intro": "The verb be is used for many things:", "items": [{"label": "Identity", "answer": "<strong>I'm</strong> Steven. <strong>This is</strong> Isabella."}, {"label": "Age", "answer": "<strong>I'm</strong> 24. <strong>My father is</strong> 50."}, {"label": "Job", "answer": "<strong>I'm</strong> a teacher. <strong>My wife is</strong> a doctor."}, {"label": "Nationality", "answer": "<strong>Alex is</strong> from Ireland. <strong>Sonia is</strong> from Spain."}, {"label": "Feelings", "answer": "<strong>I'm</strong> scared. <strong>She is</strong> very tired."}, {"label": "Colour", "answer": "<strong>Our dog is</strong> black. <strong>His eyes are</strong> blue."}, {"label": "Prices", "answer": "<strong>It's</strong> seven pounds. <strong>This T-shirt is</strong> twenty dollars."}, {"label": "Weather", "answer": "<strong>It's</strong> sunny today. <strong>It is</strong> very cold this morning."}, {"label": "Time", "answer": "<strong>What time is</strong> it? <strong>It's</strong> ten past four."}, {"label": "Descriptions", "answer": "<strong>He is</strong> very short. <strong>The cars are</strong> old."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "___ you a teacher? Yes, I ___.", "choices": ["Are / am", "Is / am", "Am / is", "Are / are"], "a": "Are / am"},
          {"type": "choice", "q": "What ___ your name? My name ___ Anna.", "choices": ["is / is", "are / is", "is / am", "am / is"], "a": "is / is"},
          {"type": "fill", "q": "I ___ from Japan. She ___ a student. We ___ happy.", "a": ["am", "is", "are"]},
          {"type": "choice", "q": "Where ___ my keys? They ___ on the table.", "choices": ["are / are", "is / are", "are / is", "am / are"], "a": "are / are"},
          {"type": "error", "q": "Find the mistake: Is very cold today.", "choices": ["Add It at the beginning", "Change to Are", "No mistake", "Add am"], "a": "Add It at the beginning"},
          {"type": "fill", "q": "Make negative: She is happy. She ___ ___.", "a": ["is", "not"]},
          {"type": "fill", "q": "Make question: You are French. ___ ___ French?", "a": ["Are", "you"]}
        ]
      },
      {
        "t": "Present Simple: regular verbs",
        "vocab": [{"word":"habit","def":"Something you do regularly, often without thinking: I drink coffee every morning."},{"word":"routine","def":"A fixed set of actions you normally do, usually in the same order."},{"word":"adverb of frequency","def":"Words that say how often: always, usually, often, sometimes, rarely, never."},{"word":"base form","def":"The infinitive without to: work, play, eat, go."}],
        "intro": "We use the <strong>present simple</strong> for habits, routines, and things that are always true. Add <strong>-s</strong> for he/she/it.",
        "sections": [
          {"title": "The Basic Rule", "type": "table", "content": "I/You/We/They work|He/She/It work<strong>s</strong>"},
          {"title": "Spelling Rules for -s", "type": "flipcards", "cards": [{"front": "Most verbs", "back": "add <strong>-s</strong>: play plays, eat eats, read reads"}, {"front": "-sh, -ch, -ss, -x, -o", "back": "add <strong>-es</strong>: wash washes, watch watches, kiss kisses, go goes"}, {"front": "Consonant + y", "back": "y to <strong>-ies</strong>: study studies, carry carries (but: play plays, vowel+y)"}, {"front": "have", "back": "<strong>irregular!</strong> have becomes <strong>has</strong> (not haves)"}]},
          {"title": "Negative: don't / doesn't", "type": "reveal", "intro": "Click to see how negatives work:", "items": [{"label": "I/You/We/They", "answer": "I <strong>don't</strong> like tea. (do not)"}, {"label": "He/She/It", "answer": "She <strong>doesn't</strong> like tea. (does not)"}]},
          {"title": "No double -s!", "type": "warning", "content": "In negatives and questions with he/she/it, the -s goes on do becomes does, NOT on the main verb!", "examples": [{"correct": "She doesn't like coffee.", "wrong": "She doesn't likes coffee.", "why": "The -s is on does, not like."}, {"correct": "Does he play tennis?", "wrong": "Does he plays tennis?", "why": "Main verb stays base form."}]},
          {"title": "do and does", "type": "table", "content": "I/You/We/They do|He/She/It do<strong>es</strong>"},
          {"title": "Questions", "type": "flipcards", "cards": [{"front": "Do I/you/we/they...?", "back": "<strong>Do</strong> you like pizza? Yes, I do. / No, I don't."}, {"front": "Does he/she/it...?", "back": "<strong>Does</strong> she play football? Yes, she does. / No, she doesn't."}]},
          {"title": "When Do We Use Present Simple?", "type": "reveal", "intro": "Click each situation:", "items": [{"label": "Habits and Routines", "answer": "<strong>I wake up</strong> at 7am every day. <strong>She drinks</strong> coffee every morning."}, {"label": "Always True", "answer": "<strong>The sun rises</strong> in the east. <strong>Water boils</strong> at 100C."}, {"label": "Schedules", "answer": "<strong>The train leaves</strong> at 6pm. <strong>The class starts</strong> on Monday."}, {"label": "Opinions / Feelings", "answer": "<strong>I think</strong> it is good. <strong>She loves</strong> chocolate."}]},
          {"title": "Adverbs of Frequency", "type": "reveal", "intro": "These words often appear with present simple. Click to learn:", "items": [{"label": "always (100%)", "answer": "I <strong>always</strong> brush my teeth."}, {"label": "usually (80%)", "answer": "She <strong>usually</strong> takes the bus."}, {"label": "often (60%)", "answer": "We <strong>often</strong> eat out."}, {"label": "sometimes (40%)", "answer": "He <strong>sometimes</strong> forgets."}, {"label": "rarely (10%)", "answer": "They <strong>rarely</strong> come late."}, {"label": "never (0%)", "answer": "I <strong>never</strong> drink alcohol."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "She ___ (play) tennis every Sunday.", "choices": ["plays", "play", "playing", "plaies"], "a": "plays"},
          {"type": "choice", "q": "They ___ (not/watch) TV in the morning.", "choices": ["don't watch", "doesn't watch", "not watch", "don't watching"], "a": "don't watch"},
          {"type": "fill", "q": "He ___ (study) English every day. ___ you ___ (like) pizza?", "a": ["studies", "Do", "like"]},
          {"type": "error", "q": "Find the mistake: She doesn't likes chocolate.", "choices": ["Remove -s from likes", "Change to don't", "No mistake", "Add do"], "a": "Remove -s from likes"},
          {"type": "choice", "q": "___ he ___ (go) to school by bus?", "choices": ["Does / go", "Do / go", "Does / goes", "Is / go"], "a": "Does / go"},
          {"type": "fill", "q": "Make negative: I like fish. I ___ ___ fish.", "a": ["don't", "like"]}
        ]
      },
      {
        "t": "Present Continuous",
        "vocab": [{"word":"temporary situation","def":"Something happening now or for a limited time, not permanent."},{"word":"state verb","def":"Verbs about feelings or thoughts, not actions: like, know, understand, believe."},{"word":"now","def":"The current moment: I'm studying now."},{"word":"right now","def":"Exactly at this moment: She's working right now."}],
        "intro": "We use the <strong>present continuous</strong> for actions happening <strong>right now</strong>, at this moment, or temporary situations. Form: <strong>be + verb-ing</strong>.",
        "sections": [
          {"title": "Form: be + verb-ing", "type": "table", "content": "I am working (I'm working)|He/She/It is working (He's working)|We/You/They are working (They're working)"},
          {"title": "Spelling Rules for -ing", "type": "flipcards", "cards": [{"front": "Most verbs", "back": "add <strong>-ing</strong>: play playing, read reading"}, {"front": "Verbs ending in -e", "back": "remove -e: make making, write writing, come coming"}, {"front": "Short vowel + consonant", "back": "double: run running, sit sitting, swim swimming (but: play playing, two vowels)"}, {"front": "-ie ending", "back": "-ie to -y: die dying, lie lying"}]},
          {"title": "Negative and Questions", "type": "reveal", "intro": "Click to see:", "items": [{"label": "Negative", "answer": "I<strong>'m not</strong> sleeping. She <strong>isn't</strong> working. They <strong>aren't</strong> playing."}, {"label": "Questions", "answer": "<strong>Am I</strong> talking too fast? <strong>Is she</strong> coming? <strong>Are they</strong> listening?"}]},
          {"title": "Now vs. Always", "type": "flipcards", "cards": [{"front": "Continuous (NOW)", "back": "<strong>I'm reading</strong> a good book right now. <strong>It's raining</strong> outside. <strong>She's sleeping</strong> - be quiet!"}, {"front": "Simple (ALWAYS)", "back": "<strong>I read</strong> every night. (habit) <strong>It rains</strong> a lot here. (general truth) <strong>She sleeps</strong> 8 hours. (routine)"}]},
          {"title": "Stative Verbs", "type": "warning", "content": "Some verbs are NOT normally used in the continuous. These are verbs about states, not actions.", "examples": [{"correct": "I like pizza.", "wrong": "I'm liking pizza.", "why": "Like is a state verb."}, {"correct": "She knows the answer.", "wrong": "She's knowing the answer.", "why": "Know is a state verb."}, {"correct": "I understand you.", "wrong": "I'm understanding you.", "why": "Understand is a state verb."}, {"correct": "This book belongs to me.", "wrong": "This book is belonging to me.", "why": "Belong is a state verb."}]},
          {"title": "Common Time Expressions", "type": "reveal", "intro": "These words often appear with the present continuous:", "items": [{"label": "now / right now", "answer": "I'm studying <strong>now</strong>."}, {"label": "at the moment", "answer": "She's working <strong>at the moment</strong>."}, {"label": "today", "answer": "<strong>Today</strong> we're cooking pasta."}, {"label": "Look! / Listen!", "answer": "<strong>Look!</strong> It's snowing! <strong>Listen!</strong> Someone's calling."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "Look! The children ___ (play) in the garden.", "choices": ["are playing", "play", "plays", "is playing"], "a": "are playing"},
          {"type": "choice", "q": "I ___ (read) a great book at the moment.", "choices": ["am reading", "read", "reading", "reads"], "a": "am reading"},
          {"type": "fill", "q": "She ___ (cook) dinner right now. ___ you ___ (watch) TV?", "a": ["is cooking", "Are", "watching"]},
          {"type": "error", "q": "Find the mistake: She's knowing the answer.", "choices": ["Change to knows", "Change to is knowing", "No mistake", "Add now"], "a": "Change to knows"},
          {"type": "choice", "q": "He usually ___ (walk) to school, but today he ___ (go) by car.", "choices": ["walks / is going", "is walking / goes", "walk / goes", "walks / goes"], "a": "walks / is going"},
          {"type": "fill", "q": "Make negative: They are studying. They ___ ___.", "a": ["aren't", "studying"]}
        ]
      },
      {
        "t": "Past Simple: regular verbs",
        "vocab": [{"word":"completed action","def":"An action that started and finished in the past."},{"word":"pronunciation of -ed","def":"-ed can sound /t/, /d/, or /id/ depending on the verb."},{"word":"time expression","def":"Words/phrases like yesterday, last week, ago that fix the past time."},{"word":"base form","def":"Infinitive without to: work, play, cook."}],
        "intro": "The <strong>past simple</strong> is used for completed actions in the past. Regular verbs add <strong>-ed</strong> to the base form.",
        "sections": [
          {"title": "Form", "type": "table", "content": "All persons: verb + <strong>-ed</strong>|I worked, you worked, he worked, she worked, we worked, they worked"},
          {"title": "Spelling Rules for -ed", "type": "flipcards", "cards": [{"front": "Most verbs", "back": "add <strong>-ed</strong>: work worked, play played, clean cleaned"}, {"front": "Verbs ending in -e", "back": "add <strong>-d</strong>: live lived, love loved, dance danced"}, {"front": "Consonant + y", "back": "y to <strong>-ied</strong>: study studied, carry carried (but: play played, vowel+y)"}, {"front": "Short vowel + consonant", "back": "double: stop stopped, plan planned, drop dropped"}]},
          {"title": "Pronunciation of -ed", "type": "reveal", "intro": "-ed has THREE different pronunciations. Click to learn:", "items": [{"label": "/t/ sound (voiceless)", "answer": "After voiceless sounds: worked, stopped, washed, kissed, laughed | Example: I <strong>worked</strong> yesterday."}, {"label": "/d/ sound (voiced)", "answer": "After voiced sounds: played, opened, lived, cleaned, listened | Example: She <strong>played</strong> tennis."}, {"label": "/id/ sound (after t/d)", "answer": "After /t/ or /d/: wanted, needed, decided, started, visited | Example: He <strong>wanted</strong> to go."}]},
          {"title": "Negative and Questions with did", "type": "reveal", "intro": "We use <strong>did</strong> for negatives and questions. Click to see:", "items": [{"label": "Negative", "answer": "I <strong>didn't work</strong> yesterday. (did not) She <strong>didn't call</strong> me. They <strong>didn't enjoy</strong> the party."}, {"label": "Questions", "answer": "<strong>Did</strong> you <strong>work</strong> yesterday? <strong>Did</strong> she <strong>call</strong>? <strong>Did</strong> they <strong>enjoy</strong> it?"}]},
          {"title": "No double past!", "type": "warning", "content": "With did/didn't, the main verb stays in BASE form - not past! This is a very common mistake.", "examples": [{"correct": "Did you work?", "wrong": "Did you worked?", "why": "Did already shows past tense."}, {"correct": "She didn't like it.", "wrong": "She didn't liked it.", "why": "Same rule - base form after didn't."}]},
          {"title": "Time Expressions", "type": "reveal", "intro": "These time words often go with past simple:", "items": [{"label": "yesterday", "answer": "I <strong>called</strong> him yesterday."}, {"label": "last week/month/year", "answer": "She <strong>visited</strong> Paris last year."}, {"label": "ago", "answer": "We <strong>arrived</strong> two days ago."}, {"label": "in 2010 / in the past", "answer": "He <strong>started</strong> school in 2010."}, {"label": "when I was young", "answer": "I <strong>lived</strong> in London when I was young."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "She ___ (walk) to school yesterday.", "choices": ["walked", "walks", "walking", "walk"], "a": "walked"},
          {"type": "choice", "q": "They ___ (not/visit) grandma last week.", "choices": ["didn't visit", "don't visit", "didn't visited", "not visited"], "a": "didn't visit"},
          {"type": "fill", "q": "He ___ (study) hard for the test. ___ you ___ (watch) the film?", "a": ["studied", "Did", "watch"]},
          {"type": "error", "q": "Find the mistake: Did she played tennis?", "choices": ["Remove -ed from played", "Change to doesn't", "No mistake", "Add did"], "a": "Remove -ed from played"},
          {"type": "choice", "q": "I ___ (finish) the project three days ___.", "choices": ["finished / ago", "finish / ago", "finished / before", "finish / past"], "a": "finished / ago"},
          {"type": "fill", "q": "Make negative: We cooked dinner. We ___ ___ dinner.", "a": ["didn't", "cook"]}
        ]
      },
      {
        "t": "Past Simple: irregular verbs",
        "vocab": [{"word":"irregular verb","def":"A verb that does not add -ed in the past; form changes must be memorized."},{"word":"past form","def":"The past version of an irregular verb: went, saw, ate."},{"word":"past participle","def":"The third form used with have/has/had: gone, seen, eaten."},{"word":"memorize","def":"To learn something so you remember it exactly."}],
        "intro": "Many common English verbs are <strong>irregular</strong> in the past simple. They do not add -ed. You need to memorize these forms!",
        "sections": [
          {"title": "Common Irregular Verbs", "type": "flipcards", "cards": [{"front": "go", "back": "go became <strong>went</strong> - I <strong>went</strong> to the cinema."}, {"front": "have", "back": "have became <strong>had</strong> - She <strong>had</strong> a sandwich."}, {"front": "see", "back": "see became <strong>saw</strong> - We <strong>saw</strong> a great film."}, {"front": "eat", "back": "eat became <strong>ate</strong> - He <strong>ate</strong> all the cake."}, {"front": "drink", "back": "drink became <strong>drank</strong> - I <strong>drank</strong> two coffees."}, {"front": "buy", "back": "buy became <strong>bought</strong> - She <strong>bought</strong> a new car."}, {"front": "take", "back": "take became <strong>took</strong> - It <strong>took</strong> two hours."}, {"front": "make", "back": "make became <strong>made</strong> - He <strong>made</strong> dinner."}, {"front": "come", "back": "come became <strong>came</strong> - They <strong>came</strong> late."}, {"front": "give", "back": "give became <strong>gave</strong> - She <strong>gave</strong> me a gift."}]},
          {"title": "More Irregular Verbs", "type": "reveal", "intro": "Click to reveal more common irregular verbs:", "items": [{"label": "be", "answer": "was/were - I <strong>was</strong> tired. They <strong>were</strong> happy."}, {"label": "say", "answer": "said (pronounced sed) - She <strong>said</strong> hello."}, {"label": "get", "answer": "got - I <strong>got</strong> a letter."}, {"label": "know", "answer": "knew (pronounced nyoo) - He <strong>knew</strong> the answer."}, {"label": "think", "answer": "thought (pronounced thot) - I <strong>thought</strong> about it."}, {"label": "find", "answer": "found - We <strong>found</strong> the keys."}, {"label": "tell", "answer": "told - She <strong>told</strong> me a secret."}, {"label": "write", "answer": "wrote - He <strong>wrote</strong> a letter."}, {"label": "begin", "answer": "began - It <strong>began</strong> to rain."}, {"label": "run", "answer": "ran - I <strong>ran</strong> 5km yesterday."}]},
          {"title": "Same Rule for Negatives", "type": "warning", "content": "Irregular verbs follow the SAME rules as regular verbs for negatives and questions - use did/didn't!", "examples": [{"correct": "I didn't go.", "wrong": "I didn't went.", "why": "Use base form after didn't."}, {"correct": "Did you see it?", "wrong": "Did you saw it?", "why": "Use base form after Did."}]},
          {"title": "Irregular Verbs That Don't Change!", "type": "flipcards", "cards": [{"front": "put put put", "back": "I <strong>put</strong> the book down. (same in all forms!)"}, {"front": "cut cut cut", "back": "She <strong>cut</strong> the paper yesterday."}, {"front": "shut shut shut", "back": "He <strong>shut</strong> the door."}, {"front": "let let let", "back": "They <strong>let</strong> us go."}, {"front": "hit hit hit", "back": "It <strong>hit</strong> the wall."}, {"front": "set set set", "back": "We <strong>set</strong> the table."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "Yesterday I ___ to the park.", "choices": ["went", "goed", "go", "going"], "a": "went"},
          {"type": "choice", "q": "She ___ (buy) a new dress last weekend.", "choices": ["bought", "buyed", "buys", "buy"], "a": "bought"},
          {"type": "fill", "q": "He ___ (eat) all the pizza. We ___ (not/see) the film.", "a": ["ate", "didn't see"]},
          {"type": "error", "q": "Find the mistake: Didn't she went home?", "choices": ["Use go instead of went", "Add did", "No mistake", "Remove didn't"], "a": "Use go instead of went"},
          {"type": "choice", "q": "I ___ (think) about it, and I ___ (know) the answer.", "choices": ["thought / knew", "thinked / knowed", "think / know", "thought / knowed"], "a": "thought / knew"},
          {"type": "flip", "q": "What is the past of write?", "a": "wrote"}
        ]
      },
      {
        "t": "Future with will",
        "vocab": [{"word":"prediction","def":"A guess about the future, often with evidence or belief."},{"word":"promise","def":"Something you say you will definitely do: I'll always help you."},{"word":"offer","def":"Volunteering to do something for someone: I'll carry that for you."},{"word":"spontaneous decision","def":"A decision made at the moment of speaking, not planned earlier."}],
        "intro": "We use <strong>will</strong> for predictions, promises, offers, and decisions made at the moment of speaking.",
        "sections": [
          {"title": "Form: will + base verb", "type": "table", "content": "All persons: will + base verb|I'll work, you'll work, he'll work, she'll work, they'll work"},
          {"title": "Negative and Questions", "type": "reveal", "intro": "Click to see:", "items": [{"label": "Negative", "answer": "I <strong>won't</strong> be late. (will not) It <strong>won't</strong> rain today."}, {"label": "Questions", "answer": "<strong>Will</strong> you help me? <strong>Will</strong> she come tomorrow?"}]},
          {"title": "When Do We Use will?", "type": "flipcards", "cards": [{"front": "Predictions", "back": "<strong>I think</strong> it will rain tomorrow. The exam <strong>will be</strong> difficult. (belief about the future)"}, {"front": "Promises", "back": "<strong>I'll</strong> always love you. <strong>I won't</strong> tell anyone. (secret) <strong>I'll</strong> help you with homework."}, {"front": "Offers", "back": "<strong>I'll</strong> carry that for you. <strong>We'll</strong> pay for dinner. <strong>I'll</strong> do the dishes. (spontaneous help)"}, {"front": "Spontaneous Decisions", "back": "(phone rings) <strong>I'll</strong> get it! I'm hungry - <strong>I'll</strong> make a sandwich. (deciding NOW, not planned)"}]},
          {"title": "will vs. going to", "type": "warning", "content": "Use <strong>will</strong> for spontaneous decisions. Use <strong>going to</strong> for plans made before speaking. This is a key difference!", "examples": [{"correct": "It's raining. I'll take an umbrella.", "wrong": "I'm going to take an umbrella.", "why": "Decided just now = will."}, {"correct": "I'm going to study medicine.", "wrong": "I'll study medicine.", "why": "Plan made before = going to."}]},
          {"title": "Time Expressions", "type": "reveal", "intro": "Common time words with will:", "items": [{"label": "tomorrow", "answer": "I will call you tomorrow."}, {"label": "next week/month/year", "answer": "She'll travel next week."}, {"label": "soon / later", "answer": "See you later! I'll see you soon."}, {"label": "I think / I hope / probably", "answer": "<strong>I think</strong> it will be fine. <strong>I hope</strong> you'll come."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "I think it ___ rain tomorrow.", "choices": ["will", "is going to", "was", "has"], "a": "will"},
          {"type": "choice", "q": "(Phone rings) - I ___ get it!", "choices": ["'ll", "'m going to", "was", "would"], "a": "'ll"},
          {"type": "fill", "q": "She ___ (not/be) late. ___ you ___ (help) me?", "a": ["won't be", "Will", "help"]},
          {"type": "error", "q": "Find the mistake: I think she is going to pass the exam. (said as a belief with no evidence)", "choices": ["Change to will pass", "No mistake - is going to is correct", "Change to passes", "Add will"], "a": "Change to will pass"},
          {"type": "fill", "q": "Make negative: He will come. He ___ ___.", "a": ["won't", "come"]}
        ]
      },
      {
        "t": "Future with going to",
        "vocab": [{"word":"plan","def":"Something you decided to do before speaking: I'm going to call her."},{"word":"intention","def":"What you mean to do: They're going to buy a house."},{"word":"evidence","def":"A visible sign you can see now: Look at those clouds!"},{"word":"going to","def":"Future form for plans or predictions based on evidence."}],
        "intro": "We use <strong>(be) going to + verb</strong> for plans, intentions, and predictions based on evidence you can see now.",
        "sections": [
          {"title": "Form: be + going to + base verb", "type": "table", "content": "I am going to work|He/She is going to work|We/You/They are going to work"},
          {"title": "Plans and Intentions", "type": "flipcards", "cards": [{"front": "Plans (decided before)", "back": "<strong>I'm going to</strong> study medicine. (my plan) <strong>We're going to</strong> move to London. (intention) <strong>They're going to</strong> buy a car. (decided)"}, {"front": "Evidence-based predictions", "back": "Look at those clouds! <strong>It's going to</strong> rain. She's studied hard. <strong>She's going to</strong> pass. (you can SEE it coming)"}]},
          {"title": "will vs. going to - Summary", "type": "reveal", "intro": "Click to compare:", "items": [{"label": "will (prediction/opinion)", "answer": "I <strong>think</strong> it <strong>will</strong> rain. (my opinion, no evidence)"}, {"label": "going to (evidence)", "answer": "Look! It<strong>'s going to</strong> rain. (dark clouds! I can see it)"}, {"label": "going to (plan)", "answer": "<strong>I'm going to</strong> buy a car. (I decided before)"}, {"label": "will (spontaneous)", "answer": "The door's open - <strong>I'll</strong> close it. (just decided now)"}]},
          {"title": "Negative and Questions", "type": "reveal", "intro": "Negatives and questions use the verb be:", "items": [{"label": "Negative", "answer": "I<strong>'m not going to</strong> go. She <strong>isn't going to</strong> come. They <strong>aren't going to</strong> stay."}, {"label": "Questions", "answer": "<strong>Are</strong> you <strong>going to</strong> study? <strong>Is</strong> she <strong>going to</strong> stay? <strong>Are</strong> they <strong>going to</strong> come?"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "Look at those dark clouds! It ___ rain.", "choices": ["is going to", "will", "is raining", "rains"], "a": "is going to"},
          {"type": "choice", "q": "I ___ (visit) my grandparents this weekend. I already told them.", "choices": ["'m going to visit", "'ll visit", "visit", "visited"], "a": "'m going to visit"},
          {"type": "fill", "q": "What ___ you ___ (do) tonight? She ___ (not/go) to the party.", "a": ["are", "going to do", "isn't going to go"]},
          {"type": "error", "q": "Find the mistake: I think it is going to be sunny tomorrow. (no evidence, just a belief)", "choices": ["Change to will be", "No mistake", "Change to is being", "Add going"], "a": "Change to will be"}
        ]
      },
      {
        "t": "Can and can't (ability)",
        "vocab": [{"word":"ability","def":"Being able to do something: I can swim."},{"word":"permission","def":"Being allowed to do something: Can I sit here?"},{"word":"possibility","def":"Something that may be true or may happen: It can rain here."},{"word":"base verb","def":"Verb without to after modal verbs: can swim, must go."}],
        "intro": "<strong>Can</strong> is a modal verb used to talk about <strong>ability</strong>, <strong>permission</strong>, and <strong>possibility</strong>. It is the same for all persons - no -s for he/she/it!",
        "sections": [
          {"title": "The Golden Rule: Can Never Changes!", "type": "warning", "content": "Can + base verb. Always. For ALL persons. No exceptions. This is one of the most important rules in English!", "examples": [{"correct": "I can swim. She can swim. They can swim.", "wrong": "She cans swim. / She can to swim. / She can swims.", "why": "Can never changes form and never takes to or -s!"}]},
          {"title": "Ability", "type": "flipcards", "cards": [{"front": "Can (ability)", "back": "<strong>I can swim</strong>. (= I know how to swim) <strong>She can speak</strong> French. <strong>He can't drive</strong>. (= he doesn't know how) <strong>Can you play</strong> the guitar?"}, {"front": "Can (permission)", "back": "<strong>Can I sit</strong> here? (= Is it OK?) <strong>You can go</strong> now. (= I allow you) <strong>You can't park</strong> here. (= It's forbidden)"}]},
          {"title": "Negative and Questions", "type": "table", "content": "Can becomes cannot / can't|Question: Can you...?|Short answers: Yes, I can. / No, I can't.|NOT: Yes, I can't. / No, I can."},
          {"title": "No to after can!", "type": "warning", "content": "After can, use the BASE verb. Never to. This is different from would like!", "examples": [{"correct": "I can swim.", "wrong": "I can to swim.", "why": "Never use to after can."}, {"correct": "She can play guitar.", "wrong": "She can to play guitar.", "why": "Same rule."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "She ___ speak three languages.", "choices": ["can", "cans", "can to", "could"], "a": "can"},
          {"type": "choice", "q": "___ I borrow your pen?", "choices": ["Can", "Do", "Am", "Does"], "a": "Can"},
          {"type": "fill", "q": "He ___ (not/play) the piano. ___ you ___ (swim)?", "a": ["can't play", "Can", "swim"]},
          {"type": "error", "q": "Find the mistake: I can to speak English.", "choices": ["Remove to", "Change to cans", "No mistake", "Add can"], "a": "Remove to"}
        ]
      },
      {
        "t": "Would you like...?",
        "vocab": [{"word":"polite offer","def":"A gentle offer that respects the listener: Would you like some tea?"},{"word":"polite invite","def":"A courteous invitation: Would you like to come?"},{"word":"I'd like","def":"Polite way to say I want: I'd like a coffee, please."}],
        "intro": "<strong>Would you like...?</strong> is the polite way to offer something or invite someone. It is much more polite than Do you want...?",
        "sections": [
          {"title": "Polite Offers", "type": "flipcards", "cards": [{"front": "Would you like...?", "back": "<strong>Would you like</strong> some tea? (= polite offer) <strong>Would you like</strong> to come to my party? (= polite invite) <strong>Would you like</strong> something to eat?"}, {"front": "I'd like... (response)", "back": "<strong>I'd like</strong> a coffee, please. (= I want, polite) <strong>I'd like to</strong> go home. (= I want to) <strong>She'd like</strong> some water."}]},
          {"title": "would like vs. like", "type": "reveal", "intro": "Click to see the difference:", "items": [{"label": "like (enjoy, general)", "answer": "<strong>I like</strong> coffee. (= I enjoy it in general)"}, {"label": "would like (want now, specific)", "answer": "<strong>I'd like</strong> a coffee. (= I want one right now)"}]},
          {"title": "to with verbs!", "type": "warning", "content": "After would like, use to before a verb. This is different from can! Remember: can + base, but would like + to + base.", "examples": [{"correct": "I'd like to go.", "wrong": "I'd like go.", "why": "Use to before verbs after would like."}, {"correct": "Would you like to come?", "wrong": "Would you like come?", "why": "Same rule - to before verbs."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "___ you like something to drink?", "choices": ["Would", "Do", "Are", "Will"], "a": "Would"},
          {"type": "choice", "q": "I ___ a sandwich, please.", "choices": ["'d like", "like", "would", "want to"], "a": "'d like"},
          {"type": "fill", "q": "___ you ___ (come) to dinner? I ___ (like) some water.", "a": ["Would", "like to come", "'d like"]},
          {"type": "error", "q": "Find the mistake: Would you like go to the cinema?", "choices": ["Add to before go", "Change to Do", "No mistake", "Remove like"], "a": "Add to before go"}
        ]
      },
      {
        "t": "There is / There are",
        "vocab": [{"word":"exist","def":"To be real or present in a place: There is a shop nearby."},{"word":"singular","def":"One: There is a cat."},{"word":"plural","def":"More than one: There are two cats."},{"word":"uncountable","def":"Nouns that are not counted individually: water, information, money."}],
        "intro": "We use <strong>there is</strong> and <strong>there are</strong> to say that something exists or is in a place.",
        "sections": [
          {"title": "Singular vs. Plural", "type": "table", "content": "Singular: There is... (There's...)|Plural: There are...|Negative: There isn't... / There aren't...|Question: Is there...? / Are there...?"},
          {"title": "Examples", "type": "flipcards", "cards": [{"front": "Singular", "back": "<strong>There's</strong> a book on the table. <strong>There isn't</strong> a bank near here. <strong>Is there</strong> a toilet in this building?"}, {"front": "Plural", "back": "<strong>There are</strong> three cats in the garden. <strong>There aren't</strong> any chairs. <strong>Are there</strong> any questions?"}]},
          {"title": "Match the noun!", "type": "warning", "content": "Use is with singular nouns and are with plural nouns. Look at the noun, not there! This is the most common mistake.", "examples": [{"correct": "There is a dog.", "wrong": "There are a dog.", "why": "A dog is singular = is."}, {"correct": "There are two dogs.", "wrong": "There is two dogs.", "why": "Two dogs is plural = are."}, {"correct": "There is some water.", "wrong": "There are some water.", "why": "Water is uncountable = singular = is."}]},
          {"title": "some / any", "type": "reveal", "intro": "Click to learn about some and any:", "items": [{"label": "some (positive)", "answer": "There are <strong>some</strong> books on the shelf."}, {"label": "any (negative and questions)", "answer": "There aren't <strong>any</strong> books. / Are there <strong>any</strong> books?"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "___ a hospital in this town.", "choices": ["There is", "There are", "Is there", "It is"], "a": "There is"},
          {"type": "choice", "q": "___ any students in the classroom?", "choices": ["Are there", "Is there", "There are", "Do there"], "a": "Are there"},
          {"type": "fill", "q": "___ two hospitals in my city. ___ there a post office near here?", "a": ["There are", "Is"]},
          {"type": "error", "q": "Find the mistake: There are a big problem.", "choices": ["Change to is", "Change to some", "No mistake", "Add there"], "a": "Change to is"}
        ]
      },
      {
        "t": "Articles: a/an/the",
        "intro": "English has three articles: <strong>a</strong>, <strong>an</strong>, and <strong>the</strong>. They are small but very important!",
        "sections": [
          {"title": "a vs. an", "type": "flipcards", "cards": [{"front": "a (consonant sound)", "back": "<strong>a</strong> book, <strong>a</strong> car, <strong>a</strong> university (starts with /y/ sound = consonant) <strong>a</strong> European country, <strong>a</strong> one-pound coin"}, {"front": "an (vowel sound)", "back": "<strong>an</strong> apple, <strong>an</strong> hour (silent h! = vowel sound) <strong>an</strong> egg, <strong>an</strong> umbrella, <strong>an</strong> honest person"}]},
          {"title": "a/an vs. the", "type": "reveal", "intro": "Click to learn the difference:", "items": [{"label": "a/an (first mention / general)", "answer": "I saw <strong>a</strong> bird. (= you don't know which bird) <strong>A</strong> dog is a pet. (= dogs in general)"}, {"label": "the (specific / known / unique)", "answer": "<strong>The</strong> bird was blue. (= the bird I just mentioned) <strong>The</strong> sun is hot. (= there's only one sun) Can you close <strong>the</strong> door? (= the door in this room)"}]},
          {"title": "When NOT to use an article", "type": "warning", "content": "No article with plural nouns or uncountable nouns when speaking generally.", "examples": [{"correct": "I like cats.", "wrong": "I like the cats.", "why": "General plural = no article."}, {"correct": "Water is important.", "wrong": "The water is important.", "why": "General uncountable = no article."}, {"correct": "She's a doctor.", "wrong": "She's doctor.", "why": "Professions need a/an."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "He wants to be ___ engineer.", "choices": ["an", "a", "the", "no article"], "a": "an"},
          {"type": "choice", "q": "I saw ___ bird. ___ bird was blue.", "choices": ["a / The", "the / The", "a / A", "an / The"], "a": "a / The"},
          {"type": "fill", "q": "He wants to be ___ engineer. Can you see ___ moon tonight?", "a": ["an", "the"]},
          {"type": "error", "q": "Find the mistake: I saw a bird. A bird was beautiful.", "choices": ["Change second A to The", "Change first a to the", "No mistake", "Remove a"], "a": "Change second A to The"}
        ]
      },
      {
        "t": "Plurals and countable/uncountable",
        "intro": "In English, nouns are either <strong>countable</strong> (you can count them: one apple, two apples) or <strong>uncountable</strong> (you can't count them: water, information). This affects which words you use with them.",
        "sections": [
          {"title": "Regular Plurals", "type": "table", "content": "Most nouns: add -s (book books, car cars)|-s, -sh, -ch, -x, -z: add -es (box boxes, watch watches, bus buses)|Consonant + y: -ies (baby babies, city cities)|-f/-fe: -ves (knife knives, wife wives, leaf leaves)"},
          {"title": "Irregular Plurals", "type": "flipcards", "cards": [{"front": "man, woman, child", "back": "man becomes <strong>men</strong>, woman becomes <strong>women</strong>, child becomes <strong>children</strong>"}, {"front": "mouse, tooth, foot", "back": "mouse becomes <strong>mice</strong>, tooth becomes <strong>teeth</strong>, foot becomes <strong>feet</strong>"}, {"front": "person, fish, sheep", "back": "person becomes <strong>people</strong> | fish and <strong>sheep</strong> stay the same! (one sheep, two sheep)"}]},
          {"title": "much / many / a lot of", "type": "reveal", "intro": "Click to learn:", "items": [{"label": "much (uncountable)", "answer": "<strong>How much</strong> water do you drink? I don't have <strong>much</strong> time."}, {"label": "many (countable)", "answer": "<strong>How many</strong> books do you have? There aren't <strong>many</strong> people here."}, {"label": "a lot of (both)", "answer": "<strong>A lot of</strong> people came. <strong>A lot of</strong> money was spent."}]},
          {"title": "Common Uncountable Nouns", "type": "warning", "content": "These common nouns are uncountable in English (but countable in some other languages!). Never use a/an with them.", "examples": [{"correct": "some information", "wrong": "an information", "why": "Information is uncountable."}, {"correct": "some advice", "wrong": "an advice", "why": "Advice is uncountable."}, {"correct": "some furniture", "wrong": "a furniture", "why": "Furniture is uncountable."}, {"correct": "some luggage", "wrong": "a luggage", "why": "Luggage is uncountable."}, {"correct": "some news", "wrong": "a news", "why": "News is uncountable. (also: news looks plural but is singular!)"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "How ___ sugar do you need?", "choices": ["much", "many", "few", "some"], "a": "much"},
          {"type": "choice", "q": "There are three ___ in the room.", "choices": ["children", "childs", "child", "childrens"], "a": "children"},
          {"type": "fill", "q": "How ___ people were there? I don't have ___ time.", "a": ["many", "much"]},
          {"type": "error", "q": "Find the mistake: Can you give me an advice?", "choices": ["Change to some advice", "Change to advices", "No mistake", "Add much"], "a": "Change to some advice"}
        ]
      },
      {
        "t": "Possessive s and adjectives",
        "intro": "We use <strong>possessive adjectives</strong> (my, your, his...) and <strong>possessive 's</strong> to show that something belongs to someone.",
        "sections": [
          {"title": "Possessive Adjectives", "type": "table", "content": "I becomes <strong>my</strong>|You becomes <strong>your</strong>|He becomes <strong>his</strong>|She becomes <strong>her</strong>|It becomes <strong>its</strong>|We becomes <strong>our</strong>|They becomes <strong>their</strong>"},
          {"title": "Possessive 's", "type": "flipcards", "cards": [{"front": "One person + 's", "back": "<strong>John's</strong> car (= the car of John) <strong>Sarah's</strong> book <strong>The dog's</strong> tail <strong>James's</strong> house"}, {"front": "Plural ending in s: just apostrophe", "back": "<strong>The students'</strong> books (students = plural, ends in s) <strong>The teachers'</strong> room <strong>My parents'</strong> house"}, {"front": "Irregular plurals + 's", "back": "<strong>The children's</strong> toys (children = irregular plural, no s) <strong>The men's</strong> room <strong>People's</strong> choice <strong>The women's</strong> clothes"}]},
          {"title": "its vs. it's", "type": "warning", "content": "This is one of the MOST COMMON mistakes in English! Even native speakers get this wrong.", "examples": [{"correct": "The dog wagged its tail.", "wrong": "The dog wagged it's tail.", "why": "its = possessive (belongs to it). it's = it is / it has."}, {"correct": "It's raining.", "wrong": "Its raining.", "why": "it's = it is. Its = possessive."}]},
          {"title": "your vs. you're + common confusions", "type": "reveal", "intro": "Click to see more common possessive confusions:", "items": [{"label": "your (possessive)", "answer": "<strong>Your</strong> book is on the table. Is this <strong>your</strong> pen?"}, {"label": "you're (you are)", "answer": "<strong>You're</strong> my best friend. <strong>You're</strong> welcome."}, {"label": "their (possessive)", "answer": "<strong>Their</strong> house is big."}, {"label": "they're (they are)", "answer": "<strong>They're</strong> coming tomorrow."}, {"label": "there (place)", "strong answer": "The book is over <strong>there</strong>."}]}
        ],
        "exercises": [
          {"type": "choice", "q": "This is ___ (Sarah) bag.", "choices": ["Sarah's", "Sarahs", "Sarah", "Sarahs'"], "a": "Sarah's"},
          {"type": "choice", "q": "___ (we) school is very big.", "choices": ["Our", "We", "Ours", "Us"], "a": "Our"},
          {"type": "fill", "q": "This is ___ (Sarah) bag. ___ (we) school is very big.", "a": ["Sarah's", "Our"]},
          {"type": "error", "q": "Find the mistake: The cat licked it's paw.", "choices": ["Change to its", "Change to it is", "No mistake", "Add s"], "a": "Change to its"}
        ]
      },
      {
        "t": "Imperatives",
        "intro": "The <strong>imperative</strong> is used to give orders, instructions, warnings, and advice. It is the simplest form in English - just the base verb! There is no subject.",
        "sections": [
          {"title": "Form: Just the Base Verb!", "type": "table", "content": "Positive: <strong>Sit</strong> down. / <strong>Open</strong> your books. / <strong>Listen</strong>!|Negative: <strong>Don't</strong> sit down. / <strong>Don't</strong> touch that! / <strong>Don't</strong> be late!"},
          {"title": "Examples", "type": "flipcards", "cards": [{"front": "Orders and Instructions", "back": "<strong>Sit down</strong>. <strong>Open</strong> your books to page 10. <strong>Turn off</strong> the lights. <strong>Come</strong> here!"}, {"front": "Warnings", "back": "<strong>Don't touch</strong> that! It's hot. <strong>Be careful</strong>! <strong>Watch out</strong>! <strong>Don't run</strong>!"}, {"front": "Advice", "back": "<strong>Drink</strong> lots of water. <strong>Don't worry</strong>. <strong>Take</strong> a break. <strong>Eat</strong> more vegetables."}, {"front": "Signs and Notices", "back": "<strong>No smoking</strong>. <strong>Keep off</strong> the grass. <strong>Do not enter</strong>. <strong>Push</strong> / <strong>Pull</strong>"}]},
          {"title": "Making it Polite: Add please", "type": "reveal", "intro": "Click to see how to soften imperatives:", "items": [{"label": "please at the end", "answer": "Sit down, <strong>please</strong>. Open the door, <strong>please</strong>."}, {"label": "please at the start (more polite)", "answer": "<strong>Please</strong> sit down. <strong>Please</strong> be quiet."}, {"label": "Could you...? (very polite)", "answer": "<strong>Could you</strong> open the window, <strong>please</strong>? <strong>Would you</strong> help me, <strong>please</strong>?"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "___ talk during the test!", "choices": ["Don't", "Not", "Doesn't", "Isn't"], "a": "Don't"},
          {"type": "choice", "q": "___ your homework now, please.", "choices": ["Do", "Does", "Doing", "To do"], "a": "Do"},
          {"type": "fill", "q": "___ (not/be) late! ___ (open) the door, please.", "a": ["Don't be", "Open"]},
          {"type": "error", "q": "Find the mistake: Not run in the corridor!", "choices": ["Change to Don't run", "Change to Doesn't run", "No mistake", "Add please"], "a": "Change to Don't run"}
        ]
      },
      {
        "t": "Prepositions of place",
        "intro": "Prepositions of place tell us <strong>where</strong> something is. The most common are: <strong>in</strong>, <strong>on</strong>, <strong>at</strong>, <strong>next to</strong>, <strong>between</strong>, <strong>under</strong>, <strong>over</strong>.",
        "sections": [
          {"title": "The Main Prepositions", "type": "flipcards", "cards": [{"front": "in", "back": "inside something: The keys are <strong>in</strong> the drawer. I live <strong>in</strong> Paris. She's <strong>in</strong> the kitchen."}, {"front": "on", "back": "on a surface: The book is <strong>on</strong> the table. The picture is <strong>on</strong> the wall. It's <strong>on</strong> the floor."}, {"front": "at", "back": "at a point/place: I'm <strong>at</strong> the bus stop. She's <strong>at</strong> home. He's <strong>at</strong> school."}, {"front": "next to", "back": "at the side of: The bank is <strong>next to</strong> the pharmacy. She sat <strong>next to</strong> me."}, {"front": "between", "back": "in the middle of two things: The shop is <strong>between</strong> the bank and the church."}, {"front": "under", "back": "below something: The cat is <strong>under</strong> the table. The shoes are <strong>under</strong> the bed."}, {"front": "over (above)", "back": "higher than, not touching: There's a mirror <strong>over</strong> the sofa. A plane flew <strong>over</strong> the city."}, {"front": "in front of / behind", "back": "<strong>In front of</strong>: The car is in front of the house. <strong>Behind</strong>: The garden is behind the house."}]},
          {"title": "in vs. on vs. at (summary)", "type": "reveal", "intro": "Click to see the difference:", "items": [{"label": "in (enclosed space)", "answer": "<strong>in</strong> the box, <strong>in</strong> the room, <strong>in</strong> London, <strong>in</strong> the water, <strong>in</strong> bed"}, {"label": "on (surface / transport)", "answer": "<strong>on</strong> the table, <strong>on</strong> the wall, <strong>on</strong> the bus, <strong>on</strong> a plane, <strong>on</strong> TV"}, {"label": "at (point / event)", "answer": "<strong>at</strong> the door, <strong>at</strong> the bus stop, <strong>at</strong> school, <strong>at</strong> work, <strong>at</strong> a party"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "The cat is ___ the table.", "choices": ["on", "in", "at", "between"], "a": "on"},
          {"type": "choice", "q": "The shop is ___ the bank and the church.", "choices": ["between", "next to", "in", "on"], "a": "between"},
          {"type": "fill", "q": "I was born ___ Japan. The meeting is ___ 3pm ___ Tuesday.", "a": ["in", "at", "on"]},
          {"type": "error", "q": "Find the mistake: I am at home in the living room. (contradiction)", "choices": ["Change at to in", "Change in to at", "No mistake", "Remove at home"], "a": "No mistake"},
          {"type": "choice", "q": "We arrived ___ the airport two hours before the flight.", "choices": ["at", "in", "on", "to"], "a": "at"}
        ]
      },
      {
        "t": "Prepositions of time",
        "intro": "Prepositions of time tell us <strong>when</strong> something happens. The three main ones are: <strong>at</strong>, <strong>in</strong>, <strong>on</strong>.",
        "sections": [
          {"title": "The Rule", "type": "table", "content": "<strong>at</strong>: specific times - at 5pm, at night, at noon, at midnight, at the weekend, at Christmas|<strong>in</strong>: months, years, seasons, parts of day - in July, in 2020, in summer, in the morning|<strong>on</strong>: days and dates - on Monday, on Friday evening, on 25th December, on my birthday"},
          {"title": "Examples", "type": "flipcards", "cards": [{"front": "at", "back": "<strong>at</strong> 5 o'clock, <strong>at</strong> night, <strong>at</strong> noon, <strong>at</strong> midnight, <strong>at</strong> the weekend, <strong>at</strong> Christmas, <strong>at</strong> the moment"}, {"front": "in", "back": "<strong>in</strong> the morning, <strong>in</strong> the afternoon, <strong>in</strong> the evening, <strong>in</strong> July, <strong>in</strong> 2020, <strong>in</strong> summer, <strong>in</strong> the 21st century"}, {"front": "on", "back": "<strong>on</strong> Monday, <strong>on</strong> Friday evening, <strong>on</strong> 25th December, <strong>on</strong> my birthday, <strong>on</strong> Christmas Day, <strong>on</strong> weekdays"}]},
          {"title": "Exceptions!", "type": "warning", "content": "These are common exceptions to remember. They don't follow the general rule!", "examples": [{"correct": "at night", "wrong": "in night", "why": "Exception: at night (not in the night)."}, {"correct": "at the weekend (British)", "wrong": "on the weekend", "why": "British English: at the weekend."}, {"correct": "in the morning", "wrong": "on the morning", "why": "Parts of day = in (except at night)."}]},
          {"title": "No preposition with these!", "type": "reveal", "intro": "Some time expressions need NO preposition:", "items": [{"label": "today, tomorrow, yesterday", "answer": "I'll see you <strong>tomorrow</strong>. (NOT on tomorrow) What are you doing <strong>today</strong>?"}, {"label": "last, next, this, every", "answer": "<strong>Last</strong> week, <strong>next</strong> year, <strong>this</strong> Monday, <strong>every</strong> day (no preposition!)"}, {"label": "ago", "answer": "two days <strong>ago</strong>, a long time <strong>ago</strong> (follows the time expression)"}]}
        ],
        "exercises": [
          {"type": "choice", "q": "I was born ___ 1990.", "choices": ["in", "on", "at", "during"], "a": "in"},
          {"type": "choice", "q": "The meeting is ___ Monday morning.", "choices": ["on", "in", "at", "during"], "a": "on"},
          {"type": "fill", "q": "I was born ___ 1990. The meeting is ___ 3pm ___ Tuesday.", "a": ["in", "at", "on"]},
          {"type": "error", "q": "Find the mistake: I will see you on next Monday.", "choices": ["Remove on", "Change to at", "No mistake", "Change to in"], "a": "Remove on"}
        ]
      }
    ]
  },
  "A2": {
    "name": "A2 - Pre-intermediate",
    "color": "#22d3ee",
    "topics": [
      {"t": "Present Simple vs Continuous", "intro": "The key difference: <strong>permanent/habitual</strong> (simple) vs. <strong>temporary/right now</strong> (continuous).", "sections": [{"title": "The Difference", "type": "flipcards", "cards": [{"front": "Simple (permanent)", "back": "<strong>I live</strong> in London. (permanent home)"}, {"front": "Continuous (temporary)", "back": "<strong>I'm staying</strong> at a hotel. (temporary)"}]}, {"title": "Stative Verbs", "type": "warning", "content": "Stative verbs (know, like, believe, belong, need) are NOT normally used in the continuous.", "examples": [{"correct": "I need help.", "wrong": "I'm needing help.", "why": "Need is stative."}]}], "exercises": [{"type": "choice", "q": "He ___ in Paris, but he ___ at a hotel this week.", "choices": ["lives / is staying", "is living / stays", "live / stay", "is living / is staying"], "a": "lives / is staying"}, {"type": "choice", "q": "She ___ (work) at a bank. She ___ (work) late today.", "choices": ["works / is working", "is working / works", "work / works", "works / works"], "a": "works / is working"}]},
      {"t": "Past Simple", "intro": "The <strong>past simple</strong> is for completed actions at a specific time in the past.", "sections": [{"title": "Regular and Irregular", "type": "table", "content": "Regular: add -ed (worked, played)|Irregular: memorize (went, saw, ate, made)"}, {"title": "Time Expressions", "type": "reveal", "items": [{"label": "yesterday", "answer": "I <strong>visited</strong> London yesterday."}, {"label": "last week/month/year", "answer": "She <strong>moved</strong> last year."}, {"label": "ago", "answer": "We <strong>met</strong> two days ago."}]}, {"title": "Negative and Questions", "type": "reveal", "items": [{"label": "Negative", "answer": "I <strong>didn't go</strong> to the party."}, {"label": "Questions", "answer": "<strong>Did</strong> you <strong>see</strong> the film?"}]}], "exercises": [{"type": "choice", "q": "We ___ (travel) to Spain last summer.", "choices": ["travelled", "travel", "travels", "travelling"], "a": "travelled"}, {"type": "choice", "q": "She ___ (not/enjoy) the trip.", "choices": ["didn't enjoy", "doesn't enjoy", "didn't enjoyed", "not enjoyed"], "a": "didn't enjoy"}]},
      {"t": "Past Continuous", "intro": "We use the <strong>past continuous</strong> for actions in progress at a specific time in the past. Form: <strong>was/were + verb-ing</strong>.", "sections": [{"title": "Form", "type": "table", "content": "I/He/She/It <strong>was</strong> working|We/You/They <strong>were</strong> working"}, {"title": "when vs. while", "type": "flipcards", "cards": [{"front": "when + Past Simple", "back": "<strong>When</strong> I arrived, she <strong>called</strong>."}, {"front": "while + Past Continuous", "back": "<strong>While</strong> I <strong>was walking</strong>, it <strong>rained</strong>."}]}], "exercises": [{"type": "choice", "q": "I ___ (watch) TV when the phone ___ (ring).", "choices": ["was watching / rang", "watched / was ringing", "watched / rang", "was watching / was ringing"], "a": "was watching / rang"}, {"type": "choice", "q": "What ___ you ___ (do) at 8pm last night?", "choices": ["were / doing", "did / do", "are / doing", "was / doing"], "a": "were / doing"}]},
      {"t": "Used to", "intro": "We use <strong>used to + verb</strong> for past habits and states that are no longer true.", "sections": [{"title": "Form", "type": "table", "content": "All persons: <strong>used to</strong> + base verb|Negative: <strong>didn't use to</strong> + verb|Question: <strong>Did</strong>... <strong>use to</strong> + verb?"}, {"title": "Examples", "type": "flipcards", "cards": [{"front": "Past habit", "back": "<strong>I used to play</strong> tennis. (but not now)"}, {"front": "Past state", "back": "<strong>She used to have</strong> long hair. (but not now)"}]}], "exercises": [{"type": "choice", "q": "I ___ (use) to live in a small village.", "choices": ["used", "use", "using", "was used"], "a": "used"}, {"type": "choice", "q": "She ___ (not/like) vegetables as a child.", "choices": ["didn't use to like", "doesn't use to like", "didn't used to like", "not used to like"], "a": "didn't use to like"}]},
      {"t": "Present Perfect Simple", "intro": "We use the <strong>present perfect</strong> for past actions with present relevance, experiences, and unfinished time. Form: <strong>have/has + past participle</strong>.", "sections": [{"title": "Form", "type": "table", "content": "I/You/We/They <strong>have</strong> worked|He/She/It <strong>has</strong> worked"}, {"title": "When Do We Use It?", "type": "flipcards", "cards": [{"front": "Experiences", "back": "<strong>Have you ever been</strong> to Japan? I<strong>'ve never tried</strong> sushi."}, {"front": "Unfinished time", "back": "I<strong>'ve been</strong> to the gym <strong>today</strong>. (today is not finished)"}, {"front": "Present result", "back": "I<strong>'ve lost</strong> my keys. (I can't find them now)"}]}, {"title": "Key Words", "type": "reveal", "items": [{"label": "ever / never", "answer": "<strong>Have you ever eaten</strong> sushi?"}, {"label": "already / yet", "answer": "I<strong>'ve already finished</strong>. <strong>Have you finished yet</strong>?"}, {"label": "for / since", "answer": "I<strong>'ve lived</strong> here <strong>for</strong> 5 years. <strong>Since</strong> 2020."}]}], "exercises": [{"type": "choice", "q": "I ___ already ___ (do) my homework.", "choices": ["have / done", "has / done", "have / did", "had / done"], "a": "have / done"}, {"type": "choice", "q": "___ you ever ___ (try) sushi?", "choices": ["Have / tried", "Did / try", "Has / tried", "Do / try"], "a": "Have / tried"}]},
      {"t": "Present Perfect vs Past Simple", "intro": "The key difference: <strong>unfinished time</strong> (present perfect) vs. <strong>finished time</strong> (past simple).", "sections": [{"title": "The Difference", "type": "flipcards", "cards": [{"front": "Present Perfect (unfinished)", "back": "I<strong>'ve been</strong> to London three times. (in my life)"}, {"front": "Past Simple (finished)", "back": "I <strong>went</strong> to London last year. (specific time)"}]}], "exercises": [{"type": "choice", "q": "I ___ to Italy three times. I ___ there in 2019.", "choices": ["have been / went", "went / have been", "have been / have been", "went / went"], "a": "have been / went"}, {"type": "choice", "q": "She ___ (finish) her homework. She ___ (finish) it an hour ago.", "choices": ["has finished / finished", "finished / has finished", "has finished / has finished", "finished / finished"], "a": "has finished / finished"}]},
      {"t": "First Conditional", "intro": "We use the <strong>first conditional</strong> for real or possible future situations. Form: <strong>If + present simple, will + infinitive</strong>.", "sections": [{"title": "Form", "type": "table", "content": "If + present simple, will + infinitive|If it <strong>rains</strong>, I<strong>'ll stay</strong> home."}, {"title": "unless = if...not", "type": "reveal", "items": [{"label": "unless (if not)", "answer": "<strong>Unless</strong> you study, you'll fail. = <strong>If you don't study</strong>, you'll fail."}]}], "exercises": [{"type": "choice", "q": "If you ___ (study), you ___ (pass).", "choices": ["study / will pass", "will study / pass", "study / pass", "will study / will pass"], "a": "study / will pass"}, {"type": "choice", "q": "If it ___ (rain), we ___ (stay) inside.", "choices": ["rains / will stay", "will rain / stay", "rains / stay", "will rain / will stay"], "a": "rains / will stay"}]},
      {"t": "Have to / must", "intro": "We use <strong>have to</strong> and <strong>must</strong> for obligation. But their negatives are VERY different!", "sections": [{"title": "Positive", "type": "table", "content": "<strong>have to</strong>: I <strong>have to</strong> wear a uniform.|<strong>must</strong>: You <strong>must</strong> wear a seatbelt. (stronger, often rules)"}, {"title": "Negative - VERY DIFFERENT!", "type": "flipcards", "cards": [{"front": "don't have to (no obligation)", "back": "You <strong>don't have to</strong> wear a tie. (it's optional)"}, {"front": "mustn't (prohibition)", "back": "You <strong>mustn't</strong> park here. (it's forbidden!)"}]}], "exercises": [{"type": "choice", "q": "You ___ wear a seatbelt. It's the law.", "choices": ["have to / must", "should", "don't have to", "mustn't"], "a": "have to / must"}, {"type": "choice", "q": "You ___ wear a tie. It's optional.", "choices": ["don't have to", "mustn't", "have to", "should"], "a": "don't have to"}]},
      {"t": "Should / shouldn't", "intro": "We use <strong>should</strong> and <strong>shouldn't</strong> to give advice and recommendations.", "sections": [{"title": "Form", "type": "table", "content": "<strong>should</strong> + base verb (all persons)|<strong>shouldn't</strong> + base verb (negative advice)"}, {"title": "Examples", "type": "flipcards", "cards": [{"front": "Advice", "back": "You <strong>should eat</strong> more vegetables. You <strong>shouldn't work</strong> so hard."}, {"label": "should vs. must", "back": "<strong>should</strong> = advice. <strong>must</strong> = strong obligation/law."}]}], "exercises": [{"type": "choice", "q": "You ___ eat so much sugar.", "choices": ["shouldn't", "don't have to", "mustn't", "should"], "a": "shouldn't"}, {"type": "choice", "q": "You ___ exercise more. It's good for you.", "choices": ["should", "must", "have to", "shouldn't"], "a": "should"}]},
      {"t": "Comparatives and Superlatives", "intro": "We use <strong>comparatives</strong> to compare two things and <strong>superlatives</strong> to say something is the most or least.", "sections": [{"title": "Short Adjectives", "type": "table", "content": "1 syllable: -er / -est (tall taller tallest)|2 syllables ending y: -ier / -iest (happy happier happiest)"}, {"title": "Long Adjectives", "type": "table", "content": "2+ syllables: more / most (expensive more expensive most expensive)"}, {"title": "Irregular Forms", "type": "flipcards", "cards": [{"front": "good", "back": "good <strong>better</strong> <strong>best</strong>"}, {"front": "bad", "back": "bad <strong>worse</strong> <strong>worst</strong>"}, {"front": "far", "back": "far <strong>further</strong> <strong>furthest</strong>"}]}], "exercises": [{"type": "choice", "q": "My brother is ___ (tall) than me.", "choices": ["taller", "more tall", "tallest", "the tallest"], "a": "taller"}, {"type": "choice", "q": "This is ___ (good) restaurant in town.", "choices": ["the best", "the better", "best", "better"], "a": "the best"}]},
      {"t": "Defining Relative Clauses", "intro": "We use <strong>relative clauses</strong> to give more information. Key pronouns: <strong>who</strong> (people), <strong>which</strong> (things), <strong>that</strong> (both), <strong>where</strong> (places).", "sections": [{"title": "The Pronouns", "type": "table", "content": "<strong>who</strong> = people| <strong>which</strong> = things| <strong>that</strong> = people or things| <strong>where</strong> = places"}, {"title": "Examples", "type": "flipcards", "cards": [{"front": "who (people)", "back": "The man <strong>who</strong> called you is my brother."}, {"front": "which (things)", "back": "The book <strong>which</strong> I read was interesting."}, {"front": "where (places)", "back": "The city <strong>where</strong> I was born is beautiful."}]}], "exercises": [{"type": "choice", "q": "The woman ___ lives next door is a doctor.", "choices": ["which", "who", "where", "whose"], "a": "who"}, {"type": "choice", "q": "The book ___ I read was interesting.", "choices": ["who", "where", "which", "whose"], "a": "which"}]}
    ]
  },
  "B1": {
    "name": "B1 - Intermediate",
    "color": "#a3e635",
    "topics": [
      {"t": "Present Perfect Continuous", "intro": "We use the <strong>present perfect continuous</strong> for actions that started in the past and continue now. Form: <strong>have/has been + verb-ing</strong>.", "sections": [{"title": "Form", "type": "table", "content": "I/You/We/They <strong>have been</strong> working|He/She/It <strong>has been</strong> working"}, {"title": "for vs. since", "type": "flipcards", "cards": [{"front": "for (period)", "back": "I've been studying <strong>for</strong> 3 hours."}, {"front": "since (start point)", "back": "I've been studying <strong>since</strong> 9am."}]}], "exercises": [{"type": "choice", "q": "I ___ (wait) for 20 minutes.", "choices": ["have been waiting", "have waited", "am waiting", "was waiting"], "a": "have been waiting"}]},
      {"t": "Past Perfect", "intro": "We use the <strong>past perfect</strong> for an action completed before another past action. Form: <strong>had + past participle</strong>.", "sections": [{"title": "Form", "type": "table", "content": "All persons: <strong>had</strong> + past participle"}, {"title": "Why Use It?", "type": "flipcards", "cards": [{"front": "Before another past action", "back": "When I arrived, the train <strong>had</strong> already <strong>left</strong>."}, {"front": "Sequence of events", "back": "She <strong>hadn't studied</strong>, so she failed."}]}], "exercises": [{"type": "choice", "q": "When I arrived, the train already ___ (leave).", "choices": ["had left", "has left", "left", "was leaving"], "a": "had left"}]},
      {"t": "Future Forms", "intro": "English has several ways to talk about the future: <strong>will</strong>, <strong>going to</strong>, and <strong>present continuous</strong>.", "sections": [{"title": "The Three Main Forms", "type": "flipcards", "cards": [{"front": "will (spontaneous)", "back": "<strong>I'll</strong> get it! (phone rings)"}, {"front": "going to (plan/evidence)", "back": "<strong>I'm going to</strong> study medicine. (plan)"}, {"front": "present continuous (arrangement)", "back": "<strong>I'm meeting</strong> John at 6pm. (fixed)"}]}], "exercises": [{"type": "choice", "q": "Look at those clouds! It ___ rain.", "choices": ["is going to", "will", "is raining", "rains"], "a": "is going to"}]},
      {"t": "Passive Voice", "intro": "We use the <strong>passive voice</strong> when the action is more important than who does it. Form: <strong>be + past participle</strong>.", "sections": [{"title": "Form", "type": "table", "content": "Present: am/is/are + PP|Past: was/were + PP|Future: will be + PP"}, {"title": "Active vs. Passive", "type": "flipcards", "cards": [{"front": "Active", "back": "Shakespeare <strong>wrote</strong> this book."}, {"front": "Passive", "back": "This book <strong>was written</strong> by Shakespeare."}]}], "exercises": [{"type": "choice", "q": "This book ___ (write) by Shakespeare.", "choices": ["was written", "wrote", "is written", "has written"], "a": "was written"}]},
      {"t": "Second Conditional", "intro": "We use the <strong>second conditional</strong> for unreal present/future. Form: <strong>If + past simple, would + infinitive</strong>.", "sections": [{"title": "Form", "type": "table", "content": "If + past simple, would + infinitive|If I <strong>had</strong> money, I <strong>would travel</strong>."}, {"title": "Examples", "type": "flipcards", "cards": [{"front": "Unreal present", "back": "If I <strong>had</strong> more time, I <strong>would learn</strong> Japanese."}, {"front": "Advice", "back": "If I <strong>were</strong> you, I <strong>wouldn't do</strong> that."}]}], "exercises": [{"type": "choice", "q": "If I ___ (be) rich, I ___ (travel).", "choices": ["were / would travel", "was / would travel", "am / will travel", "were / will travel"], "a": "were / would travel"}]},
      {"t": "Reported Speech", "intro": "We use <strong>reported speech</strong> to tell what someone said. Tenses go 'back' one step.", "sections": [{"title": "Tense Changes", "type": "table", "content": "Present → Past|Past → Past perfect|will → would"}, {"title": "Examples", "type": "flipcards", "cards": [{"front": "\"I am tired\"", "back": "She said she <strong>was</strong> tired."}, {"front": "\"I will come\"", "back": "He said he <strong>would</strong> come."}]}], "exercises": [{"type": "choice", "q": "\"I am happy.\" She said she ___ happy.", "choices": ["was", "is", "were", "has been"], "a": "was"}]},
      {"t": "Gerunds and Infinitives", "intro": "Some verbs take <strong>-ing</strong>, some take <strong>to + verb</strong>.", "sections": [{"title": "Verb + Gerund", "type": "table", "content": "enjoy, finish, stop, mind, suggest|I <strong>enjoy swimming</strong>."}, {"title": "Verb + Infinitive", "type": "table", "content": "want, decide, hope, plan|I <strong>want to travel</strong>."}], "exercises": [{"type": "choice", "q": "I enjoy ___ (read).", "choices": ["reading", "to read", "read", "reads"], "a": "reading"}]},
      {"t": "Third Conditional", "intro": "We use the <strong>third conditional</strong> for unreal past (regrets). Form: <strong>If + past perfect, would have + past participle</strong>.", "sections": [{"title": "Form", "type": "table", "content": "If + past perfect, would have + PP|If I <strong>had studied</strong>, I <strong>would have passed</strong>."}], "exercises": [{"type": "choice", "q": "If I ___ (know), I ___ (tell) you.", "choices": ["had known / would have told", "knew / would tell", "have known / would tell", "knew / told"], "a": "had known / would have told"}]},
      {"t": "Question Tags", "intro": "<strong>Question tags</strong> are short questions at the end of statements. Positive → negative tag, negative → positive tag.", "sections": [{"title": "The Rule", "type": "table", "content": "Positive + negative: You like coffee, <strong>don't you</strong>?|Negative + positive: She isn't coming, <strong>is she</strong>?"}], "exercises": [{"type": "choice", "q": "You speak French, ___?", "choices": ["don't you", "do you", "aren't you", "doesn't you"], "a": "don't you"}]}
    ]
  },
  "B2": {
    "name": "B2 - Upper Intermediate",
    "color": "#fbbf24",
    "topics": [
      {"t": "Mixed Conditionals", "intro": "<strong>Mixed conditionals</strong> combine second and third conditionals: past condition with present result, or present condition with past result.", "sections": [{"title": "Past → Present", "type": "flipcards", "cards": [{"front": "If + past perfect, would + base", "back": "If I <strong>had studied</strong> medicine, I <strong>would be</strong> a doctor now. (past condition → present result)"}]}, {"title": "Present → Past", "type": "flipcards", "cards": [{"front": "If + past simple, would have + PP", "back": "If she <strong>were</strong> more confident, she <strong>would have applied</strong>. (present condition → past result)"}]}], "exercises": [{"type": "choice", "q": "If she ___ (study) harder, she ___ (be) a doctor now.", "choices": ["had studied / would be", "studied / would be", "had studied / would have been", "studies / will be"], "a": "had studied / would be"}]},
      {"t": "Inversion with Negative Adverbials", "intro": "We use <strong>inversion</strong> after negative adverbials for emphasis. The verb comes before the subject.", "sections": [{"title": "Common Patterns", "type": "table", "content": "Never: <strong>Never have I</strong> seen such beauty.|Not only: <strong>Not only did</strong> she pass, but she got top marks.|Seldom/Rarely: <strong>Seldom do we</strong> see such talent.|Hardly: <strong>Hardly had I</strong> arrived when...|No sooner: <strong>No sooner had</strong> we left than..."}], "exercises": [{"type": "choice", "q": "___ did she pass the exam, but she also got the highest score.", "choices": ["Not only", "Only not", "Not just", "Besides"], "a": "Not only"}]},
      {"t": "Participle Clauses", "intro": "<strong>Participle clauses</strong> replace adverbial clauses to make sentences more concise.", "sections": [{"title": "Types", "type": "flipcards", "cards": [{"front": "Present participle (active)", "back": "<strong>Walking</strong> down the street, I saw an old friend. (= While I was walking...)"}, {"front": "Past participle (passive)", "back": "<strong>Seen</strong> from space, the Earth looks blue. (= When it is seen...)"}, {"front": "Perfect participle", "back": "<strong>Having finished</strong> the work, she went home. (= After she had finished...)"}]}], "exercises": [{"type": "choice", "q": "___ the news, she called her mother.", "choices": ["Having heard", "Heard", "Hearing loudly", "Was hearing"], "a": "Having heard"}]},
      {"t": "Cleft Sentences", "intro": "<strong>Cleft sentences</strong> add emphasis by splitting a sentence into two parts.", "sections": [{"title": "It is... that...", "type": "table", "content": "<strong>It was</strong> John <strong>who</strong> broke the window. (emphasize John)|<strong>It's</strong> the music <strong>that</strong> I love most. (emphasize the music)"}, {"title": "What... is...", "type": "table", "content": "<strong>What I need</strong> is a good rest. (emphasize a good rest)|<strong>What happened</strong> was that he left. (emphasize the event)"}], "exercises": [{"type": "fill", "q": "___ John who broke the window. What I need ___ a holiday.", "a": ["It was", "is"]}]},
      {"t": "Wish / If Only", "intro": "We use <strong>wish</strong> and <strong>if only</strong> to express regrets about the present, past, or future.", "sections": [{"title": "Present Regret", "type": "table", "content": "wish + past simple: I <strong>wish I were</strong> taller. (but I'm not)|If only + past simple: <strong>If only I had</strong> more time."}, {"title": "Past Regret", "type": "table", "content": "wish + past perfect: I <strong>wish I had studied</strong> harder. (but I didn't)|If only + past perfect: <strong>If only I had known</strong>."}, {"title": "Future Desire", "type": "table", "content": "wish + would: I <strong>wish she would</strong> call me. (I want her to call)|If only + would: <strong>If only it would</strong> stop raining."}], "exercises": [{"type": "choice", "q": "I wish I ___ speak French fluently.", "choices": ["can", "could", "will", "would"], "a": "could"}]},
      {"t": "Passive with Two Objects", "intro": "When a verb has two objects, either can become the subject in passive.", "sections": [{"title": "Examples", "type": "flipcards", "cards": [{"front": "Active: She gave me a book", "back": "Passive 1: I <strong>was given</strong> a book. | Passive 2: A book <strong>was given</strong> to me."}, {"front": "Active: They offered her a job", "back": "Passive 1: She <strong>was offered</strong> a job. | Passive 2: A job <strong>was offered</strong> to her."}]}], "exercises": [{"type": "choice", "q": "She gave me a gift. → I ___ a gift.", "choices": ["was given", "gave", "have given", "am given"], "a": "was given"}]},
      {"t": "Advanced Modal Verbs", "intro": "Modal verbs for speculation and deduction about the past: <strong>must have, can't have, should have, might have</strong>.", "sections": [{"title": "Deduction About the Past", "type": "table", "content": "must have + PP: She <strong>must have been</strong> at home. (I'm almost certain)|can't have + PP: He <strong>can't have known</strong>. (I'm certain he didn't)|should have + PP: You <strong>should have told</strong> me. (criticism - you didn't)|might have + PP: She <strong>might have forgotten</strong>. (it's possible)"}], "exercises": [{"type": "fill", "q": "She ___ (must/home) — the lights are on. He ___ (can't/know) about it.", "a": ["must have been at home", "can't have known"]}]},
      {"t": "Ellipsis and Substitution", "intro": "We often omit repeated words or use substitutes like <strong>so, neither, do so</strong>.", "sections": [{"title": "so / neither", "type": "table", "content": "I like coffee and <strong>so</strong> does she. (= she likes coffee too)|I can't swim and <strong>neither</strong> can he. (= he can't either)"}, {"title": "do so / do that", "type": "table", "content": "He said he'd come and he <strong>did so</strong>. (= he came)|I told him to leave and he <strong>did that</strong>."}], "exercises": [{"type": "choice", "q": "I love chocolate and my sister ___.", "choices": ["does too", "does so", "loves too", "is too"], "a": "does too"}]}
    ]
  },
  "C1": {
    "name": "C1 - Advanced",
    "color": "#fb7185",
    "topics": [
      {"t": "Advanced Present Tenses", "intro": "Subtle differences between present simple, continuous, and perfect - including <strong>always + -ing</strong> for annoyance.", "sections": [{"title": "always + -ing (annoyance)", "type": "flipcards", "cards": [{"front": "Neutral (simple)", "back": "She <strong>always complains</strong>. (this is what she does)"}, {"front": "Annoying (continuous)", "back": "She<strong>'s always complaining</strong>. (it annoys me!)"}]}, {"title": "Temporary vs. Permanent", "type": "reveal", "items": [{"label": "Temporary (continuous)", "answer": "I<strong>'m thinking</strong> about it. (right now)"}, {"label": "Opinion (simple)", "answer": "I <strong>think</strong> it's correct. (my opinion)"}, {"label": "Duration (perfect continuous)", "answer": "I<strong>'ve been reading</strong> for hours. (focus on duration)"}]}], "exercises": [{"type": "choice", "q": "She ___ about her problems again!", "choices": ["is always complaining", "always complains", "has always complained", "complains always"], "a": "is always complaining"}]},
      {"t": "Advanced Past Tenses", "intro": "Past perfect continuous, <strong>would</strong> for past habits, and narrative tenses.", "sections": [{"title": "Past Perfect Continuous", "type": "table", "content": "had been + verb-ing: I <strong>had been waiting</strong> for 2 hours when she arrived."}, {"title": "would (past habits)", "type": "table", "content": "We <strong>would sit</strong> on the porch every evening. (past habit - more literary than used to)"}, {"title": "Narrative Tenses", "type": "reveal", "items": [{"label": "Background (past continuous)", "answer": "It <strong>was raining</strong> and people <strong>were rushing</strong> past."}, {"label": "Events (past simple)", "answer": "Suddenly, a man <strong>appeared</strong> and <strong>shouted</strong>."}, {"label": "Earlier events (past perfect)", "answer": "He <strong>had left</strong> the office an hour before."}]}], "exercises": [{"type": "fill", "q": "I ___ (read) for an hour when the power went out.", "a": ["had been reading"]}]},
      {"t": "The Subjunctive", "intro": "The <strong>subjunctive</strong> is used in formal suggestions, demands, and hypotheticals. It uses the base form of the verb.", "sections": [{"title": "Formal Suggestions/Demands", "type": "table", "content": "I suggest that he <strong>see</strong> a doctor. (NOT sees)|It's essential that she <strong>be</strong> informed. (NOT is)|They demanded that he <strong>leave</strong>. (NOT leaves)"}, {"title": "If I were to...", "type": "table", "content": "<strong>If I were to</strong> win the lottery, I'd travel the world. (formal hypothetical)"}], "exercises": [{"type": "choice", "q": "The doctor recommended that she ___ more exercise.", "choices": ["takes", "take", "taking", "to take"], "a": "take"}]},
      {"t": "Advanced Modal Verbs", "intro": "Subtle uses of <strong>will, would, should, may</strong> for habits, expectations, and concession.", "sections": [{"title": "will/would (characteristic habits)", "type": "table", "content": "She <strong>will sit</strong> for hours reading. (typical behavior)|You <strong>would say</strong> that, wouldn't you? (typical of you - ironic)"}, {"title": "should (expectation)", "type": "table", "content": "This <strong>should be</strong> easy enough. (I expect it to be easy)"}, {"title": "may (concession)", "type": "table", "content": "Much as I <strong>may want</strong> to help, I can't. (even though I want to)"}], "exercises": [{"type": "fill", "q": "He ___ (will/forget) his keys — it's so typical!", "a": ["will forget"]}]},
      {"t": "Inversion (Advanced)", "intro": "Inversion after <strong>So, Such, No sooner, Not until, Hardly, Only after</strong>.", "sections": [{"title": "Patterns", "type": "table", "content": "So beautiful <strong>was</strong> the sunset that...|No sooner <strong>had</strong> we left than it started raining.|Not until she spoke <strong>did</strong> I realize who she was.|Hardly <strong>had</strong> I arrived when the phone rang.|Only later <strong>did</strong> I realize the mistake."}], "exercises": [{"type": "choice", "q": "___ did I realize the mistake.", "choices": ["Only later", "Later only", "Only after later", "Later only"], "a": "Only later"}]}
    ]
  }
};

// ═══════════════════════════════════════════════════
// GRAMMAR RENDERING - Interactive lesson system
// ═══════════════════════════════════════════════════
function renderGrammar(levelFilter, searchFilter) {
  var container = document.getElementById('grammar-content');
  var data = GRAMMAR_DATA[levelFilter];
  if (!data) { container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim)">Select a level to see grammar topics.</div>'; return; }
  var topics = data.topics;
  if (searchFilter) {
    var sf = searchFilter.toLowerCase();
    topics = topics.filter(function(t){ return t.t.toLowerCase().indexOf(sf) >= 0 || (t.intro && t.intro.toLowerCase().indexOf(sf) >= 0); });
  }
  if (topics.length === 0) { container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-dim)">No grammar topics match your search.</div>'; return; }
  var html = '';
  topics.forEach(function(topic, idx) {
    var tid = levelFilter + '-' + idx;
    html += '<div class="grammar-topic-card" id="topic-' + tid + '">';
    html += '<div class="grammar-topic-header" onclick="toggleTopic(\'' + tid + '\')">';
    html += '<div class="grammar-topic-title">' + topic.t + '</div>';
    html += '<div class="grammar-topic-arrow">▼</div></div>';
    html += '<div class="grammar-topic-body"><div class="grammar-topic-body-inner">';
    if (topic.intro) html += '<div class="grammar-intro">' + topic.intro + '</div>';
    if (topic.sections) topic.sections.forEach(function(sec) {
      html += '<div class="grammar-section">';
      html += '<div class="grammar-section-title">' + sec.title + '</div>';
      if (sec.type === 'table') {
        html += '<table class="grammar-table"><tbody>';
        sec.content.split('|').forEach(function(row) {
          var parts = row.split(':');
          if (parts.length >= 2) html += '<tr><td>' + parts[0] + '</td><td>' + parts.slice(1).join(':') + '</td></tr>';
          else html += '<tr><td colspan="2">' + row + '</td></tr>';
        });
        html += '</tbody></table>';
      } else if (sec.type === 'flipcards') {
        html += '<div class="flipcards-grid">';
        sec.cards.forEach(function(card) {
          html += '<div><div class="flipcard" onclick="this.classList.toggle(\'flipped\')">';
          html += '<div class="flipcard-inner"><div class="flipcard-front">' + card.front + '</div>';
          html += '<div class="flipcard-back">' + card.back + '</div></div></div>';
          html += '<div class="flip-hint">Click to flip</div></div>';
        });
        html += '</div>';
      } else if (sec.type === 'reveal') {
        if (sec.intro) html += '<p style="font-size:13px;color:var(--text-dim);margin-bottom:8px">' + sec.intro + '</p>';
        html += '<div class="reveal-list">';
        sec.items.forEach(function(item) {
          html += '<div class="reveal-item" onclick="this.classList.toggle(\'open\')">';
          html += '<div class="reveal-label">' + item.label + '</div>';
          html += '<div class="reveal-answer">' + item.answer + '</div></div>';
        });
        html += '</div>';
      } else if (sec.type === 'warning') {
        html += '<div class="grammar-warning">';
        html += '<div class="grammar-warning-title">⚠️ ' + sec.title + '</div>';
        html += '<div class="grammar-warning-content">' + sec.content + '</div>';
        if (sec.examples) {
          html += '<div class="grammar-examples">';
          sec.examples.forEach(function(ex) {
            html += '<div class="grammar-example-row">';
            html += '<span class="correct">✓ ' + ex.correct + '</span>';
            if (ex.wrong) html += '<span class="wrong">✗ ' + ex.wrong + '</span>';
            if (ex.why) html += '<span class="why">' + ex.why + '</span>';
            html += '</div>';
          });
          html += '</div>';
        }
        html += '</div>';
      }
      html += '</div>';
    });
    if (topic.exercises && topic.exercises.length > 0) {
      html += '<div class="grammar-exercises"><div class="grammar-exercises-title">✏️ Practice Exercises</div>';
      topic.exercises.forEach(function(ex, exIdx) {
        var exId = tid + '-ex-' + exIdx;
        html += '<div class="grammar-exercise">';
        html += '<div class="grammar-exercise-q"><span class="grammar-exercise-num">' + (exIdx + 1) + '</span>' + ex.q + '</div>';
        if (ex.type === 'choice') {
          html += '<div class="choice-options" id="' + exId + '">';
          ex.choices.forEach(function(ch) {
            html += '<button class="choice-btn" onclick="checkChoice(this,\'' + exId + '\',\'' + ex.a.replace(/'/g, "\\'") + '\',\'' + (ex.explanation||'').replace(/'/g, "\\'") + '\')">' + ch + '</button>';
          });
          html += '</div>';
        } else if (ex.type === 'fill') {
          var answers = Array.isArray(ex.a) ? ex.a : [ex.a];
          var qHtml = ex.q;
          answers.forEach(function(ans, i) {
            qHtml = qHtml.replace('___', '<input type="text" class="fill-input" id="' + exId + '-' + i + '" placeholder="...">');
          });
          html = html.replace(ex.q, qHtml);
          html += '<br><button class="check-btn" onclick="checkFill(\'' + exId + '\',' + JSON.stringify(answers).replace(/"/g, '&quot;') + ',\'' + (ex.explanation||'').replace(/'/g, "\\'") + '\')">Check Answers</button>';
        } else if (ex.type === 'error') {
          html += '<div class="choice-options" id="' + exId + '">';
          ex.choices.forEach(function(ch) {
            html += '<button class="choice-btn" onclick="checkChoice(this,\'' + exId + '\',\'' + ex.a.replace(/'/g, "\\'") + '\',\'' + (ex.explanation||'').replace(/'/g, "\\'") + '\')">' + ch + '</button>';
          });
          html += '</div>';
        } else if (ex.type === 'flip') {
          html += '<div class="reveal-item" onclick="this.classList.toggle(\'open\')">';
          html += '<div class="reveal-label">Click to reveal answer</div>';
          html += '<div class="reveal-answer"><strong>' + ex.a + '</strong></div></div>';
        }
        html += '<div class="grammar-explanation" id="' + exId + '-exp"></div>';
        html += '<div class="exercise-result" id="' + exId + '-result"></div>';
        html += '</div>';
      });
      html += '</div>';
    }
    html += '</div></div></div>';
  });
  container.innerHTML = html;
}

function toggleTopic(id) {
  var el = document.getElementById('topic-' + id);
  if (!el) return;
  var body = el.querySelector('.grammar-topic-body');
  var arrow = el.querySelector('.grammar-topic-arrow');
  if (body.style.display === 'block') { body.style.display = 'none'; arrow.style.transform = 'rotate(0)'; }
  else { body.style.display = 'block'; arrow.style.transform = 'rotate(180deg)'; }
}

function checkChoice(btn, exId, correct, explanation) {
  var options = btn.parentElement.querySelectorAll('.choice-btn');
  options.forEach(function(b){ b.disabled = true; });
  var resultEl = document.getElementById(exId + '-result');
  var expEl = document.getElementById(exId + '-exp');
  if (btn.textContent.trim() === correct.trim()) {
    btn.classList.add('correct');
    resultEl.textContent = '✓ Correct!';
    resultEl.className = 'exercise-result correct';
  } else {
    btn.classList.add('wrong');
    resultEl.textContent = '✗ Incorrect. The answer is: ' + correct;
    resultEl.className = 'exercise-result wrong';
    options.forEach(function(b){ if (b.textContent.trim() === correct.trim()) b.classList.add('correct'); });
  }
  if (explanation) { expEl.textContent = explanation; expEl.classList.add('show'); }
}

function checkFill(exId, correctAnswers, explanation) {
  var allCorrect = true;
  correctAnswers.forEach(function(ans, i) {
    var input = document.getElementById(exId + '-' + i);
    if (!input) return;
    var userVal = input.value.trim().toLowerCase();
    var correctVal = ans.toLowerCase();
    if (userVal === correctVal || userVal === correctVal.replace(/'/g, '')) {
      input.classList.add('correct'); input.classList.remove('wrong');
    } else {
      input.classList.add('wrong'); input.classList.remove('correct');
      allCorrect = false;
    }
  });
  var resultEl = document.getElementById(exId.replace('-ex-', '-ex-') + '-result');
  var expEl = document.getElementById(exId.replace('-ex-', '-ex-') + '-exp');
  if (!resultEl) { resultEl = document.querySelector('#' + exId + '-result'); expEl = document.querySelector('#' + exId + '-exp'); }
  if (allCorrect) {
    resultEl.textContent = '✓ All correct!';
    resultEl.className = 'exercise-result correct';
  } else {
    resultEl.textContent = '✗ Some answers are wrong. Correct: ' + correctAnswers.join(', ');
    resultEl.className = 'exercise-result wrong';
  }
  if (explanation) { expEl.textContent = explanation; expEl.classList.add('show'); }
}

function filterGrammar() {
  var level = document.getElementById('grammar-level-filter').value;
  var search = document.getElementById('grammar-search').value;
  renderGrammar(level, search);
}

// Init grammar on tab switch
var _origSwitchTab = window.switchTab;
window.switchTab = function(t) {
  if (_origSwitchTab) _origSwitchTab(t);
  if (t === 'lessons') filterGrammar();
};
