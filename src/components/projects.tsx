'use client';
import React from 'react';
import { Gallery6 } from '@/components/blocks/gallery6';

const PROJECT_ITEMS = {
	heading: "Featured Projects",
	demoUrl: "#",
	items: [
		{
			id: "1",
			title: "SentinelSIEM",
			summary: "Architected a full SOC monitoring lab processing 400+ live security alerts. Integrated FIM, IOC threat intelligence feeds, and custom Wazuh detection rules mapped to MITRE ATT&CK tactics.",
			url: "https://github.com/seetharamdamarla/SentinelSIEM",
			image: "https://drive.google.com/thumbnail?id=1KDH6fpKDNMxV4jRdYyA6tZbeDKNpEJ_B&sz=w1200",
		},
		{
			id: "2",
			title: "Personal Firewall",
			summary: "Built an end-to-end SOC pipeline to detect port scans and floods. Automated kernel-level IP blocking via nftables and developed a 3D WebGL dashboard for real-time geo-visualization.",
			url: "https://github.com/seetharamdamarla/personal-firewall",
			image: "/personal-firewall.png",
		},
		{
			id: "3",
			title: "SSH Log Analysis",
			summary: "Ingested & correlated SSH auth logs using SPL queries to surface brute-force campaigns. Built automated threshold-based alerts and dashboards mapping attacker IPs to geo-origins.",
			url: "https://github.com/seetharamdamarla/ssh-log-analysis-splunk",
			image: "https://drive.google.com/thumbnail?id=1Qk_MGhmOvNYoomwxOZO6Ol_YJJrXyvDJ&sz=w1200",
		},
		{
			id: "4",
			title: "PhishGuard",
			summary: "Built an AI-powered phishing detection platform achieving 95% accuracy. Developed a real-time risk scoring engine to analyze threat indicators and a security awareness dashboard.",
			url: "#",
			image: "https://drive.google.com/thumbnail?id=1y6xhJT99MxQHcvVFAKHADsdjADZC9tFF&sz=w1200",
		},
	],
};

export function Projects() {
	return (
		<div id="projects" className="w-full bg-black text-white relative overflow-hidden pt-20 md:pt-28">
			<Gallery6 {...PROJECT_ITEMS} />
		</div>
	);
}
