"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaRobot, FaPlug, FaShieldHalved, FaCloud, FaDiagramProject, FaMagnifyingGlass, FaArrowRight } from "react-icons/fa6";

interface WorkItem {
  title: string;
  platform: "Google Cloud" | "Microsoft Azure";
  period: string;
  status: string;
  icon: IconType;
  summary: string;
  highlights: string[];
  stack: string[];
}

const agentFlow = [
  "Employee · Sidekick web / Microsoft Teams",
  "Platform orchestrator · A2A",
  "DIO Agent · Google ADK · Gemini 2.5 Flash",
  "Sub-agents · ServiceNow · Coupa · Oracle ERP · SAP Fieldglass",
  "MCP servers · Streamable HTTP · 29 tools",
  "Enterprise APIs → Adaptive Card response",
];

const work: WorkItem[] = [
  {
    title: "DIO Agent",
    platform: "Google Cloud",
    period: "2026",
    status: "In production",
    icon: FaRobot,
    summary: "Google ADK multi-agent assistant on Gemini 2.5 Flash (Vertex AI) for IT, procurement, and finance self-service on the Equinix Agentic Platform.",
    highlights: [
      "Root orchestrator routing to **4 sub-agents** over **29 MCP tools**",
      "**A2A** agent card, registry-based MCP discovery, SSE streaming",
      "Stop-at-tool callbacks extended so **24 card-returning tools** skip an extra LLM pass",
      "Session identity context injected into every identity-scoped tool call",
    ],
    stack: ["Google ADK", "Gemini", "Vertex AI", "A2A", "MCP", "PostgreSQL", "GKE"],
  },
  {
    title: "Enterprise MCP Servers",
    platform: "Google Cloud",
    period: "2026",
    status: "In production",
    icon: FaPlug,
    summary: "MCP tool servers that let agents act on Coupa, Oracle ERP, ServiceNow, and SAP Fieldglass with in-tool authorization.",
    highlights: [
      "Primary author of the **Coupa** server: **11 tools** for approvals, receiving, and soft-close",
      "**Record-level authorization** (approvers, requesters, receivers) re-validated before every write",
      "**Human-in-the-loop** confirm-before-act preview cards and a PO-change diff engine",
      "**Oracle ERP** vendor statements with fail-closed org-unit access control",
    ],
    stack: ["Python", "FastMCP", "Pydantic", "REST", "Docker", "Kubernetes"],
  },
  {
    title: "Agent Identity & PII-Safe Logging",
    platform: "Google Cloud",
    period: "2026",
    status: "In production",
    icon: FaShieldHalved,
    summary: "Keeps the verified user attached to every write action and keeps sensitive data out of logs.",
    highlights: [
      "Fixed attribution spoofing: Coupa writes record the **verified session identity**, not caller-supplied context",
      "Signed-session verification ported to the **Oracle** and **Fieldglass** MCP servers",
      "ServiceNow tokens forwarded **only for verified identities**",
      "PII/secret redaction and correlation-ID JSON logs across the agent and **4 MCP servers**",
    ],
    stack: ["Python", "OAuth 2.0", "PingFederate", "pytest"],
  },
  {
    title: "Production AI on GKE",
    platform: "Google Cloud",
    period: "2026",
    status: "In production",
    icon: FaCloud,
    summary: "Kubernetes operations for agent and MCP services: Helm GitOps rollouts, autoscaling, and probe tuning.",
    highlights: [
      "Dev/UAT rollouts for **7 services**; production releases for the agent and all **4 MCP servers**",
      "Diagnosed a dev-environment outage of an I/O-bound agent, whose CPU stays low even when saturated",
      "Added **memory + CPU** HPA autoscaling and tolerant liveness probes",
    ],
    stack: ["GKE", "Helm", "GitOps", "Workload Identity", "GitHub Actions"],
  },
  {
    title: "Sidekick Multi-Agent Platform",
    platform: "Microsoft Azure",
    period: "2023 – 2026",
    status: "Production",
    icon: FaDiagramProject,
    summary: "Enterprise multi-agent assistant on the OpenAI Agents SDK with specialized HR, IT and Legal agents serving 1,000+ employees (contributor).",
    highlights: [
      "**95% routing accuracy** with GPT-4 few-shot intent classification at **2s P95**",
      "**55% cost reduction** ($12K → $5.4K) via prompt compression and output-token limits",
      "PII detection and RBAC context filtering",
    ],
    stack: ["OpenAI Agents SDK", "Azure OpenAI", "FastAPI", "Python"],
  },
  {
    title: "HRGPT: Production RAG",
    platform: "Microsoft Azure",
    period: "2023 – 2026",
    status: "Production",
    icon: FaMagnifyingGlass,
    summary: "RAG over 3K+ ServiceNow knowledge articles on Azure AI Search.",
    highlights: [
      "**0.89 MRR@10**; irrelevant responses cut from **35% to 4%**",
      "Latency **8.5s → 2.5s** via parallel retrieval and server-side vectorization",
      "Incremental ingestion of **5K+ daily updates** with Azure Functions",
    ],
    stack: ["Azure AI Search", "Azure OpenAI", "Azure Functions", "Node.js", "TypeScript"],
  },
];

const renderBold = (text: string) =>
  text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-cyan-200 font-semibold">{part}</strong>
    ) : (
      part
    )
  );

const AgenticWork = () => {
  return (
    <section id="agentic" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-800/50">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-950/30">
              <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <FaRobot className="text-sm" />
                Agentic AI Work
              </span>
            </div>
            <p className="text-gray-400 max-w-3xl text-lg text-center">
              Production AI systems I have built at Equinix: LLM and RAG platforms on Microsoft Azure, and agentic AI on Google Cloud.
            </p>
          </div>
        </motion.div>

        <div className="mb-14 bg-gray-900/40 border border-white/5 rounded-2xl p-6">
          <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-4">
            How a request flows through DIO Agent
          </h3>
          <div className="flex flex-col lg:flex-row lg:flex-wrap items-stretch lg:items-center gap-3">
            {agentFlow.map((step, i) => (
              <div key={step} className="flex flex-col lg:flex-row items-center gap-3">
                <span className="px-4 py-2 rounded-xl bg-gray-950/60 border border-gray-800 text-gray-300 text-sm text-center">
                  {step}
                </span>
                {i < agentFlow.length - 1 && (
                  <FaArrowRight className="text-cyan-500/70 rotate-90 lg:rotate-0 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {work.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-gray-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-gray-900/60 hover:border-cyan-500/20 transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <item.icon className="text-2xl text-cyan-400 shrink-0" />
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full border border-cyan-800 text-cyan-300 bg-cyan-950/30 shrink-0">
                  {item.platform}
                </span>
              </div>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
                {item.period} · {item.status}
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">{item.summary}</p>
              <ul className="space-y-2 mb-5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start text-gray-400 text-[15px] leading-relaxed">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-cyan-500/70 rounded-full shrink-0" />
                    <span>{renderBold(h)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-gray-950/50 border border-gray-800 text-gray-300 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-10">
          Built at Equinix. Source code is proprietary, so descriptions cover architecture only.
        </p>
      </div>
    </section>
  );
};

export default AgenticWork;
