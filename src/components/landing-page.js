'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Code, Users, TrendingUp, Lightbulb, Calendar, BookOpen, Rocket, Menu } from 'lucide-react'

export default function LandingPageComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo-white.png" alt="AASTU SaaS Founders Logo" width={200} height={50} className="invert" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400">About</a></li>
              <li><a href="#offerings" className="text-gray-300 hover:text-blue-400">Offerings</a></li>
              <li><a href="#structure" className="text-gray-300 hover:text-blue-400">Structure</a></li>
              <li><a href="#join" className="text-gray-300 hover:text-blue-400">Join Us</a></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#about" className="text-gray-300 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#offerings" className="text-gray-300 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Offerings</a></li>
              <li><a href="#structure" className="text-gray-300 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Structure</a></li>
              <li><a href="#join" className="text-gray-300 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>Join Us</a></li>
            </ul>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">AASTU SaaS Founders Club</h1>
          <p className="text-xl mb-8 text-gray-300">Ethiopia's premier student-led initiative for SaaS development and entrepreneurship</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Join Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">About Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To empower AASTU students with practical skills, knowledge, and resources needed to build successful SaaS companies through hands-on experience, collaborative learning, and meaningful connections with Ethiopia's growing technology ecosystem.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-blue-400">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">To establish AASTU as Ethiopia's premier hub for student-led SaaS innovation and entrepreneurship, producing a new generation of technically skilled founders who contribute significantly to the country's digital transformation while building globally competitive companies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">What We Offer</h2>
          <Tabs defaultValue="tracks" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="tracks">Learning Tracks</TabsTrigger>
              <TabsTrigger value="activities">Key Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="tracks">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-400">
                      <Code className="w-6 h-6 mr-2" />
                      Product Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Technical aspects of creating software products</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <TrendingUp className="w-6 h-6 mr-2" />
                      Business Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Commercial aspects of startup creation</p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-400">
                      <Rocket className="w-6 h-6 mr-2" />
                      Growth
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Marketing, sales, and scaling strategies</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="activities">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-400">
                      <BookOpen className="w-6 h-6 mr-2" />
                      Weekly Workshops & Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Technical skills development</li>
                      <li>Business fundamentals</li>
                      <li>Product management</li>
                      <li>Market analysis</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-400">
                      <Lightbulb className="w-6 h-6 mr-2" />
                      Practical Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Real-world problem solving</li>
                      <li>MVP development</li>
                      <li>Market validation</li>
                      <li>Customer discovery</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-400">
                      <Users className="w-6 h-6 mr-2" />
                      Networking & Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>Industry expert talks</li>
                      <li>Hackathons</li>
                      <li>Demo days</li>
                      <li>Annual SaaS conference</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Structure Section */}
      <section id="structure" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Program Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-400">
                  <Calendar className="w-6 h-6 mr-2" />
                  Foundation Phase
                </CardTitle>
                <p className="text-sm text-gray-400">2 months</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Fundamental startup concepts</li>
                  <li>Team formation</li>
                  <li>Idea validation</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Code className="w-6 h-6 mr-2" />
                  Development Phase
                </CardTitle>
                <p className="text-sm text-gray-400">2 months</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>MVP creation</li>
                  <li>Market validation</li>
                  <li>Business model development</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-red-400">
                  <Rocket className="w-6 h-6 mr-2" />
                  Growth Phase
                </CardTitle>
                <p className="text-sm text-gray-400">2 months</p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-300">
                  <li>Launch strategies</li>
                  <li>Customer acquisition</li>
                  <li>Investor pitching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Why Join Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Gain hands-on experience in building real SaaS products',
              'Connect with industry mentors and successful entrepreneurs',
              'Access to resources and development tools',
              'Join a community of like-minded innovators',
              'Develop both technical and business skills',
              "Shape the future of Ethiopia's digital economy",
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Open to all AASTU students. Cross-disciplinary teams welcome. No prior experience required. 
            Commitment to learning and innovation essential.
          </p>
          <a href='https://forms.gle/MkVBLd3SfTxDRJzj7' target='_blank'>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Apply Now
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h3>
              <p>Email: info@aastusaas.com</p>
              <p>Phone: +251 123 456 789</p>
              <p>Address: AASTU Campus, Addis Ababa, Ethiopia</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Our Programs</a></li>
                <li><a href="#" className="hover:text-blue-400">Events</a></li>
                <li><a href="#" className="hover:text-blue-400">Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} AASTU SaaS Founders Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}