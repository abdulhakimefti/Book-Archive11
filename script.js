// Javascript  code for Search Engine
//start
// SearchBook() function for load book data
const searchBook = () => {
    // Collect Search field  value 
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    searchField.value = '';
    // Give input field value to API
    //Time to  call API
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
}

// This function is called for show the book in UI which was called from API
const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
        // this counter variable is declared to count the book quantity which was found by search engine .
        let counter = 0;
        // If search engine cannot find anything then this error handler will show this..
        if(books.length === 0){
            //If the search engine cannot find anything then it will remove the previous result of book quantity . 
            const totalResultNumber = document.getElementById('total-search-result');
            totalResultNumber.textContent ='';

            // And it will show this
            const noResultError = 'No result Found';
            const resultError = document.getElementById('result-error');
            resultError.textContent ='';
            const resutErrorLine = document.createElement('h1');
            resutErrorLine.classList.add('text-center');
            resutErrorLine.innerText = `${noResultError}`;
            resultError.appendChild(resutErrorLine);
        }
        // If search engine find the result then it will show this
        else {
            // If search engine find their result then it will remove previous result which was showed for to know that search engine did not found any data
            const resultError = document.getElementById('result-error');
            resultError.textContent ='';

            //It will count the quantity of book which was found after search
            books.forEach(book => {
                if(book.type === 'work'){
                    counter++;
                }
                // in  UI this code display all the book in different card
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('col');
                const imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                bookDiv.innerHTML = `
                    <div class="card"  style="width: 18rem;">
                        <img src = "${imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Author : ${book.author_name}</li>
                            <li class="list-group-item">Publisher : ${book.publisher}</li>
                            <li class="list-group-item">First Publish Year : ${book.first_publish_year}</li>
                            
                        </ul>
                    </div>         
                    `
                searchResult.appendChild(bookDiv);
            })
            // This will in UI how much book is found by search engine
            const totalResultNumber = document.getElementById('total-search-result');
            totalResultNumber.textContent ='';
            const numberDiv = document.createElement('p');
            numberDiv.classList.add('text-center');
            numberDiv.innerText = `Show result for ${counter} Books`;
            totalResultNumber.appendChild(numberDiv);
        }
        
            
   
    
}