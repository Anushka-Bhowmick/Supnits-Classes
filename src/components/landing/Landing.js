
import React, { Component } from 'react'
import Hero from './hero/Hero'
import Materials from './materials/Materials'
import Sub from './subscription/Sub'
import Stats from './stats/Stats'
import Tes from './testimonials/Tes'
import Faq from './faq/Faq'
import Rs from './recentblogs/Rs'
import CarouSel from './Carousel/CarouSel.js'

class Landing extends Component {
	render() {
		return (
			<>
				<CarouSel />
				<Hero />
				<Materials />
				<Sub />
				<Stats />
				<Rs />
				<Tes />
				<Faq />
			</>
		)
	}
}

export default Landing