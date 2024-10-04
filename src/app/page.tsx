import Header from "./components/Header";
import ProjectPreview from "./components/ProjectPreview"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <ProjectPreview projectName={"Katzengasse"} projectLink={"/katzengasse"}/>
        
        <ProjectPreview projectName={"Weidengasse"} projectLink={"/weidengasse"}/>
        
        <ProjectPreview projectName={"test"} projectLink={"/"}/>
        
        <ProjectPreview projectName={"test"} projectLink={"/"}/>
      </div>
    </main>
  );
}
