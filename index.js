var qoute = document.querySelector("#qoutes");
var person = document.querySelector("#person");

var newQouteBTN = document.querySelector("#btn-newQoutes");

const qoutes = [
    {
        qoute: `"When you reach the end of your rope, tie a knot in it and hang on."`,
        person : "Franklin D. Roosevelt"
    },{
        qoute:  `"Always remember that you are absolutely unique. Just like everyone else."` ,
        person: "Margaret Mead"
    } ,{
        qoute: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: "Robert Louis Stevenson"
    },{
        qoute:  `"The future belongs to those who believe in the beauty of their dreams."`,
        person: "Eleanor Roosevelt"
    },{
        qoute:  `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
        person: "Helen Keller"
    },{
        qoute: `"It is during our darkest moments that we must focus to see the light."`,
        person: "Aristotle"
    },{
        qoute:  `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
        person: "Ralph Waldo Emerson"
    },{
        qoute: `"If life were predictable it would cease to be life and be without flavor."`,
        person: "Eleanor Roosevelt"
    },{
        qoute: `"In the end, it's not the years in your life that count. It's the life in your years."`,
        person: "Abraham Lincoln"
    },{
        qoute:  `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
        person: "Dr. Seuss"
    },{
        qoute: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."`,
        person: "Steve Jobs"
    },{
        qoute: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
        person: "Thomas A. Edison"
    },{
        qoute: `"Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you."`,
        person: "Zig Ziglar"
    },{
        qoute: `"Success seems to be connected with action. Successful people keep moving. They make mistakes but they don't quit."` ,
        person: "Conrad Hilton"
    },{
        qoute: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
        person: "Colin Powell"
    },{
        qoute: `"Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better."` ,
        person: "Jim Rohn"
    },{
        qoute:  `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: "James Cameron"
    }
]


newQouteBTN.addEventListener("click", function(){
    var index = Math.floor(Math.random() * qoutes.length);
    qoute.textContent = qoutes[index].qoute;
    person.textContent = qoutes[index].person;
})