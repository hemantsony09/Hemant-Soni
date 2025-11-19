import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Hemant Soni. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/hemantsony09"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/hemantsony09"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:Hemantsoni252004@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
