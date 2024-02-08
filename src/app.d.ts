// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user: {
                id: string
                username: string
                email: string
                created_at: Date
                updated_at: Date
            }
        }
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {}
