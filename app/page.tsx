import { cn } from "@/lib/utils";
import styles from "@/app/home.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-2 items-center justify-center p-4 black">
      <div
        className={cn(
          "h-[350px] w-[150px] bg-transparent",
          styles.bg_mesh,
          styles.bg_mesh_1
        )}
      ></div>
      <div
        className={cn(
          "h-[350px] w-[150px] bg-transparent",
          styles.bg_mesh,
          styles.bg_mesh_2
        )}
      ></div>
      <div
        className={cn(
          "h-[350px] w-[150px] bg-transparent",
          styles.bg_mesh,
          styles.bg_mesh_3
        )}
      ></div>
    </main>
  );
}
