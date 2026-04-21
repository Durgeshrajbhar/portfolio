---
{
  "title": "Akash Network",
  "date": "2025-04-20",
  "author": "Durgesh Rajbhar",
  "excerpt": "GPU.",
  "slug": "akash",
  "tags": ["web3", "gpu", "depin"]
}
---

# Akash Network

## Key Insights

- Fee revenue increased 11% QoQ to 715,000 AKT, and rose 4% to $860,000, supported by higher deployment volume and incremental improvements to billing and operational tooling.
- New leases grew 42% QoQ to 27,000, reflecting increased model availability, mid-quarter Console and API enhancements, and greater developer activity ahead of upcoming GPU expansion initiatives.
- GPU demand remained stable, with usage at 367 units (-1% QoQ) and utilization consistently above 50%, indicating steady consumption of decentralized inference workloads despite a reduction in total capacity.
- Governance activity continued to progress, supporting community programs, analytics infrastructure, marketing initiatives, and provider incentive pilots in preparation for upcoming GPU expansion.
- Akash expanded its AI model support with the integration of GPT-OSS-120B, Qwen3-Next-80B-A3B, Pluralis Node-0-7.5B, and DeepSeek-V3.1, while Console and API upgrades improved usability and contributed to increased tenant experimentation.

## Primer

Akash (AKT) is a decentralized cloud computing marketplace that facilitates the buying and selling of compute resources. It is an open-source, permissionless protocol that provides an alternative to today's centralized cloud services (i.e., AWS, Azure, and Google Cloud). Akash aims to leverage underutilized server capacity, which can range from 5% to over 30%. Akash is a Tendermint-based, Layer-1 network built using the Cosmos SDK. Marketplace activity (requests, bids, lease details, etc.) is stored onchain, and payments are settled with Akash's native token, AKT.

The Akash marketplace functions via a reverse auction, giving users the ability to name a price and describe the resources they want for deployments. Akash's decentralized network of compute providers runs its open-source software and competes to provide resources, often at a fraction of the cost of big cloud providers. Specifically, Akash hosts containers where users can run any cloud-native application (e.g., AI workloads, gaming servers, blockchain nodes, and websites). Akash offers extensive cloud management services like Kubernetes, which can be used for hosting and managing containers. Additionally, Akash supports decentralized AI applications such as Venice.ai, AkashChat, and AkashGen, reflecting its role in enabling AI infrastructure.

## Key Metrics

### Usage and Provider Analysis

**Leases and Revenue**

Akash's marketplace uses a reverse auction, in which users propose a bid that describes the resources they'd like to use for a deployment. When accepted, a lease is opened onchain, managing the activity of this relationship.

New leases on Akash Network represent agreements between users and providers for renting computational resources. New leases increased 42% QoQ, rising from 19,000 in Q2 2025 to 27,000 in Q3 2025, marking a rebound after two consecutive quarters of decline.

The rebound was driven by several factors, including expanded AI model availability (DeepSeek-V3.1, GPT-OSS-120B, Qwen3-Next-80B-A3B), mid-quarter Console and API upgrades that reduced deployment friction, and increased experimentation from developers preparing for Starcluster's forthcoming GPU expansion.

Active leases on Akash represent ongoing agreements where users utilize and manage computational resources on the network. Leases remain active as long as they are in use and cease once closed. While Q3 saw a 42% rebound in new leases, this did not translate proportionally into higher active leases or revenue, as most activity came from short-duration inference jobs driven by new model integrations and pre-Starcluster testing. Daily active leases rose only 11% QoQ, with burst-style deployments contributing minimally to sustained usage. Provider churn further constrained long-running capacity. Revenue grew modestly, with daily revenue up 2.9% to $9,300 and total lease revenue up 4% to $852,000 in Q3 2025, reflecting improved billing stability and tooling rather than an expansion in workload duration or scale.

Revenue from network transaction fees, which includes base fees, provider take rates, and other transaction-level costs, increased 11% QoQ in AKT terms, rising from 644,000 AKT in Q2 2025 to 715,000 AKT in Q3 2025. However, when measured in USD, network fee revenue increased only 4% QoQ, from $827,000 to $860,000. The gap between AKT-denominated growth and USD-denominated growth is explained by the 4% decline in AKT's price over the quarter (from $1.05 to $1.01), which partially offset the higher AKT-denominated fee volume.

