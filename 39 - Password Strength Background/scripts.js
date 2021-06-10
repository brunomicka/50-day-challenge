const background = document.getElementById('background')
const password = document.getElementById('password')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length

    background.style.filter = `blur(${20 - length * 2}px)`

})