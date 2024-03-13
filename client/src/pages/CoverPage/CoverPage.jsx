import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import * as S from "./CoverPage.styles";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";
import commentSvg from "../../assets/svgs/comment.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} from "../../api/viewsAndLikesApi";
import { useGetSongByIdQuery } from "../../api/addCoverToSongApi";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";
import { useSelector } from "react-redux";
import ShareButton from "../../components/ShareButton/ShareButton";

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
  const [isCommenting, setIsCommenting] = useState(false);
  const commentRef = useRef();

  const currentUser = useSelector((state) => state.auth.user);
  console.log(currentUser);

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
    setShareFallback((prev) => !prev);
  };

  useEffect(() => {
    if (updatedCoverSong?.likes.includes(currentUser.id)) {
      setLikedVideo(true);
    } else {
      setLikedVideo(false);
    }
  }, [updatedCoverSong]);

  useEffect(() => {
    if (isCommenting) {
      commentRef.current.focus();
    }
  }, [isCommenting]);

  function handleShowComment() {
    setIsCommenting((prev) => !prev);
  }

  const url = `https://youtu.be/${coverData?.youtubeUrl}`;
  const title = `Check out this cover song that has been created on this song: ${coverData?.originalSongName}`;

  return (
    <main>
      <Header />
      <S.CoverArtistTitle>
        Cover by {coverData?.coverArtistName}
      </S.CoverArtistTitle>

      <S.BigContainer>
        <S.ArtistContainer>
          <div>
            <S.SongCover
              onClick={goBackToOriginalSong}
              src={coverData?.originalSongCover}
              alt="Original song cover art"
            />
          </div>

          <S.SongAndSingerContainer>
            <S.SongName onClick={goBackToOriginalSong}>
              {coverData?.originalSongName}
            </S.SongName>
            <S.OriginalArtistName onClick={goBackToOriginalSong}>
              {coverData?.originalArtist}
            </S.OriginalArtistName>
          </S.SongAndSingerContainer>
        </S.ArtistContainer>

        <div>
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
          />
          <S.VideoInfo>
            <S.SameLine
              onClick={toggleShareOptions}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img src={shareSvg} alt="share svg" />

              <p>Share</p>
            </S.SameLine>
            {shareFallback && <ShareButton title={title} url={url} />}
            <S.SameLine>
              <p>{updatedCoverSong?.views} Views</p>
            </S.SameLine>
            <S.SameLine onClick={handleShowComment}>
              <img src={commentSvg} alt="comment svg" />
            </S.SameLine>
            <S.SameLine>
              <p className="likes">{updatedCoverSong?.likes.length} Likes </p>
              <div onClick={updateLikes}>
                {likedVideo ? (
                  <S.LikedCoverButton
                    $likedCover={likedVideo}
                    src={likedSvg}
                    alt="liked svg"
                  />
                ) : (
                  <S.LikedCoverButton
                    $likedCover={likedVideo}
                    src={likeSvg}
                    alt="not liked svg"
                  />
                )}
              </div>
            </S.SameLine>
          </S.VideoInfo>
        </div>
      </S.BigContainer>

      {/* <h1>comments</h1> */}

      {isCommenting && (
        <S.AllCommentContainer>
          <S.CommentContainer>
            <S.UserAvatar src={currentUser?.avatar} alt="user's avatar" />
            <S.CommentInput
              name="comment"
              id="comment"
              type="text"
              placeholder="Add a comment…"
              ref={commentRef}
            ></S.CommentInput>
          </S.CommentContainer>
          <S.SendButton>SEND</S.SendButton>
        </S.AllCommentContainer>
      )}
    </main>
  );
}
