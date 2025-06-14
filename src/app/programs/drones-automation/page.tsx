'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, ArrowRight, Cpu, Globe, TrendingUp, Home } from 'lucide-react';
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

export default function DronesAutomation() {
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
              <Plane className="h-16 w-16 mx-auto text-tech-gray mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 text-gradient-tech"
              variants={fadeInUp}
            >
              Drones & Automation
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Build the future of Canadian aviation and automation. Design autonomous drones, 
              work with real flight controllers, and solve challenges in delivery, surveillance, and exploration.
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
                      <Cpu className="h-6 w-6 text-tech-gray" />
                      Flight Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Flight Controllers:</strong> PX4, ArduPilot systems</li>
                      <li>• <strong>Computer Vision:</strong> OpenCV navigation</li>
                      <li>• <strong>ROS Integration:</strong> Robot Operating System</li>
                      <li>• <strong>Mission Planning:</strong> QGroundControl, MAVLink</li>
                      <li>• <strong>SLAM Navigation:</strong> Simultaneous localization</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <Globe className="h-6 w-6 text-lime-green" />
                      Real Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Search & Rescue:</strong> Emergency response drones</li>
                      <li>• <strong>Delivery Systems:</strong> E-commerce automation</li>
                      <li>• <strong>Agriculture:</strong> Crop monitoring, precision farming</li>
                      <li>• <strong>Infrastructure:</strong> Bridge/pipeline inspection</li>
                      <li>• <strong>Environmental:</strong> Wildlife monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full hover-lift liquid-glass bg-gradient-to-br from-card to-lime-green-light/15">
                  <CardHeader>
                    <CardTitle className="text-xl text-lime-green-dark flex items-center gap-3">
                      <TrendingUp className="h-6 w-6 text-lime-green" />
                      Career Paths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong>Drone Engineer:</strong> $90K-$130K starting</li>
                      <li>• <strong>Automation Specialist:</strong> Manufacturing</li>
                      <li>• <strong>Robotics Developer:</strong> AI navigation systems</li>
                      <li>• <strong>Transport Canada:</strong> Regulatory positions</li>
                      <li>• <strong>Startup Founder:</strong> DroneSpace innovation</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Canadian Aerospace Ecosystem */}
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
              Canadian Aerospace Innovation
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {[
                { company: "Bombardier", focus: "Aerospace manufacturing & innovation" },
                { company: "CAE", focus: "Flight simulation and drone training" },
                { company: "Draganfly", focus: "Commercial drone solutions" },
                { company: "MDA", focus: "Space robotics and satellite tech" },
                { company: "Transport Canada", focus: "Drone regulations and certification" },
                { company: "AIAC", focus: "Aerospace industry development" }
              ].map((partner, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="hover-lift h-full liquid-glass">
                    <CardHeader>
                      <CardTitle className="text-lg text-tech-gray">{partner.company}</CardTitle>
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
              className="mt-16 text-center bg-gradient-to-r from-tech-gray/10 via-lime-green/10 to-lime-green/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-gradient-tech">
                Canada&apos;s Drone Advantage
              </h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Canada leads in aviation innovation with vast airspace, progressive regulations, and a $25B+ 
                aerospace sector. Train with real industry partners and contribute to making Canada the global 
                hub for autonomous aviation technology.
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
              Take Flight with Canadian Innovation
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={fadeInUp}
            >
              Build autonomous systems that soar. Applications open for future flight engineers.
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