'use client'

import Seo from "~/components/common/Seo";
import DefaulHeader from "~/components/header/DefaulHeader";
import DefaultFooter from "~/components/footer/DefaultFooter";
import ArticleBox from "~/components/box/ArticleBox";
import Paginator from "~/components/common/Paginator";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

type RES = {
  results: any[],
  total: number
}


const Savvy = () => {
  const router = useRouter();
  const [data, setData] = useState<RES>();
  const searchParams = useSearchParams();
  const pageString = searchParams.get('page');


  const gridRef = useRef();


  const fetchData = async (page: number) => {
    // get the data from the api
    const response = await axios.get("/api/articles?page=" + page);
    // convert the data to json
    const json = await response.data;

    // set state with the result
    setData(json);

  }



  useEffect(() => {
    /*if (typeof window !== "undefined") {
    const masonry = new Masonry(gridRef.current, {
      percentPosition: true
    });
  }*/

    //require('masonry-layout/dist/masonry.pkgd')
    //require("masonry-layout/dist/masonry.pkgd");
    if (pageString == null || pageString == undefined || isNaN(Number(pageString))) {
      router.push("savvy?page=1");
    }else {
      fetchData(Number(pageString)).then(() => {
        //require("masonry-layout/dist/masonry.pkgd");
          import("masonry-layout").then((module) => {
            setTimeout(() => {
              const Masonry = module.default;
              const masonry = new Masonry('div[data-masonry]', {});
            },100)
            
            return null;
          });
        
        //masonry.data(data!.items).layout();
      })
        .catch(console.error);

    }
  }, [router,pageString]);



  return (
    <>
      <Seo pageTitle="Savvy" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Savvy
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Best articles in the world
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>

      {/*
			=====================================================
				Team Section Two
			=====================================================
			*/}
      <div className="team-section-two mt-20">
        <div className="container">
          <div className="wrapper border-bottom pb-120 lg-pb-80 position-relative">
            <div className="row" data-masonry='{"percentPosition": true }'>
              <ArticleBox articles={data?.results} />
            </div>

            <Paginator pages={data?.total || 0} current={Number(pageString) || 0} />
            {/* /.row */}

            {/* End  call to action*/}
          </div>
          {/* /.wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Savvy;
