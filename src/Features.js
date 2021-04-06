import React from 'react'

function Features() {
    return (
        <div>
            <section id="features" className="clsBox clsShop f1">
			<h2>FEATURED SHOP ITEMS</h2>
			<div className="clsShopItems">
                <div className="clsShopItem">
					<div className="clsImg" onClick={()=>window.open('https://shop.simplehappykitchen.com/collections/prints?ref=portfolio_featured')}><img src="http://www.mikimottes.com/images/hp_thumbnails/vegan_plantbased_protein.jpg" data-src="images/hp_thumbnails/vegan_plantbased_protein.jpg" alt="Vegan Plant-based Protein"/></div>
					<h3>Vegan Plant-based Protein chart</h3>
				</div>

				<div className="clsShopItem">
					<div className="clsImg" onClick={()=>window.open('https://shop.simplehappykitchen.com/collections/prints?ref=portfolio_featured')}><img src="http://www.mikimottes.com/images/hp_thumbnails/vegan_plantbased_calcium.jpg" data-src="images/hp_thumbnails/vegan_plantbased_calcium.jpg" alt="Vegan Plant-based Calcium"/></div>
					<h3>Vegan Plant-based Calcium chart</h3>
				</div>

				<div className="clsShopItem">
					<div className="clsImg" onClick={()=>window.open('https://shop.simplehappykitchen.com?ref=mm')}><img src="http://www.mikimottes.com/images/hp_thumbnails/yeti_growth_chart.jpg" data-src="images/hp_thumbnails/yeti_growth_chart.jpg" alt="Cute Monsters wall decal for kids who are afraid of monsters!"/></div>
					<h3>Yeti Monsters wall decal for kids</h3>
				</div>

				<div className="clsShopItem">
					<div className="clsImg" onClick={()=>window.open('https://shop.simplehappykitchen.com?ref=mm')}><img src="http://www.mikimottes.com/images/hp_thumbnails/blue_robot_wall_sticker_height_chart.jpg" data-src="images/hp_thumbnails/blue_robot_wall_sticker_height_chart.jpg" alt="Blue Robot wall sticker growth chart. The perfect gift for newborns!"/></div>
					<h3>Robot Growth Measurement for Infants</h3>
				</div>
            </div>
		</section>
        </div>
    )
}

export default Features
