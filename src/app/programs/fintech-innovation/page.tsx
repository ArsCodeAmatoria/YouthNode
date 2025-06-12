'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, ArrowRight, Code, Database, Shield, Home } from 'lucide-react';
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

export default function FinTechInnovation() {
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
              <Coins className="h-16 w-16 mx-auto text-icy-blue mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-canadian"
              variants={fadeInUp}
            >
              FinTech Innovation
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Transform Canadian financial services with cutting-edge technology. Build payment systems, 
              digital banking platforms, and innovative financial solutions for the modern economy.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-icy-blue hover:bg-icy-blue-dark text-white px-8 py-6 text-lg rounded-2xl northern-glow hover-lift"
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
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-snow-white to-icy-blue-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-icy-blue-dark flex items-center gap-3">
                      <Code className="h-6 w-6 text-icy-blue" />
                      Core Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>API Development:</strong> RESTful & GraphQL</li>
                      <li>• <strong>Cloud Services:</strong> AWS, Azure</li>
                      <li>• <strong>Microservices:</strong> Spring, Node.js</li>
                      <li>• <strong>Data Processing:</strong> Apache Kafka</li>
                      <li>• <strong>Security:</strong> OAuth, JWT, encryption</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-snow-white to-maple-red-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-maple-red-dark flex items-center gap-3">
                      <Database className="h-6 w-6 text-maple-red" />
                      Financial Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Payment Processing:</strong> Integration APIs</li>
                      <li>• <strong>Banking APIs:</strong> Open banking</li>
                      <li>• <strong>KYC/AML:</strong> Compliance systems</li>
                      <li>• <strong>Data Analytics:</strong> Risk assessment</li>
                      <li>• <strong>Digital Banking:</strong> Core systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-snow-white to-forest-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-forest-green-dark flex items-center gap-3">
                      <Shield className="h-6 w-6 text-forest-green" />
                      Innovation & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>AI/ML:</strong> Fraud detection</li>
                      <li>• <strong>Biometrics:</strong> Authentication</li>
                      <li>• <strong>Blockchain:</strong> Digital assets</li>
                      <li>• <strong>RegTech:</strong> Compliance automation</li>
                      <li>• <strong>InsurTech:</strong> Risk modeling</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              12-Month Learning Journey
            </motion.h2>
            
            <div className="space-y-8">
              {[
                {
                  phase: "Months 1-3: FinTech Foundations",
                  topics: ["Financial Systems", "API Development", "Security", "Regulations"],
                  project: "Build a payment processing API"
                },
                {
                  phase: "Months 4-6: Digital Banking",
                  topics: ["Banking APIs", "KYC/AML", "Data Security", "Cloud Architecture"],
                  project: "Create a digital banking platform"
                },
                {
                  phase: "Months 7-9: Advanced Solutions",
                  topics: ["AI in Finance", "Blockchain Integration", "RegTech", "InsurTech"],
                  project: "Develop an AI-powered risk system"
                },
                {
                  phase: "Months 10-12: Innovation",
                  topics: ["Open Banking", "Innovation Design", "Market Analysis", "Launch Strategy"],
                  project: "Launch a FinTech product"
                }
              ].map((phase, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="relative"
                >
                  <Card className="hover-lift frost-border">
                    <CardHeader>
                      <CardTitle className="text-xl text-icy-blue flex items-center gap-3">
                        {phase.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">Key Topics:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {phase.topics.map((topic, i) => (
                              <li key={i}>• {topic}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Project:</h4>
                          <p className="text-sm text-muted-foreground">{phase.project}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Partners */}
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
              Canadian FinTech Partners
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { org: "Wealthsimple", focus: "Digital investing" },
                { org: "Koho", focus: "Digital banking" },
                { org: "Borrowell", focus: "Credit solutions" },
                { org: "Mogo", focus: "Digital finance" },
                { org: "Nuvei", focus: "Payment technology" },
                { org: "Lightspeed", focus: "Commerce solutions" }
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full frost-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-icy-blue">{partner.org}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{partner.focus}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-northern-lights/5 via-background to-icy-blue/10">
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
              Transform Financial Services
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join Canada&apos;s next generation of FinTech innovators and entrepreneurs.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button 
                size="lg" 
                className="bg-icy-blue hover:bg-icy-blue-dark text-white px-8 py-6 text-lg rounded-2xl northern-glow hover-lift"
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