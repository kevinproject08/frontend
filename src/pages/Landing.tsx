import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, FileAudio, Download, CheckCircle2, Sparkles, Moon, Sun, BarChart3, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import notedraftLogo from "@/assets/notedraft-logo.png";
import Footer from "@/components/Footer";

const Landing = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-accent shadow-lg">
              <img src={notedraftLogo} alt="NoteDraft logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">NoteDraft</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/metrics">
              <Button variant="outline" size="sm">
                <BarChart3 className="h-4 w-4 mr-2" />
                Metrics
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/dashboard">
              <Button variant="gradient">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-background"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Built for composers, students, and producers
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Audio into MIDI in Seconds
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              NoteDraft is an AI-powered audio and video to MIDI converter for musicians, producers, and students.
              Upload real performances and get clean, editable MIDI for MuseScore and your favorite DAW in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" variant="gradient" className="text-lg px-8">
                  Upload Audio
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Waveform Animation */}
            <div className="mt-12 flex items-end justify-center gap-1 h-24">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-primary/70 to-accent/70"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animation: `wave ${1 + Math.random()}s ease-in-out infinite`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="border-border bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileAudio className="h-5 w-5 text-primary" />
                Audio & Video Input
              </CardTitle>
              <CardDescription>
                Upload WAV, MP3, or video files and let NoteDraft handle the transcription pipeline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Piano, ensemble, and more
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Handles real-world performance recordings
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                AI-Powered Cleanup
              </CardTitle>
              <CardDescription>
                Custom post-processing filters out ghost notes and overtones before you ever open the MIDI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Designed for real practice recordings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Built from actual student use cases
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" />
                MIDI Ready for Editing
              </CardTitle>
              <CardDescription>
                Export MIDI that drops straight into MuseScore, Logic, Ableton, or your favorite DAW.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Clean tracks instead of clustered note spam
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Save hours of manual transcription work
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              Built Around Real Musicians
            </h2>
            <p className="text-muted-foreground">
              NoteDraft started as a way to turn real piano practice sessions into editable scores. It now helps
              composers, students, and teachers capture ideas faster without getting stuck in manual MIDI entry.
            </p>
            <p className="text-muted-foreground">
              Whether you&apos;re preparing for auditions, sketching a new piece, or documenting an improvisation,
              NoteDraft turns raw audio into something you can keep refining.
            </p>
          </div>

          <Card className="border-border bg-background/60 backdrop-blur">
            <CardHeader>
              <CardTitle>Perfect For</CardTitle>
              <CardDescription>Real use cases instead of demo-perfect recordings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>🎓 Students transcribing repertoire or etudes for analysis.</p>
              <p>🎧 Producers converting melodic ideas into MIDI to arrange later.</p>
              <p>🎼 Composers capturing improv sessions before the ideas vanish.</p>
              <p>🎻 Teachers creating quick study materials from their own playing.</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/dashboard">
            <Button size="lg" variant="gradient">
              Start Converting Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
