/* Menu and Sliders */

const slides = document.querySelectorAll('.slide');
const menuItems = document.querySelectorAll('.menu-item');

let currentSlide = 0;

// Функция для показа слайда
function showSlide(index) {
  // Убираем класс active со всех слайдов
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Добавляем класс active только для нужного слайда
  slides[index].classList.add('active');
}

// Функция для обработки клика по пункту меню
function handleMenuClick(event) {
  // Получаем индекс слайда, который нужно показать
  const slideIndex = Number(event.target.dataset.slide) - 1;

  // Показываем нужный слайд
  showSlide(slideIndex);

  // Устанавливаем класс active для нужного пункта меню
  menuItems.forEach(item => {
    item.classList.remove('active');
  });
  event.target.classList.add('active');
}

// Обработка клика по пункту меню
menuItems.forEach(item => {
  item.addEventListener('click', handleMenuClick);
});

// Автоматическое переключение слайдов
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 60000); // Изменяем слайд каждые 3 секунды



/* Calculator for KG */

// Получаем элементы формы и кнопки
const form = document.querySelector('.calorie-calculator form');
const ageInput = document.querySelector('#age');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const genderSelect = document.querySelector('#gender');
const activityLevelSelect = document.querySelector('#activity-level');
const caloriesOutput = document.querySelector('#calories');

// Назначаем обработчик события submit на форму
form.addEventListener('submit', function(event) {
  // Предотвращаем стандартное поведение формы
  event.preventDefault();

  // Получаем значения из всех полей формы
  const age = ageInput.value;
  const height = heightInput.value;
  const weight = weightInput.value;
  const gender = genderSelect.value;
  const activityLevel = activityLevelSelect.value;

  // Вычисляем суточную норму калорий
  let bmr;
  if (gender === 'male') {
    bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
  } else {
    bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
  }
  const calories = Math.round(bmr * activityLevel);

  // Отображаем результат на странице
  caloriesOutput.textContent = calories;
});


/* Menu */

const showMoreBtn = document.getElementById('show-more');
const moreDishes = document.getElementById('more-dishes');

showMoreBtn.addEventListener('click', function() {
  if (moreDishes.style.display === 'none') {
    moreDishes.style.display = 'block';
    showMoreBtn.innerHTML = 'Скрыть блюда';
  } else {
    moreDishes.style.display = 'none';
    showMoreBtn.innerHTML = 'Другие блюда';
  }
});


/* Modal Page about Delivery */

const deliveryButton = document.querySelector('.delivery');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalButton = document.querySelector('.close-modal');

deliveryButton.addEventListener('click', () => {
  modalOverlay.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener("click", (event) => {
  if (event.target == modalOverlay) {
    modalOverlay.style.display = "none";
  }
  
});


/* Auth and Registration */

// Получаем модальное окно

// получаем элементы кнопок Вход и Регистрация
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");

// получаем элементы модальных окон Вход и Регистрация
const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

// получаем элементы закрытия модальных окон
const loginCloseBtn = document.getElementsByClassName("close")[0];
const registerCloseBtn = document.getElementsByClassName("close-reg")[0];

// добавляем обработчики событий на клик по кнопкам Вход и Регистрация
loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});

registerBtn.addEventListener("click", () => {
  registerModal.style.display = "block";
});

// добавляем обработчики событий на клик по кнопкам закрытия модальных окон
loginCloseBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

registerCloseBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});

// добавляем обработчик события на клик вне модального окна, чтобы закрыть его
window.addEventListener("click", (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
});


/* Block for chatbot */

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  question.addEventListener('click', () => {
    question.parentNode.classList.toggle('active');
  });
});


/* Часть 2 - Функционал сайта */

/* Авторизация  
    1: Регистрация
*/

// Получаем ссылку на форму
const registerForm = document.querySelector('#register-modal form');

// Добавляем обработчик события отправки формы
registerForm.addEventListener('submit', function(event) {
  // Отменяем стандартное поведение отправки формы браузером
  event.preventDefault();

  // Получаем значения полей формы
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const email = document.querySelector('#emailReg').value;
  const phone = document.querySelector('#phone2').value;
  const password = document.querySelector('#passwordReg').value;
  const confirmPassword = document.querySelector('#passwordReg2').value;

  // Отправляем данные на сервер с помощью AJAX-запроса
  const xhr = new XMLHttpRequest();
  const url = 'ссылка на сервер, который будет обрабатывать запрос регистрации';
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // В случае успешной регистрации перенаправляем пользователя на страницу с заказами
      window.location.href = 'ссылка на страницу с заказами';
    }
  };
  const data = JSON.stringify({firstName, lastName, email, phone, password, confirmPassword});
  xhr.send(data);
});


