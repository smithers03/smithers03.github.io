import React from 'react';
import './main.css';

function App() {
    return (
        <div className="App">
            <header>
                <h1>Ellie Smith</h1>
                <p>Content Creator | Mental Health Advocate</p>
            </header>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <main>
                <section id="about">
                    <h2>About Me</h2>
                    <p>In my role as a content creator for Finch, I focus on producing original content that emphasizes the importance of mental health and self-care. My videos are designed to not only educate and inform but also to resonate with viewers, encouraging them to prioritize their mental well-being.</p>
                </section>
                <section id="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Content Creation</li>
                        <li>Video Production</li>
                        <li>Mental Health Advocacy</li>
                        <li>Social Media Marketing</li>
                        <li>Analytics and Trends Analysis</li>
                    </ul>
                </section>
                <section id="projects">
                    <h2>Projects</h2>
                    <div className="project">
                        <h3>Finch Care Video Series</h3>
                        <p>Developed a series of videos for Finch Care, focusing on mental health and self-care. Increased app downloads through engaging and informative content.</p>
                    </div>
                    {/* Add more projects as needed */}
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Ellie Smith</p>
            </footer>
        </div>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Message sent!');
}

export default App;
