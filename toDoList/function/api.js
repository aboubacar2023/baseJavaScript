export async function fecthJSON(url, options = {}) {
    const headers =  {
        Accept: 'application/json',
        ...options.headers
    }
    const r = await fetch(url, {...options, headers})
    if (r.ok) {
        return r.json()
    }
    throw new Error('Erreur serveur')
}
