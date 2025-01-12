// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const redExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (redExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}


// TAP SLIDER 

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentItems = document.querySelectorAll('.tab_content_item');
const tabParents = document.querySelector('.tab_content_items');
let indexCurrent = 0;
let switchAutoInterval;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    });
    tabContentItems.forEach(item => {
        item.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (i = 0) => {
    tabContentBlocks[i].style.display = 'block';
    tabContentItems[i].classList.add('tab_content_item_active');
    indexCurrent = i;
};

const startAutoSwitch = () => {
    switchAutoInterval = setInterval(() => {
        hideTabContent();
        indexCurrent = (indexCurrent + 1) % tabContentBlocks.length; 
        showTabContent(indexCurrent);
    }, 1000); 
};

const stopAutoSwitch = () => {
    clearInterval(switchAutoInterval);
    startAutoSwitch(); 
};

hideTabContent();
showTabContent(0); 
startAutoSwitch(); 

tabParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, i) => {
            if (event.target === item) {
                stopAutoSwitch(); 
                hideTabContent();
                showTabContent(i);
            }
        });
    }
};

