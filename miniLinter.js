#!/bin/js

/*
    Mini Linter
In this project, you will use what you know about iterating over arrays to improve the quality 
of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard 
of linting, a process by which text is evaluated and improved by an application. In this project, 
you will create a miniature version of a linter using array methods that you have learned.
*/

let story = 'Last  weekend, I 2 2 took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically','2' ];

let unnecessaryWords = ['extremely', 'literally', 'actually',  ];

const storyWords = story.split(' ');
//console.log(storyWords.length);

const isNotPresent = word => {
    const arrLength = unnecessaryWords.length;
    for(let  i =0;i < arrLength;i++){
        if(unnecessaryWords[i] === word){
            return false;
        }
    }
    return true;   
}
const betterWords = storyWords.filter(isNotPresent);
//console.log(betterWords.length)
//console.log(betterWords)

//4
let totalOverusedWords = {
    overusedWords: [],
    
    

    overusedWords1(word,timesUsed) {
        //word = word;
        //timesUsed = timesUsed;
       
        let objOverusedWords = `{${word}:${timesUsed}}`
        this.overusedWords.push(objOverusedWords);        
    },
    get overusedWords2(){
        return this.overusedWords;
    },
    

}
const checkOveruserdWords = word => {
    let count = 0;

    for(let i = 0; i< overusedWords.length ;i++){
        if(overusedWords[i] === word){
            count ++
        }
    }
    totalOverusedWords.overusedWords1(word, count);
    count = 0;
}
overusedWords.forEach(checkOveruserdWords);
console.log(totalOverusedWords.overusedWords2)
//need more coding......!!!