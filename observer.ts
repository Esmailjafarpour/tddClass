class news {

    public users: string[]

    public constructor() {
        this.users = []
    }

    public createUser(user: string) {
        let result = this.users.indexOf(user)
        if (result == -1) {
            this.users.push(user)
        } else {
            console.log('The user exists')
        }

    }

    public deleteUser(user: string) {
        let result = this.users.indexOf(user)
        if (result >= 1) {
            this.users = this.users.filter(i => {
                    return i !== user
                }
            )
        }else {
            console.log('There is no user with this profile')
        }
    }

    publishNews(news: any) {
        console.log(`new news ${news}`)
    }

    public getUsers() {
        console.log('getUsers', this.users)
    }
}

const usersManagement = new news()

usersManagement.createUser("nader")
usersManagement.createUser("abbas")
usersManagement.createUser("ali")
usersManagement.createUser("morteza")
usersManagement.createUser("farzad")
usersManagement.getUsers()

usersManagement.createUser("farzad")
usersManagement.getUsers()

usersManagement.publishNews("salam nader")

usersManagement.deleteUser("farzad")

usersManagement.getUsers()

usersManagement.deleteUser("farzad")

usersManagement.getUsers()


