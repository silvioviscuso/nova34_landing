"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircuitBoard, Github, Cpu, Wifi, Database, Zap, Download, ChevronRight, ArrowRight, Camera, Move, Monitor, Bluetooth } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { GradientHeading } from "@/components/ui/gradient-heading";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dimensions");
const data = {
  dimensions: [
    { label: "Width", value: "34mm" },
    { label: "Height", value: "30.946mm" },
    { label: "Thickness", value: "1mm" }
  ],
  components: [
    {
      label: "Back Side",
      items: [
        "NXP MIMX8MN5DVPIZAA (I.MX 8M NANO - ULTRALIGHT 11x11mm)",
        "PMIC NXP PCA9450BHNY",
        "Antenna M310220 Kyocera Avx",
        "ADG824BCPZ-REEL7 (For Antenna Diversity)",
        "Camera 5MP (Autofocus, 24Pins, around 110° FOV)",
        "Connector JST B4B-ZR-SM4-TF (1.5mm, 1 Row, 4 Contacts)",
        "USB Pads for SDM (Serial Download Mode for firmware flashing)",
        "Speaker Pads and External Speaker"
      ]
    },
    {
      label: "Combo Chip",
      items: [
        "Rev_1.0 to Rev_1.3: (Realtek) RTL8723DS (6x6mm Wi-Fi + Bluetooth)",
        "Final Revision: CYW43012 (Infineon) - 106-ball WLBGA (3.76 x 4.43mm; 0.35mm pitch)",
        "Storage: (Kingston) 32EP16-M4FTC32-GA68 (eMMC 5.1 HS400 + LPDDR4X 144-FBGA)"
      ]
    },
    {
      label: "Front Side",
      items: [
        "IMU BMI160 (Bosch)",
        "Display ST0103A2W-WSNLW-F (Santek)",
        "NC7SP125P5X (Onsemi Fairchild)",
        "MAX98357AETE+T (Analog Device)"
      ]
    }
  ],
  connectivity: [
    { label: "Wi-Fi", value: "802.11ac, dual-band" },
    { label: "Bluetooth", value: "Bluetooth 5.0 BLE" },
    { label: "USB", value: "USB Pads for SDM (Serial Download Mode)" },
    { label: "Connector", value: "JST B4B-ZR-SM4-TF (Power input & Serial Communication)" }
  ],
  power: [
    { label: "Input Voltage", value: "5V DC" },
    { label: "Power Consumption", value: "1.5W - 3W typical" },
    { label: "Power Connector", value: "USB-C" },
    { label: "Battery Support", value: "Optional LiPo connector" }
  ]
};

  return (
    <main className="flex min-h-screen flex-col">
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background gradient-bg relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="right" duration={0.7}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <GradientHeading as="h1" variant="primary" className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Nova34
                  </GradientHeading>
                  <p className="text-xl text-muted-foreground">
                    General Purpose Ultra Small Linux Board
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                NOVA34 is an open-source, ultra-small 34mm Linux & Android board with custom PCB design, optimized for embedded systems and peripherals integration.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group">
                    <Link href="https://github.com/silvioviscuso/nova34" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                      View on GitHub
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="group">
                    <Link href="https://nova34-docs.vercel.app" target="_blank" rel="noopener noreferrer">
                      Documentation
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" duration={0.7} delay={0.2}>
            <div className="flex items-center justify-center">
  <motion.div
    className="relative h-[350px] w-[350px] md:h-[250px] md:w-[250px] flex items-center justify-center"
    animate={{
      rotateZ: [0, 2, 0, -2, 0],
    }}
    transition={{
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    }}
  >
    <Image
      src="/assets/images/Preview_3D_old_placements.png" // Percorso relativo alla cartella public
      alt="Nova34 PCB"
      layout="fill"  // Adatta l'immagine alle dimensioni della card
      objectFit="cover"  // Mantiene le proporzioni dell'immagine
      className="rounded-lg shadow-2xl"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-lg" />
  </motion.div>
</div>

            </FadeIn>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </section>
      {/* Features Section */}
    {/* Features Section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
  <div className="container px-4 md:px-6">
    <FadeIn direction="up">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Features
          </div>
          <GradientHeading variant="secondary" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Everything you need in a tiny package
          </GradientHeading>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nova34 packs powerful features into an ultra-small form factor, making it perfect for a wide range of applications.
          </p>
        </div>
      </div>
    </FadeIn>
    
    <StaggerChildren className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Cpu className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Powerful Processor</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Wifi className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Wireless Connectivity</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Bluetooth className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Bluetooth</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Database className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Storage</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Camera className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Camera Support</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Monitor className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Display OLED</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CircuitBoard className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>GPIO & Connectivity</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Zap className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>Power Management</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
      <StaggerItem>
        <Card className="card-hover glow border-none bg-background/60 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <Move className="h-6 w-6 mb-2 text-primary" />
            <CardTitle>6-Axis IMU</CardTitle>
          </CardHeader>
        </Card>
      </StaggerItem>
    </StaggerChildren>
  </div>
</section>


      {/* Use Cases Section */}
     
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Technical Specifications
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Detailed specifications of the custom PCB board
          </p>
        </div>

        {/* Dimension Table */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-bold">Dimensions</h3>
          <table className="min-w-full border-collapse bg-background/60 backdrop-blur-sm">
            <tbody>
              {data.dimensions.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-medium">{item.label}</td>
                  <td className="px-4 py-2 text-muted-foreground">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    

        {/* Connectivity Table */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-bold">Connectivity</h3>
          <table className="min-w-full border-collapse bg-background/60 backdrop-blur-sm">
            <tbody>
              {data.connectivity.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-medium">{item.label}</td>
                  <td className="px-4 py-2 text-muted-foreground">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Power Table */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="text-xl font-bold">Power</h3>
          <table className="min-w-full border-collapse bg-background/60 backdrop-blur-sm">
            <tbody>
              {data.power.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-medium">{item.label}</td>
                  <td className="px-4 py-2 text-muted-foreground">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <FadeIn direction="up" className="relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <GradientHeading variant="secondary" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Get Started?
                </GradientHeading>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our open-source community and start building with Nova34 today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="group">
                  <Link href="https://github.com/silvioviscuso/nova34" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                    View on GitHub
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="https://nova34-docs.vercel.app" target="_blank" rel="noopener noreferrer">
                    Read the Docs
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pulse" />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm text-muted-foreground">
                © 2025 Nova34. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="https://github.com/silvioviscuso/nova34"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link 
                href="https://nova34-docs.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}