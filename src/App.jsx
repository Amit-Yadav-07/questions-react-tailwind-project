import { useState } from "react";
import data from "./data";
import Questions from "./Questions";


function App() {

  let [questions, setQuestions] = useState(data);


  return (
    <main className="min-h-[100vh] max-h-[auto] bg-blue-300 flex justify-center items-center flex-col py-10">
      <Questions questions={questions} />
    </main>
  )
}

export default App
