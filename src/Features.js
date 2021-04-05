import React from 'react'

function Features() {
    return (
        <div>
            <a id="shop" name="shop"></a>
            <section id="oBox3" class="clsBox clsShop">
			<h2>FEATURED SHOP ITEMS</h2>
			<div class="clsShopItems">
                <div class="clsShopItem">
					<div class="clsImg" onclick="window.open('https://shop.simplehappykitchen.com/collections/prints?ref=portfolio_featured')"><img src="http://www.mikimottes.com/images/hp_thumbnails/vegan_plantbased_protein.jpg" data-src="images/hp_thumbnails/vegan_plantbased_protein.jpg" alt="Vegan Plant-based Protein"/></div>
					<h3>Vegan Plant-based Protein chart</h3>
				</div>

				<div class="clsShopItem">
					<div class="clsImg" onclick="window.open('https://shop.simplehappykitchen.com/collections/prints?ref=portfolio_featured');"><img src="http://www.mikimottes.com/images/hp_thumbnails/vegan_plantbased_calcium.jpg" data-src="images/hp_thumbnails/vegan_plantbased_calcium.jpg" alt="Vegan Plant-based Calcium"/></div>
					<h3>Vegan Plant-based Calcium chart</h3>
				</div>

				<div class="clsShopItem">
					<div class="clsImg" onclick="window.open('https://shop.simplehappykitchen.com?ref=mm');"><img src="http://www.mikimottes.com/images/hp_thumbnails/yeti_growth_chart.jpg" data-src="images/hp_thumbnails/yeti_growth_chart.jpg" alt="Cute Monsters wall decal for kids who are afraid of monsters!"/></div>
					<h3>Yeti Monsters wall decal for kids</h3>
				</div>

				<div class="clsShopItem">
					<div class="clsImg" onclick="window.open('https://shop.simplehappykitchen.com?ref=mm');"><img src="http://www.mikimottes.com/images/hp_thumbnails/blue_robot_wall_sticker_height_chart.jpg" data-src="images/hp_thumbnails/blue_robot_wall_sticker_height_chart.jpg" alt="Blue Robot wall sticker growth chart. The perfect gift for newborns!"/></div>
					<h3>Robot Growth Measurement for Infants</h3>
				</div>
            </div>
		</section>
        </div>
    )
}

export default Features
