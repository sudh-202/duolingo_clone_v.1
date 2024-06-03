import Image from "next/image";

type Props = {
    question: string;
};

export const QuestionBubble = ({ question }: Props) => {
    return (
        <div>
            <div className="flex items-center gap-x-4 mb-6">
                <Image
                    src="/mascot.svg"
                    alt="Mascot"
                    height={60}
                    width={60}
                    className="hidden lg:block"
                />
                <Image
                    src="/mascot.svg"
                    alt="Mascot"
                    height={40}
                    width={40}
                    className="block lg:hidden"
                />
                <div className="relative py-2 px-4 border-2 rounded-xl text-sm lg:text-base">
                    {question}
                <div
                className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90"
                />
                </div>
            </div>
        </div>
    )
}


// Path: app/lesson/quiz.tsx
// Compare this snippet from app/lesson/quiz.tsx
// import { challengeOptions, challenges } from "@/db/schema";
// import { useState} from "react";
// import { Header } from "./header";
// import { QuestionBubble } from "./question-bubble";
// import { SelectChallenge } from "./select-challenge";
// import new { useExitModal } from "@/store/use-exit-modal";
// import { useEffect } from "react";
// use client;

// type Props = {
//  inital LessonId: number;
// initalPercentage: number;
// initalHearts: number;
// initalLessonChallenges: (typeof challenges.$inferSelect & { completed: boolean; challengeOptions: (typeof challengeOptions. $inferSelect)[]})
//}

// export const Quiz = ({
// initalPercentage,
// initalHearts,
// initalLessonId,
// initalLessonChallenges,
// userSubscription,
// }: Props) => {
// const [percentage, setPercentage] = useState(intialPercentage);
// const [hearts, setHearts] = useState(initalHearts);
// const [challenges] = useState(initalLessonChallenges);
// return(
<>

</>
//)
//}
//})