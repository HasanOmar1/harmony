import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
  SectionTitle,
  NoCoverSvg,
  NoCoversContainer,
} from "./SongGalleryStyle.js";
import NoCoversSvg from "../../assets/svgs/no-covers.svg";

import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function SongGallery({
  smallTitle,
  dataToMap1,
  dataToMap2,
  sectionTitle,
}) {
  const { t } = useTranslation();
  const [title1, title2] = smallTitle;
  //

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The number 2 here determines the speed of the scroll
    containerRef.current.scrollLeft = scrollLeft - walk;
  };
  //
  return (
    <>
      <SongGallary>
        <SectionTitle>{t(sectionTitle)}</SectionTitle>
        <TopHSongCountainer>
          <Title>{t(title1)}</Title>

          {dataToMap1?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}

          <ImageBoxContainer
            ref={containerRef}
            onMouseDown={startDragging}
            onMouseLeave={stopDragging}
            onMouseUp={stopDragging}
            onMouseMove={onDrag}
          >
            {dataToMap1}
          </ImageBoxContainer>
        </TopHSongCountainer>

        <TopASongCountainer>
          <Title>{t(title2)}</Title>
          {dataToMap2?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}
          <ImageBoxContainer>{dataToMap2}</ImageBoxContainer>
        </TopASongCountainer>
      </SongGallary>
    </>
  );
}
