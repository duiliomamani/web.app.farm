import ApiService from "../common/api.service";

const _endpoint = process.env.REACT_APP_API_AUTH ?? "";
const _api = "/api/v2/identity"

const Authenticate = async (payload: any) => {
    let result = await ApiService.Post(`${_endpoint}${_api}/authenticate`, payload);
    if (result) {
        return result;
    }
}

const Verification = async (payload: any) => {
    let result = await ApiService.Post(`${_endpoint}${_api}/verification`, payload);
    if (result)
        return result;
}

export const IdentityService = {
    Authenticate,
    Verification
}