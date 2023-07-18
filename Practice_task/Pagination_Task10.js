let currentPage = 1;
let dataPerPage = 10;
let dataArray = [];

// Retrieve data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    dataArray = data; 
    renderGrid();
    renderPagination();
  })
  .catch(error => {
    console.error('Error:', error);
  });


function renderGrid() {
  const tableBody = document.getElementById('grid-body');
  tableBody.innerHTML = '';

  const startIndex = (currentPage - 1) * dataPerPage;  // (1-1)
  const endIndex = startIndex + dataPerPage;

  for (let i = startIndex; i < endIndex; i++) {
    if (dataArray[i]) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${dataArray[i].userId}</td><td>${dataArray[i].id}</td>  <td>${dataArray[i].title}</td>  <td>${dataArray[i].body}</td>`;
      tableBody.appendChild(row);
    }
  }
}


function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(dataArray.length / dataPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.addEventListener('click', () => {
      currentPage = i;
      renderGrid();
    });
    pagination.appendChild(button);
  }
}



