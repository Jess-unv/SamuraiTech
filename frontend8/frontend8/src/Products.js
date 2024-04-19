import AcerNitro5Image from "./assets/images/acer-nitro-5.jpg";
import AsusROGStrixG17Image from "./assets/images/asus-rog-strix-g17.jpg";
import AsusROGZephyrusM16Image from "./assets/images/asus-rog-zephyrus-m16.jpg";
import LenovoIdeapadGaming3Image from "./assets/images/lenovo-ideapad-gaming-3.jpg";
import MsiGF63ThinImage from "./assets/images/msi-gf63-thin.jpg";
import RazerBlade17Image from "./assets/images/razer-blade-17.jpg";
import AcerPredatorHelios300Image from "./assets/images/Acer Predator Helios 300.jpg"
import AlienwarePotatilImage from "./assets/images/Alienware Portátil m15 R7.webp";
import GIGABYTEAEROImage from "./assets/images/GIGABYTE AERO 14 OLED (1).jpg"
import LenovoLegionY740Image from "./assets/images/lenovo-ideapad-gaming-3.jpg"
import MSIRaiderGE76Image from "./assets/images/MSI Raider GE76.jpg"
import AcerPredatorTritonImage from "./assets/images/Acer Predator Triton 500 SE.jpg"
import MSIGF65Thin10UEImage from "./assets/images/MSI GF65 Thin 10UE.jpg"
import ASUSTUFGamingF15Image from "./assets/images/ASUS TUF Gaming F15 (2022).png"
import HPComputadoraportátilImage from "./assets/images/HP Computadora portátil AMD Ryze.jpg" 
import MSIKatana15Image from "./assets/images/MSI Katana 15.jpg"

const arrayProducts = [
  {
    id: "price_1P1fDb2KZobTHkElM16vPHmL",
    name: "Acer Nitro 5",
    price: 1089.00,
    image: AcerNitro5Image,
  },
  {
    id: "price_1P1fD52KZobTHkElk1lPTUOF",
    name: "Asus ROG Strix G17",
    price: 1874.00, 
    image: AsusROGStrixG17Image,
  },
  {
    id: "price_1P1fCE2KZobTHkElduQR28vw",
    name: "Asus ROG Zephyrus M16",
    price: 3174.00, 
    image: AsusROGZephyrusM16Image,
  },
  {
    id: "price_1P1fBB2KZobTHkEluUhZMq9n",
    name: "Lenovo IdeaPad Gaming 3",
    price: 714.00, 
    image: LenovoIdeapadGaming3Image,
  },
  {
    id: "price_1P1f9v2KZobTHkElllEvRxLr",
    name: "MSI GF63 Thin",
    price:  1149.00, 
    image: MsiGF63ThinImage,
  },
  {
    id: "price_1P1f8y2KZobTHkElbww9O09A",
    name: "Razer Blade 17",
    price: 2794.00, 
    image: RazerBlade17Image,
  },
  {
    id: "price_1P1f812KZobTHkElVcsnRQ7m",
    name: "Alienware Portátil m15 R7",
    price: 1567.00, 
    image: AlienwarePotatilImage,
  },
  {
    id: "price_1P1f792KZobTHkEl4WkOUql0",
    name: "Acer Predator Helios 300",
    price: 1205.00, 
    image: AcerPredatorHelios300Image,
  },
  {
    id: "price_1P1f692KZobTHkEllREhIxQp",
    name: "GIGABYTE AERO 14 OLED",
    price: 1385.00,
    image: GIGABYTEAEROImage,
  },
  {
    id: "price_1P1f5B2KZobTHkElaf297WzX",
    name: "Lenovo Legion Y740",
    price: 2387.00, 
    image: LenovoLegionY740Image,
  },
  {
    id: "price_1P1f3y2KZobTHkElgmjCerPI",
    name: "MSI Raider GE76",
    price: 1329.00, 
    image: MSIRaiderGE76Image,
},
{
  id: "price_1P1f2f2KZobTHkElhNZSGkmI",
    name: "Acer Predator Triton 500 SE",
    price: 1085.00, 
    image: AcerPredatorTritonImage,
},
{
  id: "price_1P1f0V2KZobTHkElLcGbdFkR",
  name: "MSI GF65 Thin 10UE",
  price:  802.00, 
  image: MSIGF65Thin10UEImage,
},
{
  id: "price_1P1eyv2KZobTHkEld0lu5STJ",
  name: "ASUS TUF Gaming F15 (2022)",
  price:  912.00, 
  image: ASUSTUFGamingF15Image,
},
{
  id: "price_1P1ex72KZobTHkElQvN4JgcW",
  name: "HP Computadora portátil AMD Ryzen 3-5300U",
  price:  421.00,
  image: HPComputadoraportátilImage,
},
{
  id: "price_1P1dZy2KZobTHkElX6nBK6dx",
  name: "MSI Katana 15",
  price:  1655.00,
  image: MSIKatana15Image,
}
];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData === undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }
  

  return productData;
}


export { arrayProducts, getProductData };
