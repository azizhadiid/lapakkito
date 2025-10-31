import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

export default function berandaAdmin() {
  return (
    <div>
      <Navbar/>
      <p className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        temporibus nisi iusto voluptatem totam alias sequi, rerum necessitatibus
        saepe ex doloribus quisquam reprehenderit neque at, accusantium ad
        perferendis porro aspernatur harum, repudiandae fugit ullam illum ab
        expedita! Consequuntur obcaecati aliquid iure, exercitationem neque
        praesentium molestias eos repudiandae, dolor aspernatur ad perspiciatis
        quos nisi laboriosam quis placeat. Tempore modi pariatur itaque
        voluptatem amet commodi odio culpa repellendus sit ex explicabo quam
        quasi ea praesentium rerum similique repellat dignissimos, autem eius
        dolorum nulla quidem. Necessitatibus dignissimos dolore quas amet,
        corporis nulla distinctio.
      </p>
      <Footer />
    </div>
  );
}
