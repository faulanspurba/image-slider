
let total = '';
for(let i = 1; i <= 12; ++i){
let html = `
    <div class="product">
			<picture>
				<img src="image/banner (${i}).png" alt="">
			</picture>
			<div class="detail">
				<p>
				<b>Product ${i}</b><br>
				<small>New arrival</small>
				</p>
				<samp>$45.00</samp>
			</div>
			<div class="button">
				<p class="star">
					<strong>&star;</strong>
					<strong>&star;</strong>
					<strong>&star;</strong>
					<strong>&star;</strong>
					<strong>&star;</strong>
				</p>
				<a href="#">Add-cart</a>
			</div>
		</div>
    `
total += html;
    }
document.querySelector('section').innerHTML = total;
