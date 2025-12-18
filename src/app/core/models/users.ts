import { v4 as uuid } from 'uuid';

export interface User {
    id: string;
    username: string;
    password: string;
    name: string;
}