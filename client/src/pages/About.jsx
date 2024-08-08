import React from "react";

const About = () => {
  return (
    <div className="max-w-xl md:max-w-7xl flex flex-col gap-4 mx-auto py-8">
      <h1 className="text-4xl font-bold text-fuchsia-800">
        Welcome to our MERN Auth application! We provide secure user
        authentication and authorization.
      </h1>
      <p className="text-2xl font-semibold">
        Welcome to the heart of our application, meticulously crafted using the
        robust MERN stack. This innovative platform seamlessly integrates
        MongoDB, Express.js, React, and Node.js to deliver a secure and
        efficient authentication experience.
      </p>
      <p className="text-2xl font-semibold">
        Our application is designed to be your trusted guardian of digital
        identity. We prioritize data privacy and security, employing
        industry-standard encryption and protection measures to safeguard your
        personal information.
      </p>
      <p className="text-2xl font-semibold">
        At the core of our system lies a robust authentication mechanism,
        ensuring that only authorized users can access protected resources.
        Whether you're a developer seeking a reliable authentication solution or
        an end-user valuing security, our application is your ideal choice.
      </p>
      <p className="text-2xl font-semibold">
        Discover the synergy of cutting-edge technologies as we provide a
        seamless and intuitive interface for user management, password recovery,
        and secure access control.
      </p>
    </div>
  );
};

export default About;
