import Axios from 'axios';
export function request(url,method='get',data={},config={}) {
    return axiosRequest(url,method,data,config);
}
//eslint-disable-next-line
function axiosRequest(url,method,data,config) {
    if(method.toLocaleLowerCase() === 'post') {
        let params = new URLSearchParams();
        if(data instanceof Object) {
            for(let key in data) {
                params.append(key,data[key]);
            }
        }
        data = params;
    }else if(method.toLocaleLowerCase() === 'file') {
        let formData = new FormData();
        if(data instanceof Object) {
            for(let key in data) {
                formData.append(key,data[key]);
            }
        }
        data = formData;
        method = 'post';
    }
    let configs = {
        url:url,
        method:method.toLocaleLowerCase(),
        data:data
    };
    if(config instanceof Object) {
        for (let key in config) {
            configs[key] = config[key];
        }
    }
    return Axios(configs).then(res=>{
        return res;
    });
}