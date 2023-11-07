import queryString from "query-string";
import axios, { AxiosError } from "axios";
import { ToasterNotification } from "../../pages/components/common/toaster.component";

interface ErrorApi {
    errors: string[],
    isSuccessfull: boolean,
    message: string
}

const http = axios.create();

const GetAll = (route: string, data: any) => {
    return http.get(`${route}?${queryString.stringify(data)}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error: any) => {
            handleError(error);
        });
};

const Get = (route: string, id: any) => {
    return http.get(`{${route}/${id}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error: any) => {
            handleError(error);
        });
};

const Post = (route: string, data: any) => {
    return http.post(route, data)
        .then((res: any) => {
            return res.data;
        })
        .catch((error: any) => {
            handleError(error);
        });
};

const Put = (route: string, id: any, data: any) => {
    return http.put<any>(`${route}/${id}`, data)
        .then((res: any) => {
            return res.data;
        })
        .catch((error: any) => {
            handleError(error);
        });
};

const Delete = (route: string, id: any) => {
    return http.delete<any>(`${route}/${id}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error: any) => {
            handleError(error);
        });
};

// Handle API errors
const handleError = (error: any) => {
    if (axios.isAxiosError(error) && error) {
        console.log('Error message: ', error);
        var payload = error as AxiosError<ErrorApi, any>;
        if (payload.code === 'ERR_NETWORK') {
            ToasterNotification.ShowERRORMessage('No se pudo conectar con el servidor remoto.', 'Ocurrio un error.');
        } else {
            throw new Error(payload.response?.data.errors[0]);
        }
    } else {
        console.log('Unexpected error: ', error);
        throw new Error(error);
    }
};

const ApiService = {
    http,
    GetAll,
    Get,
    Post,
    Put,
    Delete
};

export default ApiService;