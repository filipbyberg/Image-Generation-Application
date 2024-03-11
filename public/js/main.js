function onSubmit(e) {
    e.preventDefault();
    document.querySelector('.msg').textContent = ''

    const prompt = document.querySelector('#prompt').value;

    if (prompt == '') {
        alert('You forgot to add text');
        return;
    }

    generateImageRequest(prompt);
}

async function generateImageRequest(prompt) {
    try {
        ShowSpinner();

        const response= await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt
            })
        });
        if (!response.ok) {
            RemoveSpinner();
            throw new Error('I cant generate that image you dirty pig');
        }

        const data = await response.json();
        //console.log(data);

        const imageUrl = data.data;

        document.querySelector('#image').src = imageUrl;
        
        RemoveSpinner();

    } catch (error) {
        document.querySelector('.msg').textContent = error;
    }
}

function ShowSpinner() {
    document.querySelector('.spinner').classList.add('show');
}

function RemoveSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);