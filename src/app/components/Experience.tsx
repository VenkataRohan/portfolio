"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { FaBuilding, FaBriefcase } from "react-icons/fa6"; // Standardizing with an icon

const steps = [
  {
    title: "AI Engineer",
    duration: "June 2023 - Present",
    companyName: "Equinix",
    description: [
      "Architected **\"Sidekick\" Multi-Agent AI Platform**: Designed and deployed an enterprise LLM orchestration system using **LangGraph** with 4 specialized agents (HR, IT, Legal, General Query) serving 1,000+ employees; implemented intent classification using **GPT-4** with few-shot prompting achieving **95% routing accuracy** and **2s P95 latency** through **Redis caching** & async execution.",
      "Built **Production RAG System (HRGPT)**: Engineered end-to-end retrieval pipeline processing **50K+ ServiceNow documents**; implemented **hybrid search** combining dense vectors (**text-embedding-3-large**, 3072-dim) and BM25 with **Azure AI Search**, achieving **0.89 MRR@10** and reducing irrelevant responses from 35% to 4% through metadata filtering and semantic reranking.",
      "Optimized **RAG Performance & Quality**: Reduced query latency from 8.5s to 2.5s (**70% improvement**) via multi-level caching (**Redis L1**, vector cache L2) and parallel retrieval; implemented **query decomposition** for multi-hop questions, improving answer completeness by **60%** measured via **GPT-4-as-judge** evaluation framework.",
      "Engineered **Real-time Data Ingestion Pipeline**: Built incremental sync system processing 5K+ ServiceNow updates daily using **Azure Functions** and **Service Bus**; implemented change data capture with delta checksums, **semantic chunking** (500 tokens, 50 overlap), and batch upserts reducing ingestion time by **75%** while maintaining 99.9% data freshness.",
      "Implemented **LLM Observability & Guardrails**: Deployed end-to-end tracing using **LangSmith** and **Azure Application Insights** tracking token usage, latency (P50/P95/P99), and error rates; built **PII detection layer** using regex + NER models preventing 200+ potential data leaks, and implemented **RBAC-based context filtering** ensuring users only access authorized documents.",
      "Deployed **Cost Optimization Strategies**: Reduced monthly **OpenAI API costs by 55%** ($12K to $5.4K) through prompt compression, streaming responses, and **intelligent model routing** (GPT-3.5-turbo for simple queries, GPT-4 for complex); implemented response caching achieving **40% cache hit rate** for repeated queries.",
      "Automated **ERP Workflows**: Developed **Node.js microservices** integrating **SAP FieldGlass**, **Coupa**, and **MS Teams** enabling inline approvals via **Adaptive Cards**; automated 15K+ monthly supplier onboarding tasks reducing manual effort by **75%** and approval cycle time from 5 days to 6 hours through webhook-driven workflows."
    ],
  },
  {
    title: "Software Developer Intern",
    duration: "February 2023 - June 2023",
    companyName: "Equinix",
    description: [
      "Developed a **DAG Visualizer** using **React Flow** to preview DAGs before deployment, generating interactive graphs for visualizing upstream and downstream task dependencies, reducing deployment errors by **30%**.",
      "Created a robust **Oracle Integration Cloud (OIC)** integration to eliminate discrepancies in ledger postings, fully automating the process to save **24 hours** of manual effort per month and minimizing risk of manual errors."
    ],
  },
  {
    title: "Software Developer Intern",
    duration: "July 2022 - August 2022",
    companyName: "5th Bridge Data Technologies LLP",
    description: [
      "Implemented **customizable Kendo grids** and **multi-step forms** in **React** for school supply list management.",
      "Built **APIs** to retrieve and update quote request data in the database."
    ],
  },
  {
    title: "Backend Developer Intern",
    duration: "June 2021 - July 2021",
    companyName: "Content Erra",
    description: [
      "Designed an algorithm with **O(n) time complexity** to reduce manual effort by **50%**.",
      "Extracting and processing **disability benefits data** efficiently."
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