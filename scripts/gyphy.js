const API_KEY = 'l09bSCBP0Se4iS9cFsiGy8Fml8szc6mM'

const $searchBtn = document.getElementById('button')
const $searchinput = document.getElementById('search')
const $content = document.getElementById('content')
const $BTN = document.getElementById('btn')
const $limit = document.getElementById('limits');
const $selectlang = document.getElementById('selectlang')

const apiUrl = 'https://api.giphy.com/v1/gifs/search'

function showGif(gifs) {
console.log(gifs) 
    gifs.data.forEach(function (gif) {
        const $iframe = document.createElement('iframe')

        $iframe.src = gif.embed_url
        $iframe.width = 150
        $iframe.height = 150

        $content.append($iframe)
    });
};

async function searchGifs(options = {
    keyword: 'tom',
    limit: 10,
    lang: 'en'
}) {
    try {
        let params = `?api_key=${API_KEY}`
        for (let key in options) {
            params += `&${key}=${options[key]}`
        }
        const response = await fetch(apiUrl +
            `?api_key=${API_KEY}&q=${options.keyword}&limit=${options.limit}&lang = ${options.lang}`)
        if (!response.ok) {
            alert('errorror')

            // const data = await response.json()
            // console.log('waiting for answer', response)
            return
        }
        const data = await response.json()
        return data
        // console.log('answer', response)
        // console.log('данные', data.data)

        showGif(data.data)

    } catch (e) {
        alert('ошибка в коде', e.message)
    }
}


$searchBtn.addEventListener('click', async function () {
    // $content.innerHTML = ''
    if (!$searchinput.value || !$limit.value || !$selectlang.value) {
        alert('заполните')
        return
    }
    const gifs = await searchGifs({
        keyword: $searchinput.value,
        limit: $limit.value,
        lang: $selectlang.value
    })
    showGif(gifs)
})
// console.log(limit.value)
