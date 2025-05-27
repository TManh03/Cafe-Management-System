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
    { state: 'dashboard', name: 'Bảng Điều Khiển', type: 'link', icon: 'view_quilt', role: '' },
    { state: 'category', name: 'Quản Lý Danh Mục', type: 'link', icon: 'view_list', role: 'admin' },
    { state: 'product', name: 'Quản Lý Sản Phẩm', type: 'link', icon: 'local_offer', role: 'admin' },
    { state: 'order', name: 'Quản Lý Đơn Hàng', type: 'link', icon: 'receipt_long', role: '' },
    { state: 'bill', name: 'Xem Hóa Đơn', type: 'link', icon: 'receipt', role: '' },
    { state: 'user', name: 'Quản Lý Người Dùng', type: 'link', icon: 'manage_accounts', role: 'admin' }
]

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}