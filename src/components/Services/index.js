"use client";

import React from "react";
import Image from "next/image";
import "./services.css";

const services = [
  {
    title: "PRIVATE STUDIO ACCESS",
    image: "/images/elements/C.png",
  },
  {
    title: "ONE-ON-ONE TRAINING",
    image: "/images/elements/2.png",
  },
  {
    title: "GROUP FITNESS",
    image: "/images/elements/A.png",
  },
  {
    title: "POWERLIFTING WORKSHOP",
    image: "/images/elements/B.png",
  },
  {
    title: "KIDS WORKOUT",
    image: "/images/elements/E.png",
  },
  {
    title: "NUTRITION GUIDANCE",
    image: "/images/elements/O.png",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="dl-services-wrapper services-section">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="dl-heading-center dl-gold">WHAT WE OFFER</h2>

        <p className="dl-description-center">
          PREMIUM <span className="dl-gold">TRAINING SERVICES</span>
        </p>

        <p className="dl-description-center">
          Choose from specialized programs designed for strength, endurance,
          weight loss, kids training and overall transformation.
        </p>
      </div>

      {/* GRID (6 cards like membership) */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-img-wrapper">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
            </div>

            <div className="service-border" />
          </div>
        ))}
      </div>
    </section>
  );
}
