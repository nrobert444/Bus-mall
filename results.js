// const results = JSON.parse(localStorage.getItem('votes'));

// const resetButton = document.getElementById('button');

// const votes = [];
// const labels = [];

// results.forEach(item => {
//     votes.push(item.votes);
//     labels.push(item.id);
//     console.log(item.id);
// });

// const ctx = document.getElementById('results').getContext('2d');


// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: labels,
//         datasets: [{
//             label: '# of Votes',
//             data: votes,
//             backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });


// // resetButton.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     reset();
// // });
