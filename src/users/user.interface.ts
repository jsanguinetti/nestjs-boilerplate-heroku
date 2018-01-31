export interface AuthToken {
    accessToken: string;
}

export interface IUser {
    readonly email: string;
    readonly tokens: AuthToken[];

    readonly firstName: string;
    readonly lastName: string;
}

export interface ICreateUser {
    email: string;
    firstName: string;
    lastName?: string;
    age?: number;
}
