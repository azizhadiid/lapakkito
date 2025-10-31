import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "../../pengunjung/Navbar";
import { MainLayoutPengungjung } from "../../pengunjung/MainLayoutPengunjung";
import {footer} from '../../pengunjung/Footer';

export default function BerandaAdmin({children}: {children: React.ReactNode}) {
  return (
    <MainLayoutPengungjung>
      {children}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos eius earum ea voluptas quod ducimus natus praesentium nesciunt nihil eaque, tempora fugit sunt incidunt repellat quia. Reiciendis, velit exercitationem.</p>
    </MainLayoutPengungjung>
  );
}
