const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "-Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "-Helen Keller",
    },
    {
        quote: "dice is cast.",
        author: "-Julius caesar",
    },
    {
        quote: "Only I can change me life, no one can do it for me.",
        author: "-Carol Burnett",
    },
    {
        quote: "Life is unfair, get used to it.",
        author: "-Bill Gates",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "-Maxime Lagacé",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "-Walt Disney",
    },
    {
        quote: " When you go through hardships and decide not to surrender, that is strength.",
        author: "-Arnold Schwarzenegger",
    },
    {
        quote: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        author: "-Angelina Jolie",
    },
    {
        quote: "Despite the forecast, live like it's spring.",
        author: "-Lilly Pulitzer",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
