namespace CUAuth {
    export type CUCredentials = {
        username: string;
        password: string;
    }
    
    export type CUAuthResponse = {
        success: boolean;
        message: string;
        id: string;
        session: {
            _token: string;
        }
    }
}