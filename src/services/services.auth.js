
const session = new Map();
export const makeSession = (id, user) => {
    session.set(id, user)
    return id;
}
export const readSession=(id)=>{
    return session.get(id);
}