'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Lock, Bug, Skull, Eye, Home, Terminal, Network, Database } from 'lucide-react';
import Link from 'next/link';

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

export default function CybersecurityProgram() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-maple-red hover:text-maple-red-dark transition-colors">
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-maple-red/10 via-background to-maple-red/5 py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 bg-maple-red/20 rounded-full mb-8"
              variants={fadeInUp}
            >
              <Shield className="h-10 w-10 text-maple-red" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-canadian"
              variants={fadeInUp}
            >
              Cybersecurity Program
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Master the art of digital defense and ethical hacking. Learn from both Blue Team and Red Team perspectives to become Canada&apos;s next generation of cybersecurity experts.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button size="lg" className="bg-maple-red hover:bg-maple-red-dark text-white">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Curriculum
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
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-icy-blue-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-icy-blue-dark flex items-center gap-3">
                      <Shield className="h-6 w-6 text-icy-blue" />
                      Blue Team Defense
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Security Operations Center (SOC) management</li>
                      <li>• Incident response and forensics</li>
                      <li>• Network monitoring and threat detection</li>
                      <li>• SIEM tools and log analysis</li>
                      <li>• Vulnerability assessment and patching</li>
                      <li>• Security policy development</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-maple-red-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-maple-red-dark flex items-center gap-3">
                      <Bug className="h-6 w-6 text-maple-red" />
                      Red Team Offense
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Penetration testing methodologies</li>
                      <li>• Social engineering and phishing</li>
                      <li>• Web application security testing</li>
                      <li>• Network exploitation techniques</li>
                      <li>• Post-exploitation and persistence</li>
                      <li>• Ethical hacking frameworks</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-forest-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-forest-green-dark flex items-center gap-3">
                      <Eye className="h-6 w-6 text-forest-green" />
                      Malware Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Static and dynamic analysis techniques</li>
                      <li>• Reverse engineering fundamentals</li>
                      <li>• Sandbox environments and tools</li>
                      <li>• Threat intelligence gathering</li>
                      <li>• IoC extraction and YARA rules</li>
                      <li>• Advanced persistent threat (APT) analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tools & Platforms */}
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
              Tools & Platforms
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Terminal className="h-12 w-12 mx-auto mb-4 text-maple-red" />
                    <h3 className="font-bold text-lg mb-2">Kali Linux</h3>
                    <p className="text-sm text-muted-foreground">
                      Master the premier penetration testing distribution with 600+ security tools
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Network className="h-12 w-12 mx-auto mb-4 text-icy-blue" />
                    <h3 className="font-bold text-lg mb-2">Hack The Box</h3>
                    <p className="text-sm text-muted-foreground">
                      Practice on real-world scenarios with HTB Academy and live machine challenges
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Bug className="h-12 w-12 mx-auto mb-4 text-forest-green" />
                    <h3 className="font-bold text-lg mb-2">Metasploit</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn exploitation techniques with the world&apos;s most used penetration testing framework
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Eye className="h-12 w-12 mx-auto mb-4 text-maple-red" />
                    <h3 className="font-bold text-lg mb-2">Wireshark</h3>
                    <p className="text-sm text-muted-foreground">
                      Analyze network traffic and detect security threats with advanced packet analysis
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Database className="h-12 w-12 mx-auto mb-4 text-icy-blue" />
                    <h3 className="font-bold text-lg mb-2">Splunk SIEM</h3>
                    <p className="text-sm text-muted-foreground">
                      Master enterprise security information and event management systems
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Skull className="h-12 w-12 mx-auto mb-4 text-forest-green" />
                    <h3 className="font-bold text-lg mb-2">Ghidra</h3>
                    <p className="text-sm text-muted-foreground">
                      Reverse engineer malware with NSA&apos;s powerful software analysis suite
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Lock className="h-12 w-12 mx-auto mb-4 text-maple-red" />
                    <h3 className="font-bold text-lg mb-2">Burp Suite</h3>
                    <p className="text-sm text-muted-foreground">
                      Professional web application security testing with automated scanning
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                  <CardContent className="pt-6">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-icy-blue" />
                    <h3 className="font-bold text-lg mb-2">YARA</h3>
                    <p className="text-sm text-muted-foreground">
                      Create detection rules for malware identification and threat hunting
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Industry Partners */}
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
              Canadian Industry Partners
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {[
                {
                  name: "BlackBerry Cylance",
                  role: "AI-Powered Cybersecurity",
                  description: "Leading Canadian cybersecurity company specializing in AI-driven threat prevention and endpoint protection."
                },
                {
                  name: "Nuvei Corporation", 
                  role: "Payment Security",
                  description: "Montreal-based fintech giant providing secure payment technology and cybersecurity solutions globally."
                },
                {
                  name: "CGI Group",
                  role: "Enterprise Security",
                  description: "One of Canada's largest IT consulting firms, offering comprehensive cybersecurity services and solutions."
                },
                {
                  name: "Communications Security Establishment (CSE)",
                  role: "National Cybersecurity",
                  description: "Canada's national cryptologic agency, providing cybersecurity guidance and threat intelligence."
                },
                {
                  name: "Secure Key Technologies",
                  role: "Identity & Access Management",
                  description: "Toronto-based company pioneering secure digital identity and authentication solutions."
                },
                {
                  name: "Sandvine",
                  role: "Network Security",
                  description: "Waterloo-based network intelligence company providing deep packet inspection and security analytics."
                }
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-northern-lights/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-maple-red-dark">{partner.name}</CardTitle>
                      <p className="text-sm text-maple-red">{partner.role}</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-maple-red/10 via-background to-maple-red/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-6 text-gradient-canadian"
              variants={fadeInUp}
            >
              Defend Canada&apos;s Digital Future
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join the next generation of Canadian cybersecurity professionals. From ethical hacking to digital forensics, 
              master the skills needed to protect our nation&apos;s digital infrastructure.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button size="lg" className="bg-maple-red hover:bg-maple-red-dark text-white">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Info Session
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 