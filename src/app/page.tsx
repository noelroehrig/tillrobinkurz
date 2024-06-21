import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProjectPreview projectName={"test"} />
        
        <ProjectPreview projectName={"test"} />
        
        <ProjectPreview projectName={"test"} />
        
        <ProjectPreview projectName={"test"} />
      </div>
    </main>
  );
}
