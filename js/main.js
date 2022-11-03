import { checkAndGenerate, createElement} from './utils.js';

const initApp = () => {
    const newUserButton = document.querySelector('#btnAddUser');
    newUserButton.addEventListener('click', addUser);
}

const addUser = () => {
    const newUserNameInput = document.querySelector('input#name');
    const newUserAgeInput = document.querySelector('input#age');
  
    const userList = document.querySelector('.user-list');
    const outputText = checkAndGenerate(
      newUserNameInput.value,
      newUserAgeInput.value
    );

    if (!outputText) {
      return;
    }

    const element = createElement('li', outputText, 'user-item');
    userList.appendChild(element);
  };

initApp();