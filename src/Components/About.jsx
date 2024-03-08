/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "🚀 Space boy, coding joy, moments to deploy. 💻 Seize the day, with code at play. 😁 Smiles alight, in every byte. 💾";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Proficient in Java, Python, C, C++, C#, JavaScript, SQL, and HTML5",
  "Experience in MySQL, IoT technologies, machine learning, deep learning",
  "Unity game development expertise",
  "Strong problem-solving skills demonstrated through competitive background in hackathons and participation in CodeChef",
  "Adaptability to different programming environments and technologies",
  "Collaborative approach to projects, emphasizing teamwork and communication"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "A curious mind fascinated by science, technology, and the melodies of life! I have a deep passion for understanding the world around me and an unquenchable thirst for knowledge. From the latest advancements in science and tech to stargazing under the night sky, I'm driven by discovery. My hobbies reflect this: I've built Deep Learning Programs, demonstrating my coding skills, and I stay current on tech news. Whether exploring the cosmos or diving into competitive coding on CodeChef, I'm always learning and growing.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