### Resource Compute

**CPU Usage and Capacity:** CPU usage declined 12% QoQ, falling from an average of 5,520 vCPUs in Q2 to 4,880 in Q3 2025. This reversed the 14% QoQ increase recorded in Q2. CPU capacity also contracted, decreasing 3.2% from 20,900 vCPUs to 20,230 vCPUs, reflecting reduced supply as several smaller providers churned out of the network.

**Storage Usage and Capacity:** Storage usage declined 19% QoQ, dropping from 82 TB in Q2 to 67 TB in Q3. Storage capacity fell 16% QoQ, decreasing from 1,430 TB to 1,210 TB. The decline in both storage usage and capacity parallels reductions seen across CPU and RAM metrics and reflects a smaller cohort of active providers during the quarter.

**RAM Usage and Capacity:** RAM usage decreased 19% QoQ, from 19.1 TB in Q2 to 15.5 TB in Q3, while RAM capacity fell 7% from 146 TB to 136 TB. This pattern is consistent with the broader contraction in compute resources, driven by provider churn and reduced availability of long-running infrastructure suitable for large-scale training jobs. With fewer high-capacity providers online, Q3 workloads skewed toward shorter inference tasks rather than sustained, memory-intensive model runs.

### GPU Compute

GPU usage declined slightly by 1% QoQ, from an average of 370 GPUs to 367 in Q3 2025, while total GPU capacity fell 7% QoQ from 757 to 702 units as several smaller providers exited the network. The sharper drop in capacity relative to usage indicates that demand for GPU resources remained steady even as supply contracted, driven largely by an increase in short, burst-style inference workloads that lifted new lease counts without materially increasing sustained GPU consumption. As a result, GPU utilization remained above 50%, reflecting stable underlying demand despite reduced provider participation and a workload mix that favored rapid inference jobs over long-running training tasks.

### Active Providers

Akash's permissionless network allows resource providers to join from anywhere in the world, creating a geographically diverse and resilient infrastructure. This global distribution enhances the network's ability to withstand regional disruptions, such as natural disasters, power outages, or political instability. It also improves performance by enabling tasks to be processed closer to end users, reducing latency and optimizing data transfer efficiency.

Active providers declined from 70 to 63 in Q3 2025, an 11% QoQ decrease, marking the first contraction after multiple consecutive quarters of growth. The pullback reflects several overlapping dynamics: smaller operators exited the network as GPU pricing tightened, providers reprioritized in anticipation of Starcluster's upcoming protocol-owned GPU supply, and some infrastructure churned as the network prepared for the Mainnet 14 upgrade. This resulted in a leaner but more GPU-specialized provider set, consistent with the broader shift toward shorter inference workloads and reduced CPU, RAM, and storage capacity observed across the quarter.

## Token Analysis

Akash's circulating market capitalization declined 1.3% QoQ in Q3 2025, falling from $284.5 million to $280.8 million. The AKT token price decreased 3.8% over the same period, from $1.05 to $1.01. The modest decline in market cap reflects the small movement in token price, combined with continued growth in circulating supply. AKT's slight price contraction occurred despite stable network fundamentals, including a rebound in new leases and steady GPU usage, amid lower staking participation (-7.6% QoQ) and broader cooling across DePIN and AI-compute assets during the quarter.

## Qualitative Analysis

### Partnerships and Developments

During Q3 2025, Akash advanced key infrastructure, AI, and ecosystem initiatives, including engineering work for Mainnet 14, expanded model support, and the initial setup for Starcluster. The network focused on improving reliability and developer usability ahead of upcoming GPU and product launches.

#### Mainnet 14 Upgrade Preparation

Throughout Q3 2025, Akash focused on engineering work required to deliver Mainnet 14, a major core upgrade that formally launched on Oct. 28, 2025. The release migrated the network from Cosmos SDK v0.45 to v0.53, modernizing the underlying codebase, improving network performance, and reducing years of accumulated technical debt.

Mainnet 14 consolidated several Akash Enhancement Proposals (AEPs) and system-level improvements, including:

