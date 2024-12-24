
function getRandomValue(min: number, max: number){
    return Math.random() * (max - min + 1) + min;
}

export const destinationsItems = [
    {
        id: "1",
        image: "/images/maldives.jpg",
        title: "Maldives",
        rating: getRandomValue(1,5),
        period: "2 Days 1 Night",
        price: `$980`,
    },
    {
        id: "2",
        image: "/images/hawaii.jpg",
        title: "Hawaii",
        rating: getRandomValue(1,5),
        period: "4 Days 3 Nights",
        price: `$560`
    },
    {
        id: "3",
        image: "/images/switzerland.jpg",
        title: "Switzerland",
        rating: getRandomValue(1,5),
        period: "3 Days 2  Nights",
        price:`$663`,
    },
    {
        id: "4",
        image: "/images/new-york.jpg",
        title: "New York",
        rating: getRandomValue(1,5),
        period: "5 Days 4 Nights",
        price:`$750`,
    },
    {
        id: "5",
        image: "/images/bora-bora.jpg",
        title: "Bora Bora",
        rating: getRandomValue(1,5),
        period: "6 Days 5 Nights",
        price: `$800`,
    },
    {
        id: "6",
        image: "/images/dubai.jpg",
        title: "Dubai",
        rating: getRandomValue(1,5),
        period: "3 Days 2 Nights",
        price: `$350`,
    },
    {
        id: "7",
        image: "/images/amazon-forest.jpg",
        title: "Amazon Rainforest",
        rating: getRandomValue(1,5),
        period: "7 Days 6 Nights",
        price: `$450`,
    },
    {
        id: "8",
        image: "/images/tuscany.jpg",
        title: "Tuscany",
        rating: getRandomValue(1,5),
        period: "4 Days 3 Nights",
        price: `$535`,
    },
    {
        id: "9",
        image: "/images/alaska.jpg",
        title: "Alaska",
        rating: getRandomValue(1,5),
        period: "5 Days 4 Nights",
        price: `$1000`,
    },
    {
        id: "10",
        image: "/images/rome.jpg",
        title: "Rome",
        rating: getRandomValue(1,5),
        period: "3 Days 2 Nights",
        price: `$700`,
    },
    {
        id: "11",
        image: "/images/phuket.jpg",
        title: "Phuket",
        rating: getRandomValue(1,5),
        period: "4 Days 3 Nights",
        price: `$269`,
    },
    {
        id: "12",
        image: "/images/Lake-Tahoe.jpg",
        title: "Lake Tahoe",
        rating: getRandomValue(1,5),
        period: "3 Days 2 Nights",
        price: `$478`,
    },
];

export const hotels = [
    {
        id: "1",
        image: "/images/hotel1.jpg",
        title:"Royal Haven Suite",
        bed: "Kings Bed",
        capacity: "3",
        rating: getRandomValue(1,5),
        price: `$357`,
    },
    {
        id: "2",
        image: "/images/hotel2.jpg",
        title: "Serenity Escape",
        bed: "Kings Bed",
        capacity: "9",
        rating: getRandomValue(1,5),
        price: `$678`,
    },
    {
        id: "3",
        image: "/images/hotel3.jpg",
        title: "Grand Luxe Retreat",
        bed: "Kings Bed",
        capacity: "6",
        rating: getRandomValue(1,5),
        price: `$900`,
    },
    {
        id: "4",
        image: "/images/hotel4.jpg",
        title: "Majestic Oasis",
        bed: "Kings Bed",
        capacity: "10",
        rating: getRandomValue(1,5),
        price: `$780`,
    },
];

export const testmonials = [
    {
        name: "Emily Johnson",
        rating: 5,
        description:
        "Exceptional service! The team went above and beyond to meet my expectations. i'm impressed with the attention to detail and prompt communication. Highly recomended! ",
        country: "United States",
        image: "/images/profile1.webp",
    },
    {
        name: "John Anderson",
        rating: 4,
        description:
       "Fantastic service! The team delivered more than I could have hoped for. Their attention to detail and swift responses were truly impressive. I highly recommend them for their commitment and quality!",
        country: "Canada",
        image: "/images/profile2.jpg",
    },
    {
        name: "Sophia Ramirez",
        rating: 5,
        description:
       "Incredible experience! The team was highly professional, delivering top-notch work with great attention to detail. Their quick response and dedication exceeded my expectations. Would definitely recommend!",
        country: "Canada",
        image: "/images/profile3.jpg",
    },
];