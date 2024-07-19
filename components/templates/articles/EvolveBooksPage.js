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
                        <div className='row justify-content-between'>
                            <div className='col-12 col-xl-7'>
                                <ArticleMainSection categoryName={"مقالات"} category={"/articles"} mainTitle={articleTitle} slug={slug} coverPhoto={coverPhoto} datePublished={datePublished} />
                                <ArticleContent />
                                <ShareSection slug={slug} />
                            </div>
                            <div className='col-12 col-xl-4'>
                                <ArticleAsideSection />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default EvolveBooksPage;