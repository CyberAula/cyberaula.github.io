import React, { useState } from "react";
import Link from "next/link";
import { myBulletElements } from "@/constants/BulletElement";

export default function BulletElements(props) {
    const [bulletElements, setBulletElements] = useState(myBulletElements);

    return (
        <div className="bullet_elements">
            {bulletElements.map(({ title, letter }, index) => (
                <div key={index} className="bullet_element">
                    <div className="title">{title}</div>
                    <div className="letter">{letter}</div>
                </div>
            ))}
        </div>
    );
}