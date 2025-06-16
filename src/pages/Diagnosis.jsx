import React from 'react'
import { SeeDiagnosis } from '../components/SeeDiagnosis';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import {ToastContainer} from "react-toastify"
export const Diagnosis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Navbar />
        <ToastContainer />
        <SeeDiagnosis />

        
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

