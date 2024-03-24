import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import '../Home.css'
function Home() {

    const [userPromot, setUserPromot] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GOOGLE_API_KEY);

    const chatBox = document.querySelector('.chat-box');

    const gotoBottom = () => {
        chatBox.scrollTop = chatBox.scrollHeight;
        chatBox.scrollIntoView({ behavior: "smooth" });
    }


    async function run() {
        gotoBottom();
        setLoading(true);
        chatBox.innerHTML += `<div class="user-text">${userPromot}</div>`;
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = userPromot;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        // const textWithLineBreaks = text.replace(/\*/g, "<br>");
        // if response contains ; ,{ , } then add br tag after that
        const textWithLineBreaks = text.replace(/;/g, ";<br>").replace(/{/g, "{<br>").replace(/}/g, "}<br>").replace(/\*/g, "<br>");
        setUserPromot('');
        chatBox.innerHTML += `<div class="ai-text">${textWithLineBreaks}</div>`;
        setLoading(false);
        gotoBottom();
    }

    useEffect(() => {
        document.title = "E.D.I.T.H."
    }
        , [])

    return (
        <div className="container">
            <div className="title mt-5 mb-3">
                <h4 className="card-title text-center">Welcome to E.D.I.T.H.</h4>
                <p className=" fs-6 card-text text-center mt-2">Even Dead I'm The Hero</p>
            </div>
            <div className="resonse-card card">
                <div className="chat-box">



                </div>
            </div>
            <br />
            <div className="card prompt-card">
                <div className="card-body">
                    <h5 className="card-title">Enter your prompt</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter your prompt" value={userPromot} onChange={(e) => setUserPromot(e.target.value)} style={{ padding: '10px', }} />
                        <button className="btn btn-primary execute_btn" type="button" onClick={run} disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            )}
                            {loading ? 'Loading...' : 'Execute'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home