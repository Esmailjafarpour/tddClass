class observer {

    constructor() {
        this.news = 'news';
        this.users=[]

    }

    sendNews(news = null) {
        if (news !== null) {
            console.log(news)
        } else {
            console.log(this.news)
        }

    }

    getUser(){
        console.log(this.users)
    }

    addUser(user) {
        this.users.push(user)
    }

    deleteUser(name) {
        this.users = this.users.filter(user => user !== name)
    }
}

let newsObserver = new observer()

newsObserver.sendNews()
newsObserver.sendNews("آقووی همساده")

newsObserver.addUser("Siavash")
newsObserver.getUser()

newsObserver.addUser("kianoosh")
newsObserver.getUser()

newsObserver.deleteUser("kianoosh")
newsObserver.getUser()





