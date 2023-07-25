import { memo } from "react";
import BannerSuggestion from "../components/Home/BannerSuggestion";
import MusicList from "../components/Home/MusicList";
import CatelogySuggesstion from "../components/Home/Catelogy";
import NewSong from "../components/Home/NewSong";

const Home = () => {
    return (
        <div className="suggession--banner h-full w-full">
            <BannerSuggestion />
            <CatelogySuggesstion />
            <NewSong />
            <MusicList />
        </div>
    )
}

export default memo(Home);