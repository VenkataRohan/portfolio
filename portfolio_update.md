---
title: Portfolio Update — Source of Truth
owner: Venkata Rohan Kambhampati
last_updated: 2026-10-01
status: ready-to-implement
repo: https://github.com/VenkataRohan/portfolio
live: https://venkatarohan.vercel.app
related: "[[Professional_Profile_Update]]"
tags: [career, portfolio, source-of-truth]
---


> [!success] Corrected 2026-10-06 (supersedes the STOP warning of 2026-10-01)
> You confirmed you never used LangGraph or LangSmith. This spec now matches the code and the corrected resumes:
> - Sidekick = **OpenAI Agents SDK** (you *contributed*; 16 of 336 commits). No LangGraph, LangChain or LangSmith anywhere on the site.
> - HRGPT = **Azure AI Search + Azure Functions + Application Insights**, 3K+ knowledge articles (not 50K+). No Service Bus, BM25/embedding design, response cache, model routing or "40% cache hit rate".
> - Cal.com = booking **confirmation page**. HPA wording = "diagnosed an outage; added memory + CPU autoscaling".
>
> [!warning] Still **user claims** (not provable from any local repo; the portfolio is public, so keep only what you can defend: see [[04 Metrics Defense]])
> 95% routing · 2s P95 · 1,000+ users · 0.89 MRR@10 · 35%→4% · 8.5s→2.5s · +60% completeness · 5K+ updates/day · 75% ingestion · 99.9% freshness · 55% cost · 200+ leaks · 15K+ tasks / 75% effort / 5d→6h · Lightdash 30%. **Delete any digit you cannot source before you deploy.**
> Related: [[Professional_Profile_Update]] · [[01 Honest Self-Assessment]] (W5).

# Portfolio Update — Source of Truth

> [!info] Who this file is for
> This file is the **single source of truth** for the next portfolio release. It is written so an AI coding agent can implement every change **without asking questions**. All copy below is final and paste-ready. Evidence and cross-platform wording live in [[Professional_Profile_Update]].

---

## 0. Implementation brief (read first)

**Repo facts** (inspected 2026-10-01 via GitHub API):
- Next.js `15.2.4`, React 19, Tailwind v4, Chakra UI 2, framer-motion 12, react-icons `^5.5.0`, three / @react-three.
- All content is **hard-coded in data arrays inside components** (`steps`, `skills`, `projects`, `projectData`, …).
- Inside strings, `**text**` renders as bold via `text.split('**')` (used in `Experience.tsx` and `BestProject.tsx`). Keep that syntax.
- Section order is set in `src/app/page.tsx`. Nav links are in `src/app/components/Header.tsx`.

**Setup and checks:**
- Install dependencies only through the Equinix Nexus registry (org policy): `npm install --registry https://nexus.equinix.com/repository/Equinix-NPM-Release/`
- Acceptance: `npm run lint` and `npm run build` must both pass. Check every nav anchor and the resume download.

**Confidentiality rules** (apply to every string you add):
- ✅ Allowed: vendor and product names (Google ADK, Gemini, Vertex AI, GKE, ServiceNow, Coupa, Oracle ERP, SAP Fieldglass, SailPoint, PingFederate, Microsoft Teams), plus the names "Equinix Agentic Platform", "Sidekick", "DIO Agent" and "HRGPT".
- ❌ Never add:
  - internal hostnames, URLs, GCP project IDs or tenant IDs
  - internal repo names (`eap-*`), ticket IDs, OIC flow names
  - screenshots, source code, or config from Equinix systems
- Every Equinix item has GitHub link = **none** (proprietary). Do not render a GitHub button for them.

**Canonical facts** (must match the resume, GitHub and LinkedIn exactly):

| Field | Value |
|---|---|
| Name | Venkata Rohan Kambhampati (display: "Venkata Rohan") |
| Headline title | Staff AI Engineer |
| Equinix roles | Software Developer Intern (Feb 2023 – Jun 2023) → Senior Associate Software Engineer (Jun 2023 – Mar 2026) → **Staff AI Engineer (Mar 2026 – Present)** |
| Portfolio date format | Full month names, e.g. `March 2026 - Present` (matches the existing `steps` style) |
| GCP platform name | Equinix Agentic Platform (EAP), on Google Cloud |
| User's GCP agent | DIO Agent (IT, procurement & finance self-service) |
| Azure-era systems | "Sidekick" multi-agent assistant (OpenAI Agents SDK; contributor) · "HRGPT" RAG system (Azure AI Search; contributor) |
| Models | Gemini 2.5 Flash on Vertex AI (GCP) · GPT-4 on Azure OpenAI (Azure) |
| Email / links | venkatarohank@gmail.com · github.com/VenkataRohan · linkedin.com/in/venkata-rohan |

