import React from 'react';
import Project from '../components/project';
import './Portfolio.css'; // Import the CSS file
import magicCard from '../assets/images/man_holding_card.jpg'
import text from '../assets/images/texting.jpg'
import wheather from '../assets/images/wheatherDashboard.png'
import calendar from '../assets/images/calendar.jpg'
import onlineShopping from '../assets/images/shopping_online.jpg'

function Portfolio() {
  // Create an array of project data
  const projects = [
    {
      title: 'MarsMadness',
      description: 'Displays photos from the mars rover! ',
      projectLink: 'https://starlit-mermaid-2652a3.netlify.app/',
      githubLink: 'https://github.com/christianbmartinez/marsmadness',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeXW2WMuQZa8bob3i0hYukDuwPPLBOgiu8A&usqp=CAU', 
    },
    {
      title: 'Magic Mania',
      description: 'Make a deck, and discover cards from your favourite magic cards!',
      projectLink: '',
      githubLink: 'https://github.com/mayaj0yce/magicMania',
      imageUrl: magicCard, 
    },
    {
      title: 'Tech Blog',
      description: 'A blog site for making blogs about the newest tech!',
      projectLink: 'https://tech-blog-imdawizard-9c1ea840933a.herokuapp.com/',
      githubLink: 'https://github.com/imdawizard/tech_blog',
      imageUrl: text, 
    },
    {
      title: 'Wheather Dashboard',
      description: 'Pulls the wheather API for wheather projections!',
      projectLink: 'https://imdawizard.github.io/weatherDashboard/',
      githubLink: 'https://github.com/imdawizard/weatherDashboard',
      imageUrl: wheather, 
    },
    {
      title: 'Work Day Scheduler',
      description: 'This website helps you keep track of your day by letting you know the time and reminding you of what matters most!',
      projectLink: ' https://imdawizard.github.io/work_day_scheduler/',
      githubLink: 'https://github.com/imdawizard/work_day_scheduler',
      imageUrl: calendar, 
    },
    {
      title: 'E-commerce Backend',
      description: 'The complete backend for an e-commerce webiste like etsy!',
      projectLink: '',
      githubLink: 'https://github.com/imdawizard/E-commerce_backend',
      imageUrl: onlineShopping, 
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
export default Portfolio;