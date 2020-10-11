console.log("JavaScript is loading properly")


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        target.classList.add('active');
    })
})


// //Dom Elements
const darkButton = document.getElementById('Dark Mode');

darkButton.onclick = () => {

};