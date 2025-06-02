function toggleCollapse(textElement) {
  if (textElement.classList.contains('active')) {
    textElement.style.maxHeight = '0';
    textElement.style.opacity = '0';
    textElement.classList.remove('active');
  } else {
    const fullHeight = textElement.scrollHeight + 'px'; // Получаем полную высоту
    textElement.style.maxHeight = fullHeight;
    textElement.classList.add('active');

    setTimeout(() => {
      textElement.style.opacity = '1';
    }, 100); // Небольшая задержка для активации анимации
  }
}

function updateMaxHeight(textElement) {
  if (textElement.classList.contains('active')) {
    const fullHeight = textElement.scrollHeight + 'px'; // Получаем полную высоту
    textElement.style.maxHeight = fullHeight; // Обновляем maxHeight
  }
}

document.querySelectorAll('.funds__item').forEach((item, index) => {
  const textElement = item.querySelector('.collapse__text');
  item.addEventListener('click', () => toggleCollapse(textElement));
});

// Обработчик события resize
window.addEventListener('resize', () => {
  document.querySelectorAll('.collapse__text.active').forEach((textElement) => {
    updateMaxHeight(textElement); // Обновляем maxHeight для активных элементов
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const mainContents = document.querySelectorAll('.main-content'); // Получаем все элементы с классом main-content
  mainContents.forEach(function (mainContent) {
    mainContent.style.opacity = '1'; // Меняем opacity на 1 для каждого элемента
  });
});

const documentItem = document.querySelector('li.document.document-413');

// Проверить, существует ли элемент
if (documentItem) {
  // Найти ссылку внутри элемента
  const link = documentItem.querySelector('a');

  // Проверить, существует ли ссылка
  if (link) {
    // Заменить href атрибут на новый URL
    link.href = 'https://naufor.ru/tree.asp?n=22348';
  }
}

// // Смена темы

// const htmlElement = document.documentElement;
// const blueThemeIcon = document.querySelector('.theme-switcher__icon-wrapper--blue-theme');
// const greenThemeIcon = document.querySelector('.theme-switcher__icon-wrapper--green-theme');

// const savedTheme = localStorage.getItem('theme') || 'green';

// // Устанавливаем активные иконки
// updateThemeIcons(savedTheme);
// // Функция для переключения темы
// window.toggleTheme = function() {
//     const newTheme = htmlElement.getAttribute('data-color-scheme') === 'blue' ? 'green' : 'blue';
//     htmlElement.setAttribute('data-color-scheme', newTheme);
//     localStorage.setItem('theme', newTheme);

//     blueThemeIcon.classList.toggle('active');
//     greenThemeIcon.classList.toggle('active');

// }

// // Функция для обновления иконок в зависимости от текущей темы
// function updateThemeIcons(currentTheme) {
//     if (currentTheme === 'green') {
//         blueThemeIcon.classList.remove('active');
//         greenThemeIcon.classList.add('active');
//     } else {
//         blueThemeIcon.classList.add('active');
//         greenThemeIcon.classList.remove('active');
//     }
// }
