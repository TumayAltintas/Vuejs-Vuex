import {createStore} from "vuex";

const store = createStore({
	state: {
		products: [
			{
				"id": 1,
				"image": "https://productimages.hepsiburada.net/s/170/550/110000132623347.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 2323
			},
			{
				"id": 2,
				"image": "https://productimages.hepsiburada.net/s/130/550/110000081134193.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 67
			},
			{
				"id": 3,
				"image": "https://productimages.hepsiburada.net/s/112/550/110000058700012.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 54
			},
			{
				"id": 4,
				"image": "https://productimages.hepsiburada.net/s/217/550/110000196369376.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 5553
			},
			{
				"id": 5,
				"image": "https://productimages.hepsiburada.net/s/32/550/10368609026098.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 32
			},
			{
				"id": 6,
				"image": "https://productimages.hepsiburada.net/s/239/550/110000223097388.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 5000
			},
			{
				"id": 7,
				"image": "https://productimages.hepsiburada.net/s/170/550/110000132623347.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 3515
			},
			{
				"id": 8,
				"image": "https://productimages.hepsiburada.net/s/105/550/110000048408588.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 312
			},
			{
				"id": 9,
				"image": "https://productimages.hepsiburada.net/s/3/550/9616840130610.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 122
			},
			{
				"id": 10,
				"image": "https://productimages.hepsiburada.net/s/123/550/110000073121581.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 990
			},
			{
				"id": 11,
				"image": "https://productimages.hepsiburada.net/s/170/550/110000132623347.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 1008
			},
			{
				"id": 12,
				"image": "https://productimages.hepsiburada.net/s/130/550/110000081134193.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 67
			},
			{
				"id": 13,
				"image": "https://productimages.hepsiburada.net/s/112/550/110000058700012.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 54
			},
			{
				"id": 14,
				"image": "https://productimages.hepsiburada.net/s/217/550/110000196369376.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 500
			},
			{
				"id": 15,
				"image": "https://productimages.hepsiburada.net/s/32/550/10368609026098.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 3267
			},
			{
				"id": 16,
				"image": "https://productimages.hepsiburada.net/s/239/550/110000223097388.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 504
			},
			{
				"id": 17,
				"image": "https://productimages.hepsiburada.net/s/170/550/110000132623347.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 3515
			},
			{
				"id": 18,
				"image": "https://productimages.hepsiburada.net/s/105/550/110000048408588.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 312
			},
			{
				"id": 19,
				"image": "https://productimages.hepsiburada.net/s/3/550/9616840130610.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 22114
			},
			{
				"id": 20,
				"image": "https://productimages.hepsiburada.net/s/3/550/9616840130610.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 12123
			},
			{
				"id": 21,
				"image": "https://productimages.hepsiburada.net/s/170/550/110000132623347.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 999
			},
			{
				"id": 22,
				"image": "https://productimages.hepsiburada.net/s/105/550/110000048408588.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 552
			},
			{
				"id": 23,
				"image": "https://productimages.hepsiburada.net/s/3/550/9616840130610.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 1322
			},
			{
				"id": 24,
				"image": "https://productimages.hepsiburada.net/s/3/550/9616840130610.jpg",
				"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				"type": "gpu",

				"price": 121
			}
		],
		cart: []
	},
	getters: {
		cartProducts(state) {
			return state.cart.map(cartItem => {
				const product = state.products.find(product => product.id === cartItem.id)
				return {
					image: product.image,
					description: product.description,
					price: product.price,
					quantity: cartItem.quantity

				}
			})
		},
		cartTotal(state, getters) {
			return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
		}
	},
	mutations: {
		setProducts(state, products) {

			state.products = products
		},

		pushProductToCart(state, productId) {
			state.cart.push({
				id: productId,
				quantity: 1
			})
		},

		incrementItemQuantity(state, cartItem) {
			cartItem.quantity++
		},
		decrementItemQuantity(state,product){
			product.quantity--
		}


	},
	actions: {
		addProductToCart(context, product) {
			const cartItem = context.state.cart.find(item => item.id === product.id)
			if (!cartItem) {
				context.commit('pushProductToCart', product.id)
			} else {
				context.commit('incrementItemQuantity', cartItem)
			}
			context.commit('decrementItemQuantity',product)
		},


	}
})

export default store