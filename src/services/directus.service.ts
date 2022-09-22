
import {Directus} from '@directus/sdk'

export const directus = new Directus("https://izrz9mc2.directus.app/", {
    auth: {
        mode: 'json'
    }
})


export const authService =  {
        async login(email: string, password: string){
            return await directus.auth.login({email, password})
        },
        async logout(){
            return await directus.auth.logout()
        },
        async getCurrentUser(){
            return await directus.users.me.read({
                fields: ["email", "first_name" ]
            })
        }
}



