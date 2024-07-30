import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react'

const faqs = [
    {
        question: "What is the AI Interview Application?",
        answer: "The AI Interview Application is a tool designed to help users practice for job interviews by providing automated feedback on their responses."
    },
    {
        question: "How does the AI Interview Application work?",
        answer: "The application uses AI to analyze your answers to common interview questions and provides feedback based on various parameters such as relevance, correctness, and presentation."
    },
    {
        question: "Is the AI Interview Application free to use?",
        answer: "Yes, the basic version of the AI Interview Application is free to use. However, there might be premium features that require a subscription."
    },
    {
        question: "How accurate is the feedback provided by the AI?",
        answer: "The AI provides feedback based on a large dataset of interview responses and industry standards. While it aims to be highly accurate, users are encouraged to use the feedback as a guide rather than an absolute measure."
    },
    {
        question: "Can I customize the interview questions?",
        answer: "Yes, users can customize the interview questions to better suit their specific needs or the requirements of the job they are applying for."
    },
    {
        question: "What types of questions are included in the application?",
        answer: "The application includes a wide range of questions from different industries and job roles, covering technical, behavioral, and situational questions."
    },
    {
        question: "How can I access my interview feedback?",
        answer: "Your interview feedback is available immediately after you complete an interview session. You can view it on your dashboard under the 'Feedback' section."
    },
    {
        question: "Is my data secure with the AI Interview Application?",
        answer: "Yes, we take data security seriously. All your responses and personal information are stored securely and are not shared with any third parties."
    },
    {
        question: "Can I get human feedback on my interview responses?",
        answer: "While the application primarily provides AI-generated feedback, there are options to get human feedback through premium services."
    },
    {
        question: "How do I get started with the AI Interview Application?",
        answer: "Getting started is easy. Sign up on our website, choose a question set, and start practicing. You'll receive feedback immediately after completing each interview session."
    }
];

const QuestionPage = () => {
    return (
        <div className='p-10'>
            <h1 className='text-3xl font-bold mb-5'>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <Collapsible key={index} className='mt-7'>
                    <CollapsibleTrigger className='p-2 bg-secondary rounded-lg flex justify-between my-2 text-left gap-7 w-full'>
                        {faq.question} <ChevronsUpDown className='h-5 w-5' />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className='p-2 border rounded-lg bg-gray-50'>
                            {faq.answer}
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            ))}
        </div>
    )
}

export default QuestionPage
