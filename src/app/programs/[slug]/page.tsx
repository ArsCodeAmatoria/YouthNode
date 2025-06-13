'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, Cpu, Car, Shield, Users, TrendingUp, Home, LineChart, Wallet, Coins } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { LucideIcon } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Program data with detailed information
const programData: Record<string, {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
  skills: string[];
  applications: string[];
  careers: string[];
  partners: string[];
}> = {
  'generative-art-video': {
    title: 'Generative Art & Video',
    icon: Cpu,
    color: 'maple-red',
    description: 'Create stunning AI-generated art and video content using cutting-edge generative models. Master tools like Midjourney, DALL-E, Runway, and Sora to build the future of creative technology.',
    skills: ['Midjourney & DALL-E mastery', 'Runway ML video generation', 'ComfyUI workflows', 'Stable Diffusion training', 'AI video editing'],
    applications: ['Digital marketing campaigns', 'Entertainment & film industry', 'Social media content creation', 'NFT and blockchain art', 'Educational content production'],
    careers: ['Creative AI Engineer: $85K-$125K', 'Digital Content Creator', 'AI Art Director', 'Generative Media Specialist', 'Creative Technology Consultant'],
    partners: ['National Film Board of Canada', 'Ubisoft Montreal', 'Shopify Creative Studios', 'CBC Digital Innovation', 'Toronto International Film Festival']
  },
  'robotics-engineering': {
    title: 'Robotics & Engineering',
    icon: Cpu,
    color: 'forest-green',
    description: 'Build intelligent robots and automated systems that solve real-world problems. Work with ROS, embedded systems, and advanced sensors to create the next generation of Canadian robotics.',
    skills: ['ROS (Robot Operating System)', 'Embedded C/C++ programming', 'Sensor integration & fusion', 'Computer vision for robotics', 'Mechanical design & 3D printing'],
    applications: ['Manufacturing automation', 'Healthcare robotics', 'Agricultural automation', 'Space exploration robotics', 'Service & companion robots'],
    careers: ['Robotics Engineer: $95K-$140K', 'Automation Specialist', 'Research & Development Engineer', 'Embedded Systems Developer', 'Robotics Startup Founder'],
    partners: ['Clearpath Robotics', 'Canadian Space Agency', 'Ontario Institute of Technology', 'MDA Robotics', 'Kinova Robotics']
  },
  'ai-ethics-safety': {
    title: 'AI Ethics & Safety',
    icon: Shield,
    color: 'icy-blue',
    description: 'Ensure AI systems are safe, fair, and beneficial for all Canadians. Study bias detection, interpretability, and responsible AI deployment in critical systems.',
    skills: ['AI bias detection & mitigation', 'Explainable AI (XAI)', 'Privacy-preserving ML', 'AI governance frameworks', 'Ethical decision-making systems'],
    applications: ['Healthcare AI safety', 'Financial services compliance', 'Government AI policy', 'Autonomous vehicle safety', 'Social media algorithm auditing'],
    careers: ['AI Ethics Specialist: $100K-$150K', 'AI Policy Researcher', 'Algorithmic Auditor', 'AI Safety Engineer', 'Tech Policy Advisor'],
    partners: ['Vector Institute Ethics Lab', 'Office of the Privacy Commissioner', 'Montreal AI Ethics Institute', 'University of Toronto AI Institute', 'Canadian Institute for Advanced Research']
  },
  'autonomous-systems': {
    title: 'Autonomous Systems',
    icon: Car,
    color: 'maple-red',
    description: 'Design self-driving vehicles and autonomous navigation systems. Work with LIDAR, computer vision, and path planning to build Canadian autonomous vehicle technology.',
    skills: ['Computer vision & LIDAR', 'Path planning algorithms', 'Sensor fusion', 'Real-time decision making', 'Vehicle control systems'],
    applications: ['Autonomous vehicles', 'Smart city transportation', 'Warehouse automation', 'Mining & construction vehicles', 'Maritime autonomous systems'],
    careers: ['Autonomous Systems Engineer: $110K-$160K', 'Self-Driving Car Developer', 'Robotics Navigation Specialist', 'Smart Transportation Planner', 'AV Startup Founder'],
    partners: ['BlackBerry QNX', 'General Motors Canada', 'University of Waterloo Centre for Automotive Research', 'Transport Canada AV Testing', 'MaRS Autonomous Vehicle Innovation Network']
  },
  'workshop-creation': {
    title: 'Workshop Creation',
    icon: Users,
    color: 'forest-green',
    description: 'Learn to design and deliver engaging technical workshops that teach others cutting-edge skills. Develop presentation, curriculum design, and community building expertise.',
    skills: ['Curriculum design & development', 'Public speaking & presentation', 'Interactive learning techniques', 'Community engagement', 'Educational technology tools'],
    applications: ['Corporate training programs', 'University guest lectures', 'Conference workshops', 'Online course creation', 'Tech community events'],
    careers: ['Technical Trainer: $70K-$110K', 'Developer Advocate', 'Education Technology Specialist', 'Workshop Facilitator', 'Training Program Manager'],
    partners: ['Ladies Learning Code', 'Canada Learning Code', 'Shopify Academy', 'University continuing education programs', 'Tech conference organizers']
  },
  'pitching-presentations': {
    title: 'Pitching & Presentations',
    icon: TrendingUp,
    color: 'icy-blue',
    description: 'Master the art of compelling technical presentations and startup pitches. Learn storytelling, slide design, and persuasive communication for Canadian innovation ecosystems.',
    skills: ['Storytelling & narrative structure', 'Slide design & visual communication', 'Public speaking confidence', 'Pitch deck development', 'Investor communication'],
    applications: ['Startup pitch competitions', 'Technical conference presentations', 'Client proposals & demos', 'Funding applications', 'Research presentations'],
    careers: ['Business Development: $80K-$130K', 'Technical Sales Engineer', 'Startup Founder', 'Product Marketing Manager', 'Innovation Consultant'],
    partners: ['Creative Destruction Lab', 'Techstars Toronto', 'MaRS Discovery District', 'Innovation Works', 'Canadian Innovation Exchange']
  },
  'networking-leadership': {
    title: 'Networking & Leadership',
    icon: Users,
    color: 'maple-red',
    description: 'Build powerful professional networks and develop leadership skills essential for Canadian tech careers. Learn relationship building, team management, and influence.',
    skills: ['Professional relationship building', 'Team leadership & management', 'Conflict resolution', 'Strategic thinking', 'Personal branding'],
    applications: ['Tech team leadership', 'Professional networking events', 'Mentorship programs', 'Industry partnerships', 'Career advancement'],
    careers: ['Engineering Manager: $120K-$180K', 'Technical Team Lead', 'Business Development Manager', 'Community Manager', 'Tech Executive'],
    partners: ['Canadian Technology Leaders Forum', 'Women in Tech organizations', 'Young Professionals Networks', 'Industry mentorship programs', 'Leadership development institutes']
  },
  'entrepreneurship': {
    title: 'Entrepreneurship',
    icon: Brain,
    color: 'forest-green',
    description: 'Launch and scale technology startups in the Canadian innovation ecosystem. Learn business model design, market validation, and fundraising from successful Canadian entrepreneurs.',
    skills: ['Business model development', 'Market research & validation', 'Financial planning & fundraising', 'Product-market fit', 'Scale-up strategies'],
    applications: ['Tech startup founding', 'Corporate innovation labs', 'Venture capital analysis', 'Business plan development', 'Innovation consulting'],
    careers: ['Startup Founder: Equity-based', 'Product Manager: $90K-$140K', 'Business Analyst', 'Venture Capital Analyst', 'Innovation Consultant'],
    partners: ['Y Combinator (Canadian alumni)', 'Shopify Partners Program', 'Business Development Bank of Canada', 'Regional Innovation Centers', 'Angel investor networks']
  },
  'quant-trading': {
    title: 'Quantitative Trading',
    icon: LineChart,
    color: 'icy-blue',
    description: 'Master the intersection of finance and mathematics. Build sophisticated trading models, analyze market patterns, and develop high-frequency trading systems for Canadian financial markets.',
    skills: ['Statistical Arbitrage', 'Time Series Analysis', 'Machine Learning for Finance', 'Risk Management', 'High-Frequency Trading'],
    applications: ['Market Making Strategies', 'Portfolio Optimization', 'Options Trading', 'Statistical Arbitrage Systems', 'Risk Analysis Tools'],
    careers: ['Quantitative Trader: $150K-$300K', 'Risk Manager', 'Portfolio Manager', 'Quant Developer', 'Research Analyst'],
    partners: ['RBC Capital Markets', 'TD Securities', 'BMO Financial Group', 'Canadian Pension Fund', 'TMX Group']
  },
  'algorithmic-trading': {
    title: 'Algorithmic Trading',
    icon: TrendingUp,
    color: 'maple-red',
    description: 'Design and implement automated trading systems. Learn to build, test, and deploy trading algorithms that operate in real-time across multiple Canadian and global markets.',
    skills: ['Trading Algorithm Design', 'Backtesting Systems', 'Market Microstructure', 'Real-time Data Processing', 'Trading Infrastructure'],
    applications: ['Automated Trading Systems', 'Market Making Bots', 'Signal Generation', 'Order Execution', 'Alpha Strategy Development'],
    careers: ['Algo Trading Developer: $120K-$250K', 'Trading Systems Engineer', 'Strategy Developer', 'Market Structure Analyst', 'Trading Infrastructure Engineer'],
    partners: ['CIBC Markets', 'National Bank Financial', 'Scotiabank Trading', 'Virtu Financial Canada', 'Independent Trading Group']
  },
  'web3-blockchain': {
    title: 'Web3 & Blockchain',
    icon: Wallet,
    color: 'forest-green',
    description: 'Build the future of decentralized finance and Web3 applications. Learn blockchain development, smart contracts, and DeFi protocols while working with Canadian crypto innovators.',
    skills: ['Smart Contract Development', 'DeFi Protocol Design', 'Blockchain Architecture', 'Web3 Integration', 'Cryptographic Systems'],
    applications: ['DeFi Platforms', 'NFT Marketplaces', 'DAO Frameworks', 'Cross-chain Bridges', 'Digital Asset Systems'],
    careers: ['Blockchain Developer: $100K-$200K', 'Smart Contract Engineer', 'DeFi Protocol Designer', 'Web3 Solutions Architect', 'Crypto Product Manager'],
    partners: ['Ethereum Foundation Canada', 'Dapper Labs', 'WonderFi', 'Ledn', 'Newton Crypto']
  },
  'fintech-innovation': {
    title: 'FinTech Innovation',
    icon: Coins,
    color: 'icy-blue',
    description: 'Transform traditional finance with cutting-edge technology. Build next-generation payment systems, lending platforms, and financial infrastructure for Canadian institutions.',
    skills: ['Payment Systems Development', 'Banking APIs', 'Regulatory Technology', 'Financial Data Analysis', 'Security & Compliance'],
    applications: ['Digital Banking Platforms', 'Payment Processing', 'Lending Systems', 'Wealth Management Tools', 'Regulatory Compliance'],
    careers: ['FinTech Engineer: $90K-$180K', 'Product Manager', 'Solutions Architect', 'Compliance Tech Specialist', 'Digital Banking Lead'],
    partners: ['Wealthsimple', 'Shopify Payments', 'Borrowell', 'Koho Financial', 'Nuvei']
  }
};

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = use(params);
  const program = programData[slug];

  if (!program) {
    notFound();
  }

  const IconComponent = program.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-icy-blue transition-colors group">
            <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg">YouthNode</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden canadian-gradient min-h-[60vh] flex items-center justify-center canadian-pattern pt-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <IconComponent className={`h-16 w-16 mx-auto text-${program.color} mb-4`} />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-canadian"
              variants={fadeInUp}
            >
              {program.title}
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              {program.description}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className={`bg-${program.color} hover:bg-${program.color}-dark text-white px-8 py-6 text-lg rounded-2xl northern-glow hover-lift`}
              >
                Apply to Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Program Overview
            </motion.h2>
            
            <motion.div 
              className="grid lg:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-icy-blue-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-icy-blue-dark">
                      Core Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {program.skills.map((skill, index) => (
                        <li key={index}>• <strong>{skill.split(':')[0]}:</strong> {skill.split(':')[1] || ''}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-maple-red-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-maple-red-dark">
                      Real Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {program.applications.map((application, index) => (
                        <li key={index}>• {application}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-forest-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-forest-green-dark">
                      Career Paths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {program.careers.map((career, index) => (
                        <li key={index}>• {career}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Partners */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Canadian Industry Partners
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {program.partners.map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full frost-border text-center">
                    <CardContent className="p-6">
                      <h3 className={`text-lg font-semibold text-${program.color}`}>{partner}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join Canada&apos;s next generation of innovators. Applications are now open.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button 
                size="lg" 
                className={`bg-${program.color} hover:bg-${program.color}-dark text-white px-8 py-6 text-lg rounded-2xl northern-glow hover-lift`}
              >
                Apply Now
              </Button>
              <Link href="/">
                <Button 
                  variant="outline"
                  size="lg" 
                  className="px-8 py-6 text-lg rounded-2xl hover-lift"
                >
                  Back to Programs
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 