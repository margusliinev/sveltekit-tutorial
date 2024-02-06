import bcrypt from 'bcryptjs'

export function hash(secret: string) {
    try {
        const hash = bcrypt.hash(secret, 10)
        return hash
    } catch (error) {
        console.error(error)
        return null
    }
}

export function verify(secret: string, hashedSecret: string) {
    try {
        const isMatch = bcrypt.compare(secret, hashedSecret)
        return isMatch
    } catch (error) {
        console.error(error)
        return false
    }
}
