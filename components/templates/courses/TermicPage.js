import ArticleMainSection from "../../modules/Article/ArticleMainSection";
import articleData from '../../../assets/courses/termic'
import ArticleContent from "../../modules/courses/termic/ArticleContent";
import ShareSection from "../../modules/shareSection";
import CourseAsideSection from "../../modules/Course/CourseAsideSection";

const TermicPage = () => {
    const {articleTitle , slug , coverPhoto , datePublished} = articleData
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-xl-10 about-section mt-4 mt-lg-0 pt-0 pt-lg-4'>
                                <ArticleMainSection categoryName={"دوره ها"} category={"/courses"} mainTitle={articleTitle} slug={slug} coverPhoto={coverPhoto} datePublished={datePublished} />
                                <ArticleContent />
                                <ShareSection slug={slug} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default TermicPage;