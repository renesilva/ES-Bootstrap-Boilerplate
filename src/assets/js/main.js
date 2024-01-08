console.log('Hello from assets/js/main.js');
const testProducts = document.getElementById('test-products');
axios.get('https://example-data.draftbit.com/products?_limit=10')
  .then(
    (response) => {
      let res = response.data
      res.forEach((product) => {
        const colElement = document.createElement('div');
        colElement.className = 'col-4';

        const productCard = document.createElement('div');
        productCard.className = 'card my-2 p-3 shadow-sm border-1 rounded';

        const productCardBody = document.createElement('div');
        productCardBody.className = 'card-body';

        const productCardTitle = document.createElement('h5');
        productCardTitle.className = 'card-title';
        productCardTitle.innerHTML = product.name;

        const productCardText = document.createElement('p');
        productCardText.className = 'card-text';
        productCardText.innerHTML = product.description;

        productCardBody.appendChild(productCardTitle);
        productCardBody.appendChild(productCardText);
        productCard.appendChild(productCardBody);
        colElement.appendChild(productCard);
        testProducts.appendChild(colElement);
      });
    },
    (error) => {
      console.log(error);
    },
  );
