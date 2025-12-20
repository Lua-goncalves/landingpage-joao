import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 md:py-12 border-t border-border/30">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-gradient-primary">
              João Boyago
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Consultoria em Treinamento Feminino
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.instagram.com/coach_boyago?igsh=MWN0MDUxbTVqYmc0Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </a>
            <a
              href="https://wa.me/5511974793075"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Termos de uso
            </a>
            <span className="text-border hidden sm:inline">•</span>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Política de privacidade
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} João Boyago. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
