import {AccessToken} from "../models/AccessToken";
import {AuthenticationError} from "../models/errors/AuthenticationError";

export interface FacebookAuthentication {
    execute(params: FacebookAuthentication.Params): Promise<FacebookAuthentication.Result>
}

export namespace FacebookAuthentication {
    export type Params = {
        token: string
    }

    export type Result = {
        accessToken: AccessToken;
    }
}



