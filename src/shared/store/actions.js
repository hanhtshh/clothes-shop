
export function timkiem(u){
    return{
        type:'timkiem',
        ten:u
    }
}
export function kiemtrauser(u){
    return{
        type:'user',
        name: u.name,
        email: u.email,
        address: u.address,
        telephone: u.telephone,
        admin:u.admin
    }
}
export function postitem(u){
    return {
        type:'postitem',
        _id:u._id,
        name:u.name,
        image:u.image,
        describes:u.describes,
        price:u.price,
        sale:u.sale,
        size:u.size,
        category:u.category
    }
}
export function themvaogiohang(u){
    return{
        type:'themvaogiohang',
        item:u.item,
        number:u.number,
        size:u.size
    }
}
export function xoagiohang(u){
    return{
        type:'xoagiohang',
        size:u.size,
        item_id:u._id
    }
}