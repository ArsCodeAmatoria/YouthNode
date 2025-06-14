'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import Link from 'next/link';
import { 
  ArrowRight, 
  Brain, 
  Cpu, 
  Plane, 
  Car, 
  Heart, 
  Cog, 
  Shield,
  Users,
  TrendingUp,
  MapPin,
  Mail,
  Twitter,
  Twitch,
  Github,
  LineChart,
  Wallet,
  Coins,
  Gamepad2,
  Calculator,
  Eye
} from 'lucide-react';
import ThreeJSBackground from '@/components/ThreeJSBackground';

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

export default function YouthNode() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black">
        {/* Three.js Mathematical Background */}
        <div className="absolute inset-0 z-0">
          <ThreeJSBackground />
        </div>
        
        {/* Vertical Footer Message */}
        <div className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="vintage-digital-text"
          >
            <div className="font-mono text-sm writing-mode-vertical matrix-rain">
              {'STATUS: ACTIVE • LOCATION: CANADA • YEAR: 2025 • TARGET: GEN_Z • [CLASSIFIED]'.split('').map((char, index) => {
                const text = 'STATUS: ACTIVE • LOCATION: CANADA • YEAR: 2025 • TARGET: GEN_Z • [CLASSIFIED]';
                const isClassified = index >= text.indexOf('[CLASSIFIED]') && index <= text.indexOf('[CLASSIFIED]') + '[CLASSIFIED]'.length - 1;
                return (
                  <span key={index} className={isClassified ? 'text-white/60' : 'text-lime-green-dark'}>
                    {char}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-20">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
                         <motion.h1 
               className="text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
               variants={fadeInUp}
             >
               Building Canada&apos;s Innovation Future
             </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-white/80 mb-6 max-w-3xl mx-auto drop-shadow-md"
              variants={fadeInUp}
            >
              Empowering Gen Z with skills in AI, Deep Tech, and Emerging Industries
            </motion.p>
            <motion.div 
              className="mb-8 flex justify-center"
              variants={fadeInUp}
            >
              <div className="relative bg-gradient-to-r from-indigo-600/25 to-purple-600/25 border border-indigo-400/50 rounded-full px-8 py-3 backdrop-blur-md shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-md"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-300 rounded-full animate-pulse"></div>
                  <span className="text-indigo-100 font-bold text-sm tracking-wide uppercase">
                    2-Year Pilot Program
                  </span>
                  <span className="text-indigo-200/80 font-medium text-sm">
                    • Launching 2025
                  </span>
                </div>
              </div>
            </motion.div>
                         <motion.div variants={fadeInUp}>
               <Button 
                 size="lg" 
                 className="bg-lime-green hover:bg-lime-green-dark text-white px-8 py-6 text-lg rounded-2xl group lime-shadow hover-lift tech-glow backdrop-blur-sm border border-lime-green/30"
                 onClick={() => scrollToSection('mission')}
               >
                 Read the Mission
                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </Button>
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-tech-gray/30 bg-gradient-to-br from-card to-tech-gray-light/20 hover-lift liquid-glass">
                <CardHeader>
                  <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                    <Users className="h-8 w-8 text-lime-green-dark" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    Discover and develop exceptional Canadian talent through project-oriented, 
                    hands-on learning experiences. We identify high-potential Gen Z individuals and 
                    equip them with the skills, networks, and confidence needed to create innovative 
                    Canadian businesses that compete globally while staying rooted at home.
                  </p>
                  <div className="bg-lime-green/10 border border-lime-green/30 rounded-lg p-4">
                    <p className="text-sm text-lime-green-dark font-semibold mb-1">
                      PILOT PROGRAM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This is a 2-year pilot initiative designed to identify exceptional Canadian talent and 
                      foster the creation of innovative Canadian businesses before scaling nationwide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-lime-green/30 bg-gradient-to-br from-card to-lime-green-light/20 hover-lift lime-shadow">
                <CardHeader>
                  <CardTitle className="text-3xl text-foreground flex items-center gap-3">
                    <TrendingUp className="h-8 w-8 text-lime-green-dark" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A Canada where exceptional talent stays home to build world-class businesses. 
                    We envision a thriving ecosystem of Canadian-founded companies that compete 
                    globally, retain top talent domestically, and establish Canada as the premier 
                    destination for innovation and entrepreneurship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-8 text-foreground"
              variants={fadeInUp}
            >
              The Innovation Gap
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">#23</div>
                <p className="text-sm text-muted-foreground">Global Innovation Index Ranking</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">67%</div>
                <p className="text-sm text-muted-foreground">of AI talent leaves for Silicon Valley</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">$2.1B</div>
                <p className="text-sm text-muted-foreground">Investment gap vs. US per capita</p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-6">
                Despite Canada&apos;s world-class education infrastructure and research institutions, 
                our innovation output lags behind global peers. High-potential youth are undertrained 
                in applied deep tech, and our startups struggle to find AI-ready local talent.
              </p>
              <p>
                The result? Canada becomes a talent exporter rather than an innovation leader, 
                missing out on the economic and strategic benefits of the AI revolution.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data-Driven Impact */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground"
              variants={fadeInUp}
            >
              The Canadian Advantage
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto"
              variants={fadeInUp}
            >
              Data shows Canadian-born Gen Z has unique advantages in the global innovation economy. 
              YouthNode amplifies these strengths while addressing critical gaps.
            </motion.p>
            
            <motion.div 
              className="grid lg:grid-cols-3 gap-8 mb-16"
              variants={staggerContainer}
            >
              {/* Brain Drain Chart */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-tech-gray-light/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground text-center">
                      Canadian Talent Migration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 mb-4">
                      <Doughnut 
                        data={{
                          labels: ['Stay in Canada', 'Move to US/Global'],
                          datasets: [{
                            data: [33, 67],
                            backgroundColor: [
                              'oklch(0.55 0.22 25)',
                              'oklch(0.7 0.08 240)'
                            ],
                            borderWidth: 0
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              position: 'bottom',
                              labels: { font: { size: 12 } }
                            }
                          }
                        }}
                      />
                    </div>
                                         <p className="text-sm text-muted-foreground text-center">
                       <strong className="text-lime-green-dark">67% of Canadian AI talent</strong> leaves for 
                       Silicon Valley. YouthNode creates compelling reasons to stay.
                     </p>
                  </CardContent>
                </Card>
              </motion.div>

                             {/* Innovation Rankings */}
               <motion.div variants={fadeInUp}>
                 <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/10">
                   <CardHeader>
                     <CardTitle className="text-xl text-foreground text-center">
                       Global Innovation Potential
                     </CardTitle>
                   </CardHeader>
                  <CardContent>
                    <div className="h-64 mb-4">
                      <Bar 
                        data={{
                          labels: ['Current Rank', 'Potential with YouthNode'],
                          datasets: [{
                            label: 'Global Innovation Index',
                            data: [23, 8],
                            backgroundColor: ['oklch(0.7 0.08 240)', 'oklch(0.4 0.15 150)'],
                            borderRadius: 8
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              reverse: true,
                              max: 30,
                              title: {
                                display: true,
                                text: 'Rank (Lower = Better)'
                              }
                            }
                          },
                          plugins: {
                            legend: { display: false }
                          }
                        }}
                      />
                    </div>
                                         <p className="text-sm text-muted-foreground text-center">
                       Canada ranks <strong className="text-tech-gray-dark">#23 globally</strong> but has 
                       potential for <strong className="text-lime-green-dark">top 10</strong> with proper youth development.
                     </p>
                  </CardContent>
                </Card>
              </motion.div>

                             {/* Economic Impact */}
               <motion.div variants={fadeInUp}>
                 <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/10">
                   <CardHeader>
                     <CardTitle className="text-xl text-foreground text-center">
                       Economic Impact Projection
                     </CardTitle>
                   </CardHeader>
                  <CardContent>
                    <div className="h-64 mb-4">
                      <Line 
                        data={{
                          labels: ['2024', '2026', '2028', '2030', '2032'],
                          datasets: [{
                            label: 'GDP Impact (Billions CAD)',
                            data: [0, 0.8, 2.5, 5.2, 9.1],
                            borderColor: 'oklch(0.4 0.15 150)',
                            backgroundColor: 'oklch(0.4 0.15 150 / 0.1)',
                            fill: true,
                            tension: 0.4
                          }]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              title: {
                                display: true,
                                text: 'GDP Contribution (CAD Billions)'
                              }
                            }
                          },
                          plugins: {
                            legend: { display: false }
                          }
                        }}
                      />
                    </div>
                                         <p className="text-sm text-muted-foreground text-center">
                       Projected <strong className="text-lime-green-dark">$9.1B annual GDP contribution</strong> 
                       by 2032 through retained Canadian talent.
                     </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Competitive Advantages */}
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mb-16"
              variants={staggerContainer}
            >
                             <motion.div variants={fadeInUp}>
                 <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-tech-gray-light/10">
                   <CardHeader>
                     <CardTitle className="text-2xl text-foreground text-center">
                       Canadian-Born Gen Z Advantages
                     </CardTitle>
                   </CardHeader>
                  <CardContent>
                    <div className="h-80 mb-4">
                      <Bar 
                        data={{
                          labels: ['Cultural Integration', 'Language Fluency', 'Network Access', 'Government Support', 'Innovation Mindset'],
                          datasets: [
                            {
                              label: 'Canadian-Born',
                              data: [95, 98, 85, 90, 88],
                              backgroundColor: 'oklch(0.55 0.22 25)',
                              borderRadius: 4
                            },
                            {
                              label: 'Foreign-Born',
                              data: [65, 75, 45, 60, 82],
                              backgroundColor: 'oklch(0.7 0.08 240)',
                              borderRadius: 4
                            }
                          ]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              max: 100,
                              title: {
                                display: true,
                                text: 'Advantage Score'
                              }
                            }
                          },
                          plugins: {
                            legend: {
                              position: 'top'
                            }
                          }
                        }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Canadian-born youth have inherent advantages in cultural integration, 
                      professional networks, and government program access that YouthNode maximizes.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground text-center">
                      Job Creation Potential
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 mb-4">
                      <Bar 
                        data={{
                          labels: ['Direct Jobs', 'Indirect Jobs', 'Startup Jobs', 'Research Positions'],
                          datasets: [
                            {
                              label: '2025',
                              data: [250, 500, 150, 100],
                              backgroundColor: 'oklch(0.4 0.15 150)',
                              borderRadius: 4
                            },
                            {
                              label: '2030',
                              data: [1200, 3500, 800, 600],
                              backgroundColor: 'oklch(0.55 0.12 150)',
                              borderRadius: 4
                            }
                          ]
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              title: {
                                display: true,
                                text: 'Number of Jobs'
                              }
                            }
                          },
                          plugins: {
                            legend: {
                              position: 'top'
                            }
                          }
                        }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      YouthNode graduates create jobs not just for themselves, but generate 
                      employment for 2.5x more Canadians through startups and innovation projects.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Key Statistics Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">85%</div>
                <p className="text-sm text-muted-foreground">Higher startup success rate for teams with Canadian-born founders</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">3.2x</div>
                <p className="text-sm text-muted-foreground">More likely to stay in Canada post-graduation vs foreign students</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">$127K</div>
                <p className="text-sm text-muted-foreground">Average starting salary for YouthNode-skilled developers</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-lime-green-dark mb-2">42%</div>
                <p className="text-sm text-muted-foreground">Faster time-to-productivity in Canadian companies</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              The YouthNode Solution
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-lime-green/20 hover:border-lime-green/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-foreground">Project-Oriented Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn by building real solutions. Our project-based approach combines technical 
                      skills in AI, quantum computing, and emerging tech with practical application. 
                      Students build portfolios while solving actual industry challenges.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-tech-gray/20 hover:border-tech-gray/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-foreground">Communication & Leadership Hub</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Master the art of pitching, public speaking, and workshop facilitation. 
                      Our networking hub connects youth with mentors, peers, and industry leaders 
                      while building essential presentation and leadership skills.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-lime-green/20 hover:border-lime-green/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-foreground">Future-Focused Curriculum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Curriculum guided by real employers and emerging industry needs, ensuring 
                      graduates are immediately valuable in the modern economy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-foreground/20 hover:border-foreground/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-foreground">Public-Private Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Strategic partnerships between government, industry, and academia to create 
                      sustainable talent pipelines and innovation ecosystems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-24 bg-gradient-to-br from-tech-gray/5 via-background to-lime-green/5">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              Learn by Building, Lead by Doing
            </motion.h2>
            
            <motion.div 
              className="grid lg:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-tech-gray-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <Cog className="h-6 w-6 text-lime-green-dark" />
                      Project-Based Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Every skill is learned through real-world projects. Build AI applications, 
                      create quantum algorithms, design autonomous systems. Your portfolio grows 
                      as you learn, with tangible results that demonstrate your capabilities to 
                      future employers and collaborators.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <Users className="h-6 w-6 text-lime-green-dark" />
                      Workshop Leadership
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Learn to teach by creating and running workshops for peers and the community. 
                      Develop curriculum, facilitate discussions, and mentor others. This peer-to-peer 
                      teaching model reinforces your own learning while building invaluable leadership 
                      and communication skills.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-lime-green-dark" />
                      Pitch & Network Hub
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Master the art of presenting ideas through regular pitch sessions, demo days, 
                      and networking events. Connect with industry mentors, fellow innovators, and 
                      potential collaborators. Build the confidence and relationships essential for 
                      entrepreneurial success.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center bg-gradient-to-r from-tech-gray/10 via-lime-green/10 to-lime-green/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-tech">
                The YouthNode Experience
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Join a community where technical excellence meets communication mastery. Our students 
                don&apos;t just code—they lead workshops, pitch breakthrough ideas, and build the 
                professional networks that will power Canada&apos;s innovation future. Every project 
                is an opportunity to learn, teach, and connect.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Areas */}
      <section id="programs" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              Program Areas
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              {[
                { icon: Brain, title: 'AI & Machine Learning', color: 'text-lime-green-dark', slug: 'ai-machine-learning' },
                { icon: Cpu, title: 'Generative Art & Video', color: 'text-lime-green-dark', slug: 'generative-art-video' },
                { icon: Brain, title: 'Quantum Computing', color: 'text-lime-green-dark', slug: 'quantum-computing' },
                { icon: Plane, title: 'Drones & Automation', color: 'text-lime-green-dark', slug: 'drones-automation' },
                { icon: Heart, title: 'HealthTech', color: 'text-lime-green-dark', slug: 'healthtech' },
                { icon: Cog, title: 'Robotics & Engineering', color: 'text-lime-green-dark', slug: 'robotics-engineering' },
                { icon: Shield, title: 'AI Ethics & Safety', color: 'text-lime-green-dark', slug: 'ai-ethics-safety' },
                { icon: Car, title: 'Autonomous Systems', color: 'text-lime-green-dark', slug: 'autonomous-systems' },
                { icon: Gamepad2, title: 'Gaming Development', color: 'text-lime-green-dark', slug: 'gaming-development' },
                { icon: Calculator, title: 'Mathematical Modeling', color: 'text-lime-green-dark', slug: 'mathematical-modeling' },
                { icon: Eye, title: 'Psychology & Technology', color: 'text-lime-green-dark', slug: 'psychology-tech' },
                { icon: LineChart, title: 'Quantitative Trading', color: 'text-lime-green-dark', slug: 'quant-trading' },
                { icon: TrendingUp, title: 'Algorithmic Trading', color: 'text-lime-green-dark', slug: 'algorithmic-trading' },
                { icon: Wallet, title: 'Web3 & Blockchain', color: 'text-lime-green-dark', slug: 'web3-blockchain' },
                { icon: Coins, title: 'FinTech Innovation', color: 'text-lime-green-dark', slug: 'fintech-innovation' },
                { icon: Shield, title: 'Cybersecurity', color: 'text-lime-green-dark', slug: 'cybersecurity' },
                { icon: Users, title: 'Workshop Creation', color: 'text-lime-green-dark', slug: 'workshop-creation' },
                { icon: TrendingUp, title: 'Pitching & Presentations', color: 'text-lime-green-dark', slug: 'pitching-presentations' },
                { icon: Users, title: 'Networking & Leadership', color: 'text-lime-green-dark', slug: 'networking-leadership' },
                { icon: Brain, title: 'Entrepreneurship', color: 'text-lime-green-dark', slug: 'entrepreneurship' },
              ].map((program, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Link href={`/programs/${program.slug}`} className="block">
                    <Card className="text-center hover-lift h-full liquid-glass bg-gradient-to-br from-card to-tech-gray/10 transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer">
                      <CardContent className="pt-6">
                        <program.icon className={`h-12 w-12 mx-auto mb-4 ${program.color} group-hover:scale-110 transition-transform duration-300`} />
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-300">{program.title}</h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Funding & Sustainability */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              Funding & Sustainability
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="hover-lift h-full liquid-glass bg-gradient-to-br from-card to-tech-gray-light/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Government Grants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Canada Digital Adoption Program</li>
                      <li>• Canada Summer Jobs (wage subsidies)</li>
                      <li>• IRAP (NRC) - tech R&D funding</li>
                      <li>• Innovative Solutions Canada</li>
                      <li>• Mitacs Accelerate/Edge internships</li>
                      <li>• Skills Development Fund (Provincial)</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="hover-lift h-full liquid-glass bg-gradient-to-br from-card to-lime-green-light/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Private Foundations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• RBC Future Launch</li>
                      <li>• TELUS Friendly Future Foundation</li>
                      <li>• Google.org AI/tech training grants</li>
                      <li>• Microsoft Philanthropies</li>
                      <li>• Trillium Foundation (Ontario)</li>
                      <li>• Local community foundations</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="hover-lift h-full liquid-glass bg-gradient-to-br from-card to-lime-green-light/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">Revenue Streams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Corporate workshop training</li>
                      <li>• Sponsorships (AWS, NVIDIA, Shopify)</li>
                      <li>• Crowdfunding campaigns</li>
                      <li>• GitHub Sponsors</li>
                      <li>• Consultation services</li>
                      <li>• Premium mentorship programs</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center bg-gradient-to-r from-tech-gray/10 via-lime-green/10 to-lime-green/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-tech">
                Sustainable Impact Model
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our diversified funding approach ensures long-term sustainability while maintaining our 
                nonprofit mission. Government partnerships provide foundational support, private foundations 
                enable program expansion, and earned revenue creates financial independence—all focused on 
                building Canada&apos;s innovation ecosystem.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Pathways & Tech Tracks */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              Career Pathways & Funnels
            </motion.h2>
            
            <motion.div 
              className="grid lg:grid-cols-3 gap-8 mb-12"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-tech-gray-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <Brain className="h-6 w-6 text-lime-green-dark" />
                      Skill Development Tracks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>AI/ML:</strong> Python, TensorFlow, PyTorch</li>
                      <li>• <strong>AI Art:</strong> Midjourney, RunwayML</li>
                      <li>• <strong>AI Video:</strong> Pika Labs, Sora, Runway</li>
                      <li>• <strong>Drones:</strong> ROS, PX4 navigation</li>
                      <li>• <strong>Autonomous Driving:</strong> CARLA simulators</li>
                      <li>• <strong>Quantum:</strong> IBM Qiskit, D-Wave, Xanadu</li>
                      <li>• <strong>HealthTech:</strong> Bioinformatics, ML diagnostics</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-lime-green-dark" />
                      Job Placement Funnel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Partner Networks:</strong> CDL, Techstars Canada</li>
                      <li>• <strong>Portfolio Development:</strong> Project showcases</li>
                      <li>• <strong>Resume Training:</strong> Technical storytelling</li>
                      <li>• <strong>Apprenticeships:</strong> Hands-on company experience</li>
                      <li>• <strong>Interview Prep:</strong> Technical & behavioral</li>
                      <li>• <strong>Industry Connections:</strong> Mentor networks</li>
                      <li>• <strong>Placement Support:</strong> Ongoing career guidance</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center gap-3">
                      <Cog className="h-6 w-6 text-lime-green-dark" />
                      Startup Incubator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Bootcamp Program:</strong> Top student selection</li>
                      <li>• <strong>MVP Development:</strong> Microfunded prototypes</li>
                      <li>• <strong>Business Registration:</strong> Incorporation & legal support</li>
                      <li>• <strong>Seed Funding:</strong> Crowdfunded + donor grants</li>
                      <li>• <strong>Accelerator Network:</strong> Canadian ecosystem</li>
                      <li>• <strong>Mentorship:</strong> Industry veteran guidance</li>
                      <li>• <strong>Demo Days:</strong> Investor pitch events</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="text-center bg-gradient-to-r from-tech-gray/10 via-lime-green/10 to-lime-green/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-tech">
                Complete Innovation Pipeline
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                From first project to startup founder—our comprehensive pathway system ensures every 
                student has multiple routes to success. Whether joining established companies through 
                our job funnel or launching their own ventures through our incubator, YouthNode graduates 
                enter the workforce ready to lead Canada&apos;s tech transformation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground"
              variants={fadeInUp}
            >
              Canadian Innovation Leaders
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { name: 'Shopify', description: 'Tech leader, AI infrastructure & startup investment' },
                { name: 'Wealthsimple', description: 'Fintech innovation & ML-based tools' },
                { name: 'DeepMind Canada', description: 'AI research & development' },
                { name: 'Vector Institute', description: 'AI research & academic partnerships' },
                { name: 'Xanadu Quantum', description: 'Quantum computing leadership' },
                { name: 'Thales Canada', description: 'Drones, autonomy & aerospace' },
                { name: 'CIFAR', description: 'Research & global innovation policy' },
                { name: 'RBC Future Launch', description: 'Youth funding & innovation programs' },
                { name: 'TELUS Health', description: 'AI & health tech collaboration' },
                { name: 'Mila Quebec', description: 'AI research excellence' },
                { name: 'University of Toronto', description: 'Academic research partnerships' },
                { name: 'UBC & SFU', description: 'Student collaboration programs' },
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full liquid-glass bg-gradient-to-br from-card to-tech-gray/8">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{partner.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-24 bg-gradient-to-br from-background via-tech-gray/5 to-tech-gray-light/10 canadian-pattern">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-foreground"
              variants={fadeInUp}
            >
              Get Involved
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-tech-gray/20">
                  <CardHeader>
                    <CardTitle className="text-foreground">For Students</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-lime-green/10 border border-lime-green/30 rounded-lg p-3 mb-4">
                      <p className="text-xs text-lime-green-dark font-semibold mb-1">
                        LIMITED PILOT COHORT
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2-year program • 2025-2027 • Seeking exceptional Canadian talent
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      Are you exceptional Canadian talent ready to build a world-class business? 
                      Join our pilot program to develop your skills, build your network, and gain 
                      the confidence to create innovative companies that compete globally from Canada.
                    </p>
                    <Button className="bg-tech-gray hover:bg-tech-gray-dark text-white w-full tech-glow hover-lift">
                      Join the Pilot Program
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-lime-green/20">
                  <CardHeader>
                    <CardTitle className="text-foreground">For Companies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Partner with us to discover exceptional Canadian talent before they create 
                      competing businesses. Our participants bring technical excellence, leadership 
                      skills, and entrepreneurial mindset—perfect for key roles or future partnerships.
                    </p>
                    <Button className="bg-lime-green hover:bg-lime-green-dark text-white w-full lime-shadow hover-lift">
                      Partner With Us
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-lime-green/20">
                  <CardHeader>
                    <CardTitle className="text-foreground">For Donors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Invest in Canada&apos;s innovation future. Your support creates opportunities 
                      and builds the talent pipeline of tomorrow.
                    </p>
                    <Button className="bg-lime-green hover:bg-lime-green-dark text-white w-full lime-shadow hover-lift">
                      Fund the Future
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">YouthNode</h3>
              <p className="text-muted-foreground mb-4">
                Building Canada&apos;s Innovation Future
              </p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Made with ❤️ in Canada</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@youthnode.org</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-tech-gray-dark cursor-pointer transition-colors" />
                <Twitch className="h-5 w-5 text-muted-foreground hover:text-tech-gray-dark cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-muted-foreground hover:text-tech-gray-dark cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 text-center text-muted-foreground max-w-4xl mx-auto">
            <p>© 2025 YouthNode. Nonprofit organization registration pending.</p>
            <p className="text-sm mt-2">
              Pilot Program 2025-2027 • Discovering Talent • Creating Canadian Businesses
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
