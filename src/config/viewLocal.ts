
export const userLocal = {
    getUserLoacal(){
       const user =  localStorage.getItem('USER')
       if(user){
        return JSON.parse(user)
       }
       return null
    },
    setUserLocal(infoUser:any){
        localStorage.setItem('USER', JSON.stringify(infoUser))
    },
    remove(){
        localStorage.removeItem('USER')
    }
}