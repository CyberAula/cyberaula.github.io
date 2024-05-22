import react from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useTranslation } from 'react-i18next';
export default function GridElement(props) {
  const { t } = useTranslation();
  return (

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 3 }}>
      <Masonry gutter="12px">    
      <div className="grid_item top_left width-1 ">
        <h5>{t('front.gridElements.topL')}</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item top_mid width-3">
        <h5>{t('front.gridElements.topM')}</h5>
        <div className="small_sub">{t('front.gridElements.topMsub')}</div>
      </div>
      <div className="grid_item top_right width-2">
        <h5>{t('front.gridElements.topR')}</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_left width-2">
        <h5>{t('front.gridElements.bottomL')}</h5>
        <div className="small_sub"></div>
      </div>
      <div className="grid_item bottom_mid width-1">
        <h5>{t('front.gridElements.bottomM')}</h5>
        <div className="small_sub">{t('front.gridElements.bottomMsub')}</div>
      </div>
      <div className="grid_item bottom_right width-3">
        <h5>{t('front.gridElements.bottomR')} </h5>
        <div className="small_sub"></div>
      </div>
    </Masonry>
    </ResponsiveMasonry>
  );

}
