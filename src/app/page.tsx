import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Workflow from "@/components/Workflow";
import BudgetEstimator from "@/components/BudgetEstimator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Navbar />
      <main id="conteudo"><Hero /><BentoGrid /><Workflow /><BudgetEstimator /><FAQ /></main>
      <Footer />
    </>
  );
}
