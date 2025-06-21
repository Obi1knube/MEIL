import kdc_one from "../assets/images/kdc_one.png";
import natures_way from "../assets/images/natures_way.png";
import BoortMalt from "../assets/images/BoortMalt.png";
import KP_snacks from "../assets/images/KP_Snacks.jpg";
import KitoCrosby from "../assets/images/KitoCrosby.png";
import Muller from "../assets/images/Muller.png";
import webDeveloper from "../assets/images/webDeveloper.png";

const clientData = [
  {
    image: kdc_one,
    link: "https://www.kdc-one.com/en/",
    // Using a template literal (backticks ``) for a clean multi-line string
    description: `kdc/one is a global contract manufacturer and innovation partner for brands in the beauty, personal care, and home care sectors. 
    Essentially, they are the company behind the scenes, providing end-to-end services that include research and development, custom formulation, manufacturing, and packaging for other major brands. 
    At the Wellington, United Kingdom site, we provided Multi-skilled Maintenance Engineering services, providing shift covers and Tooling.`,
  },
  {
    // Make sure the variable name 'natures_way' matches the import
    image: natures_way, 
    link: "https://www.natureswayfoods.com/",
    description: `Natures Way Foods is a leading UK manufacturer of fresh, convenient food. They specialize in producing prepared salads, coleslaws, potato salads, and food-to-go products. 
    The company supplies these items to major retailers and food service companies, managing the process from sourcing ingredients to final packaged goods. 
    At the Chichester, United Kingdom site, we provided Multi-skilled Engineering shift cover.`,
  }, // Added the missing closing brace and comma
  {
    image: BoortMalt,
    link: "https://www.boortmalt.com/masters-malt",
    description: "Boortmalt is one of the world's leading malting companies. Their core business is converting barley into top-quality malt.  They process Barley to become Malt at their site in Bury St. Edmunds, Suffolk, United Kingdom. We supplied a Multi-skilled Maintenance Engineer for temporary shift cover.",
  },
  {
    image: KP_snacks,
    link: "https://www.kpsnacks.com/",
    description: "For this food manufacturer based in Uttoxeter, Staffordshire, United Kingdom, we supplied Multi-skilled Maintenance Engineer services and covered maintenance engineer shifts during holidays of regular staff members.",
  },
  {
    image: KitoCrosby,
    link: "https://kitocrosby.com/",
    description: "They make lifting equipment at Cradley Heath, West Midlands, UK. At this site, we provided Industrial Electrician services for rewiring and wiring for new hammers and other machine installations.",
  },
  {
    image: Muller,
    link: "https://www.muller.co.uk/",
    description: "For this food manufacturer based in Stonehouse, Severnside, United Kingdom, we supplied Multi-skilled Maintenance Engineer services and covered maintenance engineer shifts during holidays of regular staff members.",
  },
  {
    image: webDeveloper,
    link: "https://portfolio-obiora-ezeasor.netlify.app/",
    description: "Visit our Web Development Portfolio and see if we can help with your company App or website.",
  },
];

export default clientData;