
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