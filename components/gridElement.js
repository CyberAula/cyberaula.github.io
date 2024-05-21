import react from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function GridElement(props) {
  return (

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}>
      <Masonry gutter="12px">    
      <div className="grid_item top_left width-1 ">
        <h5>Introduction of ICTs in on-site, hybrid or online education.</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item top_mid width-3">
        <h5>Use of gamification for teaching purposes</h5>
        <div className="small_sub">Use of serious games in education</div>
      </div>
      <div className="grid_item top_right width-2">
        <h5>Performing of advanced tele-education experiments</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_left width-2">
        <h5>Creation of advanced platforms for the introduction of ICTs in education</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_mid width-1">
        <h5>Research on educational standards</h5>
        <div className="small_sub">SCROM | LORM</div>
      </div>
      <div className="grid_item bottom_right width-3">
        <h5>Creation of learning objects through authoring tools </h5>
        <div className="small_sub"></div>
      </div>
    </Masonry>
    </ResponsiveMasonry>
  );

}
