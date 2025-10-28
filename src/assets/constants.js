//  export const URL="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDgCMV8_BcJDgjqpfu0TeoKuM8Y1u9kq2Q"

const API_KEY = import.meta.env.VITE_API_KEY;

export const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
