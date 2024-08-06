import ArticleMainSection from "../../modules/Article/ArticleMainSection";
import articleData from '../../../assets/articles/evolve-books'
import ArticleContent from "../../modules/articles/evolve-books/ArticleContent";
import ShareSection from "../../modules/shareSection";
import ArticleAsideSection from "../../modules/Article/ArtcleAsideSection";

const EvolveBooksPage = () => {
    const {articleTitle , slug , coverPhoto , datePublished} = articleData
    return (
        <div className='page-padding-tops'>
            <div className='pt-4'>
                <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-xl-10 about-section mt-4 mt-lg-0 pt-0 pt-lg-4'>
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

export default EvolveBooksPage;