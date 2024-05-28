import React from "react";
import { useTranslation } from 'react-i18next';
import { myBulletElements } from "@/constants/BulletElement";

export default function BulletElements(props) {
    const { t } = useTranslation();

   
    const bulletElements = myBulletElements.map(({ translationKey, letter, key }) => ({
        title: t(translationKey),
        letter,
        key,
    }));

    return (
        <div className="bullet_elements">
            {bulletElements.map(({ title, letter, key }) => (
                <div key={key} className="bullet_element">
                    <h5 className="title pl-8">{title}</h5>
                    <h1 className="letter pr-8">{letter}</h1>
                </div>
            ))}
        </div>
    );
}
