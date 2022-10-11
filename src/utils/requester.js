import {authToken} from "../stores.js";
import {get} from "svelte/store";


export function urlBuilder(relativeUrl){
    const baseUrl = 'http://localhost:7000'
    let finalUrl = baseUrl + relativeUrl
    return finalUrl
}

export function requestBuilder(method='GET', data=null, contentType='json'){
    console.log(get(authToken))
    let fetchDict = {
        method: method,
        headers:{
            'Content-Type' : contentType =='json' ?  'application/json' :'multipart/form-data'
        },
    }

    if (data && contentType==='json'){
        fetchDict.body = JSON.stringify(data)
    }
    else if (data && contentType === 'form'){
        fetchDict.body = data
    }

    if (get(authToken)){
        fetchDict.headers["Authorization"] = `Token ${get(authToken)}`
    }

    return fetchDict
}