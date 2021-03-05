export default class SwapiService {

  #apiBase = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this.#apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Coudn't fetch ${url} status: ${res.status}`) 
    }
    return res.json()
  }

  async getAllPeople() {
    const res =  await this.getResource(`/people/`)
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}`)
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  async getAllStarships() {
    const res =  await this.getResource(`/starships/`)
    return res.results
  }

  getStarships(id) {
    return this.getResource(`/starships/${id}`)
  }
}
