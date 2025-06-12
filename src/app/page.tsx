'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Linkedin,
  Github
} from 'lucide-react';

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
      <section className="relative overflow-hidden canadian-gradient min-h-screen flex items-center justify-center canadian-pattern">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
                         <motion.h1 
               className="text-5xl lg:text-7xl font-bold mb-6 text-gradient-canadian"
               variants={fadeInUp}
             >
               Building Canada&apos;s Innovation Future
             </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Empowering Gen Z with skills in AI, Deep Tech, and Emerging Industries
            </motion.p>
                         <motion.div variants={fadeInUp}>
               <Button 
                 size="lg" 
                 className="bg-maple-red hover:bg-maple-red-dark text-white px-8 py-6 text-lg rounded-2xl group maple-leaf-shadow hover-lift northern-glow"
                 onClick={() => scrollToSection('mission')}
               >
                 Read the Mission
                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
               </Button>
             </motion.div>
          </motion.div>
        </div>
        
                 {/* Floating Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <motion.div 
             className="absolute top-20 left-20 w-32 h-32 bg-icy-blue/20 rounded-full northern-glow blur-sm"
             animate={{ 
               y: [0, -20, 0],
               scale: [1, 1.1, 1],
               opacity: [0.3, 0.6, 0.3]
             }}
             transition={{ duration: 6, repeat: Infinity }}
           />
           <motion.div 
             className="absolute bottom-20 right-20 w-24 h-24 bg-forest-green/20 rounded-full maple-leaf-shadow blur-sm"
             animate={{ 
               y: [0, 20, 0],
               scale: [1, 1.2, 1],
               opacity: [0.4, 0.7, 0.4]
             }}
             transition={{ duration: 4, repeat: Infinity }}
           />
           <motion.div 
             className="absolute top-1/2 right-40 w-16 h-16 bg-maple-red/20 rounded-full northern-glow blur-sm"
             animate={{ 
               y: [0, -10, 0],
               rotate: [0, 180, 360],
               opacity: [0.2, 0.5, 0.2]
             }}
             transition={{ duration: 8, repeat: Infinity }}
           />
           <motion.div 
             className="absolute top-1/3 left-1/2 w-20 h-20 bg-northern-lights/30 rounded-full blur-md"
             animate={{ 
               x: [-10, 10, -10],
               y: [-5, 5, -5],
               scale: [1, 1.3, 1],
               opacity: [0.1, 0.4, 0.1]
             }}
             transition={{ duration: 10, repeat: Infinity }}
           />
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
               <Card className="h-full border-icy-blue/30 bg-gradient-to-br from-snow-white to-icy-blue-light/20 hover-lift frost-border">
                 <CardHeader>
                   <CardTitle className="text-3xl text-icy-blue-dark flex items-center gap-3">
                     <Users className="h-8 w-8 text-icy-blue" />
                     Our Mission
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     Equip Canadian-born Gen Z with future-critical skills through hands-on learning, 
                     real-world work funnels, and startup creation opportunities. We bridge the gap 
                     between traditional education and emerging technology demands.
                   </p>
                 </CardContent>
               </Card>
             </motion.div>

                         <motion.div variants={fadeInUp}>
               <Card className="h-full border-maple-red/30 bg-gradient-to-br from-snow-white to-maple-red-light/20 hover-lift maple-leaf-shadow">
                 <CardHeader>
                   <CardTitle className="text-3xl text-maple-red-dark flex items-center gap-3">
                     <TrendingUp className="h-8 w-8 text-maple-red" />
                     Our Vision
                   </CardTitle>
                 </CardHeader>
                 <CardContent>
                   <p className="text-lg text-muted-foreground leading-relaxed">
                     A Canada that no longer exports innovation—but leads it. We envision a nation 
                     where homegrown talent drives breakthrough technologies and creates the companies 
                     of tomorrow, right here at home.
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
                <div className="text-4xl font-bold text-maple-red mb-2">#23</div>
                <p className="text-sm text-muted-foreground">Global Innovation Index Ranking</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-icy-blue mb-2">67%</div>
                <p className="text-sm text-muted-foreground">of AI talent leaves for Silicon Valley</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="text-center">
                <div className="text-4xl font-bold text-forest-green mb-2">$2.1B</div>
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
              className="text-4xl lg:text-5xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              The YouthNode Solution
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="border-forest-green/20 hover:border-forest-green/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-forest-green">Immersive Training Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Hands-on learning in AI development, generative art/video, quantum computing, 
                      autonomous systems, and more. Real projects, real impact.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-icy-blue/20 hover:border-icy-blue/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-icy-blue">Career & Startup Tracks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mentorship, internships, and incubator support connecting students directly 
                      to industry leaders and entrepreneurial opportunities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="border-maple-red/20 hover:border-maple-red/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-maple-red">Future-Focused Curriculum</CardTitle>
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
                    <CardTitle>Public-Private Collaboration</CardTitle>
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

      {/* Program Areas */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Program Areas
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
            >
                             {[
                 { icon: Brain, title: 'AI & Machine Learning', color: 'text-icy-blue' },
                 { icon: Cpu, title: 'Generative Art & Video', color: 'text-maple-red' },
                 { icon: Brain, title: 'Quantum Computing', color: 'text-forest-green' },
                 { icon: Plane, title: 'Drones & Automation', color: 'text-icy-blue' },
                 { icon: Heart, title: 'HealthTech', color: 'text-maple-red' },
                 { icon: Cog, title: 'Robotics & Engineering', color: 'text-forest-green' },
                 { icon: Shield, title: 'AI Ethics & Safety', color: 'text-icy-blue' },
                 { icon: Car, title: 'Autonomous Systems', color: 'text-maple-red' },
               ].map((area, index) => (
                                 <motion.div key={index} variants={fadeInUp}>
                   <Card className="text-center hover-lift h-full frost-border bg-gradient-to-br from-snow-white to-northern-lights/10">
                     <CardContent className="pt-6">
                       <area.icon className={`h-12 w-12 mx-auto mb-4 ${area.color}`} />
                       <h3 className="font-semibold text-sm">{area.title}</h3>
                     </CardContent>
                   </Card>
                 </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12 text-center"
              variants={fadeInUp}
            >
              Canadian Innovation Leaders
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                   <Card className="hover-lift h-full frost-border bg-gradient-to-br from-snow-white to-northern-lights/8">
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
       <section className="py-24 bg-gradient-to-br from-snow-white via-northern-lights/5 to-icy-blue-light/10 canadian-pattern">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold mb-12"
              variants={fadeInUp}
            >
              Get Involved
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-icy-blue/20">
                  <CardHeader>
                    <CardTitle className="text-icy-blue">For Students</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Ready to build the future? Join our pilot program and get hands-on experience 
                      with cutting-edge technologies.
                    </p>
                                         <Button className="bg-icy-blue hover:bg-icy-blue-dark text-white w-full northern-glow hover-lift">
                       Join the Pilot Program
                     </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-forest-green/20">
                  <CardHeader>
                    <CardTitle className="text-forest-green">For Companies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                                         <p className="text-muted-foreground">
                       Shape the next generation of talent while solving your organization&apos;s 
                       innovation challenges through partnership.
                     </p>
                                         <Button className="bg-forest-green hover:bg-forest-green-dark text-white w-full maple-leaf-shadow hover-lift">
                       Partner With Us
                     </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="text-center h-full border-maple-red/20">
                  <CardHeader>
                    <CardTitle className="text-maple-red">For Donors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                                         <p className="text-muted-foreground">
                       Invest in Canada&apos;s innovation future. Your support creates opportunities 
                       and builds the talent pipeline of tomorrow.
                     </p>
                                         <Button className="bg-maple-red hover:bg-maple-red-dark text-white w-full maple-leaf-shadow hover-lift">
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
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-maple-red">YouthNode</h3>
              <p className="text-background/80 mb-4">
                Building Canada&apos;s Innovation Future
              </p>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Made with ❤️ in Canada</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>hello@youthnode.org</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 text-background/80 hover:text-icy-blue cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-background/80 hover:text-icy-blue cursor-pointer transition-colors" />
                <Github className="h-5 w-5 text-background/80 hover:text-icy-blue cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2024 YouthNode. Nonprofit organization registration pending.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
