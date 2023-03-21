import axios from 'axios'
import apiKey from '../../modules/config'


const user = localStorage.getItem('token')
// eslint-disable-next-line no-undef

const res = 'uji_proposal'
export function getTransactions ()
{
    //return axios.get(res, { headers: { Authorization: `Bearer ${user}` } })
    return axios.get(res, { headers: { 
        'x-api-key': apiKey,
        'x-token': localStorage.getItem('truckingToken')
    } })
}

export function createTransaction (data)
{
    return axios.post(res, { data: data }, { headers: { Authorization: `Bearer ${user}` } })
    //return axios.post(res, { data: data }, { 'x-api-key': 'A7980EB02ADE9DD9FD90DDAB0AEF1676' } })
}