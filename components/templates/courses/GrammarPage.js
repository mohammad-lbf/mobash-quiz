import ArticleMainSection from "../../modules/Article/ArticleMainSection";
import articleData from '../../../assets/courses/grammar'
import ArticleContent from "../../modules/courses/grammar/ArticleContent";
import ShareSection from "../../modules/shareSection";
import CourseAsideSection from "../../modules/Course/CourseAsideSection";

const GrammarPage = () => {
    const {articleTitle , slug , coverPhoto , datePublished} = articleData
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container'>
                        <div className='row justify-content-between'>
                            <div className='col-12 col-xl-7'>
                                <ArticleMainSection categoryName={"دوره ها"} category={"/courses"} mainTitle={articleTitle} slug={slug} coverPhoto={coverPhoto} datePublished={datePublished} />
                                <ArticleContent />
                                <ShareSection slug={slug} />
                            </div>
                            <div className='col-12 col-xl-4'>
                                <CourseAsideSection />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default GrammarPage;