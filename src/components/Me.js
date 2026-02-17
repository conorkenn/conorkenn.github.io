import Links from "./Links";
import aqua from "../assets/konoshuba-aqua.gif";
import React from "react";

const Me = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-6 md:sticky md:top-0 self-start">
        <div className="m-auto">
          <img src={aqua} alt="Aqua" className="mx-auto mb-4" />
          <h1 className="text-5xl pb-5">
            Hey, I'm <span className="text-blue-500">Conor</span>
          </h1>
          <p className="text-2xl pb-2">Manga & Code</p>
          <Links />
        </div>
      </div>

      <div className="w-full md:w-2/3 lg:w-3/4 p-6">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">AFS</h3>
            <h4 className="text-l font-bold">Software Engineer</h4>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Amazon Web Services</h3>
            <h4 className="text-l font-bold">Software Development Engineer</h4>
            <p className="text-gray-700">
              Previously worked on the Fraud Enforcement team, building scalable
              systems and expanding use cases for AWS Fraud Prevention.
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
          <h2 className="text-2xl font-bold mb-4">Side Projects</h2>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">Yu-Gi-Oh! Tools 🎴</h3>
            <p className="text-gray-700">
              CLI, API server, and React website for YGO collectors. Search cards,
              browse 1000+ sets, manage collections, and track prices.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Tech:</span> TypeScript, React, Node.js, Express
              </li>
              <li className="text-sm">
                <span className="font-semibold">Repos:</span>{" "}
                <a href="https://github.com/conorkenn/ygo-cli" className="text-blue-500 hover:underline">ygo-cli</a>,{" "}
                <a href="https://github.com/conorkenn/ygo-website" className="text-blue-500 hover:underline">ygo-website</a>,{" "}
                <a href="https://github.com/conorkenn/ygo-price-tracker" className="text-blue-500 hover:underline">ygo-price-tracker</a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h3 className="text-xl font-bold">OpenClaw GitHub Assistant</h3>
            <p className="text-gray-700">
              OpenClaw skill for GitHub automation. Query repos, check CI status,
              create issues and PRs, search repositories.
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-sm">
                <span className="font-semibold">Tech:</span> TypeScript, Node.js
              </li>
              <li className="text-sm">
                <span className="font-semibold">Repo:</span>{" "}
                <a href="https://github.com/conorkenn/openclaw-github-assistant" className="text-blue-500 hover:underline">openclaw-github-assistant</a>
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
    </div>
  );
};

export default Me;
