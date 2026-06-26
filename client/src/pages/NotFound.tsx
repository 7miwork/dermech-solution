import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-lg mx-4 border border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-12 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-primary" />
            </div>
          </div>

          <h1 className="text-6xl font-bold text-primary mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            404
          </h1>

          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-foreground/70 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-primary hover:bg-primary/80 text-background px-6 py-2.5 rounded-lg transition-all duration-200"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}