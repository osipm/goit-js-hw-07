const numberCategories = document.querySelectorAll('.item');
console.log('число категорій:', numberCategories.length)


const listNameCategories = document.querySelectorAll('h2');
const numberElemCategories = numberCategories[0].querySelectorAll('li');
const numberElemCategories1 = numberCategories[1].querySelectorAll('li');
const numberElemCategories2 = numberCategories[2].querySelectorAll('li');

console.log('- Категория:', listNameCategories[0].textContent);
console.log('- Количество элементов:', numberElemCategories.length);

console.log('- Категория:', listNameCategories[1].textContent);
console.log('- Количество элементов:', numberElemCategories1.length);

console.log('- Категория:', listNameCategories[2].textContent);
console.log('- Количество элементов:', numberElemCategories2.length);

