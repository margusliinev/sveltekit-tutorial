import bcrypt from 'bcryptjs'

export function hashPassword(password: string) {
    try {
        const hash = bcrypt.hash(password, 10)
        return hash
    } catch (error) {
        console.error(error)
        return null
    }
}

export function verifyPassword(password: string, hashedPassword: string) {
    try {
        const isMatch = bcrypt.compare(password, hashedPassword)
        return isMatch
    } catch (error) {
        console.error(error)
        return false
    }
}
