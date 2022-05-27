import LoginPage from "../../components/LoginPage";
import MainPage from "../../components/MainPage";
import {useRouter} from "next/router";

// 강의 컨텐츠를 표시하는 페이지
export default function Book() {
  const router = useRouter();
  const chapter = router.query.chapter;
  return (
    <div>
      <MainPage chapter={chapter}/>
    </div>
  )
}
