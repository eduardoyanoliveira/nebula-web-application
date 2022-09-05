export interface IUser {
    id: string,
    username: string,
    email: string,
    role: string,
    photo?: string,
    is_active: boolean,
    created_at?: Date,
    updated_at?: Date
};