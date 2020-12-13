import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const About = ({ content }) => {
  const renderers = {
    image: ({ src, alt }) => {
      return (
        <div className="about-image">
          <Image src={src} layout="fill" alt={alt} />
        </div>
      );
    },
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <h1 className="title is-3">{children}</h1>;
        case 2:
          return <h1 className="title is-4">{children}</h1>;
      }
    },
  };

  return (
    <div className="mb-4">
      <ReactMarkdown source={content.main_body} renderers={renderers} />

      <br />

      {content.alerts?.map((alert, alertIndex) => (
        <article
          className={`message is-${alert.type}`}
          key={`alert-${alertIndex}`}
        >
          <div className="message-header">
            <p>{alert.header}</p>
          </div>
          <div className="message-body">
            <ReactMarkdown source={alert.body} renderers={renderers} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default About;
