/**
 * @jest-environment node
 */
import React from 'react'
import {useAuth} from '../contexts/AuthContext.js'
import {render, screen} from "@testing-library/react";
import Signup from "../components/Signup";
import '@testing-library/jest-dom/extend-expect'
import App from "../App.js";
import {signup, signIn, navbarTest} from '../contexts/LogContext.js'
test("Sign Up User", async () => {
    try {
        let status = await signup("johnDoe@gmail.com", "123johnDoe", "Johnny")
        expect(status).toBe(JSON.parse("true"))
    } catch (error) {
        console.error(error)
    }
});
test("Sign In User", async () => {
    try {
        let status = await signIn("johnDoe@gmail.com", "123johnDoe")
        expect(status).toBe(JSON.parse("true"))
    } catch (error) {
        console.error(error)
    }
});
test("Navbar test", async () => {
    const navbarElements = navbarTest("<render (navbar)");
    expect(navbarElements).toStrictEqual(['About', 'Broadcast', 'Announcements']);
})