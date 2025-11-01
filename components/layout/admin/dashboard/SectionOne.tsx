import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionOne() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-start">
      <section className="items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-950 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
          Selamat Datang di <br />
          <span className="text-[#D9534F]">Beranda Admin</span>
        </h1>
      </section>
    </main>
  );
}
