"use client";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

let interval: any;

type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
    icon: React.ElementType; // Define icon as a React component
};

export const CardStack = ({
                              items,
                              offset,
                              scaleFactor,
                          }: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        startFlipping();

        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!); // move the last element to the front
                return newArray;
            });
        }, 5000);
    };

    return (
        <div className="relative h-60 w-60 md:h-60 md:w-96">
            {cards.map((card, index) => {
                const Icon = card.icon; // Define Icon as the React component
                return (
                    <motion.div
                        key={card.id}
                        className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, // decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="font-normal text-neutral-700 dark:text-neutral-200">
                            {card.content}
                        </div>
                        <div className="flex items-center">
                            <div>
                                <p className="text-neutral-500 font-medium dark:text-white flex items-center">
                                    {card.name}
                                    <Icon className="text-2xl ml-2"/>
                                </p>
                                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                                    {card.designation}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
