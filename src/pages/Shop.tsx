import CategoryList from "../features/Categories/CategoryList";
import Row from "../ui/Row";
import NewArrivals from "../components/NewArrivals";
import HeroSection from "../components/HeroSection";
import ServiceHighlights from "../components/ServiceHighlights";
import Heading from "../ui/Heading";


function Shop() {
  return (
    <Row type="vertical">
      <HeroSection />
      <ServiceHighlights />
      <Row type="vertical">
        <Heading as="h2" center={true}>CATEGORIES</Heading>
        <CategoryList />
      </Row>
      <NewArrivals />
    </Row>
  )
}

export default Shop