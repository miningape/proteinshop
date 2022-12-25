import React from 'react';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2"> <Button text="> Test About Us Button <" /></h1>
      <p className="text-gray-700">
        This is an example "About Us" page created with Next.js and TypeScript. It also includes a handy button which does frick all:D
      </p>
    </div>
  );
};

//This will add the container class to the div element, which will center the content and add some padding. 
//The text-2xl font-bold mb-2 classes will be applied to the h1 element and will make the text larger and bold, and add some margin at the bottom. 
//The text-gray-700 class will be applied to the p element and will set the text color to gray.

export default AboutUs;
