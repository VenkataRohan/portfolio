"use client";
import { motion } from 'framer-motion';
import { FaBrain, FaSitemap, FaCode, FaDatabase, FaLaptopCode, FaCloud, FaJava, FaPython, FaDocker, FaGit, FaTerminal, FaEye, FaMicrochip, FaNetworkWired, FaDiagramProject, FaServer, FaUser, FaRobot, FaPlug, FaShieldHalved, FaKey, FaUserCheck, FaMagnifyingGlass, FaLayerGroup } from "react-icons/fa6";
import { SiJavascript, SiTypescript, SiFastapi, SiNodedotjs, SiExpress, SiRedis, SiApachekafka, SiRabbitmq, SiPostgresql, SiMysql, SiMongodb, SiNextdotjs, SiTailwindcss, SiNginx, SiGithubactions, SiReact, SiGooglecloud, SiKubernetes, SiHelm, SiPrisma } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skills = [
  {
    category: "Agentic AI",
    icon: FaRobot,
    items: [
      { name: "Google ADK", icon: SiGooglecloud },
      { name: "A2A Protocol", icon: FaNetworkWired },
      { name: "Model Context Protocol (MCP)", icon: FaPlug },
      { name: "FastMCP", icon: FaPlug },
      { name: "OpenAI Agents SDK", icon: FaRobot },
      { name: "Multi-Agent Orchestration", icon: FaSitemap },
      { name: "Human-in-the-Loop", icon: FaUserCheck }
    ]
  },
  {
    category: "LLM & ML",
    icon: FaBrain,
    items: [
      { name: "Gemini (Vertex AI)", icon: SiGooglecloud },
      { name: "Azure OpenAI", icon: VscAzure },
      { name: "Prompt Engineering", icon: FaTerminal },
      { name: "Guardrails", icon: FaShieldHalved },
      { name: "Deep Learning", icon: FaMicrochip }
    ]
  },
  {
    category: "RAG",
    icon: FaMagnifyingGlass,
    items: [
      { name: "Vector & Hybrid Search", icon: FaMagnifyingGlass },
      { name: "Azure AI Search", icon: VscAzure },
      { name: "Embeddings", icon: FaLayerGroup },
      { name: "Semantic Reranking", icon: FaLayerGroup },
      { name: "Query Decomposition", icon: FaSitemap },
      { name: "LLM-as-Judge Evaluation", icon: FaEye }
    ]
  },
  {
    category: "Cloud",
    icon: FaCloud,
    items: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Vertex AI", icon: SiGooglecloud },
      { name: "GKE", icon: SiKubernetes },
      { name: "Workload Identity", icon: FaKey },
      { name: "Azure Functions", icon: VscAzure },
      { name: "Azure App Service", icon: VscAzure },
      { name: "Azure Service Bus", icon: VscAzure },
      { name: "Azure Cosmos DB", icon: VscAzure }
    ]
  },
  {
    category: "Security & Observability",
    icon: FaShieldHalved,
    items: [
      { name: "OAuth 2.0 Token Exchange", icon: FaKey },
      { name: "PingFederate", icon: FaKey },
      { name: "Zero-Trust Identity", icon: FaShieldHalved },
      { name: "PII Redaction", icon: FaShieldHalved },
      { name: "Correlated JSON Logging", icon: FaEye }
    ]
  },
  {
    category: "Backend & Databases",
    icon: FaServer,
    items: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Prisma", icon: SiPrisma }
    ]
  },
  {
    category: "DevOps",
    icon: FaDocker,
    items: [
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Helm", icon: SiHelm },
      { name: "GitOps", icon: FaGit },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "NGINX", icon: SiNginx },
      { name: "CI/CD", icon: FaNetworkWired }
    ]
  },
  {
    category: "Languages & Frontend",
    icon: FaCode,
    items: [
      { name: "Python", icon: FaPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: FaDatabase },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss }
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
                <span className="font-bold text-cyan-200">Staff AI Engineer</span> at Equinix building production <span className="font-bold text-cyan-200">LLM, RAG, and multi-agent systems</span> across <span className="font-bold text-cyan-200">Microsoft Azure</span> and <span className="font-bold text-cyan-200">Google Cloud</span>, grounded in backend and distributed-systems engineering. On Azure, I contributed to the Sidekick multi-agent assistant and the HRGPT RAG system, delivering a <span className="font-bold text-cyan-200">70% latency reduction</span> (8.5s → 2.5s), <span className="font-bold text-cyan-200">55% LLM cost savings</span> ($12K → $5.4K), and <span className="font-bold text-cyan-200">95% intent-routing accuracy</span> for 1,000+ enterprise users. On Google Cloud, I build <span className="font-bold text-cyan-200">Google ADK</span> agents on <span className="font-bold text-cyan-200">Gemini (Vertex AI)</span> for the Equinix Agentic Platform: a multi-agent assistant that acts on ServiceNow, Coupa, Oracle ERP, and SAP Fieldglass through <span className="font-bold text-cyan-200">MCP</span> servers and <span className="font-bold text-cyan-200">A2A</span>, running on <span className="font-bold text-cyan-200">GKE</span> with verified-identity controls, human-in-the-loop approvals, and PII-safe logging.
              </p>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.05 }}
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