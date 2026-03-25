export type MenuItem = {
    name: string;
    url: string;
    icon: string;
    children?: MenuItem[];
}