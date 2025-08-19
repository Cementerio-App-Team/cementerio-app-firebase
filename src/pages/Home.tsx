import HomeHeader from "../components/home/HomeHeader";
import HomeForm from "../components/home/HomeForm";

export default function Home() {
  return (
    <div className="min-h-dvh bg-gray-50">
      <HomeHeader />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <HomeForm />
      </main>
    </div>
  );
}
