import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiSlack,
  SiAsana,
  SiNotion,
  SiGo,
  SiSpring,
  SiNetdata,
  SiAdobe,
  SiAdobexd,
  SiMariadb,
  SiCloudinary,
  SiTailwindcss,
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { VscAzure } from 'react-icons/vsc';
import { GrServerCluster } from 'react-icons/gr';
import { TiCloudStorage } from 'react-icons/ti';

import { FaReact, FaAws, FaEthereum } from 'react-icons/fa';
import Image from 'next/image';

// Technology content for each category
const techContent = {
  'ui-ux': {
    title: 'UI/UX',
    highlight: 'User Experience',
    description:
      'Create intuitive and engaging user interfaces with modern design principles and tools.',
    technologies: [
      {
        name: 'Figma',
        icon: (
          <Image src="/tech/figma.svg" alt="Sketch" width={30} height={30} />
        ),
      },
      {
        name: 'Adobe XD',
        icon: <SiAdobexd className="h-10 w-10 text-purple-700" />,
      },
      {
        name: 'Adobe',
        icon: <SiAdobe className="h-10 w-10 text-green-500" />,
      },
      //   {
      //     name: "Sketch",
      //     icon: <FaSketch className="h-10 w-10 text-green-500" />,

      //   },
    ],
  },
  frontend: {
    title: 'Frontend',
    highlight: 'Digital Transformation',
    description:
      'Redefine your website front end with tech stacks that help build smooth user interfaces for seamless user experiences.',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs className="h-10 w-10" /> },

      {
        name: 'TypeScript',
        icon: <SiTypescript className="h-10 w-10 text-blue-500" />,
      },
      {
        name: 'JavaScript',
        icon: <SiJavascript className="h-10 w-10 text-yellow-400" />,
      },
      {
        name: 'HTML5',
        icon: <SiHtml5 className="h-10 w-10 text-orange-500" />,
      },
      { name: 'React', icon: <FaReact className="h-10 w-10 text-blue-400" /> },
      { name: 'CSS3', icon: <SiCss3 className="h-10 w-10 text-blue-500" /> },
      {
        name: 'Tailwind Css',
        icon: <SiTailwindcss className="h-10 w-10 text-[#38ddca]" />,
      },
      {
        name: 'jQuery',
        icon: <SiJquery className="h-10 w-10 text-blue-600" />,
      },
      { name: 'Web3', icon: <FaEthereum className="h-10 w-10" /> },
    ],
  },
  backend: {
    title: 'Backend',
    highlight: 'Server Solutions',
    description:
      'Build robust and scalable server-side applications with modern backend technologies and frameworks.',
    technologies: [
      {
        name: 'Node.js',
        icon: <SiNodedotjs className="h-10 w-10 text-green-600" />,
      },
      { name: 'Express', icon: <SiExpress className="h-10 w-10" /> },
      {
        name: 'Django',
        icon: <SiDjango className="h-10 w-10 text-green-800" />,
      },
      {
        name: 'Spring',
        icon: <SiSpring className="h-10 w-10 text-green-600" />,
      },
      { name: 'Go', icon: <SiGo className="h-10 w-10 text-[#3fe5d2]" /> },
    ],
  },
  //   mobile: {
  //     title: "Mobile",
  //     highlight: "App Development",
  //     description:
  //       "Create native and cross-platform mobile applications that deliver exceptional user experiences.",
  //     technologies: [
  //       {
  //         name: "Swift",
  //         icon: <SiSwift className="h-10 w-10 text-orange-500" />,
  //       },
  //       {
  //         name: "Kotlin",
  //         icon: <SiKotlin className="h-10 w-10 text-purple-500" />,
  //       },
  //       {
  //         name: "Flutter",
  //         icon: <SiFlutter className="h-10 w-10 text-blue-400" />,
  //       },
  //       {
  //         name: "React Native",
  //         icon: <TbBrandReactNative className="h-10 w-10 text-blue-500" />,
  //       },
  //     ],
  //   },
  database: {
    title: 'Database',
    highlight: 'Data Management',
    description:
      'Implement efficient and scalable database solutions for your applications.',
    technologies: [
      {
        name: 'MongoDB',
        icon: <SiMongodb className="h-10 w-10 text-green-500" />,
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql className="h-10 w-10 text-blue-600" />,
      },
      {
        name: 'Cloud CDN',
        icon: <TiCloudStorage className="h-10 w-10 text-blue-600" />,
      },
      {
        name: 'Cloudinary',
        icon: <SiCloudinary className="h-10 w-10 text-green-500" />,
      },
      { name: 'MySQL', icon: <SiMysql className="h-10 w-10 text-blue-500" /> },
      {
        name: 'SQL Server',
        icon: <DiMsqlServer className="h-10 w-10 text-blue-500" />,
      },
      {
        name: 'Maria db',
        icon: <SiMariadb className="h-10 w-10 text-blue-500" />,
      },

      { name: 'Redis', icon: <SiRedis className="h-10 w-10 text-red-500" /> },
    ],
  },
  cloud: {
    title: 'Cloud',
    highlight: 'Cloud Infrastructure',
    description:
      'Leverage cloud platforms to build scalable, reliable, and cost-effective solutions.',
    technologies: [
      { name: 'AWS', icon: <FaAws className="h-10 w-10 text-orange-400" /> },
      { name: 'Azure', icon: <VscAzure className="h-10 w-10 text-blue-500" /> },
      {
        name: 'Google Cloud',
        icon: <SiGooglecloud className="h-10 w-10 text-blue-400" />,
      },
      // {
      //   name: "DigitalOcean",
      //   icon: <SiDigitalocean className="h-10 w-10 text-blue-500" />,
      // },
      {
        name: 'VPS',
        icon: <GrServerCluster className="h-10 w-10 text-blue-500" />,
      },
    ],
  },
  devops: {
    title: 'DevOps',
    highlight: 'Continuous Integration',
    description:
      'Implement DevOps practices to streamline development and deployment processes.',
    technologies: [
      {
        name: 'Docker',
        icon: <SiDocker className="h-10 w-10 text-blue-500" />,
      },
      {
        name: 'Kubernetes',
        icon: <SiKubernetes className="h-10 w-10 text-blue-600" />,
      },
      {
        name: 'GitHub Actions',
        icon: <SiGithubactions className="h-10 w-10 text-gray-700" />,
      },
    ],
  },
  monitoring: {
    title: 'Monitoring & Logging',
    highlight: 'System Observability',
    description:
      'Gain insights into your applications with comprehensive monitoring and logging solutions.',
    technologies: [
      {
        name: 'SiNetdata ',
        icon: <SiNetdata className="h-10 w-10 text-green-500" />,
      },
      //   {
      //     name: "Prometheus",
      //     icon: <SiPrometheus className="h-10 w-10 text-orange-600" />,
      //   },
      //   {
      //     name: "Elasticsearch",
      //     icon: <SiElasticsearch className="h-10 w-10 text-teal-500" />,
      //   },
      //   {
      //     name: "Splunk",
      //     icon: <SiSplunk className="h-10 w-10 text-green-500" />,
      //   },
    ],
  },

  collaboration: {
    title: 'Collaboration Tools',
    highlight: 'Team Productivity',
    description:
      'Enhance team collaboration and productivity with modern communication and project management tools.',
    technologies: [
      {
        name: 'Slack',
        icon: <SiSlack className="h-10 w-10 text-purple-500" />,
      },
      // { name: "Microsoft Teams", icon: <SiMicrosoftteams className="h-10 w-10 text-blue-500" /> },
      {
        name: 'Asana',
        icon: <SiAsana className="h-10 w-10 text-orange-500" />,
      },
      { name: 'Notion', icon: <SiNotion className="h-10 w-10" /> },
    ],
  },
};

interface TechContentProps {
  category: string;
}

export default function TechContent({ category }: TechContentProps) {
  const content = techContent[category as keyof typeof techContent];

  if (!content) {
    return <div>Category not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-gray-600">{content.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {content.technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border hover:shadow-md transition-shadow"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
