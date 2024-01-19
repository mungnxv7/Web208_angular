
export const userLocal = {
    getUserLoacal(){
        localStorage.getItem('USER')
    },
    setUserLocal(infoUser:any){
        localStorage.setItem('USER', JSON.stringify(infoUser))
    }
}