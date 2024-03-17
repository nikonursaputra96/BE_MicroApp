import IUser from "./UserInterface";
export default interface IBlog {
    idBlog: number;
    title: string;
    author?: string;
    image: string;
    date: string;
    content: string[];
    user: any;
}