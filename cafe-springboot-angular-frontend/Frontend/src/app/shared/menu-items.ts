import { state } from "@angular/animations";
import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Bảng Điều Khiển', type: 'link', icon: 'dashboard', role: '' },
    { state: 'category', name: 'Quản Lý Danh Mục', type: 'link', icon: 'category', role: 'admin' },
    { state: 'product', name: 'Quản Lý Sản Phẩm', type: 'link', icon: 'inventory_2', role: 'admin' }
]

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}