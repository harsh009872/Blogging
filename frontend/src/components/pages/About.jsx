import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to The Daily Muse – a space where ideas come to life, stories
          unfold, and knowledge is shared. Our blog is a hub for curious minds,
          creative thinkers, and passionate learners. Whether you’re here for
          inspiration, insights, or just a moment of reflection, we’ve got
          something for everyone.
        </p>
        <p>
          At The Daily Muse, our mission is to inspire, inform, and ignite
          conversations that matter. We believe in the power of words to shape
          perspectives, challenge norms, and create a community of like-minded
          individuals who are eager to explore the world around them.
        </p>
        <p>
          From technology trends, personal growth, travel adventures, lifestyle
          tips, etc., our blog covers a wide range of topics that resonate with
          diverse audiences. We strive to provide content that is not only
          engaging but also thought-provoking and relevant to today’s world.
        </p>
        <p>
          We love hearing from our readers! Whether you want to share your
          thoughts, ask questions, or suggest topics for future posts, we’re all
          ears. Feel free to leave comments, connect with us on social media, or
          reach out through our contact page.
        </p>
      </div>
    </article>
  );
};

export default About;
