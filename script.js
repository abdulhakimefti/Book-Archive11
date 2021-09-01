// Search Bar 

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    searchText = searchField.value;
    searchField.value = '';
    //Time to  call API
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data.docs))
}