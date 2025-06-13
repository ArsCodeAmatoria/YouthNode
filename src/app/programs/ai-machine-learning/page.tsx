'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, ArrowRight, Code, Database, TrendingUp, Home } from 'lucide-react';
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

export default function AIMachineLearning() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white hover:text-tech-gray transition-colors group">
            <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
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
              <Brain className="h-16 w-16 mx-auto text-tech-gray mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-tech"
              variants={fadeInUp}
            >
              AI & Machine Learning
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Master the technologies powering Canada&apos;s AI revolution. Build intelligent systems, 
              solve real-world problems, and join the next generation of Canadian AI leaders.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-tech-gray hover:bg-tech-gray-dark text-white px-8 py-6 text-lg rounded-2xl tech-glow hover-lift"
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
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-tech-gray-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-tech-gray-dark flex items-center gap-3">
                      <Code className="h-6 w-6 text-tech-gray" />
                      Core Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Python Mastery:</strong> NumPy, Pandas, Scikit-learn</li>
                      <li>• <strong>Deep Learning:</strong> TensorFlow, PyTorch, Keras</li>
                      <li>• <strong>Computer Vision:</strong> OpenCV, YOLO, CNNs</li>
                      <li>• <strong>NLP:</strong> Transformers, BERT, GPT applications</li>
                      <li>• <strong>MLOps:</strong> Docker, Kubernetes, deployment pipelines</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Database className="h-6 w-6 text-lime-green" />
                      Real-World Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Healthcare AI:</strong> Medical image analysis for Canadian hospitals</li>
                      <li>• <strong>Climate Tech:</strong> Carbon footprint prediction models</li>
                      <li>• <strong>FinTech:</strong> Fraud detection for Canadian banks</li>
                      <li>• <strong>AgTech:</strong> Crop optimization for Prairie farmers</li>
                      <li>• <strong>Smart Cities:</strong> Traffic optimization for Toronto/Vancouver</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-accent-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-accent-green-dark flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-accent-green" />
                      Career Outcomes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>ML Engineer:</strong> $110K-$160K starting salary</li>
                      <li>• <strong>Data Scientist:</strong> Top Canadian tech companies</li>
                      <li>• <strong>AI Researcher:</strong> Vector Institute, Mila partnerships</li>
                      <li>• <strong>Startup Founder:</strong> AI-first Canadian companies</li>
                      <li>• <strong>Government AI:</strong> Policy and public sector innovation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Industry Focus */}
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
              Canadian AI Ecosystem
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { company: "Shopify", focus: "E-commerce AI, recommendation systems" },
                { company: "Cohere", focus: "Large language models, NLP applications" },
                { company: "Element AI", focus: "Enterprise AI solutions" },
                { company: "Vector Institute", focus: "AI research and talent development" },
                { company: "Mila", focus: "Deep learning research" },
                { company: "Scale AI", focus: "AI supply chain innovation" }
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full liquid-glass">
                    <CardHeader>
                      <CardTitle className="text-lg">{partner.company}</CardTitle>
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
      <section className="py-24 bg-gradient-to-br from-tech-gray/5 via-background to-tech-gray/10">
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
              Ready to Shape Canada&apos;s AI Future?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join the next generation of Canadian AI leaders. Applications open for our next cohort.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Button 
                size="lg" 
                className="bg-tech-gray hover:bg-tech-gray-dark text-white px-8 py-6 text-lg rounded-2xl tech-glow hover-lift"
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