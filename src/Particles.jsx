import React from "react";

// Define the Particles component as a class component extending React.Component
export default class Particles extends React.Component {
  // Lifecycle method that is called after the component has been rendered to the DOM
  componentDidMount() {
    this.generateParticles();
  }

  // Method to generate and animate particles on a canvas
  generateParticles = () => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    let num = 150;
    let size = 1;
    let color = "white";
    let min_speed = 0.1;
    let max_speed = 0.5;
    let line_distance = 80;
    let particles = [];

    // Function to calculate the distance between two points
    const distance = (pointA, pointB) => {
      let dx = Math.abs(pointB.x - pointA.x);
      let dy = Math.abs(pointB.y - pointA.y);
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Function to generate a random velocity within a range
    const randVelocity = () => {
      return max_speed * Math.random() - min_speed;
    };

    // Define a Particle class to represent each particle
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = randVelocity();
        this.vy = randVelocity();
        this.color = color;
        this.radius = Math.floor(Math.random() * 3) + 0.5;
      }
    }

    // Create an array of particles
    for (let i = 0; i < num; i++) {
      particles.push(new Particle());
    }

    // Function to draw the particles on the canvas
    const draw = () => {
      ctx.fillStyle = "brown";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Loop through each particle and draw connections and particles
      for (let t = 0; t < particles.length; t++) {
        let p = particles[t];

        for (let q = 0; q < particles.length; q++) {
          if (distance(particles[q], p) <= line_distance) {
            ctx.beginPath();
            ctx.lineWidth = 0.2;
            ctx.strokeStyle = "#fff";
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[q].x, particles[q].y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, Math.PI * 2, false);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= size || p.x >= canvas.width - size) {
          p.vx *= -1;
        }
        if (p.y <= size || p.y >= canvas.height - size) {
          p.vy *= -1;
        }
      }

      // Request animation frame to continue the animation
      requestAnimationFrame(draw);
    };

    // Start drawing the particles
    draw();
  };

  // Render method to display the canvas element
  render() {
    return <canvas id="particles"></canvas>;
  }
}
