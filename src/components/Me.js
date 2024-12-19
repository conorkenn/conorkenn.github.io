import Links from "./Links";
import aqua from "../assets/konoshuba-aqua.gif";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import ReadingListModal from "./ReadingListModal";

const Me = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-6 md:sticky md:top-0 self-start">
        <div className="m-auto">
          <img src={aqua} alt="Aqua" className="mx-auto mb-4" />
          <h1 className="text-5xl pb-5">
            Hey, I'm <span className="text-blue-500">Conor</span>
          </h1>
          <p className="text-2xl pb-2">Manga, Code, and Konosuba</p>
          <Links />
          <button
            className="bg-blue-500 text-white py-2 px-4 mt-6 hover:bg-blue-700 transition-colors"
            onClick={() => setModalOpen(true)}
          >
            My Reading List
          </button>
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Amazon Web Services</h3>
            <h4 className="text-l font-bold">Software Development Engineer</h4>
            <p className="text-gray-700">
              Currently working on the Fraud Enforcement team, building scalable
              systems and expanding use cases for AWS Fraud Prevention.
              Previously contributed to the Fraud Evaluations team on
              high-impact projects.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Tools:</span> Java, Typescript,
                DynamoDB, Lambda, Step Functions, CDK, SQS, SNS, CloudFormation,
                EC2, S3, API Gateway, etc.
              </li>
              <li className="text-sm">
                <span className="font-semibold">Key Contributions:</span>{" "}
                Delivered a proof of concept with step functions and lambdas,
                expanding non-fraud use cases. Led the development of a
                mission-critical feature for the United States Department of
                Defense Joint Warfighting Cloud Capability.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">General Motors</h3>
            <h4 className="text-l font-bold">Software Engineer</h4>
            <p className="text-gray-700">
              Developed features for GM MotorSports teams, enhancing vehicle
              performance and optimizing engineering workflows for NASCAR teams.
              Previously contributed to the Global Product Development team.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Tools:</span> C#, Java, Python,
                React, Azure, MySQL
              </li>
              <li className="text-sm">
                <span className="font-semibold">Key Contributions:</span> Built
                a feature for comparing race setup fields quickly without having
                to change views and integrated automated browser tests into the
                pipeline, improving software quality.
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mb-4">Side Projects</h2>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">DiceForge</h3>
            <p className="text-gray-700">
              Tired of all those failed rolls in Baldur's Gate 3, I decided to
              take matters into my own hands. DiceForge is a fun side project
              where you can analyze dice rolls with various modifiers to see
              just how unlucky (or lucky) you really are.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Tools:</span> Go, Gin, React
              </li>
              <li className="text-sm hover:text-blue-500">
                <a href="https://github.com/conorkenn/diceforge">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">
              Bachelor of Science, Computer Science
            </h3>
            <h4 className="text-l font-bold">Elmhurst College</h4>
          </div>
        </div>
      </div>
      <ReadingListModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Me;
