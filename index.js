class CoffeeShop {
	constructor(name, menu) {
		this.name = name
		this.menu = menu
		this.orders = []

	}

	addOrder(name) {
		const idx = this.menu.findIndex(item =>
			name === item.name)
		if (idx >= 0) {
			this.orders.push(this.menu[idx])
			console.log('list orders after  added:', this.orders);
		} else {
			return "This item is currently unavailable!";
		}

	}

	fulfillOrder() {
		if (this.orders.length == 0) {
			return "All orders have been fulfilled!"
		} else {
			return "The {item} is ready!"
		}

	}

	listOrders() {
		console.log("list orders:", this.orders);
		return this.orders;


	}

	dueAmount() {
		let sum = 0;
		this.orders.forEach(orderedItem => {
			sum += orderedItem.price
		});
		console.log('Due amount -->', sum.toFixed(2))
		return sum.toFixed(2);

	}
	cheapestItem() {
		this.menu.sort(function (a, b) {
			return a.price - b.price;
		}
		);
		console.log('The cheapest item is', this.menu[0]);
		return this.menu[0];
	}

	typeOnly(type) {
		const result = this.menu.filter(item => item.type === type);
		console.log(`${type} only:`, result);
		return result;
	}

	drinksOnly() {
		return this.typeOnly("drink");
	}

	foodOnly() {
		return this.typeOnly("food");


	}
}

class Item {
	constructor(name, type, price) {
		this.name = name
		this.type = type
		this.price = price
	}



}

const menu = [
	new Item('pancake', 'food', 5.99),
	new Item('cinnamon roll', 'food', 8.99),
	new Item('iced coffee', 'drink', 2.99),

];

const tcs = new CoffeeShop('Alina\'s', menu)


tcs.addOrder("hot cocoa")
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea")
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll")
tcs.addOrder("iced coffee")
tcs.listOrders
// the list of all the items in the current order

tcs.dueAmount()

tcs.fulfillOrder()
tcs.fulfillOrder()
tcs.fulfillOrder()
// all orders have been presumably served

tcs.listOrders()
// an empty array is returned if all orders have been exhausted

tcs.dueAmount()
// no new orders taken, expect a zero payable

tcs.cheapestItem()
tcs.drinksOnly()
tcs.foodOnly() 
