import LoginPage from "../../components/LoginPage";
import MainPage from "../../components/MainPage";
import {useRouter} from "next/router";

export default function Book() {

    const router = useRouter();
    const chapter=router.query.chapter;
    const subChapter=router.query.subchapter;
  return (
      <div>
        <MainPage chapter={chapter} subChapter={subChapter}/>
      </div>
  )
}
