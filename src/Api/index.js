import axios from 'axios'

const url = 'https://crudcrud.com/api/7476470045ca4fa491bc09f5968614ba/cakes'

export const fetchCakes = () => axios.get(url)
export const createCake = (newCake) => axios.post(url,newCake)
export const deleteCake = (id) => axios.delete(`${url}/${id}`)
export const updateCake = (id,updateCake) => axios.put(`${url}/${id}`,{ name: updateCake.name, price: updateCake.price, flavor: updateCake.flavor})