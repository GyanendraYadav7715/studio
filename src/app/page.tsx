
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const features = [
  {
    title: "Start in seconds",
    description: "Go from signup to training a model in seconds with pre-configured templates.",
  },
  {
    title: "Infrastructure abstraction",
    description: "Job scheduling, resource provisioning, and more without ever managing servers.",
  },
  {
    title: "Scale instantly",
    description: "Scale up training with a full range of GPU options with no runtime limits.",
  },
  {
    title: "Full reproducibility",
    description: "Automatic versioning, tagging, and life-cycle management.",
  },
  {
    title: "Collaboration",
    description: "Our platform provides a unified platform designed for your entire team.",
  },
  {
    title: "Insights",
    description: "Improve visibility into team utilization, permissions, and more.",
  },
]

export default function Home() {
  return (
    <>
    <main className="flex-1">
      <section className="relative pt-16 md:pt-24 lg:pt-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  The Future of Cloud Development is Here
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  CloudShift provides powerful, on-demand virtual machines for all your development needs. Stop waiting, start coding.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/register">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/login">
                    Login
                  </Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover sm:w-full"
              data-ai-hint="cloud hosting server"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 mt-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose CloudShift?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide top-tier performance, unparalleled flexibility, and a seamless user experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Blazing Fast VMs</h3>
              <p className="text-sm text-muted-foreground">
                Get access to high-performance CPUs and SSD storage.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">All Your Favorite OS</h3>
              <p className="text-sm text-muted-foreground">
                Choose from Ubuntu, Windows, or macOS for your machines.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Leverage our AI to get recommendations for the best VM configuration.
              </p>
            </div>
             <div className="grid gap-1">
              <h3 className="text-lg font-bold">Secure and Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Your data is safe with our top-notch security measures.
              </p>
            </div>
             <div className="grid gap-1">
              <h3 className="text-lg font-bold">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                Our team is always here to help you with any issues.
              </p>
            </div>
             <div className="grid gap-1">
              <h3 className="text-lg font-bold">Scalable Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Scale your resources up or down as your needs change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:gap-16 lg:grid-cols-1 lg:gap-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    </>
  )
}
