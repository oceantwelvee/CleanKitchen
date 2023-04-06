/* New Calculator */

// получаем элементы формы, с которыми будем работать
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const age = document.querySelector('#age');
const activity = document.querySelector('.calculating__choose_big');

// получаем элемент, в который будем выводить результат
const result = document.querySelector('.calculating__result span');

// обработчик клика на элементах выбора пола
gender.addEventListener('click', (event) => {
  // проверяем, что кликнули на нужном элементе
  if (event.target.id === 'female' || event.target.id === 'male') {
    // убираем класс у другого элемента выбора пола
    gender.querySelector('.calculating__choose-item_active').classList.remove('calculating__choose-item_active');
    // добавляем класс на кликнутый элемент выбора пола
    event.target.classList.add('calculating__choose-item_active');
    // пересчитываем калории
    calculateCalories();
  }
});

// обработчик ввода в поля роста, веса и возраста
[height, weight, age].forEach((input) => {
  input.addEventListener('input', () => {
    // пересчитываем калории
    calculateCalories();
  });
});

// обработчик клика на элементах выбора активности
activity.addEventListener('click', (event) => {
  // проверяем, что кликнули на нужном элементе
  if (event.target.getAttribute('data-ratio')) {
    // убираем класс у другого элемента выбора активности
    activity.querySelector('.calculating__choose-item_active').classList.remove('calculating__choose-item_active');
    // добавляем класс на кликнутый элемент выбора активности
    event.target.classList.add('calculating__choose-item_active');
    // пересчитываем калории
    calculateCalories();
  }
});

// функция для пересчета калорий
function calculateCalories() {
  // получаем выбранный пол
  const selectedGender = gender.querySelector('.calculating__choose-item_active').id;
  // получаем введенные значения роста, веса и возраста
  const selectedHeight = +height.value;
  const selectedWeight = +weight.value;
  const selectedAge = +age.value;
  // получаем коэффициент активности
  const selectedActivity = +activity.querySelector('.calculating__choose-item_active').getAttribute('data-ratio');
  // вычисляем калории
  let calories;
  if (selectedGender === 'female') {
    calories = Math.round((447.6 + (9.2 * selectedWeight) + (3.1 * selectedHeight) - (4.3 * selectedAge)) * selectedActivity);
  } else {
    calories = Math.round((88.36 + (13.4 * selectedWeight) + (4.8 * selectedHeight) - (5.7 * selectedAge)) * selectedActivity);
  }
  // выводим результат на страницу
  result.textContent = calories;
}
