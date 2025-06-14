'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, ArrowRight, Code, Database, Shield, ArrowLeft } from 'lucide-react';
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

export default function Web3Blockchain() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <button onClick={() => window.location.href = "/#programs"} className="inline-flex items-center gap-2 text-white hover:text-lime-green transition-colors group cursor-pointer">
            <ArrowLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-lg">YouthNode</span>
          </button>
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
              <Wallet className="h-16 w-16 mx-auto text-lime-green mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-tech"
              variants={fadeInUp}
            >
              Web3 & Blockchain
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Shape the future of decentralized technology. Build DApps, smart contracts, 
              and blockchain solutions that power the next generation of Canadian fintech.
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
                      <Code className="h-6 w-6 text-lime-green" />
                      Core Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Solidity:</strong> Smart contract development</li>
                      <li>• <strong>Web3.js/ethers.js:</strong> Blockchain interaction</li>
                      <li>• <strong>IPFS:</strong> Decentralized storage</li>
                      <li>• <strong>Hardhat:</strong> Development environment</li>
                      <li>• <strong>OpenZeppelin:</strong> Security standards</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Database className="h-6 w-6 text-lime-green" />
                      DeFi Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>DeFi Protocols:</strong> AMMs, lending</li>
                      <li>• <strong>Token Standards:</strong> ERC20, ERC721</li>
                      <li>• <strong>Yield Farming:</strong> Staking mechanisms</li>
                      <li>• <strong>Oracles:</strong> Price feeds, data</li>
                      <li>• <strong>Gas Optimization:</strong> Efficient contracts</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Shield className="h-6 w-6 text-lime-green" />
                      Security & Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Security Auditing:</strong> Vulnerability testing</li>
                      <li>• <strong>Layer 2 Solutions:</strong> Scaling strategies</li>
                      <li>• <strong>Node Operation:</strong> Network infrastructure</li>
                      <li>• <strong>MEV Protection:</strong> Front-running defense</li>
                      <li>• <strong>Consensus:</strong> PoS, PoW mechanisms</li>
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
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Canadian Blockchain Partners
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { org: "Dapper Labs", focus: "NFT & gaming platforms" },
                { org: "Ledn", focus: "DeFi lending solutions" },
                { org: "3iQ Digital", focus: "Digital asset funds" },
                { org: "Bitbuy", focus: "Digital asset trading" },
                { org: "ChainSafe", focus: "Blockchain infrastructure" },
                { org: "Ethereum Foundation", focus: "Protocol development" }
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
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-tech-gray/5 via-background to-lime-green/10">
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
              Build the Decentralized Future
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Join Canada&apos;s next generation of blockchain developers and architects.
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