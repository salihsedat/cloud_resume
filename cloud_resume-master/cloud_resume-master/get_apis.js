
const countUrl = 'https://emil3mqc5f.execute-api.eu-central-1.amazonaws.com/prod/counter'
const countElement = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch(countUrl)
        .then(res => res.json())
        .then(res => {
        countElement.innerHTML = res.visits;
    });
}
