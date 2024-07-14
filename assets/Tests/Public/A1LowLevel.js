const testData = {
    testName:"سطح Low - A1",
    testLevel:"A1Low",
    category:"public",
    categoryInp:"آزمون تعیین سطح عمومی",
    passPoint:66.6,
    testTime:15,
    nextLevel:"A1High",
    nextLevelName:"A1-High",
    readingCaption:null,
    reading:[
        {type:"mainTitle" , content:"The Maine School Library"},
        {type:"subTitle" , content:"Opening hours"},
        {type:"uList" , content:["•Monday 09:00 – 17:00" , "•Tuesday 09:00 – 17:00" , "•Wednesday 09:00 – 20:00" , "•Thursday 09:00 – 17:00" , "•Friday 08:00 – 15:00" , "•	Saturday 09:00 – 12:00" , "•Sunday closed"]},
        {type:"subTitle" , content:"Library rules"},
        {type:"oList" , content:["1.All students must have a library card." , "2.Computers are for schoolwork only." , "3.No food or drink in the library." , "4.No running or shouting in the library." , "5.Mobile phones must be off." , "6.Students can borrow three books at one time."]},
        {type:"paragraph" , content:"Thank you!"}
    ],
    listening:'/audios/tests/public/A1Low/sound.mp3',
    questions: [
        {
          "id": "q1",
          "number": 1,
          "type": "multiple",
          "question": "A: I bought a .... of shoes. \nB: oh, that's nice! Were they on sale?",
          "options": [
            "part",
            "pair",
            "plate",
            "page"
          ],
          "correctanswer": 2
        },
        {
          "id": "q2",
          "number": 2,
          "type": "multiple",
          "question": "A: Do you like your new home?\nB: Yes, it has a very big ..... where I cook lunch and dinner.",
          "options": [
            "pool",
            "bathroom",
            "bedroom",
            "kitchen"
          ],
          "correctanswer": 4
        },
        {
          "id": "q3",
          "number": 3,
          "type": "multiple",
          "question": "A: I wake ...... at 6 every morning.\nB: that's so early!",
          "options": [
            "down",
            "from",
            "up",
            "on"
          ],
          "correctanswer": 3
        },
        {
          "id": "q4",
          "number": 4,
          "type": "multiple",
          "question": "A: Is your mother a doctor?\nB: Yes, .... is.",
          "options": [
            "she",
            "you",
            "it",
            "he"
          ],
          "correctanswer": 1
        },
        {
          "id": "q5",
          "number": 5,
          "type": "multiple",
          "question": "A: She has ..... .\nB: Yes, she's very beautiful.",
          "options": [
            "brown lovely eyes",
            "eyes lovely Brown",
            "eyes brown lovely",
            "Lovely brown eyes"
          ],
          "correctanswer": 4
        },
        {
          "id": "q6",
          "number": 6,
          "type": "multiple",
          "question": "A: When was the last time you saw her?\nB: I think I last saw her ..... Christmas Day.",
          "options": [
            "at",
            "on",
            "in",
            "from"
          ],
          "correctanswer": 2
        },
        {
          "id": "q7",
          "number": 7,
          "type": "multiple",
          "question": "A: Let's go out.\nB: .....................",
          "options": [
            "No, I don't.",
            "No, I'm not.",
            "Okay, where?",
            "No, thank you."
          ],
          "correctanswer": 3
        },
        {
          "id": "q8",
          "number": 8,
          "type": "multiple",
          "question": "A: what ......?\nB: I'm a doctor.",
          "options": [
            "job do you work",
            "are you doing",
            "do you do",
            "does your job"
          ],
          "correctanswer": 3
        },
        {
          "id": "q9",
          "number": 9,
          "type": "multiple",
          "question": "A: What does Peter do every morning?\nB: He .... the car.",
          "options": [
            "wash",
            "washed",
            "washing",
            "washes"
          ],
          "correctanswer": 4
        },
        {
          "id": "q10",
          "number": 10,
          "type": "reading",
          "question": "The library is open on Saturday afternoon.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 2
        },
        {
          "id": "q11",
          "number": 11,
          "type": "reading",
          "question": "You can use the library on Sunday.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 2
        },
        {
          "id": "q12",
          "number": 12,
          "type": "reading",
          "question": "You can't talk on the phone in the library.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 1
        },
        {
          "id": "q13",
          "number": 13,
          "type": "listening",
          "question": "Lucy's surname is Moore.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 1
        },
        {
          "id": "q14",
          "number": 14,
          "type": "listening",
          "question": "Lucy is in class B2.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 2
        },
        {
          "id": "q15",
          "number": 15,
          "type": "listening",
          "question": "Lucy gave the Liberian a photo.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 1
        }
      ]       
}

export default testData;