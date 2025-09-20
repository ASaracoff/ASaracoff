// task 1
const task1 = document.getElementById('task1');
task1.innerText = "change it!"

// task 2
const task2 = document.getElementById('task2');
task2.innerHTML = "<button value='submit'>Submit</button>"

// task 3
const task3 = document.querySelector('body');
// horrible color choice! need to change text to see my next task
task3.style.backgroundColor = '#232323';
task3.style.color = '#fff';
document.querySelector('a').style.color = '#f2f';


// task 4
const task4 = document.querySelectorAll('.item');
const imgs = document.querySelectorAll('img');

for (let task of task4) {
  task.style.border = '2px solid teal'
}

// task 5
const task5 = document.querySelector('#task5');
task5.setAttribute('href', 'https://www.springboard.com/');

// task 6
// only knew to type DOM MAster after inspecting HTML - the button is too narrow
const task6 = document.querySelector('#task6');
task6.value = "DOM Master";

// task 7
const task7 = document.querySelector('#task7');
task7.classList.add('new-class');

// task 8
const task8 = document.querySelector('#task8');
const button = document.createElement('button');
task8.append(button)


// task 9
const task9 = document.querySelector('#task9');
task9.remove()
