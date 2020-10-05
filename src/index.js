const vendor = () => {
	import('./js/vendor.js');
}
const controller = () => {
	import('./js/controllers/ctrlMain');
}

import('./sass/main.scss')
	.then(() => { vendor(); })
	.then(() => { controller(); })



 