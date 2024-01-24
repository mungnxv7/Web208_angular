export interface Login {
    email: string;
    password: string;
}
export interface Register {
    name:string
    email: string;
    password: string;
    role:string
}
export interface User {
    _id:string
    name:string
    email: string;
    role:string
}
