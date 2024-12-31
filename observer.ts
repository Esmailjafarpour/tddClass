class news {

    public users : string[]

    public constructor() {
        this.users = []
    }

    public createUser(user:any){
        this.users.push(user)
    }

    public deleteUser(user:any){
        this.users = this.users.filter(i => i !== user)
    }

    publishNews(news:any){
        console.log(`new news ${news}`)
    }

    public getUsers(){
        console.log(this.users)
    }

}

const userManagement = new news()

userManagement.createUser("nader")
userManagement.createUser("abbas")
userManagement.createUser("ali")
userManagement.createUser("morteza")
userManagement.createUser("farzad")

userManagement.getUsers()

userManagement.publishNews("salam nader")

userManagement.deleteUser("farzad")

userManagement.getUsers()






































// class observer {
//
//     constructor() {
//         this.news = 'news';
//         this.users=[]
//
//     }
//
//     sendNews(news = null) {
//         if (news !== null) {
//             console.log(news)
//         } else {
//             console.log(this.news)
//         }
//
//     }
//
//     getUser(){
//         console.log(this.users)
//     }
//
//     addUser(user) {
//         this.users.push(user)
//     }
//
//     deleteUser(name) {
//         this.users = this.users.filter(user => user !== name)
//     }
// }
//
// let newsObserver = new observer()
//
// newsObserver.sendNews()
// newsObserver.sendNews("آقووی همساده")
//
// newsObserver.addUser("Siavash")
// newsObserver.getUser()
//
// newsObserver.addUser("kianoosh")
// newsObserver.getUser()
//
// newsObserver.deleteUser("kianoosh")
// newsObserver.getUser()





