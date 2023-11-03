class UberRides {
  constructor(name, bookingId, distance, basePrice) {
    this.name = name;
    this.bookingId = bookingId;
    this.distance = distance;
    this._basePrice = basePrice;
  }

  uberPriceCalculator() {
    const totalFee = this._basePrice * this.distance;
    return totalFee;
  }

  set basePrice(newBasePrice) {
    this._basePrice = newBasePrice;
  }

  get basePrice() {
    return this._basePrice;
  }
}

const Ride1 = new UberRides("Sandy", 101, 2, 25); 
const TotalBookingFee = Ride1.uberPriceCalculator();
console.log(`Please Pay₹${TotalBookingFee}`);

//accessing the setter function
Ride1.basePrice = 30;
const UpdatedTotalBookingFee = Ride1.uberPriceCalculator();
console.log(`Updated Total Booking Fee: ₹${UpdatedTotalBookingFee}`);
