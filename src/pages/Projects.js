import React from 'react';

const Projects = () => {
  const projects = [
    {
      year: '2025',
      title: 'AL-PERSCONS',
      url: 'https://al-perscons.ru/',
      image: 'litvinov.webp',
      colSpan: 1,
      rowSpan: 1
    },
    {
      year: '2024',
      title: 'SAN-COMBO',
      url: 'https://san-combo.ru/',
      image: 'sancombo.webp',
      colSpan: 1,
      rowSpan: 1
    },
    {
      year: '2024',
      title: 'Project Zharinova',
      url: 'https://project-zharinova.com',
      image: 'olgaBanner.webp',
      colSpan: 2,
      rowSpan: 2
    },
    {
      year: '2024',
      title: 'ВОЛЬТ24',
      url: 'https://вольт24.рф/',
      image: 'volt24.webp',
      colSpan: 1,
      rowSpan: 1
    },
    {
      year: '2023',
      title: 'FGA-PROSOUT',
      url: 'https://fga-prosout.ru/',
      image: 'prosout.webp',
      colSpan: 1,
      rowSpan: 1
    },
    {
      year: '2023',
      title: 'PROMYTIL',
      url: 'https://promytil.ru/',
      image: 'promytil.webp',
      colSpan: 1,
      rowSpan: 1
    },
    {
      year: '2022',
      title: 'ННГП (Внутренний портал)',
      url: 'https://example.com',
      image: 'nngp.webp',
      colSpan: 1,
      rowSpan: 1,
      inactive: true
    },
    {
      year: '2021',
      title: 'СНАБСТРОЙ (Ликвидирована)',
      url: 'https://example.com',
      image: 'snabstroy.webp',
      colSpan: 1,
      rowSpan: 1,
      inactive: true
    },
    {
      year: '2019',
      title: 'Арена роста поколений',
      url: 'https://example.com',
      image: 'boxing.webp',
      colSpan: 1,
      rowSpan: 1,
      inactive: true
    }
  ];

  return (
    <div className="px-5 py-10">
      <h1 className="text-4xl font-bold mb-8">Наши проекты</h1>
      
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              project.inactive ? 'opacity-70 grayscale' : ''
            }`}
            style={{
              gridColumn: `span ${project.colSpan}`,
              gridRow: `span ${project.rowSpan}`
            }}
          >
            <div className="relative h-full">
              <img 
                src={`/${project.image}`} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="text-white">
                  <p className="text-lg font-bold text-black">{project.year}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-blue-300 hover:text-blue-100 text-sm"
                    >
                      Посетить сайт →
                    </a>
                  )}
                  {project.inactive && (
                    <p className="text-sm text-gray-300 mt-1">Проект завершен</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;