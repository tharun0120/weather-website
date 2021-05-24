const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

// messageOne.textContent = 'From JS'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''

    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if(data.error)
                messageOne.textContent = data.error
            else{
                messageOne.textContent = data.main[0].location
                messageTwo.textContent = data.main[1].forecast
                messageThree.textContent = 'Maximum Temperature: ' + data.main[0].maxtemp
                messageFour.textContent = 'Minimum Temperature: ' + data.main[0].mintemp
            }

        })
    })


})