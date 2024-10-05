import React from 'react';

const About = () => {
    return (
        <section className="w-6/12 flex items-center justify-center border p-4">
            <div className="w-1/2 flex justify-center items-center border-r">
                <img src="path_to_image.jpg" alt="Profile" className="w-48 h-48 object-cover rounded-full" />
            </div>
            <div className="w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                <p className="text-base">Details about you go here. You can include your bio, interests, and any other relevant information.</p>
            </div>
        </section>
    );
};

export default About;
