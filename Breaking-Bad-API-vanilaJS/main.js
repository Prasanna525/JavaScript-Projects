const quote_container = document.getElementById('quote_container');

const quote_number = 30;

const fetchQuotes = async () => {
    for(let i = 1; i <= quote_number; i++){
        await getQuote(i); 
    };
}

const getQuote = async id => {
    const url = `https://www.breakingbadapi.com/api/quotes/${id}`;
    const result = await fetch(url);
    const quote = await result.json();
    //console.log(quote);
    if(quote != null){
        createQuoteCard(quote);
    }
    //createQuoteCard(quote);
}

const createQuoteCard = quote_item => {
    const quoteElement = document.createElement('div');
    quoteElement.classList.add('quote');
    const {quote, author} = quote_item[0];
    const quoteInnerHTML = `
        <div class="quote-box">
            <h1>${quote}</h1>
            <h4>-${author}</h4>
        </div>    
    `;
    quoteElement.innerHTML = quoteInnerHTML;
    quote_container.appendChild(quoteElement);
}

fetchQuotes();

