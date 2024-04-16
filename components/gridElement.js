import react from "react";

export default function GridElement(props) {
  return (
    <div className="grid_container">
      <div className="grid_item top_left">
        <h5>Introduction of ICTs in on-site, hybrid or online education.</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item top_mid">
        <h5>Use of gamification for teaching purposes</h5>
        <div className="small_sub">Use of serious games in education</div>
      </div>
      <div className="grid_item top_right">
        <h5>Performing of advanced tele-education experiments</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_left">
        <h5>Creation of advanced platforms for the introduction of ICTs in education</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_mid">
        <h5>Research on educational standards</h5>
        <div className="small_sub">SCROM | LORM</div>
      </div>
      <div className="grid_item bottom_right">
        <h5>Creation of learning objects through authoring tools </h5>
        <div className="small_sub"></div>
      </div>
    </div>
  );
}
