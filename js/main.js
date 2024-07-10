
 var quotesList = [
    {
        author: "― Oscar Wilde",
        quote: "Be yourself; everyone else is already taken."
    },
     {author: "― Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      
    }, 
    {author: "― Bernard M. Baruch",
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
     { author: "― Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on." },
      { author: "― Elbert Hubbard", quote: "A friend is someone who knows all about you and still loves you." },{
        author:"--Frank Sinatra",
        quote:"The best revenge is massive success"
      }
      
     
]

var previousINDEX = -1;  

function addQuote() {
  var newINDEX;

  do {
    newINDEX = Math.floor(Math.random() * quotesList.length);
  } while (newINDEX === previousINDEX);

  previousINDEX = newINDEX;

  document.getElementById("par1").innerHTML = quotesList[newINDEX].quote;
  document.getElementById("par2").innerHTML = quotesList[newINDEX].author;
}