---

## 1. Positioning

### 1.1 Portfolio positioning (internal guidance, not rendered)
One coherent story: **Software Engineering → Backend & Distributed Systems → Cloud Engineering → LLM Engineering → RAG → Multi-Agent Systems → Agentic AI → Production AI Infrastructure.**
- The Stock Exchange project and open-source PRs prove the backend and distributed-systems foundation.
- The Azure era (Sidekick, HRGPT) proves LLM, RAG and LLMOps with measured results.
- The GCP era (Equinix Agentic Platform) proves agentic AI in production: ADK agents, MCP tool servers, A2A, verified-identity controls, human-in-the-loop controls, GKE operations.
- The message is **expansion, not replacement**: Azure experience stays prominent, and GCP is added on top.

### 1.2 New professional summary (paste into `About.tsx`; exact JSX in §5.2)
> Staff AI Engineer at Equinix building production LLM, RAG, and multi-agent systems across Microsoft Azure and Google Cloud, grounded in backend and distributed-systems engineering. On Azure, I contributed to the Sidekick multi-agent assistant and the HRGPT RAG system, delivering a 70% latency reduction (8.5s → 2.5s), 55% LLM cost savings ($12K → $5.4K), and 95% intent-routing accuracy for 1,000+ enterprise users. On Google Cloud, I build Google ADK agents on Gemini (Vertex AI) for the Equinix Agentic Platform: a multi-agent assistant that acts on ServiceNow, Coupa, Oracle ERP, and SAP Fieldglass through MCP servers and A2A, running on GKE with verified-identity controls, human-in-the-loop approvals, and PII-safe logging.

### 1.3 Hero section (`Home.tsx`)
- **Title label** (replaces `AI Engineer`): `Staff AI Engineer · Agentic AI · LLM Systems`
- **Hero line**: unchanged (`Hi, I'm Venkata Rohan`)
- **Tagline** (replaces "Strategic-minded professional…"):
  > I build production AI agents that act on real enterprise systems: multi-agent orchestration, RAG, and MCP tool servers on Google Cloud and Microsoft Azure, secured with verified-identity controls and human-in-the-loop approvals.

### 1.4 Short professional tagline (meta description / social cards)
`Staff AI Engineer · Agentic AI on Google Cloud & Azure · Google ADK, Gemini, MCP, A2A, RAG`

### 1.5 AI-engineering positioning (one paragraph, reusable)
> I focus on the parts of agentic AI that decide whether it can run in production: how agents route and hand off work, how tools are exposed safely through MCP, how identity flows from the user to every downstream call, and how to observe and operate it all on Kubernetes without leaking sensitive data.

---

## 2. Projects for the portfolio

