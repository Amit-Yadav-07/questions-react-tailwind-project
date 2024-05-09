
import SingleQuestion from "./SingleQuestion";

let Questions = ({ questions }) => {

    return (
        <div className="bg-slate-300 drop-shadow-lg lg:w-[50%] md:w-[80%] h-[auto]">
            <h1 className="my-6 text-5xl text-center">Questions</h1>
            {questions.map((question) => {

                return <SingleQuestion question={question} key={question.id} />
            })}
        </div>
    )
}

export default Questions;