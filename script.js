const processMap = document.getElementById('proccess-map')
const dofaImg = document.getElementById('dofa-img')
const strategyImg = document.getElementById('strategy-img')

const arr = [processMap, dofaImg, strategyImg]

arr.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.contains('animation') 
    ? 
    element.classList.remove('animation')
    :
    element.classList.add('animation')
  })
})