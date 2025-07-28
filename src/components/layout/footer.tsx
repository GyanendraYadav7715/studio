import Link from "next/link";
import { Cloud, Github, Twitter, Linkedin, Instagram, Facebook, Disc } from "lucide-react";

const footerLinks = [
    {
        title: "Products",
        links: [
            { label: "Notebooks", href: "#" },
            { label: "Machines", href: "#" },
            { label: "Deployments", href: "#" },
        ],
    },
    {
        title: "Solutions",
        links: [
            { label: "Machine Learning", href: "#" },
            { label: "GPU Infrastructure", href: "#" },
        ],
    },
    {
        title: "Learn",
        links: [
            { label: "Products", href: "#" },
            { label: "Docs", href: "#" },
            { label: "Changelog", href: "#" },
            { label: "Status Page", href: "#" },
            { label: "Referral Program", href: "#" },
            { label: "Download App", href: "#" },
            { label: "Customers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { label: "Support", href: "#" },
            { label: "Talk to an expert", href: "#" },
            { label: "Business", href: "#" },
            { label: "Security", href: "#" },
            { label: "Cloud GPU Comparison", href: "#" },
            { label: "NVIDIA Cloud Partner", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
        ],
    },
];

const socialLinks = [
    { icon: Github, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
];


export function Footer() {
    return (
        <footer className="bg-card text-card-foreground border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center">
                            <Cloud className="h-8 w-8 mr-2 text-primary" />
                            <span className="font-bold text-xl">CloudShift</span>
                        </Link>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <p>&copy; {new Date().getFullYear()} CloudShift. All rights reserved.</p>
                    </div>
                     <div className="flex gap-4 mt-4 sm:mt-0">
                         <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link>
                         <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
                     </div>
                </div>
            </div>
        </footer>
    );
}