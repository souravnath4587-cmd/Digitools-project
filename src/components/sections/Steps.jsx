import React from "react";
import Card from "../ui/Card";
import user from "../../assets/user.png";
import products from "../../assets/package.png";
import rocket from "../../assets/rocket.png";

const Steps = () => {
  const chooseSteps = [
    {
      id: 1,
      title: "Create Account",
      img: user,
      detail:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: 2,
      title: "Choose Products",
      img: products,
      detail: "Browse our catalog and select the tools. that fit your needs.",
    },
    {
      id: 3,
      title: "Start Creating",
      img: rocket,
      detail: "Download and start using your premium. tools immediately.",
    },
  ];

  return (
    <div className="my-14">
      <div className="sectionHeader w-sm md:w-2xl font-bold mx-auto my-8 ">
        <h1>Get Start In 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="sectionContent flex flex-col md:flex-row gap-4">
        {chooseSteps.map((data, index) => {
          return <Card key={index} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Steps;
