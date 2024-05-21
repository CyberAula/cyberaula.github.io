"use client"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Link from 'next/link';
import image from 'next/image';
import { useState, useEffect } from 'react';
import { mytools } from "@/constants/tools";

export default function Tools(props) {

  const [tools, setTools] = useState(mytools);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tools">
      <Header route="/tools" />
      <div className="banner">
        <h1>Tools</h1>
      </div>
      <main>

        <section className="our_tools lg:mx-36 md:mx-14 sm:mx-8 mx-4 lg:my-12 md:my-8 sm:my-4">

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="24px">

              {tools.map(({ title, description, route, logo }) => {
                return (
                <div className="tool">
              
                    <div className="tool_logo">
                      <img alt={"Project Logo"} src={logo} />
                    </div>
                
                  <div class="block justify-between">
                    <div className="tool_title">
                      <h2>{title}</h2>
                    </div>
                    <div className="tool_description">
                      <p>{description}</p>
                    </div>
                  </div>
                  <CreateLink route={route}>BOTON LINK</CreateLink>


                </div>

                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </section>
      </main>
      <Footer />
    </div>
  )


}
const CreateLink = (props) => {
  return props.route.match("http") ? (
    <a target="_blank" href={props.route} rel="noopener noreferrer">
      {props.children}
    </a>
  ) : (
    <Link to={props.route}>
      {props.children}
    </Link>
  );
}