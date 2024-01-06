import React, { useState, useEffect} from 'react';
import './Materials.css';
import { categories } from './Data';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import Shery from "sheryjs";
import {Helmet} from "react-helmet";


const Materials = () => {
	const [categoryItems, setCategoryItems] = useState([]);
	const imgVariant = {
	  hidden: { scale: 0, opacity: 0.5 },
	  visible: { scale: 1, opacity: 1 },
	};
	const control = useAnimation();
	const [ref, inView] = useInView({
		triggerOnce: true,
  		threshold: .3, 
	});
	//Shery.mouseFollower()
	useEffect(()=>{
		Shery.makeMagnet(".img" , {
			debug:true,
			ease: "cubic-bezier(0.23, 2, 0.320, 1)",
			duration: 1,
		  });
	})
  
	useEffect(() => {
	  if (inView) {
		control.start("visible");
	  } else {
		control.start("hidden");
	  }
	}, [control, inView]);
  
	useEffect(() => {
	  const displayCategories = () => {
		return categories.map((item, index) => (
		  <motion.div
			key={index}
			className={`c col-12 col-lg-2 col-md-3 text-center item item${index}`}
			variants={imgVariant}
			initial="hidden"
			animate={control}
			transition={{ duration: 1, delay: 0.5 * index }}
			ref={ref}
		  >
					<Helmet>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></script>
					<script src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></script>
					</Helmet>
			<div className={`i rounded mb-lg-0 mb-5`}>
			  <img className='img mb-4' src={item.img.default} alt={item.name} />
			  <h5 className='sub-title text-capitalize'>{item.name}</h5>
			</div>
		  </motion.div>
		));
	  };
  
	  setCategoryItems(displayCategories());
	}, [control, ref]);
  
	return (
		
	  <div className='materials py-5 my-5' id='materials'>
		<div className='container'>
		  <div className='title py-5 text-center'>
			<h4 className='sub-title text-capitalize'>
			  our <span>materials</span>
			</h4>
		  </div>
		  <div className='row justify-content-lg-between justify-content-center'>{categoryItems}</div>
		</div>
	  </div>
	);
  };
  
  export default Materials;