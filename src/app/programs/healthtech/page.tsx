'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowRight, Activity, Shield, TrendingUp, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function HealthTech() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-lime-green transition-colors group">
            <ArrowLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg">YouthNode</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden tech-gradient min-h-[60vh] flex items-center justify-center canadian-pattern pt-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Heart className="h-16 w-16 mx-auto text-lime-green mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-tech"
              variants={fadeInUp}
            >
              HealthTech Innovation
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Transform Canadian healthcare with AI-powered solutions. Build diagnostic tools, 
              medical AI systems, and digital health platforms that save lives.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-lime-green hover:bg-lime-green-dark text-white px-8 py-6 text-lg rounded-2xl lime-shadow hover-lift"
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
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
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
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Activity className="h-6 w-6 text-lime-green" />
                      Medical AI Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Medical Imaging:</strong> X-ray, MRI, CT analysis</li>
                      <li>• <strong>Bioinformatics:</strong> Genomics and proteomics</li>
                      <li>• <strong>Drug Discovery:</strong> AI-powered research</li>
                      <li>• <strong>Predictive Analytics:</strong> Patient risk modeling</li>
                      <li>• <strong>NLP for Health:</strong> Medical records analysis</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Shield className="h-6 w-6 text-lime-green" />
                      Privacy & Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>PIPEDA Compliance:</strong> Canadian privacy law</li>
                      <li>• <strong>Data Anonymization:</strong> Patient protection</li>
                      <li>• <strong>Federated Learning:</strong> Distributed training</li>
                      <li>• <strong>FHIR Standards:</strong> Health data interop</li>
                      <li>• <strong>Security:</strong> Healthcare cybersecurity</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-lime-green" />
                      Career Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Health AI Engineer:</strong> $105K-$150K</li>
                      <li>• <strong>Bioinformatics Specialist:</strong> Research roles</li>
                      <li>• <strong>Digital Health PM:</strong> Product leadership</li>
                      <li>• <strong>Regulatory Specialist:</strong> Health Canada</li>
                      <li>• <strong>Startup Founder:</strong> MedTech innovation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Healthcare Ecosystem */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Canadian Healthcare Innovation
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { org: "Canadian Digital Health", focus: "National health data strategy" },
                { org: "TELUS Health", focus: "Digital health platforms" },
                { org: "Toronto Hospital Network", focus: "AI diagnostics deployment" },
                { org: "Montreal Health Institute", focus: "Medical AI research" },
                { org: "Alberta Precision Labs", focus: "Genomics and AI" },
                { org: "BC Cancer Agency", focus: "Oncology AI applications" }
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full liquid-glass">
                    <CardHeader>
                      <CardTitle className="text-lg text-lime-green">{partner.org}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{partner.focus}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="mt-16 text-center bg-gradient-to-r from-lime-green/10 via-tech-gray/10 to-lime-green/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-tech">
                Canada&apos;s Universal Healthcare Advantage
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Canada&apos;s universal healthcare system provides unique opportunities for AI deployment at scale. 
                Work with real clinical data, partner with public health authorities, and build solutions that 
                improve health outcomes for all Canadians.
              </p>
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
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6"
              variants={fadeInUp}
            >
              Heal the Future with Technology
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Build healthcare solutions that matter. Applications open for passionate innovators.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button 
                size="lg" 
                className="bg-lime-green hover:bg-lime-green-dark text-white px-8 py-6 text-lg rounded-2xl lime-shadow hover-lift"
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