import { checkRandom, findById } from './utils/utils.js';


let totalVotes;
let productVoteDetails;

const initializeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
};

initializeState();


const newProductArray = checkRandom();

const productBox = document.getElementById('product-container')
const imageOne = document.getElementById('image-one');
const imageTwo = document.getElementById('image-two');
const imageThree = document.getElementById('image-three');
const radioOne = document.getElementById('radio-one');
const radioTwo = document.getElementById('radio-two');
const radioThree = document.getElementById('radio-three');
const radioOneSpan = document.getElementById('product-one-span');
const radioTwoSpan = document.getElementById('product-two-span');
const radioThreeSpan = document.getElementById('product-three-span');


imageOne.src = newProductArray[0].image;
imageTwo.src = newProductArray[1].image;
imageThree.src = newProductArray[2].image;

radioOne.value = newProductArray[0].id;
radioTwo.value = newProductArray[1].id;
radioThree.value = newProductArray[2].id;

radioOneSpan.textContent = newProductArray[0].name;
radioTwoSpan.textContent = newProductArray[1].name;
radioThreeSpan.textContent = newProductArray[2].name;


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
 
    const selectedProductId = formData.get('product');
    totalVotes++;
    const productInVotesArray = findById(productVoteDetails, selectedProductId);

    if(productInVotesArray){
        productInVotesArray.votes++;
    } else {
        productVoteDetails.push({
            id: selectedProductId,
            votes: 1,
        });
    }

    localStorage.setItem('votes', JSON.stringify(productVoteDetails));

    if(totalVotes >= 25) {
        productBox.style.display = 'none';
        const results = JSON.parse(localStorage.getItem('votes'));


        const votes = [];
        const labels = [];

        results.forEach(item => {
            votes.push(item.votes);
            labels.push(item.id);
            console.log(item.id);
        });

        const ctx = document.getElementById('results').getContext('2d');


        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: votes,
                    backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange','lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        reset();
    };

    const anotherNewProductArray = checkRandom();

    imageOne.src = anotherNewProductArray[0].image;
    imageTwo.src = anotherNewProductArray[1].image;
    imageThree.src = anotherNewProductArray[2].image;

    radioOne.value = anotherNewProductArray[0].id;
    radioTwo.value = anotherNewProductArray[1].id;
    radioThree.value = anotherNewProductArray[2].id;

    radioOneSpan.textContent = anotherNewProductArray[0].name;
    radioTwoSpan.textContent = anotherNewProductArray[1].name;
    radioThreeSpan.textContent = anotherNewProductArray[2].name;
});

export function reset() {
    initializeState();
};
