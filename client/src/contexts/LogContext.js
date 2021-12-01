import React from 'react'
import {useAuth} from '../contexts/AuthContext.js'
export const signup = async (email, password, userName) => {
    if (email && password && userName) {
        return await JSON.parse("true")
    } else {
        return await JSON.parse("false")
    }
}
export const signIn = async (email, password) => {
    if (email && password) {
        return await JSON.parse("true")
    } else {
        return await JSON.parse("false")
    }
}
export const navbarTest = (text) => {
    let NavbarElements = []
    if (text !== "")
        NavbarElements = ["About", 'Broadcast', 'Announcements']
    return NavbarElements

}