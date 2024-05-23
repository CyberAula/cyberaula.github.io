import React, { useState } from "react";
import Link from "next/link";
import { myBulletElements } from "@/constants/BulletElement";
import { useTranslation } from 'react-i18next';



export default function BulletElements(props) {
    const [bulletElements, setBulletElements] = useState(myBulletElements);
    const { t } = useTranslation();
    return (
        <div className="bullet_elements">
            {bulletElements.map(({ title, letter }, index) => (
                <div key={index} className="bullet_element">
                    <h5 className="title pl-8">{title}</h5>
                    <h1 className="letter pr-8">{letter}</h1>
                </div>
            ))}
        </div>
    );
}