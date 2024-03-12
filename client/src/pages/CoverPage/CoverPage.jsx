import React, { useEffect, useState } from "react";
import {
  EmailShareButton,

  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  
} from "react-share";
import Header from "../../components/Header/Header";

import {
  SongCover,
  ArtistContainer,
  CoverArtistTitle,
  SongName,
  OriginalArtistName,
  VideoInfo,
  SameLine,
  BigContainer,
  SongAndSingerContainer,
  LikedCoverButton,
  ShareLinks,
} from "./CoverPage.styles";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} from "../../api/viewsAndLikesApi";
import { useGetSongByIdQuery } from "../../api/addCoverToSongApi";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";
import { useSelector } from "react-redux";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const navigate = useNavigate();

  const [addView] = useAddViewMutation();
  const [toggleLike] = useToggleLikeMutation();
  const { data: updatedCoverSong } = useGetCoverSongByIdQuery(coverData?._id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId, {
    skip: !updatedCoverSong?.originalSongId,
  });

  const [playVideoDiv, setPlayVideoDiv] = useState(false);
  const [likedVideo, setLikedVideo] = useState(false);
  const [shareFallback, setShareFallback] = useState(false);


  const currentUser = useSelector((state) => state.auth.user);

  const goBackToOriginalSong = () => {
    navigate("/translating", {
      state: {
        artist: coverData?.originalArtist,
        song: coverData?.originalSongName,
        coverArt: coverData?.originalSongCover,
      },
    });
  };

  useEffect(() => {
    if (updatedCoverSong?.originalSongId) {
      refetch();
    }
  }, [updatedCoverSong]);

  function updateViews() {
    addView(coverData?._id);
    setPlayVideoDiv(true);
  }

  function updateLikes() {
    toggleLike(coverData?._id);
  }

  const toggleShareOptions = () => {
    setShareFallback(prev=>!prev);
  };
 
 

  // const handleShare = async () => {
  //   if (navigator.share) {
  //     try {
  //       await navigator.share({
  //         title: "Check out this song cover!",
  //         text: `Here's a great cover of ${coverData?.originalSongName} by ${coverData?.coverArtistName}`,
  //         url: window.location.href,
  //       });
  //       console.log('Share was successful.');
  //     } catch (error) {
  //       console.error('Error sharing:', error);
  //     }
  //   } else {
  //     // Trigger fallback for browsers that do not support Web Share API
  //     setShareFallback(true);
  //     console.log('Web Share not supported on this browser, triggering fallback.');
  //   }
  // };



  useEffect(() => {
    if (updatedCoverSong?.likes.includes(currentUser.id)) {
      setLikedVideo(true);
    } else {
      setLikedVideo(false);
    }
  }, [updatedCoverSong]);

  return (
    <main>
      <Header />
      <CoverArtistTitle>Cover by {coverData?.coverArtistName}</CoverArtistTitle>

      <BigContainer>
        <ArtistContainer>
          <div>
            <SongCover
              onClick={goBackToOriginalSong}
              src={coverData?.originalSongCover}
              alt="Original song cover art"
            />
          </div>

          <SongAndSingerContainer>
            <SongName onClick={goBackToOriginalSong}>
              {coverData?.originalSongName}
            </SongName>
            <OriginalArtistName onClick={goBackToOriginalSong}>
              {coverData?.originalArtist}
            </OriginalArtistName>
          </SongAndSingerContainer>
        </ArtistContainer>

        <div>
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
          />
          <VideoInfo>
            <SameLine
              onClick={toggleShareOptions}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img src={shareSvg} alt="share svg" />

              <p >Share</p>
              {shareFallback && (
                <ShareLinks >
                  <WhatsappShareButton
                    url={`https://youtu.be/${coverData.youtubeUrl}`}
                    title={coverData?.originalSongName}
                  >
                    <WhatsappIcon size={40} round />
                  </WhatsappShareButton>
                  <FacebookShareButton
                    url={`https://youtu.be/${coverData.youtubeUrl}`}
                    quote={coverData?.originalSongName}
                  >
                    <FacebookIcon size={40} round />
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={`https://youtu.be/${coverData.youtubeUrl}`}
                    title={coverData?.originalSongName}
                  >
                    <TwitterIcon size={40} round />
                  </TwitterShareButton>
                  <FacebookMessengerShareButton
                    url={`https://youtu.be/${coverData.youtubeUrl}`}
                    title={coverData?.originalSongName}
                  >
                    <FacebookMessengerIcon size={40} round />
                  </FacebookMessengerShareButton>

                  <EmailShareButton
                    url={`https://youtu.be/${coverData.youtubeUrl}`}
                    title={coverData?.originalSongName}
                  >
                    <EmailIcon size={40} round />
                  </EmailShareButton>
                </ShareLinks>
              )}
            </SameLine>
            <p>{updatedCoverSong?.views} views</p>
            <SameLine>
              <p className="likes">{updatedCoverSong?.likes.length} Likes </p>
              <div onClick={updateLikes}>
                {likedVideo ? (
                  <LikedCoverButton
                    $likedCover={likedVideo}
                    src={likedSvg}
                    alt="liked svg"
                  />
                ) : (
                  <LikedCoverButton
                    $likedCover={likedVideo}
                    src={likeSvg}
                    alt="not liked svg"
                  />
                )}
              </div>
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
      <div>comments</div>
    </main>
  );
}
