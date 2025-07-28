
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const GoogleIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-.97 2.47-1.94 3.21v2.75h3.53c2.07-1.9 3.25-4.75 3.25-8.27z" fill="#4285F4"></path>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.53-2.75c-.98.66-2.23 1.06-3.75 1.06-2.85 0-5.27-1.92-6.13-4.5H2.3v2.84C4.13 20.98 7.79 23 12 23z" fill="#34A853"></path>
        <path d="M5.87 14.37c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.34H2.3C1.46 8.99 1 10.66 1 12.38s.46 3.39 1.3 4.94l3.57-2.95z" fill="#FBBC05"></path>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.79 1 4.13 3.02 2.3 6.06l3.57 2.84c.86-2.58 3.28-4.5 6.13-4.5z" fill="#EA4335"></path>
    </svg>
);

const GitHubIcon = () => (
    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.141c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
    </svg>
);

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="relative w-full h-screen flex items-center justify-center bg-[#18181B]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/20 to-zinc-900/10" />
            <div className="relative container mx-auto px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                        Build & Run AI/ML Models <br /> on NVIDIA H100 GPUs
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-300">
                        Develop, train, and deploy AI applications on CloudShift.
                    </p>
                    <p className="mt-2 text-lg md:text-xl text-gray-300">
                        Deploy LLMs as API endpoints
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                         <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
                           <Link href="/register">
                             Get Started
                             <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                         </Button>
                         <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                             <Link href="#">
                                 <GoogleIcon />
                                 Sign up with Google
                             </Link>
                         </Button>
                         <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                             <Link href="#">
                                 <GitHubIcon />
                                 Sign up with GitHub
                             </Link>
                         </Button>
                    </div>
                    <p className="mt-8 text-sm text-gray-400">
                        CloudShift is now part of the future—you can find our full suite of GPUs and other AI products here.
                    </p>
                    <div className="mt-6">
                        <Link href="#" className="text-white font-medium hover:underline">
                            Talk to an Expert <ArrowRight className="inline-block ml-1 h-4 w-4" />
                        </Link>
                    </div>
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
      </main>
    </>
  )
}
