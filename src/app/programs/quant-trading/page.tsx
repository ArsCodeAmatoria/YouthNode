'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, ArrowRight, Brain, Database, TrendingUp, Home } from 'lucide-react';
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

export default function QuantTrading() {
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
              <LineChart className="h-16 w-16 mx-auto text-icy-blue mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-canadian"
              variants={fadeInUp}
            >
              Quantitative Trading
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Master the intersection of finance and mathematics. Build sophisticated trading models, 
              analyze market patterns, and develop high-frequency trading systems for Canadian financial markets.
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
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-icy-blue-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-icy-blue-dark flex items-center gap-3">
                      <Brain className="h-6 w-6 text-icy-blue" />
                      Core Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Python & R:</strong> Statistical computing</li>
                      <li>• <strong>Time Series Analysis:</strong> Market data processing</li>
                      <li>• <strong>Machine Learning:</strong> Predictive modeling</li>
                      <li>• <strong>Risk Management:</strong> Portfolio optimization</li>
                      <li>• <strong>High-Frequency:</strong> Low-latency systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-maple-red-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-maple-red-dark flex items-center gap-3">
                      <Database className="h-6 w-6 text-maple-red" />
                      Trading Strategies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Statistical Arbitrage:</strong> Market inefficiencies</li>
                      <li>• <strong>Options Trading:</strong> Volatility strategies</li>
                      <li>• <strong>Market Making:</strong> Liquidity provision</li>
                      <li>• <strong>Factor Investing:</strong> Multi-factor models</li>
                      <li>• <strong>Portfolio Theory:</strong> Risk-adjusted returns</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift frost-border bg-gradient-to-br from-card to-forest-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-forest-green-dark flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-forest-green" />
                      Market Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Market Microstructure:</strong> Order book analysis</li>
                      <li>• <strong>Alpha Research:</strong> Signal generation</li>
                      <li>• <strong>Risk Models:</strong> VaR and stress testing</li>
                      <li>• <strong>Execution Analysis:</strong> TCA and optimization</li>
                      <li>• <strong>Backtesting:</strong> Strategy validation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
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
              Canadian Financial Partners
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { org: "RBC Capital Markets", focus: "Algorithmic trading systems" },
                { org: "TD Securities", focus: "Quantitative research" },
                { org: "BMO Financial Group", focus: "Risk management" },
                { org: "Canadian Pension Fund", focus: "Portfolio optimization" },
                { org: "TMX Group", focus: "Market microstructure" },
                { org: "National Bank Financial", focus: "Systematic trading" }
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
              Ready to Master Quantitative Trading?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join Canada&apos;s next generation of quantitative traders and financial engineers.
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