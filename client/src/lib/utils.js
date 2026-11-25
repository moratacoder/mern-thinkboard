 export function formatDate(date){
    if(!date) return "";
    return new Date(date).toLocaleDateString("en-us", {
        month:'short',
        day:"numeric",
        year:"numeric",
    });
 }