"use client";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";


import { useState } from "react";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is QuiZinema?",
            answer: "QuiZinema is a fun, movie-themed trivia game where you guess films based on posters, characters, iconic scenes, and more! Think Bollywood + brainpower + bragging rights."
        },
        {
            question: "Is it only for Bollywood fans?",
            answer: "Not at all! While we’ve started with Bollywood, we’re expanding to Hollywood, Tollywood, Mollywood, and beyond. Stay tuned for new movie worlds!"
        },
        {
            question: "How do I play?",
            answer: "Just download the app, pick a level, and guess the movie! You’ll see images, scenes, or clues — type in the movie name and climb the leaderboard."
        },
        {
            question: "Is it free to play?",
            answer: "Yes! QuiZinema is absolutely free. You can play without paying, but we offer optional hints and power-ups that you can unlock with in-game coins."
        },
        {
            question: "How do I earn coins?",
            answer: "Coins are earned by completing levels, watching ads, or grabbing daily bonuses. You can also unlock more through challenges or special events."
        },
        {
            question: "I’m stuck on a level. What do I do?",
            answer: "No worries! Use hints like revealing a letter, removing wrong letters, or skipping the level altogether. You can also ask your friends for help."
        },
        {
            question: "What are stickers and how do I collect them?",
            answer: "Stickers are collectible movie-themed rewards you unlock as you progress. Think of them like digital souvenirs — the more you play, the more you earn."
        },
        {
            question: "Can I play offline?",
            answer: "You’ll need an internet connection to download the game and load levels, but once you’re in — many parts of the game can be played offline."
        },
        {
            question: "Will there be new levels and updates?",
            answer: "Definitely! We’re always adding new movie quizzes, levels, and surprises to keep things exciting. Follow us on Instagram to stay updated."
        },
        {
            question: "I found a bug or issue. How do I report it?",
            answer: "Oops! Sorry about that. Please email us at hello@quizinema.com or use the feedback option inside the app. We’re quick to fix things!"
        },
        {
            question: "Is QuiZinema available on iOS and Android?",
            answer: "Yes! You can find it on both the Apple App Store and Google Play Store."
        },
        {
            question: "Are the images and content used in the game legal?",
            answer: "We use AI-generated images and user-submitted content inspired by public domain or transformative fan art. If there’s something we should look into, let us know!"
        },
        {
            question: "Will there be a leaderboard or multiplayer mode?",
            answer: "Yes! Leaderboards are live, and multiplayer/trivia battles are coming soon. Get ready to challenge your filmy friends!"
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">Frequently Asked Questions</h1>
                <p className="text-base text-[#543855] text-center mb-10 max-w-2xl mx-auto">
                    Everything you need to know about MovieQuiz. Can&apos;t find the answer you&apos;re looking for? Reach out to our support team.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <h3 className="text-base font-medium text-gray-800 font-medium">{faq.question}</h3>
                                <span className="text-[#543855] text-base">
                                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </div>
                            {openIndex === index && (
                                <p className="mt-2 text-sm text-[#543855]">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-10 text-center">
                <p className="text-base text-gray-600 mb-3">Still have questions?</p>
                <a
                    href="/contact"
                    className="inline-block bg-[#543855] text-white text-lg px-6 py-2 rounded-lg hover:bg-purple-800 transition duration-300"
                >
                    <span className="mr-2"></span>Connect Us
                </a>
            </div>
        </section>
    );
}