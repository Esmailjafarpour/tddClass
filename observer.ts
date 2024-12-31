class news {

    public users : string[]

    public constructor() {
        this.users = []
    }

    public createUser(user:any){
        this.users.push(user)
    }

    public deleteUser(user:any){
        this.users = this.users.filter(i => {
            if(i === user.id){
                return i !== user
            }else{
                console.log("کاربر یافت نشد")
            }
        })
    }

    publishNews(news:any){
        console.log(`new news ${news}`)
    }

    public getUsers(){
        console.log(this.users)
    }

}

const usersManagement = new news()

usersManagement.createUser("nader")
usersManagement.createUser("abbas")
usersManagement.createUser("ali")
usersManagement.createUser("morteza")
usersManagement.createUser("farzad")

usersManagement.getUsers()

usersManagement.publishNews("salam nader")

usersManagement.deleteUser("farzad")

usersManagement.getUsers()

usersManagement.deleteUser("farzad")

usersManagement.getUsers()






































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





