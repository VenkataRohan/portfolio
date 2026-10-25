"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaBuilding, FaBriefcase } from "react-icons/fa6"; // Standardizing with an icon

const steps = [
  {
    title: "Staff AI Engineer",
    duration: "March 2026 - Present",
    companyName: "Equinix",
    description: [
      "Led development of **DIO Agent on the Equinix Agentic Platform (Google Cloud)**: a **Google ADK** multi-agent system on **Gemini 3.5 Flash (Vertex AI)** whose root orchestrator routes IT, procurement, and finance requests to 4 sub-agents (ServiceNow, Coupa, Oracle ERP, SAP Fieldglass) operating **29 MCP tools**; owned root routing and the Coupa sub-agent, and added Postgres-backed sessions and SSE streaming on the platform's registry-based **A2A**/MCP discovery; in production on **GKE**, executing **7K+ enterprise actions per month** on a platform with **9.5K+ monthly users**.",
      "Engineered **agent runtime controls** with ADK callbacks: extended stop-at-tool callbacks so **24 card-returning tools** skip a redundant LLM pass, injected session identity context into identity-scoped tool calls, and wrote push notifications into agent sessions for later recall.",
      "Primary author of the **Coupa procurement MCP server** (11 tools for approvals, lookups, receiving, and soft-close), handling **2.4K+ purchase-request approvals per month**, that re-validates **record-level authorization** (approval chains, requesters, receiver roles) before every write, with **human-in-the-loop** confirm-before-act cards and a PO-change diff engine; built an **Oracle ERP** vendor-statement tool with fail-closed org-unit access control and a Power Automate flow trigger for the SharePoint export.",
      "Hardened **agent identity**: fixed attribution spoofing in Coupa write actions by recording the verified session identity instead of caller-supplied context, ported signed-session verification to the Oracle and Fieldglass MCP servers, and forwarded ServiceNow tokens only for verified identities.",
      "Built **PII-safe logging**: PII/secret log redaction (JWTs, SSNs, emails, phone numbers, Luhn-validated card numbers, employee IDs) and correlation-ID JSON logging across **5 services** (the agent and 4 MCP servers), with optional HMAC-SHA256 user pseudonymization in the agent.",
      "Shipped agents to **production on GKE**: rolled out the agent and all 4 MCP servers through **Helm GitOps** with Workload Identity and change-gated CI/CD; diagnosed a dev-environment outage of the I/O-bound agent and added memory + CPU **HPA** autoscaling with tolerant liveness probes.",
      "Extended the **Action Broker** (Azure, Node.js/TypeScript) with a generic **Adaptive Card rendering engine** for agent actions delivered to Microsoft Teams and the web portal over the broker's **Azure Service Bus**/**MongoDB**/SSE pipeline."
    ],
  },
  {
    title: "Senior Associate Software Engineer",
    duration: "June 2023 - March 2026",
    companyName: "Equinix",
    description: [
      "Built **Sidekick Multi-Agent Assistant**: Contributed to an enterprise LLM assistant on the **OpenAI Agents SDK** with specialized HR, IT, and Legal agents and tool integrations serving 1,000+ employees; implemented intent classification using **GPT-4** with few-shot prompting achieving **95% routing accuracy** and 2s P95 latency through async execution.",
      "Built **Production RAG System (Equinix GPT)**: Engineered hybrid retrieval with **semantic reranking** on **Azure AI Search** over **15K+ ServiceNow, Confluence, and SharePoint documents** (44K chunks).",
      "Optimized **RAG Performance**: Reduced query latency from 8.5s to 2.5s (**70% improvement**) via parallel retrieval and server-side vectorization; implemented **query decomposition** for multi-hop questions, improving answer completeness by **60%** as measured by a **GPT-4-as-judge** evaluation framework.",
      "Built a **RAG Evaluation Harness**: 181-query stratified golden set scored with MRR, nDCG, and Hit@k with bootstrap confidence intervals; reached **0.90 Hit@5** and **0.74 MRR@10** (**+56% over BM25**), with an LLM judge confirming relevant context in the top 5 for **95% of queries**; audited all 44K chunks, surfacing 4.2K duplicates, 175 stale chunks, and 76% embedded without article titles, each mapped to a fix.",
      "Engineered **Incremental Data Ingestion Pipeline**: Built an incremental sync with **Azure Functions** processing 5K+ ServiceNow updates daily into the search index, reducing ingestion time by **75%** while maintaining 99.9% data freshness.",
      "Implemented **LLM Observability & Guardrails**: Monitored the RAG service with **Azure Application Insights** (token usage, latency, error rates); built a **PII detection layer** that prevented 200+ potential data leaks, and **RBAC-based context filtering** so users only retrieve authorized documents.",
      "Optimized **LLM Cost**: Reduced monthly **OpenAI API costs by 55%** ($12K to $5.4K) through prompt compression and output-token limits.",
      "Automated **ERP Workflows**: Developed **Node.js microservices** integrating **SAP Fieldglass**, **Coupa**, and **Microsoft Teams** for inline approvals via **Adaptive Cards**; automated 15K+ monthly supplier-onboarding tasks, reducing manual effort by **75%** and approval cycle time from 5 days to 6 hours through webhook-driven workflows."
    ],
  },
  {
    title: "Software Developer Intern",
    duration: "February 2023 - June 2023",
    companyName: "Equinix",
    description: [
      "Developed a **DAG Visualizer** using **React Flow** to preview DAGs before deployment, generating interactive graphs of upstream and downstream task dependencies and reducing deployment errors by **30%**.",
      "Built an **Oracle Integration Cloud (OIC)** integration that eliminated discrepancies in ledger postings, fully automating the process to save **24 hours** of manual effort per month and minimizing the risk of manual errors."
    ],
  },
  {
    title: "Software Developer Intern",
    duration: "July 2022 - August 2022",
    companyName: "5th Bridge Data Technologies LLP",
    description: [
      "Implemented **customizable Kendo grids** and **multi-step forms** in **React** for school supply-list management.",
      "Built **APIs** to retrieve and update quote-request data in the database."
    ],
  },
  {
    title: "Backend Developer Intern",
    duration: "June 2021 - July 2021",
    companyName: "Content Erra",
    description: [
      "Designed an algorithm with **O(n) time complexity** that reduced manual effort by **50%**.",
      "Extracted and processed **disability-benefits data** efficiently."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-gray-800/50">
      {/* Decorative background bloom */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle top gradient for separation */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20 "
        >
          <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-950/30">
            <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <FaBriefcase className="text-sm" />
              Professional Experience
            </span>
          </div>
        </motion.div>

        <div className="relative border-l border-gray-800 ml-4 md:ml-12 space-y-16">
          {steps.map((step, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, margin: "-50px" }}
                className="relative pl-8 md:pl-16"
              >
                {/* Timeline Connector */}
                <div className="absolute -left-[5px] top-2 w-[10px] h-[10px] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10 ring-4 ring-[#0a0a0a]" />

                <motion.div
                  whileHover={{ scale: 1.005 }}
                  transition={{ duration: 0.3 }}
                  className="group relative"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                        {step.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-cyan-200/90 font-medium text-lg">
                        <FaBuilding className="text-sm opacity-70" />
                        {step.companyName}
                      </div>
                    </div>
                    <span className="mt-2 md:mt-0 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {step.duration}
                    </span>
                  </div>

                  <div className="relative bg-gray-900/40 border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-gray-900/60 hover:border-cyan-500/20 transition-all duration-300 shadow-xl shadow-black/20">
                    <ul className="space-y-4">
                      {step.description.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-400 leading-relaxed text-[15px]">
                          <span className="mr-4 mt-2 w-1.5 h-1.5 bg-cyan-500/70 rounded-full shrink-0 group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all" />
                          <span>
                            {point.split('**').map((part, partIndex) =>
                              partIndex % 2 === 1 ? (
                                <strong key={partIndex} className="text-cyan-200 font-semibold group-hover:text-cyan-400 transition-colors">
                                  {part}
                                </strong>
                              ) : (
                                paragraph(part)
                              )
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Helper to sanitize markdown bold syntax properly
function paragraph(text: string) {
  return text;
}


export default Experience;