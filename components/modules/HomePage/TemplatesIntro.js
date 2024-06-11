import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TemplateCard from '../Templates/TemplateCard';

const TemplatesIntro = ({templates}) => {
    return (
        <div className='pt-4'>
            <div className='container my-4'>

                <div className='row align-items-center pt-lg-4'>
                    <div className='col-12 col-lg-6 text-center text-lg-end'>
                        <h3 className='color-linear mb-1 mx-auto text-center text-lg-end'>قالب های سایت</h3>
                        <div style={{width:"200px"}} className="lbf-after-card-img mx-lg-0 mx-auto"></div>
                            <p className='templates-intro text-center text-lg-end lh-lg my-3'>
                            قالب‌های سایت ما با دقت و حرفه‌ای طراحی شده‌اند تا به شما کمک کنند تا وب‌سایتی زیبا، کارآمد و منحصر به فرد بسازید. با توجه به نیازهای مختلف و تنوع زیاد در دسته‌بندی‌های مختلف، شما می‌توانید قالبی را که برای پروژه خود می‌پسندید را انتخاب کنید
                            </p>
                            <Link href={'/templates'} className="btn btn-linear text-center">
                                    مشاهده ی قالب ها
                            </Link>
                    </div>
                    <div className='col-12 col-lg-6 text-center text-lg-start'>
                    <Image alt='site-templates' width={300} height={300} src={'/images/components/modules/web-design-interface-4291904-3569936.webp'} />
                    </div>
                    <h3 className='color-linear mb-1 mx-auto text-center text-lg-end p-0'>آخرین قالب ها</h3>
                    <div style={{width:"200px"}} className="lbf-after-card-img mx-lg-0 mx-auto mb-4"></div>
                </div>
                <div className=' row article-vertical row-cols-lg-3 row-cols-sm-1 row-cols-md-2 row-cols-xs-1'>
                    {
                        templates &&
                        templates.slice(-3).map(item => (
                            <div key={item.id} className='col-sm'>
                                <TemplateCard {...item} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default TemplatesIntro;