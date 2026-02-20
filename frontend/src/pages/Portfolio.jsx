import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Code2, Mail, MapPin, Briefcase, Award, Layers, Users, CheckCircle2, Star, Github, Linkedin, ExternalLink, ChevronRight, Terminal, Database, Layout, Settings } from 'lucide-react';
import { personalInfo, projects, skills, services, experience, testimonials, certifications } from '../mock';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/90">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-cyan-600" />
              <span className="text-xl font-bold text-slate-900">{personalInfo.name}</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'projects', 'skills', 'services', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors hover:text-cyan-600 ${
                    activeSection === section ? 'text-cyan-600' : 'text-slate-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} size="sm" className="bg-cyan-600 hover:bg-cyan-700">
              Contact Me
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge variant="outline" className="text-cyan-600 border-cyan-600">
              <Code2 className="w-3 h-3 mr-1" />
              {personalInfo.yearsExperience} Years of Experience
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              {personalInfo.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 font-medium">
              {personalInfo.title}
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button onClick={() => scrollToSection('projects')} size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                View Projects
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-6">
              <a href={`mailto:${personalInfo.email}`} className="text-slate-600 hover:text-cyan-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-cyan-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-cyan-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-5 h-5 text-cyan-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-5 h-5 text-cyan-600" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-600 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
              {experience.map((exp) => (
                <Card key={exp.id} className="border-l-4 border-l-cyan-600">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{exp.position}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <Badge variant="secondary">{exp.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
              <div>
                <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-600" />
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline">{cert}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Showcase of ERP and custom Odoo solutions delivered for various industries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-cyan-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">{project.category}</Badge>
                    </div>
                    <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{project.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-cyan-600" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-cyan-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layout className="w-5 h-5 text-cyan-600" />
                  Frontend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-cyan-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-600" />
                  Odoo Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.odooModules.map((module, idx) => (
                    <Badge key={idx} variant="outline" className="border-cyan-600 text-cyan-700">{module}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-cyan-600" />
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool, idx) => (
                    <Badge key={idx} variant="outline" className="border-cyan-600 text-cyan-700">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive ERP and IT consulting services to transform your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto mb-4"></div>
            <p className="text-slate-600 max-w-2xl mx-auto">Have a project in mind? Let's discuss how I can help transform your business with custom ERP solutions.</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                  disabled={formStatus === 'sending'}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </Button>
                {formStatus === 'success' && (
                  <p className="text-green-600 text-center text-sm">Message sent successfully! I'll get back to you soon.</p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Or reach me directly at:</p>
            <a href={`mailto:${personalInfo.email}`} className="text-lg font-semibold text-cyan-600 hover:text-cyan-700 transition-colors">
              {personalInfo.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-6 h-6 text-cyan-600" />
                <span className="text-xl font-bold text-white">{personalInfo.name}</span>
              </div>
              <p className="text-sm text-slate-400">{personalInfo.title}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Projects', 'Skills', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="hover:text-cyan-600 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-cyan-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
