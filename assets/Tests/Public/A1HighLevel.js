const testData = {
    testName:"سطح High - A1",
    testLevel:"A1High",
    category:"public",
    categoryInp:"آزمون تعیین سطح عمومی",
    passPoint:66.6,
    testTime:15,
    nextLevel:"A2Low",
    nextLevelName:"A2-Low",
    reading:[
        {type:"mainTitle" , content:"Where are you going to shop?"},
        {type:"paragraph" , content:"Hi Karen, thanks for your message. Welcome to the neighborhood! Of course, I can help you find the shops you need, it’s not a problem!"},
        {type:"paragraph" , content:"This weekend, I’m going to buy some clothes for my children, so you can come with me. There’s a shop near my house. It sells good quality clothes and they’re not expensive. They sell shoes too, but they cost a lot of money. They’re open every day from 9 am until 6 pm, but they close at 3 pm on Sundays."},
        {type:"paragraph" , content:"For your cat or a dog, you can find anything you need at the pet shop next to the school. I’m going to get some food for my cat there this afternoon. You can come with me. I also need to buy some eggs and vegetables for our dinner. The grocery store is very close to the pet shop. I’ll show you where."},
        {type:"paragraph" , content:"About school materials for your children, next week, I’m going to buy some notebooks and pens for my son at a stationary store not far from your house. We can go together if you want. Is Tuesday OK for you? I’m busy in the morning, but I’m free in the afternoon. Let me know."},
        {type:"paragraph" , content:"See you soon!"},
        {type:"paragraph" , content:"Maria"},

    ],
    listening:'/audios/tests/public/A1High/sound.mp3',
    questions: [
        {
          "id": "q1",
          "number": 1,
          "type": "multiple",
          "question": "A: What day is it today?\nB: Yesterday was Friday. So today is .... .",
          "options": [
            "Saturday",
            "Tuesday",
            "Sunday",
            "Wednesday"
          ],
          "correctanswer": 1
        },
        {
          "id": "q2",
          "number": 2,
          "type": "multiple",
          "question": "A: Do you want a cigarette?\nB: No, I don't .......",
          "options": [
            "love",
            "pay",
            "need",
            "smoke"
          ],
          "correctanswer": 4
        },
        {
          "id": "q3",
          "number": 3,
          "type": "multiple",
          "question": "A: I want to ...... German.\nB: Okay, I know a good Institute near here. Do you want its phone number?",
          "options": [
            "leave",
            "teach",
            "learn",
            "travel"
          ],
          "correctanswer": 3
        },
        {
          "id": "q4",
          "number": 4,
          "type": "multiple",
          "question": "A: Did you ..... her last night?\nB: No, I didn't. I didn't ..... any of the students.",
          "options": [
            "see – see",
            "saw - saw",
            "saw - see",
            "see - saw"
          ],
          "correctanswer": 1
        },
        {
          "id": "q5",
          "number": 5,
          "type": "multiple",
          "question": "She usually ...... to class at this time.\nB: Yes, but today she ...... to the mall to buy a gift.",
          "options": [
            "is going - is going",
            "goes - goes",
            "is going - goes",
            "goes - is going"
          ],
          "correctanswer": 4
        },
        {
          "id": "q6",
          "number": 6,
          "type": "multiple",
          "question": "A: What would you like ...... tonight.\nB: Let's go to the cinema.",
          "options": [
            "doing",
            "do",
            "to do",
            "does"
          ],
          "correctanswer": 3
        },
        {
          "id": "q7",
          "number": 7,
          "type": "multiple",
          "question": "A: ........................\nB: it's from 8 to 10.",
          "options": [
            "When is time breakfast?",
            "What is breakfast time?",
            "When time is breakfast?",
            "What time is breakfast?"
          ],
          "correctanswer": 4
        },
        {
          "id": "q8",
          "number": 8,
          "type": "multiple",
          "question": "A: How was the party last night?\nB: ……..., Everybody was checking their cell phones and I had nothing to do.",
          "options": [
            "Fantastic",
            "Terrible",
            "Okay",
            "Great"
          ],
          "correctanswer": 2
        },
        {
          "id": "q9",
          "number": 9,
          "type": "multiple",
          "question": "A: What is your favorite color?\nB: I normally like light colors and my favorite color is:",
          "options": [
            "yellow",
            "black",
            "brown",
            "gray"
          ],
          "correctanswer": 1
        },
        {
          "id": "q10",
          "number": 10,
          "type": "reading",
          "question": "The clothes in the shop aren't cheap.",
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
          "question": "Maria is going to the pet shop after school.",
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
          "question": "Maria can go to the stationery store on Tuesday afternoon.",
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
          "question": "Jing and Tania are in the same class.",
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
          "question": "Their teacher is a man.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 1
        },
        {
          "id": "q15",
          "number": 15,
          "type": "listening",
          "question": "Jing knows where the classroom is.",
          "options": [
            "True",
            "False"
          ],
          "correctanswer": 2
        }
      ]
      
  
      
    
  
      
}
export default testData;