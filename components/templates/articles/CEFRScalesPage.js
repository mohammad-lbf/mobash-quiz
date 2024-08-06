import ArticleMainSection from "../../modules/Article/ArticleMainSection";
import articleData from '../../../assets/articles/cefr-scales'
import ArticleContent from "../../modules/articles/cefr-scales/ArticleContent";
import ShareSection from "../../modules/shareSection";
import ArticleAsideSection from "../../modules/Article/ArtcleAsideSection";

const CEFRScalesPage = () => {
    const {articleTitle , slug , coverPhoto , datePublished} = articleData
    return (
        <div className='page-padding-tops'>
            <div className='pt-2 pt-md-4'>
                <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-xl-10 about-section mt-4 mt-lg-0 pt-0 pt-lg-4' style={{paddingBottom:"0"}}>
                                <ArticleMainSection categoryName={"مقالات"} category={"/articles"} mainTitle={articleTitle} slug={slug} coverPhoto={coverPhoto} datePublished={datePublished} />
                                <ArticleContent />
                                <ShareSection slug={slug} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default CEFRScalesPage;