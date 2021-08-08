const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEl = document.querySelector('ul');

const listIngredients = ingredients.map(value => {
  const liEl = document.createElement('li');
  liEl.textContent = value;
  return liEl
}
);
console.log(listIngredients)

listEl.append(...listIngredients);

console.log(listEl)