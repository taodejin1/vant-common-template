import fetch from './fetch'

if (process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test') {
    basePathApi = 'http://test.aaa.com';    
}

if (process.env.NODE_ENV == 'production') {
    basePathApi = 'http://prod.aaa.com';
}

let APIS = {
    aaa:`${basePathApi}/aaa`,
}

/**
 * 
 * @param {*} requestType  请求type类型
 * @param {*} urlLinkName  请求的接口地址url
 * @param {*} obj          请求体所需要的参数，可能为空 
 */
export function createRequest(requestType,urlLinkName,obj){
    if( requestType === 'get'){
        return fetch.axiosGet(APIS[urlLinkName],obj);
    }
    if( requestType === 'post'){
        return fetch.axiosPost(APIS[urlLinkName],obj);
    }
    if( requestType === 'form'){
        return fetch.axiosForm(APIS[urlLinkName],obj);
    }
    if( requestType === 'formData'){
        return fetch.axiosFormData(APIS[urlLinkName],obj);
    }    
}
