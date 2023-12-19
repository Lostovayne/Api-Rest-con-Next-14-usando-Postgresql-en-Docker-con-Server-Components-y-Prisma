"use client";

import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
    currentTab?: number;
    tabOptions?: number[];
}

export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {
    const [selected, setSelected] = useState(currentTab);

    const onTabSelected = (tab: number) => {
        setSelected(tab);
    };

    return (
        <div
            className={`grid w-full max-w-xl grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}
        >
            {tabOptions.map((tab) => {
                return (
                    <div key={tab}>
                        <input
                            checked={selected === tab}
                            onChange={() => {}}
                            type="radio"
                            id="1"
                            className="peer hidden"
                        />
                        <label
                            onClick={() => onTabSelected(tab)}
                            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-all duration-300 delay-75"
                        >
                            {tab}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};