- **Managed Wallets / Credit Card API (AEP-63):** Introduces programmatic, credit-card–based payment flows for deployments, reducing friction for non-crypto-native enterprises.
- **JWT Authentication for Providers (AEP-64):** Adds token-based authentication to provider APIs, improving security and enabling integration with external orchestration systems.
- **Provider Lease Termination Reasons (AEP-39):** Adds structured metadata for lease termination events, improving observability and making tenant troubleshooting more transparent.
- **IAVL Storage and Performance Enhancements:** Upgrades Akash's state tree to match the performance improvements in newer Cosmos SDK releases, reducing block processing overhead and improving responsiveness.
- **Expedited Governance Paths:** Provides streamlined voting flows for low-risk proposals, reducing governance bottlenecks during periods of rapid iteration.
- **Multi-Depositor Escrow Enhancements:** Enables multiple funding sources for deployments and prepares the payment system for more flexible enterprise billing flows.

#### Starcluster and Protocol-Owned Compute Expansion

Akash entered a new strategic phase in Q3 2025 following the introduction of Starcluster, first unveiled at Akash Accelerate on June 23, 2025. Starcluster is a protocol-owned compute system combining centrally managed datacenters with Akash's decentralized GPU marketplace to form a planetary mesh optimized for training and inference.

Starcluster is designed to be financed through Starbonds, a regulated U.S. investment instrument with an offering cap of up to $75 million. The planned raise is intended to fund the acquisition of approximately 7,200 NVIDIA GB200 GPUs, which would be operated by vetted, enterprise-grade datacenter "Nodekeepers." This structure reduces infrastructure risk for operators, expands access to high-grade GPU supply, and positions the network to support hyperscale AI demand as Starcluster hardware begins coming online in late 2025 and into early 2026.

#### AI Ecosystem Expansion & Frontier Model Deployments

Akash continued strengthening its position as a decentralized AI backend during Q3 through major model integrations across AkashChat and ChatAPI, including:

- **GPT-OSS-120B** (August 6), an open alternative to frontier models with API support.
- **Qwen3-Next-80B-A3B** (September 12), offering advanced tool use and reasoning.
- **Pluralis Node-0-7.5B** (September 19), a distributed pretraining framework designed for experimentation on decentralized clusters.
- **DeepSeek-V3.1** (August 21), offering high-performance multilingual reasoning.

These additions broadened the availability of inference-ready open models and expanded Akash's usage in agentic, enterprise, and experimental workloads.

#### Developer & Console Upgrades

Akash shipped multiple developer-focused improvements throughout Q3, reducing operational overhead for tenants and providers:

- **Automatic Escrow Top-Up** (Aug 14): Prevented accidental lease failures by enabling automated balance monitoring and replenishment.
- **Alerts & Notifications System** (Aug 15): Introduced email notifications for low escrow, deployment closures, billing milestones, and provider operations.
- **Managed Wallets / Credit Card API v1** (Aug 16): Enabled programmatic deployments using credit cards, enabling non-crypto-native enterprises to run workloads on Akash.
- **Billing & Usage Analytics** (Aug 17): Added detailed receipts and historical usage insights for tenants and enterprises.
- **Provider Earnings API v1** (Aug 18): Allowed providers to programmatically track income, smoothing onboarding for datacenters preparing for Starcluster.

Collectively, these updates improved reliability, lowered technical friction, and supported enterprise adoption ahead of upcoming GPU inflows.

#### AkashML Launch: Managed Inference Layer on Decentralized GPUs

AkashML, Akash's managed inference layer, was widely speculated throughout Q3 2025 as the network's next major AI product following early internal demos and community hints. AkashML's launch was officially announced on November 22, 2025. The service provides an OpenAI-compatible API, automated scaling across roughly 65 datacenters, and support for leading open-source models. AkashML abstracts underlying model-server infrastructure such as vLLM and TGI, offering a simplified deployment experience while maintaining the cost efficiency of decentralized GPUs.

#### Community Contribution Program & Open-Source Output

Akash introduced a multi-tier community contribution pipeline in early Q4 that enables contributors to build recurring open-source projects rather than one-off submissions. Early outputs included a community-built Akash VPN service and a provider-native Akash Transaction Explorer. This program formalized a scalable structure for contributor-led development and strengthened Akash's grassroots technical ecosystem.

### Governance

Governance activity in Q3 2025 focused on scaling community programs, expanding ecosystem visibility, supporting GPU pilots, and preparing for large-scale network upgrades tied to Starcluster and AkashML. Key proposals included:

