"use client";
import { motion } from 'framer-motion';
import { FaBrain, FaSitemap, FaCode, FaDatabase, FaLaptopCode, FaCloud, FaJava, FaPython, FaDocker, FaGit, FaTerminal, FaEye, FaMicrochip, FaNetworkWired, FaHtml5, FaCss3, FaDiagramProject, FaServer, FaUser } from "react-icons/fa6";
import { SiLangchain, SiJavascript, SiTypescript, SiFastapi, SiNodedotjs, SiExpress, SiRedis, SiApachekafka, SiRabbitmq, SiPostgresql, SiMysql, SiMongodb, SiNextdotjs, SiTailwindcss, SiNginx, SiGithubactions, SiOpenai, SiReact } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skills = [
  {
    category: "AI & LLM",
    icon: FaBrain,
    items: [
      { name: "Azure OpenAI", icon: VscAzure },
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: FaDiagramProject },
      { name: "Vector Databases", icon: FaDatabase },
      { name: "Azure AI Search", icon: VscAzure },
      { name: "Prompt Engineering", icon: FaTerminal },
      { name: "LLM Observability", icon: FaEye }
    ]
  },
  {
    category: "System Design",
    icon: FaSitemap,
    items: [
      { name: "LLD", icon: FaMicrochip },
      { name: "SOLID", icon: FaCode },
      { name: "Microservices", icon: FaNetworkWired },
      { name: "Event-Driven Architecture", icon: FaDiagramProject },
      { name: "CQRS", icon: FaDatabase },
      { name: "CAP Theorem", icon: FaServer },
      { name: "Distributed Systems", icon: FaSitemap }
    ]
  },
  {
    category: "Languages",
    icon: FaCode,
    items: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: FaDatabase }
    ]
  },
  {
    category: "Backend & Databases",
    icon: FaDatabase,
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Azure Cosmos DB", icon: VscAzure }
    ]
  },
  {
    category: "Frontend",
    icon: FaLaptopCode,
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: FaCloud,
    items: [
      { name: "Azure Function App", icon: VscAzure },
      { name: "Azure App Service", icon: VscAzure },
      { name: "Docker", icon: FaDocker },
      { name: "NGINX", icon: SiNginx },
      { name: "Git", icon: FaGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CI/CD", icon: FaNetworkWired }
    ]
  }
];

const AboutMe = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-950/20">
            <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <FaUser className="text-sm" />
              About Me
            </span>
          </div>
        </motion.div>

        <div className="space-y-10">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="bg-gray-900/40 border border-white/5 border-l-4 border-l-cyan-500 p-8 md:p-10 rounded-3xl backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <FaUser className="text-3xl text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  Professional Summary
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-gray-300">
                <span className="font-bold text-cyan-200">AI Engineer</span> specializing in <span className="font-bold text-cyan-200">production-grade LLM systems</span> and <span className="font-bold text-cyan-200">multi-agent orchestration</span>, with deep expertise in building scalable <span className="font-bold text-cyan-200">Retrieval-Augmented Generation (RAG)</span> pipelines on Microsoft Azure. Delivered <span className="font-bold text-cyan-200">70% latency reduction</span> (8.5s → 2.5s) and <span className="font-bold text-cyan-200">55% cost savings</span> ($12K → $5.4K) through vector search optimization, caching strategies, and efficient model orchestration. Designed high-precision <span className="font-bold text-cyan-200">intent-based routing systems</span> achieving 95% classification accuracy for 1,000+ enterprise users. Strong experience across retrieval quality, LLM evaluation, observability, and guardrails, with proven ability to deploy end-to-end AI solutions from experimentation to <span className="font-bold text-cyan-200">full-stack production deployment</span>, including React-based UIs, API-driven backends, and cloud-native services.
              </p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-8 border-l-4 border-cyan-500 pl-4">
              <FaLaptopCode className="text-3xl text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                Technical Expertise
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  whileHover={{ translateY: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gray-900/40 border border-white/5 p-6 rounded-2xl hover:bg-gray-900/60 hover:border-cyan-500/30 transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <skillGroup.icon className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-950/50 border border-gray-800 text-gray-300 text-sm group-hover:border-cyan-500/20 transition-colors"
                      >
                        <item.icon className="text-cyan-500/70" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;