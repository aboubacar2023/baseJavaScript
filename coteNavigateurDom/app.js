function createArticle(post) {
    const article = document.createElement('article')
    const h2 = document.createElement('h2')
    h2.innerText = post.title
    article.append(h2)

    const p = document.createElement('p')
    p.innerText = post.body
    article.append(p)

    return article

}

async function main () {
    const element = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = 'chargement...'
    element.append(loader)
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5', {
            method: 'GET',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        if(r.ok){
            const posts = await r.json()
            loader.remove()
            for(let post of posts) {
                element.append(createArticle(post))
            }
        }else {
            throw new Error('Impossible de récupérer les utilisateurs')
        }
    } catch (error) {
        loader.innerText = 'Impossible de charger le serveur'
        loader.style.color = 'red'
    }
}

main()




