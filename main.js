let activity = document.querySelector('#result');

document.querySelector('span').addEventListener('click', getter);

function getter() {

    fetch('https://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            activity.innerText = data.activity;
        })
}