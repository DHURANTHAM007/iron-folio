import React from 'react';
import { FaPenFancy, FaBrain, FaLaptopCode, FaFigma } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="tech-line w-full mb-16"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl tech-font font-bold text-center mb-16 tech-heading">SYSTEM.IDENTITY</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="tech-card p-6 rounded-lg">
              <p className="text-xl leading-relaxed">
                The guy who writes like he talks—and talks a lot about movies. I craft compelling narratives and engaging content while maintaining a deep passion for cinema and storytelling.
              </p>
              <p className="text-xl mt-4 font-semibold">
                <span className="text-iron-red">Primary Function:</span> Content Writer and Cinephile
              </p>
            </div>
            <div>
              <h3 className="text-2xl tech-font mb-4">SKILL MATRIX</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="skill-badge p-4 rounded-lg flex items-center"><FaPenFancy className="text-iron-red text-xl mr-3" /><span>Content Writing</span></div>
                <div className="skill-badge p-4 rounded-lg flex items-center"><FaBrain className="text-iron-red text-xl mr-3" /><span>Problem Solving</span></div>
                <div className="skill-badge p-4 rounded-lg flex items-center"><FaLaptopCode className="text-iron-red text-xl mr-3" /><span>Web Development</span></div>
                <div className="skill-badge p-4 rounded-lg flex items-center"><FaFigma className="text-iron-red text-xl mr-3" /><span>Figma</span></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="tech-card p-6 rounded-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 rounded-full bg-iron-red mr-2"></div>
                  <h3 className="text-xl tech-font">SYSTEM SPECS</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-gray-400">Creativity</span><div className="w-2/3 bg-gray-700 rounded-full h-2.5"><div className="bg-iron-red h-2.5 rounded-full" style={{ width: '95%' }}></div></div></div>
                  <div className="flex justify-between"><span className="text-gray-400">Storytelling</span><div className="w-2/3 bg-gray-700 rounded-full h-2.5"><div className="bg-iron-red h-2.5 rounded-full" style={{ width: '90%' }}></div></div></div>
                  <div className="flex justify-between"><span className="text-gray-400">Technical Writing</span><div className="w-2/3 bg-gray-700 rounded-full h-2.5"><div className="bg-iron-red h-2.5 rounded-full" style={{ width: '85%' }}></div></div></div>
                  <div className="flex justify-between"><span className="text-gray-400">Film Analysis</span><div className="w-2/3 bg-gray-700 rounded-full h-2.5"><div className="bg-iron-red h-2.5 rounded-full" style={{ width: '92%' }}></div></div></div>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4"><div className="h-3 w-3 rounded-full bg-iron-red mr-2"></div><h3 className="text-xl tech-font">TECH STACK</h3></div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">React.js</span>
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">Next.js</span>
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">Firebase</span>
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">TypeScript</span>
                  <span className="px-3 py-1 bg-darker rounded-full text-sm border border-iron-red/30">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;