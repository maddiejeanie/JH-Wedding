const form = document.getElementById('rsvpform')
const success = document.getElementById('success')


form.addEventListener('submit', submitForm)

function submitForm(event){
    event.preventDefault()
    form.style.display = 'none'
    success.style.display = 'block'

    const formData = {
        name: event.target.elements.name.value,
        }

    updateSheet(formData)
}
async function updateSheet(formData) {
    const database_id = 'jwrc4b21d5cw0'
    const sheet_name = 'RSVPs'
    const requestBody = {
        data: [formData],
      };


    fetch(`https://sheetdb.io/api/v1/${database_id}?sheet=${sheet_name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.log('Error:', error);
      });
  }