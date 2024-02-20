import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TestPlaylist from "../components/TestPlaylist/TestPlaylist";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";

export default function Home() {
  return (
    <>
      <Header />
      <Tagline />
      <HomeSearchBar />
      <TopSongGallary />
      <TestPlaylist />
    </>
  );
}
