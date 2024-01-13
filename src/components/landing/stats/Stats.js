import React, { useState } from 'react'
import './Stats.css'
import { stats } from './Data.js'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const Stats = () => {
	const [counterState, setCounterState] = useState(false)

	const display_stats = () => {
		return stats.map((item, index) => {
			return (
				<div className={`stat ${item.name} text-center mb-lg-0 mb-4`} key={index}>
					<ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
						<h3 className='title text-capitalize mb-3'>{item.name}</h3>

						{counterState && (
							<p className='num'>
								+ <CountUp start={0} end={item.number} duration={2.75} />
							</p>
						)}
					</ScrollTrigger>
				</div>
			)
		})
	}
	return (
		<div className='stats py-5 mb-5' id='stats'>
			<div className='container'>
				<div className='title py-5 text-md-start text-center'>
					<h4 className='sub-title text-capitalize'>Supnits Classes <span>Stats</span></h4>
				</div>
				<div className='_box d-flex justify-content-lg-between justify-content-center flex-wrap'>
					{display_stats()}
				</div>
			</div>
		</div>
	)
}

export default Stats