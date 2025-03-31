import { Link } from "react-router-dom"
// import img from "next/image"
import Finzo from '../assets/finzo-male.png'
import { Button } from '../components/custom-button';
import {
  CreditCard,
  Smartphone,
  Shield,
  Zap,
  Gift,
  ChevronRight,
  Download,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Finzo</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
              Personal
            </Link>
            <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
              Business
            </Link>
            <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link to="#" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="#" className="hidden md:block text-sm font-medium transition-colors hover:text-primary">
              Login
            </Link>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Payments Made Simple, Secure & Fast
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Send money, pay bills, recharge mobile, and make all your payments with ease using PayEase.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <img
                      src={""}
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-background"
                    />
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-background"
                    />
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-background"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Join over <span className="font-medium">10,000+</span> users
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[300px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <img
                    src={Finzo}
                    alt="App screenshot"
                    width={600}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Trusted by leading companies worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-center">
                    <img
                      src={`/placeholder.svg?height=40&width=120&text=LOGO ${i}`}
                      alt={`Partner logo ${i}`}
                      width={120}
                      height={40}
                      className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need in one app
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  PayEase offers a complete suite of payment solutions for your everyday needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  icon: <Smartphone className="h-10 w-10 text-primary" />,
                  title: "Mobile Recharge",
                  description: "Recharge any mobile number across all operators instantly.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-primary" />,
                  title: "Bill Payments",
                  description: "Pay your electricity, water, gas, and other utility bills hassle-free.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Instant Transfers",
                  description: "Send money to anyone, anywhere, anytime with just a few taps.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Secure Payments",
                  description: "Advanced encryption and security measures to protect your transactions.",
                },
                {
                  icon: <Gift className="h-10 w-10 text-primary" />,
                  title: "Rewards & Cashback",
                  description: "Earn rewards and cashback on every transaction you make.",
                },
                {
                  icon: <CheckCircle2 className="h-10 w-10 text-primary" />,
                  title: "Easy Checkout",
                  description: "Quick and seamless checkout experience for online shopping.",
                },
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm">
                  {feature.icon}
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Fast & Secure</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get started with PayEase in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Download the App",
                  description: "Get the PayEase app from App Store or Google Play Store.",
                },
                {
                  step: "02",
                  title: "Create an Account",
                  description: "Sign up with your phone number and complete verification.",
                },
                {
                  step: "03",
                  title: "Start Transacting",
                  description: "Add money to your wallet and start making payments.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {i < 2 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
                      <ChevronRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Download Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Download Now
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Experience PayEase on your mobile
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Download our mobile app to enjoy a seamless payment experience on the go.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Download className="h-5 w-5" />
                    App Store
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Download className="h-5 w-5" />
                    Google Play
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">4.8/5</span> from over 2,000+ reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="flex items-center gap-4">
                  <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border bg-background shadow-xl">
                    <img
                      src="/placeholder.svg?height=1000&width=500"
                      alt="App screenshot 1"
                      width={500}
                      height={1000}
                      className="object-cover"
                    />
                  </div>
                  <div className="relative hidden h-[450px] w-[220px] overflow-hidden rounded-xl border bg-background shadow-xl md:block">
                    <img
                      src="/placeholder.svg?height=900&width=440"
                      alt="App screenshot 2"
                      width={440}
                      height={900}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our users say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our users have to say about PayEase.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Small Business Owner",
                  content:
                    "PayEase has simplified my business payments. I can now receive payments from customers instantly and manage all my expenses in one place.",
                },
                {
                  name: "Michael Chen",
                  role: "College Student",
                  content:
                    "The split bill feature is a lifesaver! No more awkward money conversations with friends. We just split the bill on PayEase and everyone pays their share.",
                },
                {
                  name: "Priya Sharma",
                  role: "Freelancer",
                  content:
                    "As a freelancer, getting paid on time was always a challenge. With PayEase, I can send professional invoices and receive payments directly to my account.",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between space-y-4 rounded-lg border bg-background p-6 shadow-sm"
                >
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={`/placeholder.svg?height=40&width=40&text=${testimonial.name[0]}`}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-medium">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to simplify your payments?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Join millions of users who trust PayEase for their daily payment needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">PayEase</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Making payments simple, secure, and fast for everyone.
              </p>
              <div className="mt-4 flex gap-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                  <Link key={social} to="#" className="text-muted-foreground hover:text-foreground">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 rounded-full border flex items-center justify-center">{social[0]}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium">Product</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Features", "Security", "Pricing", "Business", "Enterprise"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["About", "Careers", "Blog", "Press", "Contact"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {["Terms", "Privacy", "Cookies", "Licenses", "Settings"].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} PayEase. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=30&width=50&text=VISA"
                alt="Visa"
                width={50}
                height={30}
                className="opacity-70"
              />
              <img
                src="/placeholder.svg?height=30&width=50&text=MC"
                alt="Mastercard"
                width={50}
                height={30}
                className="opacity-70"
              />
              <img
                src="/placeholder.svg?height=30&width=50&text=AMEX"
                alt="American Express"
                width={50}
                height={30}
                className="opacity-70"
              />
              <img
                src="/placeholder.svg?height=30&width=50&text=PAYPAL"
                alt="PayPal"
                width={50}
                height={30}
                className="opacity-70"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

