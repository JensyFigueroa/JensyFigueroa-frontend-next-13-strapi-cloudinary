import qs from 'qs'
import { getStrapiURL } from './api-helper'
export const fetchApi = async (
    path: string,
    urlParamsObject = {},
    options = {}
) => {
    try {
        const mergeOptions = {
            next: { revalidate: 0 },
            ...options,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const queryString = qs.stringify(urlParamsObject, { encodeValuesOnly: true })
        // console.log(queryString)

        const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`
        const res = await fetch(requestUrl, mergeOptions)
        const data = await res.json()

        return data

    } catch (error) {
        console.log(error)
        throw new Error('Error fetching API')
    }
}