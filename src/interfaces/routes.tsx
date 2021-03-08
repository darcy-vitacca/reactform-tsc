import IPage from "../interfaces/page";
export default interface IRoute {
    path: string;
    name: string;
    component: any;//needs to be any because anythign can be passed in as a component
    exact: boolean;
    props? : any
}