- **Proposal 293 – Growth Marketing Program** (July 2): Approved a $4.7 million AKT budget for long-term marketing initiatives including digital campaigns, PR, enterprise targeted outreach, regional events, brand development, and funnel creation for high-value workloads.
- **Proposal 294 – IBC Client Reactivation for Umee** (July 7): Restored the IBC link between Akash and Umee, ensuring continued cross-chain compatibility and enabling interchain asset movements essential for DePIN and DeAI use cases.
- **Proposal 295 – Q3 Community Programs Funding** (July 10): Funded Vanguards, Navigators, Alchemists, and Ringmasters, maintaining structured contributor pathways and introducing Regional Leads for globally coordinated ecosystem growth.
- **Proposal 296 – Zealy Season Funding** (July 11): Approved Q3 support for Zealy participation, enabling ongoing community engagement and task-based learning incentive programs.
- **Proposal 297 – Tenant Incentive Pilot** (August 6): Allocated budget for a $400k tenant incentive program, including $100 KYC-gated free trials and $250–$1,000 compute credits for vetted high-value workloads.
- **Proposal 298 – Funding the AkashChat / ChatAPI / AkashGen Roadmap** (August 15): Allocated $1.19 million AKT for H1 2025 (with projected H2 expenses) to continue development of conversational AI, image generation, and inference services.
- **Proposals 299 & 301 – Blockworks Research Dashboard Partnership** (August 19-20): Approved a $95,000 USD funding for partnership with Blockworks to deliver an institutional-grade analytics dashboard for Akash.
- **Proposal 300 – Q3 2025 Events Budget** (August 20): Allocated funding for regional and global events, including PyTorch Conference, Token2049 Singapore, and various DeAI meetups.
- **Proposal 303 – Provider Incentive Pilot 3** (September 11): Supported structured GPU onboarding pilots for NVIDIA B200/B300, RTX Pro 6000, and 5090 series hardware.

### Community Programs and Ecosystem Support

#### Insiders Program Expansion

The Akash Insiders program continued in 2025 as a global contributor network with 61 registered contributors across 18 countries, organized into structured roles (Navigators, Ringmasters, Alchemists, Vanguards). Insiders support the ecosystem by producing documentation and educational content, moderating and mentoring community members, onboarding developers, and organising local and regional meetups worldwide.

#### Events and Ecosystem Outreach

A highlight was Akash Accelerate 2025 (June 23, 2025), a full-day summit bringing together protocol developers, AI/DePIN builders, and community members. The agenda featured panels on decentralized AI and compute infrastructure, showcases, and live demos.

Over Q3 and beyond, Akash participated in a broader set of conferences and meetups, including major industry gatherings, as part of its global outreach and developer onboarding efforts.

## Closing Summary

In Q3 2025, Akash Network's new leases rebounded 42% QoQ to 27,000 following two quarters of decline, though the surge was driven primarily by short-duration inference workloads rather than long-lived deployments. Despite this, revenue remained stable, with lease income rising 4% to $851,700 and network fee revenue growing 4% to $860,000, supported by improved billing stability and operational tooling. GPU usage held steady at -1% QoQ against a 7% contraction in capacity, keeping utilization above 50% as demand for inference workloads persisted.

The number of active providers declined from 70 to 63, an 11% QoQ decrease and the first pullback after multiple quarters of growth, as smaller operators exited ahead of Starcluster and during Mainnet 14 preparation. This trend contributed to reductions across CPU, RAM, and storage supply, shifting the network's workload mix toward shorter, burst-style deployments. Governance remained active with proposals funding community programs, incentive pilots, analytics infrastructure, and marketing initiatives, and Akash expanded its AI backend capabilities through new frontier model deployments and multiple Console and API upgrades.

Overall, Q3 2025 reflected a repositioning phase for Akash as the network prepared for major supply expansions and product launches. While provider capacity tightened and long-running workloads moderated, underlying demand for decentralized inference compute remained steady, and revenue stabilized. With Mainnet 14 delivered and foundational work for Starcluster and AkashML underway, Akash entered Q4 with strengthened infrastructure and growing momentum toward enterprise-scale AI adoption.

---

*Let us know what you loved about the report, what may be missing, or share any other feedback by filling out form. All responses are subject to our Privacy Policy and Terms of Service.*


*No part of this report may be (a) copied, photocopied, duplicated in any form by any means or (b) redistributed without the prior written consent of durgesh rajbhar.*