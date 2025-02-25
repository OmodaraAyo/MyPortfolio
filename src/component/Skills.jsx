"use client";

const Skills = () => {
  const skills = [
    { title: "Javascript", logo: "/images/javascript.svg" },
    { title: "React", logo: "/images/react.svg" },
    { title: "Python", logo: "/images/python.svg" },
    { title: "Django", logo: "/images/django.svg" },
    { title: "Typescript", logo: "/images/typescript.svg" },
    { title: "Tailwind", logo: "/images/tailwind.svg" },
    { title: "Figma", logo: "/images/figma.svg" },
    { title: "Java", logo: "/images/Java_Logo.png" },
    { title: "Springboot", logo: "/images/springboot.png" },
    { title: "NextJs", logo: "/images/nextjs.svg" },
    
  ];
  return (
    <section className="container mx-auto" id="skills">
      {/* title */}
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        <p className="text-lg sm:text-[20px] md:text-[22px] text-gray-900 py-1 px-1 underline-offset-3 underline">
          My <span className="text-blue-600">Talent</span>
        </p>
        <p>Professional Skills</p>
      </h1>

      {/* logo-container */}
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 items-center justify-center px-11 py-7 gap-6">
        {skills.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center px-3.5 py-3 rounded-2xl shadow-black drop-shadow-lg cursor-pointer">
            <img src={item.logo} alt={item.index} className="w-[3rem] h-[3rem]"/>
            <p className="text-gray-900">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