Status legend:
- **PROD**: pinned production release exists in GitOps (evidence in [[Professional_Profile_Update#Appendix B Evidence ledger]])
- **IMPL**: implemented and tested, not in production
- **DEV**: in development
- **USER**: metric provided by the user and not verifiable from local repos

### 2.1 DIO Agent: Agentic IT, Procurement & Finance Assistant (Google Cloud) · PROD
- **One-line:** A Google ADK multi-agent assistant on Gemini that lets employees approve, look up and act on ServiceNow, Coupa, Oracle ERP and SAP Fieldglass records in natural language.
- **Detailed description:** DIO Agent is a domain agent on the Equinix Agentic Platform (EAP). A root orchestrator built with Google ADK on Gemini 2.5 Flash (Vertex AI) routes each request to one of four specialized sub-agents. Each sub-agent operates tools exposed by an enterprise MCP server. The agent publishes an A2A agent card, discovers its MCP servers from a platform registry, streams responses over SSE, and persists conversations in Postgres-backed ADK sessions. Transactional tools return rendered Adaptive Cards directly to the user.
- **Problem:** Employees needed one conversational entry point for approvals and lookups spread across four enterprise systems. Each system has its own permissions model, and write actions must never execute on the wrong identity or without explicit consent.
- **Solution:**
  - A hierarchical ADK agent (root orchestrator plus 4 sub-agents) over 29 MCP tools.
  - Session identity context is injected into every identity-scoped tool call (on top of the platform's verified-session checks).
  - Confirm-before-act preview cards gate every write.
  - Extended stop-at-tool callbacks return tool-rendered cards for 24 card-returning tools without a second LLM pass.
- **Architecture (text flow):** `Employee (Sidekick web / Microsoft Teams) → platform orchestrator (A2A) → DIO Agent root (Google ADK · Gemini 2.5 Flash) → sub-agent (ServiceNow | Coupa | Oracle ERP | SAP Fieldglass) → MCP server (Streamable HTTP) → enterprise API → Adaptive Card response`
- **Key technical highlights:**
  - 4 sub-agents, 29 MCP tools, registry-based MCP discovery.
  - Remote A2A agents; SSE streaming.
  - ADK callbacks: stop-at-tools extended to 24 tools, identity-context injection, date-aware model context.
  - Notification endpoint writes push events into sessions so the agent can recall them later.
  - Postgres session persistence.
  - PII-redacted, correlation-ID JSON logs.
- **Technologies:** Python, Google ADK, A2A SDK, MCP, Starlette/FastAPI, PostgreSQL, Docker, Kubernetes, Helm
- **GCP services:** Vertex AI (Gemini 2.5 Flash), GKE, Workload Identity
- **AI/LLM components:** Gemini 2.5 Flash, hierarchical routing via agent transfer, tool/function calling over MCP, SSE streaming (an LLM-judge guardrail plugin exists in the platform template but is disabled in deployed environments)
- **Agent architecture:** root orchestrator → 4 sub-agents (ServiceNow, Coupa, Oracle ERP, SAP Fieldglass) + remote A2A agents discovered at runtime
- **My role:** created the repo and am its top contributor. I owned root routing, the Coupa sub-agent, runtime callbacks, Postgres sessions, the notify flow and logging. The ServiceNow, Oracle and Fieldglass sub-agent configs were co-developed with teammates; registry/discovery code comes from the platform template.
- **Results/metrics:** No quantitative metrics were recorded. Use scope instead: in production on GKE (first prod release Aug 2026), 4 sub-agents, 29 tools, 24 card-returning tools.
- **GitHub:** none (proprietary, Equinix) · **Demo:** none

### 2.2 Enterprise MCP Servers: Coupa, Oracle ERP, ServiceNow, SAP Fieldglass (Google Cloud) · PROD
- **One-line:** MCP tool servers that let AI agents act on procurement, finance and ITSM systems safely, with record-level authorization and human-in-the-loop confirmation.
- **Detailed description:** Primary author of the Coupa procurement MCP server: 11 tools for purchase-request and PO-change approvals, lookups, receiving and soft-close.
  - Before every write, each tool re-fetches the record and re-validates authorization against the live approval chain, receiver roles and content groups.
  - Write tools return a confirm-before-act preview card first.
  - A Decimal-normalized diff engine renders PO change orders (12 header and 26 line fields).
  - For Oracle ERP, built the vendor-statement tool: supplier resolution through Coupa, fail-closed org-unit authorization, a 3-year range guard, and a Power Automate flow trigger for the SharePoint export.
  - Migrated a legacy FastMCP/SSE server to a Streamable HTTP MCP SDK.
- **Problem:** Agents that write to financial systems must never act on records the caller cannot access, and must never act without explicit user consent.
- **Solution:** Authorization is enforced inside the tool (not in the prompt), the latest record state is re-checked before writes, and an explicit `confirmed` flag drives the preview-card flow.
- **Architecture:** `ADK sub-agent → MCP (Streamable HTTP) → tool → authorization check → enterprise API gateway → Coupa / Oracle ERP → Adaptive Card result`
- **Key technical highlights:**
  - Record-level authorization; human-in-the-loop preview cards; PO-change diff engine.
  - Fail-closed org-unit authorization.
  - Control-character sanitization of LLM-bound output; validation errors rendered as cards.
  - Actions close Sidekick to-dos via an Azure AD client-credentials token manager.
- **Technologies:** Python, FastMCP-based MCP SDK, Pydantic, REST, Docker, Kubernetes
- **GCP services:** GKE, Workload Identity
- **AI/LLM components:** MCP tool design for LLMs (typed tool schemas, LLM-safe output shaping)
- **Agent architecture:** tools consumed by DIO Agent sub-agents
- **Results/metrics:** scope only (Coupa 11 tools, Oracle 9, ServiceNow 7, Fieldglass 2 = 29 tools behind DIO Agent). No usage metrics recorded.
- **GitHub:** none (proprietary) · **Demo:** none

### 2.3 Agent Identity & PII-Safe Logging (Google Cloud) · PROD (+ one feature branch)
- **One-line:** Identity and logging controls that keep the verified user attached to every write action, and keep sensitive data out of logs.
- **Detailed description:**
  - Fixed attribution spoofing in Coupa write actions: they now record the verified session identity instead of caller-supplied context (authorization was already session-derived; this fixed who the action is attributed to).
  - Ported signed-session verification to the Oracle and Fieldglass MCP servers.
  - Added the initial auth gates to the agent's chat and notify endpoints, and forward ServiceNow tokens only for verified identities.
  - Built PII/secret log redaction (JWTs, emails, phone numbers, SSNs, Luhn-validated card numbers, employee IDs) and correlation-ID JSON logging across the agent and 4 MCP servers, plus optional HMAC-SHA256 user pseudonymization in the agent.
  - On a feature branch (not merged): ported and adapted PingFederate token introspection (RFC 7662) and token exchange (RFC 8693) into the SailPoint IAM agent, and fixed an MCP session leak caused by per-request headers in ADK's pooled-session key.
- **Problem:** In a multi-hop agent chain (user → orchestrator → agent → MCP → system), identity can be lost or misattributed, and logs can leak PII.
- **Solution:** Verified identity at each hop, identity-correct attribution of writes, and redaction at the logging layer.
- **Technologies:** Python, OAuth 2.0, PingFederate, pytest
- **GCP services:** GKE, Workload Identity · **Results/metrics:** none recorded (qualitative security fixes).
- **GitHub:** none (proprietary) · **Demo:** none

### 2.4 Production AI on GKE (Google Cloud) · PROD
- **One-line:** Kubernetes operations for agent and MCP services: Helm GitOps rollouts, autoscaling and probe tuning.
- **Detailed description:**
  - Rolled out 7 agent and MCP services to dev and UAT, and the agent plus all 4 MCP servers to production, through Helm GitOps with Workload Identity and change-gated CI/CD.
  - Diagnosed a dev-environment outage of an I/O-bound agent (its CPU stayed at a few millicores even when saturated, so CPU is a poor scaling signal). Added an HPA on memory + CPU signals with asymmetric scale-up/scale-down policies, and made liveness probes tolerant. (Dev had no autoscaler before this change; do not say an existing autoscaler "failed".)
  - Built a Kubernetes service-account-authenticated, retrying config bootstrap reused by 6 services.
- **Technologies:** Kubernetes, Helm, GitOps, GitHub Actions, Docker · **GCP services:** GKE, Workload Identity
- **Results/metrics:** qualitative (outage root cause and fix). No SLO numbers recorded.
- **GitHub:** none (proprietary)

### 2.5 Sidekick Multi-Agent Platform (Microsoft Azure) · USER metrics
- **One-line:** Enterprise multi-agent assistant on the OpenAI Agents SDK with specialized HR, IT and Legal agents serving 1,000+ employees (contributor).
- **Key highlights:** GPT-4 few-shot intent classification with 95% routing accuracy and 2s P95 latency; 55% monthly OpenAI cost reduction ($12K → $5.4K) through prompt compression and output-token limits; PII detection and RBAC context filtering.
- **Technologies:** Python, FastAPI, OpenAI Agents SDK, Azure OpenAI (GPT-4), Azure Application Insights
- **GitHub:** none (proprietary)

### 2.6 HRGPT: Production RAG System (Microsoft Azure) · USER metrics
- **One-line:** RAG over 3K+ ServiceNow knowledge articles on Azure AI Search with 0.89 MRR@10.
- **Key highlights:**
  - Retrieval: Azure AI Search with metadata filtering and semantic reranking. Irrelevant responses fell from 35% to 4%.
  - Latency: 8.5s → 2.5s (70%) via parallel retrieval and server-side vectorization.
  - Quality: query decomposition improved answer completeness by 60%, measured with GPT-4-as-judge.
  - Ingestion: incremental sync of 5K+ daily updates with Azure Functions. Ingestion time fell 75%, with 99.9% data freshness.
- **Technologies:** Python, Node.js/TypeScript, Azure AI Search, Azure OpenAI, Azure Functions, Redis (chat history)
- **GitHub:** none (proprietary)

### 2.7 Distributed Stock Exchange Simulation · KEEP (public)
- Unchanged. It stays the `BestProject` feature (public code, demo GIF and architecture diagram). GitHub: https://github.com/VenkataRohan/stock_exchange

### 2.8 Do NOT add (yet)
| Item | Why |
|---|---|
| Sidekick Comms Portal | DEV: pre-production (SSO, broker QA and CI/deploy still pending). Add after launch. |
| Action Broker card engine | Kept to one Experience bullet only; it's proprietary and has no public artifact. |
| Vim Quest (local Next.js Vim trainer) | Not on GitHub and authorship unverified. **NEEDS VERIFICATION.** Add only if published. |
| Data Center Asset Intelligence MCP | Authorship unverified. **NEEDS VERIFICATION.** |

---

## 3. Existing portfolio changes (section by section)

| Section | File / component | Current purpose | Action | New content | Why |
|---|---|---|---|---|---|
| Hero | `src/app/components/Home.tsx` | Title, name, links, generic tagline | **Modify** | §1.3 label + tagline | The generic "strategic-minded" line says nothing about AI engineering |
| About / summary | `src/app/components/About.tsx` (`<p>` under "Professional Summary") | Azure-only summary | **Replace** | §5.2 JSX | Adds GCP/agentic work; keeps the Azure metrics |
| About / skills | `About.tsx` `skills` array | 6 Azure-centric groups | **Replace** | §5.3 array | Adds Agentic AI, Google Cloud and Security groups |
| Experience | `src/app/components/Experience.tsx` `steps` | Single "AI Engineer, June 2023 - Present" entry | **Replace** | §5.4 array | Title/date mismatch with the resume; adds the Staff AI Engineer role |
| Agentic AI work (new) | `src/app/components/AgenticWork.tsx` (new) | none | **Add** | §5.5 component | Showcases GCP + Azure AI systems without proprietary code |
| Best project | `src/app/components/BestProject.tsx` | Stock Exchange deep-dive | **Keep** | none | Strong public backend/distributed-systems proof |
| Projects | `src/app/components/Project.tsx` `projects` | Open source + old projects | **Modify** | §5.6 | Fix wrong link; remove the unverifiable engagement claim on an unmerged PR |
| Achievements | `src/app/components/Achivements.tsx` | DSA counts + certificates | **Keep** | none | Consistent with the resume (1,100+ total) |
| Contact | `src/app/components/Contact.tsx` | Email / LinkedIn / GitHub | **Keep** | none | Links valid |
| Header nav | `src/app/components/Header.tsx` | Nav anchors | **Modify** | §5.7 | `Projects` points at `#model`, but the section id is `projects` (broken) |
| Section order | `src/app/page.tsx` | Renders sections | **Modify** | §5.8 | Insert `<AgenticWork />`; drop the dead `Skill` import |
| Legacy route | `src/app/home/page.tsx` | Old Chakra projects page, **live at /home** | **Remove** | none | Stale duplicate with wrong links (LightDash → stock-exchange, Cal.com → lightdash) |
| Unused skills | `src/app/components/Skill.tsx` | Commented out in `page.tsx` | **Remove** | none | Dead code with outdated skills |
| SEO | `src/app/layout.tsx` | No `metadata` export | **Modify** | §5.9 | Title/description for search and social previews |
| Resume download | `public/Venkata_Rohan_Resume.pdf` | Old 1-page resume | **Replace** | PDF compiled from `~/Desktop/gcp/resume.tex` (XeLaTeX); keep the same filename | Keeps download links working |
| Repo README | `README.md` | create-next-app boilerplate | **Replace** | §5.10 | Repo hygiene |

---

## 4. Recommended skills structure (canonical grouping)

| Group | Skills |
|---|---|
| **AI/ML** | Deep Learning (NN, CNN, RNN, Transformers), classical ML (regression, classification, clustering, cross-validation), LLM-as-Judge evaluation |
| **LLM** | Gemini (Vertex AI), Azure OpenAI (GPT-4), prompt engineering, streaming (SSE), guardrails |
| **Agentic AI** | Google ADK, A2A Protocol, Model Context Protocol (MCP), FastMCP, OpenAI Agents SDK, multi-agent orchestration, tool calling, human-in-the-loop, agent callbacks |
| **RAG** | Vector & hybrid search, Azure AI Search, semantic reranking, query decomposition, incremental ingestion (Azure Functions) |
| **Cloud** | Google Cloud (Vertex AI, GKE, Workload Identity); Microsoft Azure (OpenAI, AI Search, Functions, App Service, Service Bus (Action Broker), Cosmos DB, Application Insights) |
| **Backend** | Python, FastAPI, Node.js, Express.js, REST, SSE, WebSockets, RabbitMQ, Kafka, OAuth 2.0 (RFC 7662 / RFC 8693), PingFederate |
| **Databases** | PostgreSQL, Redis, MongoDB, Azure Cosmos DB, MySQL, Prisma |
| **DevOps** | Docker, Kubernetes, Helm, GitOps, GitHub Actions, CI/CD, NGINX |
| **Programming** | Python, TypeScript, JavaScript, Java, SQL |

**Do not list** (no evidence in the user's work): Pub/Sub, BigQuery, Firestore, Cloud Run, Artifact Registry, Secret Manager, Vertex AI Vector Search, Model Armor, JWT validation, OpenTelemetry (platform-provided instrumentation; not the user's work).

---

## 5. Implementation spec: exact changes per file

### 5.1 `src/app/components/Home.tsx`: Modify
1. Replace the `<h2>` text `AI Engineer` with:
```tsx
Staff AI Engineer · Agentic AI · LLM Systems
```
2. Replace the tagline inside `<motion.p … style={{ textWrap: "balance" }}>` (currently "Strategic-minded professional with strong analytical acumen. Focused on delivering high-impact solutions through technical expertise and innovative problem-solving.") with:
```tsx
I build production AI agents that act on real enterprise systems: multi-agent orchestration, RAG, and MCP tool servers on Google Cloud and Microsoft Azure, secured with verified-identity controls and human-in-the-loop approvals.
```
No other changes (links, 3D background and resume button stay).

### 5.2 `src/app/components/About.tsx`: Replace the summary `<p>`
Replace the entire `<p className="text-lg leading-relaxed text-gray-300"> … </p>` under "Professional Summary" with:
```tsx
<p className="text-lg leading-relaxed text-gray-300">
  <span className="font-bold text-cyan-200">Staff AI Engineer</span> at Equinix building production <span className="font-bold text-cyan-200">LLM, RAG, and multi-agent systems</span> across <span className="font-bold text-cyan-200">Microsoft Azure</span> and <span className="font-bold text-cyan-200">Google Cloud</span>, grounded in backend and distributed-systems engineering. On Azure, I contributed to the Sidekick multi-agent assistant and the HRGPT RAG system, delivering a <span className="font-bold text-cyan-200">70% latency reduction</span> (8.5s → 2.5s), <span className="font-bold text-cyan-200">55% LLM cost savings</span> ($12K → $5.4K), and <span className="font-bold text-cyan-200">95% intent-routing accuracy</span> for 1,000+ enterprise users. On Google Cloud, I build <span className="font-bold text-cyan-200">Google ADK</span> agents on <span className="font-bold text-cyan-200">Gemini (Vertex AI)</span> for the Equinix Agentic Platform: a multi-agent assistant that acts on ServiceNow, Coupa, Oracle ERP, and SAP Fieldglass through <span className="font-bold text-cyan-200">MCP</span> servers and <span className="font-bold text-cyan-200">A2A</span>, running on <span className="font-bold text-cyan-200">GKE</span> with verified-identity controls, human-in-the-loop approvals, and PII-safe logging.
</p>
```

### 5.3 `src/app/components/About.tsx`: Replace the imports and the `skills` array
The rendering JSX is unchanged: it maps `skills[].category`, `skills[].icon` and `skills[].items[].{name, icon}`, and 9 groups fit the 3-column grid.
> [!warning] Verify icon exports
> Before building, confirm these names exist in the installed `react-icons` 5.x: `SiGooglecloud`, `SiKubernetes`, `SiHelm`, `FaUserCheck`, `FaPlug`, `FaKey`, `FaLayerGroup`, `FaMagnifyingGlass`, `FaRobot`, `FaShieldHalved`. For example: `node -e "console.log(Object.keys(require('react-icons/si')).includes('SiHelm'))"`. If one is missing, substitute `FaCloud` (cloud items), `FaCode` (other items) or `FaShieldHalved` (security items).

```tsx
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
```

### 5.4 `src/app/components/Experience.tsx`: Replace the `steps` array
Keep the component JSX unchanged. `**…**` renders bold.
```tsx
const steps = [
  {
    title: "Staff AI Engineer",
    duration: "March 2026 - Present",
    companyName: "Equinix",
    description: [
      "Led development of **DIO Agent on the Equinix Agentic Platform (Google Cloud)**: a **Google ADK** multi-agent system on **Gemini 2.5 Flash (Vertex AI)** whose root orchestrator routes IT, procurement, and finance requests to 4 sub-agents (ServiceNow, Coupa, Oracle ERP, SAP Fieldglass) operating **29 MCP tools**; owned root routing and the Coupa sub-agent, and added Postgres-backed sessions and SSE streaming on the platform's registry-based **A2A**/MCP discovery; in production on **GKE**.",
      "Engineered **agent runtime controls** with ADK callbacks: extended stop-at-tool callbacks so **24 card-returning tools** skip a redundant LLM pass, injected session identity context into identity-scoped tool calls, and wrote push notifications into agent sessions for later recall.",
      "Primary author of the **Coupa procurement MCP server** (11 tools for approvals, lookups, receiving, and soft-close) that re-validates **record-level authorization** (approval chains, requesters, receiver roles) before every write, with **human-in-the-loop** confirm-before-act cards and a PO-change diff engine; built an **Oracle ERP** vendor-statement tool with fail-closed org-unit access control and a Power Automate flow trigger for the SharePoint export.",
      "Hardened **agent identity**: fixed attribution spoofing in Coupa write actions by recording the verified session identity instead of caller-supplied context, ported signed-session verification to the Oracle and Fieldglass MCP servers, and forwarded ServiceNow tokens only for verified identities.",
      "Built **PII-safe logging**: PII/secret log redaction (JWTs, emails, phone numbers, Luhn-validated card numbers, employee IDs) and correlation-ID JSON logging across the agent and 4 MCP servers, with optional HMAC-SHA256 user pseudonymization in the agent.",
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
      "Built **Production RAG System (HRGPT)**: Engineered an end-to-end retrieval pipeline over **3K+ ServiceNow knowledge articles** on **Azure AI Search**, achieving **0.89 MRR@10** and reducing irrelevant responses from 35% to 4% through metadata filtering and semantic reranking.",
      "Optimized **RAG Performance & Quality**: Reduced query latency from 8.5s to 2.5s (**70% improvement**) via parallel retrieval and server-side vectorization; implemented **query decomposition** for multi-hop questions, improving answer completeness by **60%** as measured by a **GPT-4-as-judge** evaluation framework.",
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
```


### 5.5 NEW `src/app/components/AgenticWork.tsx`: Add (complete file)
Text-only case-study cards plus a request-flow strip. It reuses the existing dark/cyan styling, and has no images and no GitHub buttons (proprietary).
```tsx
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
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 mb-4 border border-cyan-500/30 rounded-full bg-cyan-950/30">
            <span className="text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <FaRobot className="text-sm" />
              Agentic AI Work
            </span>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Production AI systems I have built at Equinix: LLM and RAG platforms on Microsoft Azure, and agentic AI on Google Cloud.
          </p>
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
```

### 5.6 `src/app/components/Project.tsx`: Modify the `projects` array
| Entry | Action | Exact new value |
|---|---|---|
| `title: 'LightDash'` | Modify | `title: 'Lightdash'`; `description: \`Made alert links open the threshold edit modal directly (merged PR #12119), removing the manual navigation to the threshold editor (30% fewer steps only if you can state the before/after click counts: see [[04 Metrics Defense]] B7).\`` |
| `title: 'Cal.com'` | Modify | `description: \`Preserved the custom order of booking questions on the booking confirmation page (merged PR #18192), making confirmations accurate and easier to read.\`` |
| `title: 'Rocket.Chat'` | Modify | `description: \`Built a "Notify on Reactions" feature that alerts users when others react to their messages (PR #32475, open, under maintainer review).\`` **Remove** "Improved user engagement by ~20%": the PR is **not merged** (checked 2026-10-01), so no engagement impact can exist. |
| `title: 'Stock Exchange'` | Keep | none |
| `title: 'Social Media App'` | Keep | none (link `expo-client` is the correct mobile client repo) |
| `title: 'Parents Portal'` | **Remove** (or fix) | `githubLink` points to `expo-client`, a duplicate of Social Media App, so it's wrong. **NEEDS VERIFICATION:** if the correct repo is confirmed (candidate: `DBMS_Project`), set that link instead of removing the card. |
| `title: 'Interior Design VR'` | Modify | `description: \`Web VR room-design app built with Three.js: drag-and-drop objects, color changes, and scaling. Reduced design effort by 90%.\`` (capitalization fix; the metric is user-provided) |

### 5.7 `src/app/components/Header.tsx`: Modify the nav links array (lines 8–13)
```tsx
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Agentic AI", href: "#agentic" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
```
(Fixes the broken `#model` anchor; `Project.tsx` renders `id="projects"`.)

### 5.8 `src/app/page.tsx`: Replace the whole file
```tsx
'use client';

import Experience from './components/Experience';
import AgenticWork from './components/AgenticWork';
import Project from './components/Project';
import Achievements from './components/Achivements';
import AboutMe from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import BestProject from './components/BestProject';

export default function Main() {
  return (
    <div className="bg-gray-900 font-sans">
      <Home />
      <AboutMe />
      <Experience />
      <AgenticWork />
      <BestProject />
      <Project />
      <Achievements />
      <Contact />
    </div>
  );
}
```
Then **delete** `src/app/components/Skill.tsx` and `src/app/home/page.tsx`. After deploy, `https://venkatarohan.vercel.app/home` must return 404.

### 5.9 `src/app/layout.tsx`: Add metadata (server component; no `'use client'`)
Add at the top, after the imports:
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Venkata Rohan Kambhampati | Staff AI Engineer",
  description:
    "Staff AI Engineer building production LLM, RAG, and multi-agent systems on Google Cloud and Microsoft Azure: Google ADK, Gemini, MCP, A2A.",
  metadataBase: new URL("https://venkatarohan.vercel.app"),
  openGraph: {
    title: "Venkata Rohan Kambhampati | Staff AI Engineer",
    description: "Agentic AI on Google Cloud & Azure: Google ADK, Gemini, MCP, A2A, RAG.",
    url: "https://venkatarohan.vercel.app",
    type: "website",
  },
};
```
Optional accessibility fix: remove `maximum-scale=1.0, user-scalable=no` from the manual viewport `<meta>`, because it blocks pinch-zoom.

### 5.10 `public/Venkata_Rohan_Resume.pdf` and `README.md`
- **PDF:** compile `~/Desktop/gcp/resume.tex` (1-page) with **XeLaTeX** (required by `fontspec` + Times New Roman) and overwrite `public/Venkata_Rohan_Resume.pdf`, keeping the same filename.
- **README.md** (replace the boilerplate):
```markdown
# venkatarohan.vercel.app

Personal portfolio of **Venkata Rohan Kambhampati**, Staff AI Engineer building production LLM, RAG, and multi-agent systems on Google Cloud and Microsoft Azure.

**Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Chakra UI · Framer Motion · React Three Fiber

## Run locally
    npm install
    npm run dev

## Structure
- `src/app/page.tsx`: section order
- `src/app/components/`: one component per section (Home, About, Experience, AgenticWork, BestProject, Project, Achievements, Contact)
- `public/`: resume PDF and images

Deployed on Vercel.
```
(For local installs on the Equinix machine, add `--registry https://nexus.equinix.com/repository/Equinix-NPM-Release/`. Keep that out of the public README.)

---

## 6. Portfolio validation checklist (for the implementing agent)
- [ ] `npm run lint` and `npm run build` pass.
- [ ] Nav: every link scrolls to its section (`#home #about #experience #agentic #projects #achievements #contact`).
- [ ] `/home` returns 404 after deploy; `Skill.tsx` is deleted.
- [ ] Resume download returns the new 1-page PDF.
- [ ] Titles and dates match the canonical table in §0 exactly.
- [ ] No Equinix item renders a GitHub button.
- [ ] Grep the repo for forbidden strings; expect **0 hits**: `corp.equinix`, `sidekick-pf`, `eap-`, `service-now.com`, `apigw`, `SID-`.
- [ ] Mobile: the AgenticWork flow strip stacks vertically with rotated arrows.

## 7. Current-state findings that drove these changes (2026-10-01)
| Finding | Evidence |
|---|---|
| Portfolio says "AI Engineer, June 2023 - Present"; resume said "Senior Associate SWE, Feb 2023 - Present" | `Experience.tsx` vs old `resume.tex`; resolved with the user: Staff AI Engineer since Mar 2026 |
| No GCP or agentic work anywhere on the site | Full component read |
| Broken nav anchor `#model` | `Header.tsx:11` vs `Project.tsx` `id="projects"` |
| Stale live `/home` route with wrong links | `src/app/home/page.tsx`; HTTP 200 on `/home` |
| Parents Portal links to the wrong repo | `Project.tsx` (`expo-client` used twice) |
| Rocket.Chat "+20% engagement" on an unmerged PR | GitHub API: PR #32475 `state=open, merged=false` |
| Lightdash PR title: "fix: open threshold edit modal on click of link" (merged 2024-11-01) | GitHub API. Wording aligned to the actual change |

Related: [[Professional_Profile_Update]] · Consistency table: [[Professional_Profile_Update#Appendix C Cross-platform consistency]]
